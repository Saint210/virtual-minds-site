import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What are Intake Workflows? | Psychiatric Glossary",
    description: "Definition of Intake Workflows in mental health. Learn how to streamline patient onboarding and reduce drop-off rates.",
};

export default function IntakeWorkflowsGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Intake Workflows"
            definition={{
                short: "Intake Workflows refer to the sequential steps a new patient must complete to become an active client in a psychiatric practice. This includes the initial inquiry, screening call, paperwork completion, and the first clinical assessment.",
                extended: (
                    <>
                        <p>
                            In high-performance practices, this process is automated and closely monitored. "Touching" a lead within 5 minutes of their inquiry increases conversion rates by up to 9x (the "Speed to Lead" principle).
                        </p>
                        <p>
                            A broken intake workflow—where patients are left wondering if their forms were received—is the primary cause of "referral leakage."
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Clinical Impact",
                content: (
                    <>
                        <p>
                            The intake process sets the tone for the therapeutic relationship. A chaotic onboarding experience can increase patient anxiety before they even meet the doctor.
                        </p>
                        <p>
                            Conversely, a smooth, professional intake builds trust and compliance from day one.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Chasing patients for paperwork and fielding inquiry calls is distracting and inefficient.",
                solution: "We manage your entire intake funnel, ensuring a 'white glove' experience for every new patient.",
                ctaText: "Streamline My Intake",
                ctaLink: "/services/patient-intake-and-followup/new-patient-onboarding"
            }}
            relatedTerms={[
                { term: "Referral Leakage", slug: "referral-leakage" },
                { term: "Speed to Lead", slug: "speed-to-lead" }
            ]}
        />
    );
}
