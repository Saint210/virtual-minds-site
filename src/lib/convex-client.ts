
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../convex/_generated/api";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

if (!convexUrl) {
    console.error("NEXT_PUBLIC_CONVEX_URL not set, logging will fail");
}

export const convexClient = new ConvexHttpClient(convexUrl);

export async function logToConvex(
    user: string,
    action: string,
    details: string,
    type: string,
    metadata?: any
) {
    try {
        await convexClient.mutation(api.activity.logActivity, {
            user,
            action,
            details,
            type,
            metadata,
        });
    } catch (error) {
        console.error("Failed to log activity to Convex:", error);
    }
}
