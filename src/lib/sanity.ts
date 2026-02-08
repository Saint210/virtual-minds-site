import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-03";

// Safe fallback: If env vars are missing (build time or misconfiguration), 
// return a mock client to prevent crash.
const isMissingEnv = !projectId || !dataset;

if (isMissingEnv) {
    console.warn("Sanity: Missing PROJECT_ID or DATASET. Using mock client.");
}

export const client = isMissingEnv
    ? {
        fetch: async () => [],
    } as any
    : createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
    });

// Only initialize builder if client is valid
const builder = isMissingEnv ? null : imageUrlBuilder(client);

export function urlFor(source: any) {
    if (!builder || !source) {
        // Return a mock object chain that eventually returns an empty string URL
        return {
            image: () => ({
                url: () => "/images/placeholder.png", // Safe fallback image
                width: () => null,
                height: () => null,
                fit: () => null,
            })
        } as any;
    }
    return builder.image(source);
}
