"use server";

import { writeClient } from "@/lib/sanity.server";

interface CalculatorData {
    adminHours: number;
    monthlyRent: number;
    hourlyRate: number;
    activePatients: number;
    projectedRevenueGain: number;
    city?: string;
    source?: string;
    email?: string;
}

export async function submitCalculatorData(data: CalculatorData) {
    try {
        // 1. Validation (Basic)
        if (!data.adminHours || !data.monthlyRent) {
            return { success: false, error: "Missing required fields" };
        }

        // 2. Check for Token
        if (!process.env.SANITY_API_TOKEN) {
            console.warn("Data Siphon: No SANITY_API_TOKEN found. Skipping write.");
            return { success: false, error: "Configuration Error" };
        }

        // 3. The Siphon (Write to Sanity)
        const doc = {
            _type: 'calculatorSubmission',
            timestamp: new Date().toISOString(),
            ...data
        };

        const result = await writeClient.create(doc);

        return { success: true, id: result._id };

    } catch (error) {
        console.error("Data Siphon Failed:", error);
        return { success: false, error: "Database Error" };
    }
}
