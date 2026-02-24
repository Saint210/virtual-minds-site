"use server";

import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
import { logToConvex } from "@/lib/convex-client";


// Define the asset type
export interface SanityAsset {
    _id: string;
    url: string;
    originalFilename: string;
    size: number;
    dimensions: string;
    _createdAt: string;
    altText?: string;
    title?: string;
    description?: string;
}

/**
 * Fetches image assets from Sanity.
 */
export async function getMediaAssets(limit = 50): Promise<SanityAsset[]> {
    const query = `*[_type == "sanity.imageAsset"] | order(_createdAt desc) [0...${limit}] {
    _id,
    url,
    originalFilename,
    size,
    metadata {
      dimensions {
        width,
        height
      }
    },
    _createdAt,
    altText,
    title,
    description
  }`;

    try {
        const assets = await client.fetch(query);

        // Transform to match our component's expected interface
        return assets.map((asset: any) => ({
            _id: asset._id,
            url: asset.url,
            originalFilename: asset.originalFilename || "Untitled",
            size: asset.size,
            dimensions: asset.metadata?.dimensions
                ? `${asset.metadata.dimensions.width}x${asset.metadata.dimensions.height}`
                : "Unknown",
            _createdAt: asset._createdAt,
            altText: asset.altText || "",
            title: asset.title || "",
            description: asset.description || ""
        }));
    } catch (error) {
        console.error("Failed to fetch media assets:", error);
        return [];
    }
}

/**
 * Updates metadata for a media asset.
 */
export async function updateMediaMetadata(assetId: string, metadata: { altText?: string, title?: string, description?: string }) {
    try {
        await client.patch(assetId).set(metadata).commit();
        revalidatePath('/admin/dashboard');

        // Log Activity
        await logToConvex("Admin User", "Media Update", `Updated metadata for asset ${assetId}`, "media", metadata);

        return { success: true };
    } catch (error) {
        console.error("Failed to update media metadata:", error);
        return { success: false, error: "Failed to update metadata" };
    }
}

/**
 * Auto-optimizes all media assets by generating metadata from filenames.
 */
export async function autoOptimizeAllAssets() {
    try {
        const query = `*[_type == "sanity.imageAsset" && (!defined(altText) || !defined(title))] {
            _id,
            originalFilename
        }`;
        const assets = await client.fetch(query);

        let updatedCount = 0;

        for (const asset of assets) {
            if (!asset.originalFilename) continue;

            const filename = asset.originalFilename;
            // Skip generic camera filenames if possible, or just process them best effort
            // Heuristic section

            // Remove extension
            const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");

            // Replace separators with spaces
            let readableName = nameWithoutExt
                .replace(/[-_]/g, " ")
                .replace(/([a-z])([A-Z])/g, '$1 $2'); // camelCase to spaces

            // Capitalize First Letters
            readableName = readableName.replace(/\w\S*/g, (w: string) => (w.replace(/^\w/, (c) => c.toUpperCase())));

            const updateData: any = {};
            updateData.title = readableName;
            updateData.altText = readableName; // Fallback to filename title, still needs human review for true accessibility
            updateData.description = ""; // Don't pollute description with debug text

            await client.patch(asset._id).setIfMissing(updateData).commit();
            updatedCount++;
        }

        revalidatePath('/admin/dashboard');

        if (updatedCount > 0) {
            await logToConvex("Admin User", "Auto-Optimize", `Auto-optimized ${updatedCount} images from filenames`, "media");
        }

        return { success: true, count: updatedCount };
    } catch (error) {
        console.error("Auto-optimization failed:", error);
        return { success: false, error: "Auto-optimization process failed" };
    }
}
