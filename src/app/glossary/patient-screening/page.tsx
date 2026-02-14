import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is Patient Screening? | Psychiatric Glossary",
    description: "Definition of Patient Screening (Vetting) in psychiatry. Learn why screening for 'fit' before the first appointment is crucial for clinical outcomes.",
};

export default function PatientScreeningGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Patient Screening"
            definition={{
                short: "Patient Screening (or Vetting) is the process of evaluating a potential patient's clinical needs, insurance coverage, and acuity level before scheduling an initial consultation.",
                extended: (
                    <>
                        <p>
                            In private practice psychiatry, effective screening prevents "clinical mismatch." For example, a solo practitioner may not have the resources to safely treat high-acuity patients with active suicidality or complex substance use disorders.
                        </p>
                        <p>
                            Screening also ensures financial alignment, confirming that the patient understands the practice's fees or is in-network with the specific plans accepted.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Efficiency Factor",
                content: (
                    <>
                        <p>
                            Scheduling a patient who is a poor fit is a waste of time for both the doctor and the patient. It occupies a valuable intake slot that could have gone to a qualified referral.
                        </p>
                        <p>
                            Automated screening forms and trained intake coordinators are essential for filtering leads so the psychiatrist only sees patients they are best equipped to help.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "fielding inquiries from patients who are out-of-network or too high-acuity for your practice is a drain on resources.",
                solution: "We vet every inquiry for clinical and financial fit, ensuring your calendar is filled with ideal patients.",
                ctaText: "Screen My Referrals",
                ctaLink: "/services/patient-intake-and-followup/new-patient-onboarding"
            }}
            relatedTerms={[
                { term: "Acuity Level", slug: "acuity-level" },
                { term: "Referral Leakage", slug: "referral-leakage" }
            ]}
        />
    );
}
