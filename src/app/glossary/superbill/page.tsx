import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is a Superbill? | Psychiatric Billing Glossary",
    description: "Definition of a Superbill in psychiatry. Understand how out-of-network reimbursement works and how to automate Superbill generation for your practice.",
};

export default function SuperbillGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Superbill"
            pronunciation="/ˈso͞opərˌbil/"
            definition={{
                short: "A Superbill is an itemized receipt used by healthcare providers to detail services rendered to a patient. It allows patients to seek reimbursement from their insurance company when seeing an out-of-network provider.",
                extended: (
                    <>
                        <p>
                            In the context of private practice psychiatry, a Superbill is the bridge between a cash-pay physician and the patient's insurance benefits. Unlike a standard claim (CMS-1500) which is submitted directly by the doctor to the insurance company, a Superbill is given to the patient.
                        </p>
                        <p>
                            It must contain specific data points to be valid, including the provider's NPI, the practice's Tax ID, CPT codes (Current Procedural Terminology), ICD-10 diagnosis codes, and the place of service code.
                        </p>
                    </>
                )
            }}
            context={{
                title: "Why it matters for Private Practice",
                content: (
                    <>
                        <p>
                            For psychiatrists who choose to opt-out of insurance panels (cash-pay), the Superbill is an essential tool for patient retention. It allows patients with PPO plans to use their "out-of-network" benefits, effectively lowering the cost of care.
                        </p>
                        <p>
                            However, if a Superbill is missing even one required field (like a modifier for a telehealth session), the patient's claim will be rejected, leading to frustration and potential discontinuation of care.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Generating these manually at the end of the month is tedious and error-prone.",
                solution: "We automate the entire process, generating and sending accurate Superbills to your patients monthly.",
                ctaText: "Automate Your Superbills",
                ctaLink: "/services/billing-and-rcm/superbill-generation"
            }}
            relatedTerms={[
                { term: "Claim Denial", slug: "claim-denial" },
                { term: "CPT Codes", slug: "cpt-codes" }
            ]}
        />
    );
}
