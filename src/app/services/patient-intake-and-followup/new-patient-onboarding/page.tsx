import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Patient Intake Services | New Patient Onboarding",
    description: "Convert more referrals into long-term patients. We handle the entire new patient intake process, from initial inquiry to signed consent forms.",
};

export default function PatientIntakePage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Patient Experience",
                title: "First Impressions Are Clinical.",
                subtitle: "The intake process is the first therapeutic intervention. We provide a 'White Glove' onboarding experience that makes your new patients feel safe, heard, and ready to start treatment.",
                primaryCtaText: "Upgrade My Intake",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'leaky Bucket' of Referrals",
                content: (
                    <>
                        <p>
                            You get 10 referrals a week. How many actually schedule? How many show up to the first appointment with their paperwork done?
                        </p>
                        <p>
                            <strong>The Problem:</strong> Patients seeking psychiatric care are often in distress. If they face a confusing portal, a voicemail box, or a 20-page PDF to print and scan, they give up. They go to the next doctor on the list.
                        </p>
                        <p>
                            You aren't losing patients because of your clinical skills. You're losing them because of your intake process.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "White-Glove Onboarding",
                features: [
                    {
                        title: "Live Inquiry Response",
                        description: "We answer phone and email inquiries promptly, vetting patients for fit and scheduling the initial consultation immediately.",
                        icon: "support_agent"
                    },
                    {
                        title: "Paperwork Chase",
                        description: "We don't just send the forms; we track them. We follow up kindly but persistently to ensure everything is signed before the first session.",
                        icon: "assignment_turned_in"
                    },
                    {
                        title: "Benefits Verification",
                        description: "We clarify out-of-network benefits upfront, so the patient knows exactly what their financial responsibility will be.",
                        icon: "payments"
                    }
                ]
            }}
            cta={{
                heading: "Stop Losing Referrals",
                subheading: "Turn your intake process into a competitive advantage. High-touch onboarding for high-value patients.",
                buttonText: "Fix My Intake Flow",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
