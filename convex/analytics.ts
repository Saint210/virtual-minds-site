
import { action } from "./_generated/server";
import { v } from "convex/values";

export const getStats = action({
    args: {},
    handler: async (ctx) => {
        const apiKey = process.env.PLAUSIBLE_API_KEY;
        const siteId = process.env.PLAUSIBLE_SITE_ID;

        if (!apiKey || !siteId) {
            throw new Error("Missing Plausible API configuration in environment variables");
        }

        const headers = {
            Authorization: `Bearer ${apiKey}`,
        };

        const baseUrl = "https://plausible.io/api/v1/stats";

        try {
            const [aggregate, realtime, topPages] = await Promise.all([
                // 30-day aggregate: visitors, bounce_rate, pageviews, visit_duration
                fetch(
                    `${baseUrl}/aggregate?site_id=${siteId}&period=30d&metrics=visitors,bounce_rate,pageviews,visit_duration`,
                    { headers }
                ).then((res) => res.json()),

                // Realtime visitors
                fetch(`${baseUrl}/realtime/visitors?site_id=${siteId}`, { headers }).then(
                    (res) => res.json()
                ),

                // Top Pages breakdown
                fetch(
                    `${baseUrl}/breakdown?site_id=${siteId}&property=event:page&period=30d&limit=5`,
                    { headers }
                ).then((res) => res.json()),
            ]);

            return {
                visitors: aggregate.results?.visitors?.value || 0,
                pageviews: aggregate.results?.pageviews?.value || 0,
                bounceRate: aggregate.results?.bounce_rate?.value || 0,
                visitDuration: aggregate.results?.visit_duration?.value || 0,
                liveVisitors: realtime || 0,
                topPages: topPages.results || [],
            };
        } catch (error) {
            console.error("Error fetching Plausible stats:", error);
            // Return fallback/empty data on error so dashboard doesn't crash
            return {
                visitors: 0,
                pageviews: 0,
                bounceRate: 0,
                visitDuration: 0,
                liveVisitors: 0,
                topPages: [],
                error: "Failed to fetch analytics",
            };
        }
    },
});
