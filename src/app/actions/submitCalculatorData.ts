"use server";

import { writeClient } from "@/lib/sanity.server";

interface CalculatorData {
    adminHours: number;
    monthlyRent: number;
    hourlyRate: number;
    activePatients: number;
    targetPatients?: number;
    projectedRevenueGain: number;
    city?: string;
    source?: string;
    email?: string;
}

import { Resend } from 'resend';
import { PracticeAuditEmail } from '../../emails/PracticeAuditEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitCalculatorData(data: CalculatorData) {
    try {
        // 1. Validation (Basic)
        if (!data.adminHours || !data.monthlyRent) {
            return { success: false, error: "Missing required fields" };
        }

        // 2. Check for Token (Sanity)
        if (!process.env.SANITY_API_TOKEN) {
            console.warn("Data Siphon: No SANITY_API_TOKEN found. Skipping write.");
            return { success: false, error: "Server Configuration Error: Missing SANITY_API_TOKEN" };
        }

        // 3. The Siphon (Write to Sanity)
        const doc = {
            _type: 'calculatorSubmission',
            timestamp: new Date().toISOString(),
            ...data
        };

        const result = await writeClient.create(doc);

        // 4. The Trigger (Send Email)
        // Only send if email is provided and API key exists
        if (data.email && process.env.RESEND_API_KEY) {
            try {
                // Replicate "Gross Leak" Math from Report Page for consistency
                const adminCost = Math.round(data.adminHours * data.hourlyRate * 52);
                const rentSavings = Math.round(data.monthlyRent * 12 * 0.25);
                const totalLeak = Math.round(adminCost + rentSavings + data.projectedRevenueGain);

                await resend.emails.send({
                    from: 'Virtual Minds Audit <audit@virtualminds.ai>', // Update if domain verified
                    to: data.email,
                    subject: 'Your Practice Efficiency Audit is Ready',
                    react: PracticeAuditEmail({
                        reportId: result._id,
                        adminHours: data.adminHours,
                        totalLeak: totalLeak,
                        city: data.city
                    })
                });
                console.log(`Email sent to ${data.email}`);
            } catch (emailError) {
                console.error("Failed to send email:", emailError);
                // Don't fail the request, just log it. Data is safe in Sanity.
            }
        }

        return { success: true, id: result._id };

    } catch (error) {
        console.error("Data Siphon Failed:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, error: errorMessage };
    }
}
