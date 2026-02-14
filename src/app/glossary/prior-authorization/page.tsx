import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is Prior Authorization? | Psychiatric Glossary",
    description: "Definition of Prior Authorization (PA) in psychiatry. Understand why insurance companies require it and how to get your medications approved.",
};

export default function PriorAuthGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Prior Authorization (PA)"
            definition={{
                short: "A Prior Authorization (PA) is a requirement by health insurance companies that your psychiatrist must obtain approval before prescribing a specific medication or treatment. Without this approval, the insurance will not cover the cost.",
                extended: (
                    <>
                        <p>
                            In psychiatry, PAs are commonly required for brand-name medications, higher-than-standard dosages, or newer treatments like TMS or Spravato.
                        </p>
                        <p>
                            The process involves the doctor submitting clinical notes to prove "Medical Necessity," often showing that cheaper generic alternatives have been tried and failed (a process called "Step Therapy").
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Burden on Practice",
                content: (
                    <>
                        <p>
                            For a private practice psychiatrist, PAs are a major administrative burden. Each request can take 30-60 minutes of staff time to initiate, follow up on, and appeal.
                        </p>
                        <p>
                            Delays in PA approval can lead to treatment interruptions for patients, making efficient management of this process critical for patient safety.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Spending hours on the phone with PBMs (Pharmacy Benefit Managers) is not the best use of a doctor's time.",
                solution: "We handle the entire PA lifecycle, from submission to appeal, ensuring your patients get their meds without the wait.",
                ctaText: "Delegate Your PAs",
                ctaLink: "/services/administrative-and-scheduling/prior-authorization"
            }}
            relatedTerms={[
                { term: "Medical Necessity", slug: "medical-necessity" },
                { term: "Step Therapy", slug: "step-therapy" }
            ]}
        />
    );
}
