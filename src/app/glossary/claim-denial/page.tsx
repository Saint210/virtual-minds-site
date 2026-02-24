import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is a Claim Denial? | Psychiatric Billing Glossary",
    description: "Understand the difference between a Claim Denial and a Rejection, and how to overturn medical necessity denials in psychiatry.",
};

export default function ClaimDenialGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Claim Denial"
            definition={{
                short: "A Claim Denial occurs when an insurance company processes a medical claim but refuses to pay for it. This is distinct from a 'Rejection,' which happens when a claim contains errors preventing it from being processed at all.",
                extended: (
                    <>
                        <p>
                            In psychiatry, claim denials are often tied to "Medical Necessity." The insurance company may argue that the treatment frequency (e.g., weekly psychotherapy) or the modality (e.g., 60-minute sessions vs 45-minute) is not supported by the patient's diagnosis.
                        </p>
                        <p>
                            Denials can also occur due to coordination of benefits (COB) issues, where a patient has multiple insurance plans and the primary payer has not been correctly identified.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Revenue Cycle Impact",
                content: (
                    <>
                        <p>
                            A denied claim does not mean the money is lost forever, but recovering it requires an appeal.
                        </p>
                        <p>
                            Appeals often require submitting clinical notes (with patient consent) to prove medical necessity. This is a time-sensitive process; if an appeal is not filed within the payer's specific window (often 90-180 days), the claim becomes uncollectible.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Your billing company submits the claim, but they rarely fight the denial. They lack the clinical context to write a successful appeal.",
                solution: "Our Claim Resolution Liaisons work directly with your biller to provide the clinical documentation needed to overturn denials.",
                ctaText: "Recover Denied Revenue",
                ctaLink: "/services/billing-and-rcm/claim-resolution-liaison"
            }}
            relatedTerms={[
                { term: "Superbill", slug: "superbill" },
                { term: "Credentialing", slug: "provider-credentialing" }
            ]}
        />
    );
}
