"use server";

import { createClient } from "next-sanity";
import { CITY_METRICS } from "@/data/city_metrics";
import { groq } from "next-sanity";

export async function syncCityMetricsAction() {
    try {
        console.log("Starting City Metrics Sync...");

        // 1. Validation
        if (!process.env.SANITY_API_TOKEN) {
            return {
                success: false,
                error: "Missing SANITY_API_TOKEN in server environment"
            };
        }

        const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim();
        const token = process.env.SANITY_API_TOKEN?.trim() || "";

        // 2. Client Instantiation
        const client = createClient({
            projectId: projectId,
            dataset: dataset,
            apiVersion: "2024-01-01",
            useCdn: false, // Force fresh data
            token: token,
            ignoreBrowserTokenWarning: true
        });

        const transaction = client.transaction();

        // 3. Fetch existing
        const existingLocations = await client.fetch(groq`*[_type == "location"]{_id, slug, name}`);
        const updates: string[] = [];

        // 4. Prepare Updates
        for (const [slug, metric] of Object.entries(CITY_METRICS)) {

            const annualRent = metric.rent * 12;
            const rentSavings = annualRent * 0.25;
            const totalPotentialValue = 46380 + rentSavings;

            const rentAvgString = `$${metric.rent.toLocaleString()}/mo`;
            const savingsString = `$${Math.round(totalPotentialValue / 1000)}k/yr`;

            const existingDoc = existingLocations.find((doc: any) =>
                doc.slug?.current === slug || doc.name === metric.label
            );

            if (existingDoc) {
                transaction.patch(existingDoc._id, (p) => p.set({
                    rentAvg: rentAvgString,
                    rentSavings: savingsString,
                }));
                updates.push(metric.label);
            }
        }

        // 5. Commit
        if (updates.length > 0) {
            console.log(`Committing ${updates.length} updates...`);
            await transaction.commit();
        }

        return {
            success: true,
            message: `Successfully synced ${updates.length} cities`,
            updated: updates
        };

    } catch (error: any) {
        console.error("Sync Action Failed:", error);
        return {
            success: false,
            error: error.message || "Unknown Error"
        };
    }
}
