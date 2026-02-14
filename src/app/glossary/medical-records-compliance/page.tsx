import GlossaryTemplate from "@/templates/GlossaryTemplate";

export const metadata = {
    title: "What is Medical Records Compliance? | Psychiatric Glossary",
    description: "Definition of Medical Records Compliance in psychiatry. Understand audit risks, chart requirements, and how to organize your digital files.",
};

export default function MedicalRecordsGlossaryPage() {
    return (
        <GlossaryTemplate
            term="Medical Records Compliance"
            definition={{
                short: "Medical Records Compliance refers to the systematic organization and maintenance of patient health information (PHI) in accordance with HIPAA regulations and payer requirements.",
                extended: (
                    <>
                        <p>
                            In psychiatry, this goes beyond just keeping notes. It involves ensuring that every chart contains a signed Informed Consent, a Treatment Plan that is updated every 90 days, and valid Release of Information (ROI) forms for any external communication.
                        </p>
                        <p>
                            During an insurance audit, incomplete records are the #1 reason for "clawbacks," where plans demand the return of payments made years ago.
                        </p>
                    </>
                )
            }}
            context={{
                title: "The Digital Filing Problem",
                content: (
                    <>
                        <p>
                            Modern practices generate thousands of digital documents: PDFs from intake portals, faxed lab results, and secure messages.
                        </p>
                        <p>
                            Without a dedicated filing system, these documents often sit in "Downloads" folders or unread emails, creating a significant liability risk if a patient has an adverse event.
                        </p>
                    </>
                )
            }}
            bridge={{
                problem: "Doctors are not trained to be archivists. Filing charts takes time away from clinical care.",
                solution: "Our Document Management team organizes your charts in real-time, ensuring you are 100% audit-ready every day.",
                ctaText: "Organize My Records",
                ctaLink: "/services/administrative-and-scheduling/document-management"
            }}
            relatedTerms={[
                { term: "HIPAA Audit", slug: "hipaa-audit" },
                { term: "Treatment Plan", slug: "treatment-plan" }
            ]}
        />
    );
}
