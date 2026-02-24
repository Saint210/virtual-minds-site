import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Credentialing Assistance | Insurance Panel Support",
    description: "Remove the headache of insurance paneling. We handle CAQH updates, re-attestations, and new payer applications for California psychiatrists.",
};

export default function CredentialingPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Practice Administration",
                title: "Credentialing Without the Chaos.",
                subtitle: "Stop spending hours on CAQH updates and payer applications. We manage the administrative burden of getting and staying paneled.",
                primaryCtaText: "Start Credentialing Support",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The Paperwork That Never Ends",
                content: (
                    <>
                        <p>
                            Credentialing is the single most tedious barrier to growing your practice. Whether you are trying to get on panels like Optum and Aetna, or just trying to <em>stay</em> on them, the paperwork is endless.
                        </p>
                        <p>
                            <strong>One missed re-attestation can freeze your payments for months.</strong>
                        </p>
                        <p>
                            You didn't go to medical school to fill out 40-page applications or debug CAQH portal errors. Yet, valuable clinical hours are lost every week to this invisible administrative tax.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Your Administrative Safety Net",
                features: [
                    {
                        title: "New Panel Applications",
                        description: "We handle the entire application process for new payers, ensuring every form is perfect before submission.",
                        icon: "assignment_add"
                    },
                    {
                        title: "CAQH Management",
                        description: "We proactively manage your CAQH profile, handling quarterly re-attestations so you never lapse.",
                        icon: "update"
                    },
                    {
                        title: "NPI & PECOS Updates",
                        description: "We keep your National Provider Identifier and Medicare enrollment data current across all systems.",
                        icon: "verified_user"
                    }
                ]
            }}
            cta={{
                heading: "Secure Your Payer Networks",
                subheading: "Don't let a paperwork error disrupt your revenue. Let us handle the bureaucracy while you handle the patients.",
                buttonText: "Get Credentialing Help",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
