import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is Appointment Scheduling? | Psychiatric Glossary",
    description: "Definition of Appointment Scheduling in private practice. Learn about block scheduling, waitlist management, and how to reduce no-shows.",
};

export default function SchedulingGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Appointment Scheduling"
            definition={{
                short: "Appointment Scheduling is the operational process of managing a clinician's availability, booking patient sessions, and minimizing gaps in the practice calendar.",
                extended: (
                    <>
                        <p>
                            In psychiatry, scheduling is more than just picking a time. It requires "Block Scheduling" to group similar appointment types (e.g., all medication management in the morning, psychotherapy in the afternoon) to reduce cognitive load.
                        </p>
                        <p>
                            Effective scheduling also involves active "Waitlist Management" to immediately fill slots opened by cancellations, ensuring the provider's billable hours remain maximized.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The No-Show Impact",
                content: (
                    <>
                        <p>
                            A cancellation rate of even 10% can cost a full-time private practice over $30,000 per year in lost revenue.
                        </p>
                        <p>
                            Automated reminders help, but they are not enough. High-performance practices use human confirmation calls and strict 48-hour cancellation policies enforced by a dedicated administrative team.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Managing a calendar, confirming appointments, and filling last-minute gaps is a full-time job.",
                solution: "We manage your schedule with executive precision, ensuring zero double-bookings and maximized revenue.",
                ctaText: "Optimize My Calendar",
                ctaLink: "/services/administrative-and-scheduling/calendar-management"
            }}
            relatedTerms={[
                { term: "No-Show Policy", slug: "no-show-policy" },
                { term: "Block Scheduling", slug: "block-scheduling" }
            ]}
        />
    );
}
