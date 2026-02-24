"use server";

import { revalidatePath } from "next/cache";
import { logToConvex } from "@/lib/convex-client";

/**
 * Revalidates the entire site.
 */
export async function revalidateSite() {
    try {
        revalidatePath("/", "layout");
        console.log("Revalidated site via admin dashboard");

        // Log Activity
        await logToConvex("Admin User", "Clear Cache", "Cleared site-wide cache via settings", "system");

        return { success: true, message: "Site cache cleared successfully." };
    } catch (error) {
        console.error("Failed to revalidate site:", error);
        return { success: false, message: "Failed to clear cache." };
    }
}
