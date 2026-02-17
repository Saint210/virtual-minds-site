import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is HIPAA Compliant Zoom? | Psychiatric Glossary",
    description: "Definition of HIPAA Compliant Zoom vs Standard Zoom. Learn about BAA requirements and how to secure your telehealth sessions.",
};

export default function HipaaZoomGlossaryPage() {
    return (
        <GlossaryTemplate
            term="HIPAA Compliant Zoom"
            definition={{
                short: "HIPAA Compliant Zoom allows healthcare providers to conduct telehealth sessions securely. Unlike the free version, it includes a Business Associate Agreement (BAA) and advanced encryption settings required by federal law.",
                extended: (
                    <>
                        <p>
                            Using standard Zoom, FaceTime, or Skype for therapy sessions is a direct violation of HIPAA regulations unless a BAA is in place.
                        </p>
                        <p>
                            A "HIPAA Compliant" setup also requires specific configuration: disabling local recording, enforcing waiting rooms to prevent "Zoom bombing," and ensuring end-to-end encryption is active for all clinical meetings.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Security Risk",
                content: (
                    <>
                        <p>
                            Fines for HIPAA violations can range from $100 to $50,000 per incident. Using a non-compliant video platform is one of the easiest violations for auditors to spot.
                        </p>
                        <p>
                            Beyond the legal risk, patients expect their privacy to be protected. A professional, secure video link builds trust before the session even begins.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Configuring encryption settings and signing BAAs is a technical headache.",
                solution: "We set up your entire telehealth systems to be 100% HIPAA compliant and professionally optimized.",
                ctaText: "Secure My Zoom",
                ctaLink: "/services/patient-intake-and-followup/telehealth-setup"
            }}
            relatedTerms={[
                { term: "BAA (Business Associate Agreement)", slug: "baa" },
                { term: "Telehealth Parity", slug: "telehealth-parity" }
            ]}
        />
    );
}
