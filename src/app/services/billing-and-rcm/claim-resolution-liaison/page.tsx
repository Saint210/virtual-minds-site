import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Claim Resolution Liaison | Denial Management Support",
    description: "We work with your billing company to resolve denied psychiatric claims. Expert liaison support to unblock revenue without changing your biller.",
};

export default function ClaimResolutionPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Revenue Cycle Liaison",
                title: "Stop Losing Revenue to Denied Claims.",
                subtitle: "We don't replace your biller. We manage them. Expert liaison support to resolve complex psychiatric denials and unblock your cash flow.",
                primaryCtaText: "Unblock My Revenue",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'Black Hole' of Denied Claims",
                content: (
                    <>
                        <p>
                            Your billing company sends the claim. The insurance company denies it. <strong>Who fixes it?</strong>
                        </p>
                        <p>
                            Too often, the answer is "no one." The billing company says they need clinical information from you. You are too busy seeing patients to spend hours on hold with Blue Cross. So the claim sits. And sits. Until it expires.
                        </p>
                        <p>
                            This is the <strong>Revenue Cycle Gap</strong>. Your biller handles the <em>submission</em>, but they rarely have the clinical context or the persistence to handle the <em>fight</em>. You don't need a new biller; you need a <strong>Liaison</strong> who speaks both "Doctor" and "Insurance."
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "The Liaison Model: We Fight For You",
                features: [
                    {
                        title: "Biller Accountability",
                        description: "We meet weekly with your billing team to review aging reports and hold them accountable for every unpaid dollar.",
                        icon: "gavel"
                    },
                    {
                        title: "Clinical Context",
                        description: "We access your EHR to find the specific clinical notes needed to overturn medical necessity denials.",
                        icon: "description"
                    },
                    {
                        title: "Patient Coordination",
                        description: "We contact patients directly to update insurance hurdles, COB issues, or demographic errors that stop payment.",
                        icon: "person_check"
                    }
                ]
            }}
            cta={{
                heading: "Recover Your Lost Revenue",
                subheading: "Let us audit your aging report and show you exactly how much 'lost' revenue we can recover in the first 30 days.",
                buttonText: "Schedule Aging Audit",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
