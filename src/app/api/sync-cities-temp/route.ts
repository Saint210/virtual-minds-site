import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity.server';
import { CITY_METRICS } from '@/data/city_metrics';
import { groq } from 'next-sanity';

export async function GET() {
    // Security: Only allow in development
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    try {
        const client = writeClient;
        const transaction = client.transaction();

        // 1. Fetch all existing location documents
        const existingLocations = await client.fetch(groq`*[_type == "location"]{_id, slug, name}`);

        const updates = [];
        const created = [];

        // 2. Iterate through our "Black Ops" Data
        for (const [slug, metric] of Object.entries(CITY_METRICS)) {

            // Calculate a compelling "Annual Savings" number based on the Calculator Logic
            // Default Assumptions: 15h admin/wk, 40 patients
            // Rent Savings = Rent * 12 * 0.25 (Downsizing potential)
            // Admin Savings = (15 * 45 * 52) - (15 * 24 * 52) = $16,380
            // Revenue Gain (Opportunity) = (40/20) * 300 * 50 = $30,000
            // Total Baseline Gain = $46,380 + Rent Savings

            const annualRent = metric.rent * 12;
            const rentSavings = annualRent * 0.25;
            const totalPotentialValue = 46380 + rentSavings;

            // Format strings for Sanity
            const rentAvgString = `$${metric.rent.toLocaleString()}/mo`;
            const savingsString = `$${Math.round(totalPotentialValue / 1000)}k/yr`; // e.g. "$65k/yr"

            // Find matching document
            const existingDoc = existingLocations.find((doc: any) =>
                doc.slug?.current === slug || doc.name === metric.label
            );

            if (existingDoc) {
                // UPDATE existing
                transaction.patch(existingDoc._id, (p) => p.set({
                    rentAvg: rentAvgString,
                    rentSavings: savingsString,
                    // Optional: Update name to ensure consistency? No, risky.
                }));
                updates.push(metric.label);
            } else {
                // CREATE new if missing? 
                // For now, let's just log that we skipped it to avoid cluttering if not desired.
                // Or better, let's CREATE it to ensure 100% coverage.
                // Let's stick to UPDATING for safety unless user asked to generate pages.
                // User said "Are the locations updated", implying existing ones.
            }
        }

        // 3. Commit
        if (updates.length > 0) {
            await transaction.commit();
        }

        return NextResponse.json({
            success: true,
            updatedCount: updates.length,
            updatedCities: updates,
            message: "Sync Complete. Check Sanity Studio."
        });

    } catch (error: any) {
        console.error("Sync Failed:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
