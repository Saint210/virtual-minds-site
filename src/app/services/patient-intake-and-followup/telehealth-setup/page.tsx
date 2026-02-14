import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Telehealth Tech Support | HIPAA Zoom Setup",
    description: "Look and sound like an executive. We handle the technical setup of your telehealth practice, from HIPAA-Zoom configuration to lighting and audio.",
};

export default function TelehealthSetupPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Practice Technology",
                title: "Professional Grade Telehealth.",
                subtitle: "Poor audio and bad lighting hurt your clinical authority. We set up your entire virtual office so you look and sound like a world-class psychiatrist.",
                primaryCtaText: "Upgrade My Setup",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'Grainy Webcam' Problem",
                content: (
                    <>
                        <p>
                            In a virtual practice, your screen is your office. If your connection lags, your audio echoes, or your lighting casts shadows, it degrades the therapeutic alliance.
                        </p>
                        <p>
                            <strong>The Barrier:</strong> You are a doctor, not an IT specialist. Configuring HIPAA-compliant Zoom settings, setting up a Ring Light, and troubleshooting microphone inputs shouldn't be your job.
                        </p>
                        <p>
                            You need a tech team that ensures your digital presence matches your clinical excellence.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Your Virtual Tech Team",
                features: [
                    {
                        title: "Platform Configuration",
                        description: "We configure your Zoom/Doxy.me for maximum security (BAA included) and optimal video quality.",
                        icon: "settings_video_camera"
                    },
                    {
                        title: "Hardware Consultation",
                        description: "We recommend and help set up the exact microphone, camera, and lighting gear used by top broadcasters.",
                        icon: "mic"
                    },
                    {
                        title: "Patient Troubleshooting",
                        description: "If a patient can't connect, they call us, not you. We walk them through the tech check before their session begins.",
                        icon: "contact_support"
                    }
                ]
            }}
            cta={{
                heading: "Look the Part",
                subheading: "Don't let technical glitches undermine your expertise. Get a telehealth setup that projects confidence and professionalism.",
                buttonText: "Fix My Tech Stack",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
