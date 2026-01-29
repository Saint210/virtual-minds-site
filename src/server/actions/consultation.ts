"use server";

import { ConvexHttpClient } from "convex/browser";

export type ConsultationFormData = {
    fullName: string;
    email: string;
    ehrPlatform: string;
    practiceSize: string;
    painPoint: string;
};

export type ActionState = {
    success?: boolean;
    message?: string;
    errors?: {
        [K in keyof ConsultationFormData]?: string[];
    };
};

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function submitConsultation(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const rawData: ConsultationFormData = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        ehrPlatform: formData.get("ehrPlatform") as string,
        practiceSize: formData.get("practiceSize") as string,
        painPoint: formData.get("painPoint") as string,
    };

    // Simple validation
    const errors: ActionState["errors"] = {};
    if (!rawData.fullName || rawData.fullName.length < 2) {
        errors.fullName = ["Name is required"];
    }
    if (!rawData.email || !rawData.email.includes("@")) {
        errors.email = ["Valid email is required"];
    }
    if (!rawData.ehrPlatform) {
        errors.ehrPlatform = ["Please select an EHR platform"];
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "Please fix the errors below",
            errors,
        };
    }

    try {
        // Save to Convex database
        const leadId = await convex.mutation("consultationLeads:createLead" as any, rawData);

        console.log("✅ Lead saved to database:", leadId);

        // Send email notification
        await sendEmailNotification(rawData);

        console.log("✅ Email notification sent");

        return {
            success: true,
            message: "Consultation request received!",
        };
    } catch (error) {
        console.error("❌ Error saving lead:", error);
        return {
            success: false,
            message: "An error occurred. Please try again.",
        };
    }
}

async function sendEmailNotification(data: ConsultationFormData) {
    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "raguilar805@gmail.com";

    if (!RESEND_API_KEY) {
        console.warn("⚠️ RESEND_API_KEY not configured, skipping email");
        return;
    }

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Virtual Minds <onboarding@resend.dev>", // You'll need to verify your domain
                to: [NOTIFICATION_EMAIL],
                subject: `🎯 New Consultation Lead: ${data.fullName}`,
                html: `
                    <h2>New Consultation Request</h2>
                    <p><strong>Name:</strong> ${data.fullName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>EHR Platform:</strong> ${data.ehrPlatform}</p>
                    <p><strong>Practice Size:</strong> ${data.practiceSize}</p>
                    <p><strong>Pain Point:</strong></p>
                    <p>${data.painPoint || "Not provided"}</p>
                    <hr />
                    <p><small>View all leads in your <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/leads">admin dashboard</a></small></p>
                `,
            }),
        });

        if (!response.ok) {
            throw new Error(`Email API error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Email send error:", error);
        // Don't fail the whole submission if email fails
    }
}
