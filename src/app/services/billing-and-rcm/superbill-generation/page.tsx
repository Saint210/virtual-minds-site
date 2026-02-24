import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Superbill Generation Services | Out-of-Network Support",
    description: "Automated Superbill generation for out-of-network psychiatric practices. We ensure your patients get reimbursed without you spending hours on paperwork.",
};

export default function SuperbillPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Patient Reimbursement Support",
                title: "Superbills, Simplified.",
                subtitle: "You run a cash-pay practice, but your patients still need reimbursement. We handle the monthly Superbill generation so you don't have to.",
                primaryCtaText: "Automate My Superbills",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'Cash-Pay' Administrative Burden",
                content: (
                    <>
                        <p>
                            Running an out-of-network practice frees you from insurance contracts, but it doesn't free your patients from the need for reimbursement.
                        </p>
                        <p>
                            <strong>The Problem?</strong> Patients often struggle to submit claims themselves. If your Superbills lack specific CPT codes, modifiers, or diagnosis pointers, the claim gets rejected. The patient gets frustrated. And suddenly, your "premium" cash-pay service feels like a hassle.
                        </p>
                        <p>
                            Generating these documents manually at the end of every month is a low-value task that eats up your personal time.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Seamless Reimbursement Support",
                features: [
                    {
                        title: "Monthly Generation",
                        description: "We automatically generate and send Superbills to your patients at the end of every month, like clockwork.",
                        icon: "calendar_month"
                    },
                    {
                        title: "Coding Accuracy",
                        description: "We ensure every Superbill includes the correct CPT codes and modifiers to maximize patient reimbursement rates.",
                        icon: "check_circle"
                    },
                    {
                        title: "Patient Support",
                        description: "When a patient is confused about how to submit, we provide the instructions and support they need.",
                        icon: "contact_support"
                    }
                ]
            }}
            cta={{
                heading: "Make Out-of-Network Easy",
                subheading: "Give your patients the reimbursement support they deserve without lifting a finger. Let us handle the Superbills.",
                buttonText: "Start Superbill Service",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
