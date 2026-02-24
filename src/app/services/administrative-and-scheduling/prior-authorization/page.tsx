import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Prior Authorization Services | Rx & Treatment Approval",
    description: "Stop spending hours on hold with pharmacy benefit managers. We handle prior authorizations (PAs) for medications and treatments so you can focus on patient care.",
};

export default function PriorAuthPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Clinical Operations Support",
                title: "Prescription Prior Authorizations, Handle With Care.",
                subtitle: "Your patients need their medication. You need your time back. We manage the entire Prior Authorization (PA) process, from submission to appeal.",
                primaryCtaText: "Delegate Your PAs",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The Administrative Bottleneck of Psychiatry",
                content: (
                    <>
                        <p>
                            Prior Authorizations are the single biggest time-sink in modern psychiatry. A patient needs a specific medication, but their PBM requires a 10-page form, clinical notes, and peer-to-peer review.
                        </p>
                        <p>
                            <strong>The Cost?</strong> You spend your lunch break on hold. Your patient experiences a delay in care. And your practice loses billable hours to uncompensated administrative work.
                        </p>
                        <p>
                            You shouldn't have to choose between fighting for your patient and running a profitable practice.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "A Dedicated PA Team",
                features: [
                    {
                        title: "Rapid Submission",
                        description: "We initiate PA requests within 24 hours of your prescription, using CoverMyMeds or payer-specific portals.",
                        icon: "rocket_launch"
                    },
                    {
                        title: "Clinical Justification",
                        description: "We draft the 'Medical Necessity' statements based on your notes, citing failed step-therapy to support your creative choice.",
                        icon: "edit_note"
                    },
                    {
                        title: "Appeal Management",
                        description: "If a PA is denied, we handle the first level of appeals automatically, gathering the additional data needed for approval.",
                        icon: "gavel"
                    }
                ]
            }}
            cta={{
                heading: "Stop Waiting on Hold",
                subheading: "Delegate your Prior Authorizations to a team that understands psychiatric pharmacology and payer requirements.",
                buttonText: "Start PA Support",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
