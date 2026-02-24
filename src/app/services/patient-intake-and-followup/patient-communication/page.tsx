import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Patient Communication | Secure Messaging Support",
    description: "Responsive, empathetic patient communication for psychiatrists. We handle secure messaging, phone calls, and email correspondence so your patients feel heard.",
};

export default function PatientCommunicationPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Patient Engagement",
                title: "Communication That Heals.",
                subtitle: "Patients don't just need prescriptions; they need to feel heard. We provide responsive, empathetic communication support that builds trust and retention.",
                primaryCtaText: "Improve Patient Support",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'Unanswered Message' Anxiety",
                content: (
                    <>
                        <p>
                            A patient sends a portal message about a side effect on Friday afternoon. By Monday morning, their anxiety has spiked, and they are calling the crisis line.
                        </p>
                        <p>
                            <strong>The Reality:</strong> You cannot be available 24/7. But when patients feel ignored, they leave. Or worse, they decompose.
                        </p>
                        <p>
                            You need a buffer—a team that acknowledges, triages, and reassures your patients so you can have your weekends back without guilt.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Empathetic Correspondence",
                features: [
                    {
                        title: "Secure Messaging Triage",
                        description: "We monitor your EHR inbox, answering administrative questions and flagging clinical urgencies for your review.",
                        icon: "mail_lock"
                    },
                    {
                        title: "Phone Support",
                        description: "A real human answers your practice line. No endless phone trees. Just compassionate, professional support.",
                        icon: "phone_callback"
                    },
                    {
                        title: "Review Management",
                        description: "Happy patients leave 5-star reviews. We follow up with satisfied clients to build your online reputation organically.",
                        icon: "star_rate"
                    }
                ]
            }}
            cta={{
                heading: "Build Stronger Relationships",
                subheading: "Great communication is the foundation of great psychiatry. Let us handle the correspondence so you can handle the care.",
                buttonText: "Start Communication Support",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
