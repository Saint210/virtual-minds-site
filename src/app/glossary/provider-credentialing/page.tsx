import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is Provider Credentialing? | Psychiatric Glossary",
    description: "Definition of Provider Credentialing and Paneling. Learn how to get in-network with insurance companies like Optum, Aetna, and Cigna.",
};

export default function CredentialingGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Provider Credentialing"
            definition={{
                short: "Provider Credentialing (also known as 'Paneling') is the formal process by which an insurance company verifies a healthcare provider's education, training, and experience before allowing them to join their network.",
                extended: (
                    <>
                        <p>
                            For psychiatrists, this is the mandatory first step to accepting insurance. The process involves submitting a massive amount of data to the Council for Affordable Quality Healthcare (CAQH) and individual payers.
                        </p>
                        <p>
                            It is not a one-time event. Providers must 'Re-Attest' their data every 120 days and go through a full 'Re-Credentialing' process every 2-3 years to remain in-network.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Administrative Burden",
                content: (
                    <>
                        <p>
                            Credentialing is widely considered the most broken process in healthcare administration. A single application can take 90-120 days to process, and minor errors (like a typo in an NPI number) can cause the entire application to be rejected, forcing the provider to start over.
                        </p>
                        <p>
                            For private practices, this delay means lost revenue. You cannot bill for patients until the credentialing is approved and the contract is signed.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Navigating CAQH and payer portals requires hours of administrative work that you don't have.",
                solution: "We handle the entire lifecycle: initial applications, CAQH maintenance, and re-attestations.",
                ctaText: "Get Credentialing Help",
                ctaLink: "/services/billing-and-rcm/credentialing-assistance"
            }}
            relatedTerms={[
                { term: "Claim Denial", slug: "claim-denial" },
                { term: "NPI Number", slug: "npi-number" }
            ]}
        />
    );
}
