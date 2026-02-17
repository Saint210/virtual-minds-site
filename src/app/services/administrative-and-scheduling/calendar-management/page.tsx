import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Calendar Management | Smart Scheduling",
    description: "Professional scheduling for busy psychiatrists. We manage your patient appointments, resolve conflicts, and fill cancellations to maximize your billable time.",
};

export default function CalendarManagementPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Scheduling & Logistics",
                title: "Your Calendar, Optimized.",
                subtitle: "Stop playing 'email tag' with patients. We manage your schedule with clinical precision, ensuring no double-bookings and zero wasted time.",
                primaryCtaText: "Optimize My Schedule",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The Scheduling Drain",
                content: (
                    <>
                        <p>
                            A patient cancels at 9:00 AM. Do you have a waitlist system to fill that slot by 10:00 AM? Or does that hour just evaporate?
                        </p>
                        <p>
                            <strong>The Reality:</strong> For a psychiatrist, time is inventory. Every gap in your schedule is lost revenue that can never be recovered. Yet, managing that schedule—confirming appointments, rescheduling conflicts, and handling urgent requests—takes hours of focus away from clinical care.
                        </p>
                        <p>
                            You need more than a booking link. You need a gatekeeper.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Active Calendar Management",
                features: [
                    {
                        title: "Waitlist Logic",
                        description: "When a cancellation happens, we immediately contact your prioritized waitlist to fill the slot.",
                        icon: "checklist"
                    },
                    {
                        title: "Conflict Resolution",
                        description: "We proactively spot and resolve double-bookings or scheduling conflicts before they become patient complaints.",
                        icon: "event_available"
                    },
                    {
                        title: "Patient Coordination",
                        description: "We handle all rescheduling requests via phone or secure message, so you never have to be the bad guy.",
                        icon: "phone_in_talk"
                    }
                ]
            }}
            cta={{
                heading: "Take Back Your Time",
                subheading: "Delegate your calendar to a professional who treats your time as the valuable asset it is.",
                buttonText: "Start Scheduling Support",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
