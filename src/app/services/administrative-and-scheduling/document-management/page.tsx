import ClusterArticleTemplate from "@/templates/ClusterArticleTemplate";

export const metadata = {
    title: "Psychiatric Document Management | Medical Records & Scribing",
    description: "Secure, HIPAA-compliant document management for psychiatrists. We handle medical records, scribing coordination, and digital filing so you are always audit-ready.",
};

export default function DocumentManagementPage() {
    return (
        <ClusterArticleTemplate
            metadata={metadata}
            hero={{
                badge: "Practice Organization",
                title: "Audit-Ready Records, Every Time.",
                subtitle: "Never worry about a missing consent form or a disorganized chart again. We manage your documents with military precision.",
                primaryCtaText: "Organize My Practice",
                primaryCtaLink: "/book-consultation"
            }}
            problem={{
                heading: "The 'Digital Clutter' Crisis",
                content: (
                    <>
                        <p>
                            In the digital age, "paperwork" hasn't disappeared; it's just become thousands of unorganized PDFs, intake forms, and lab results scattered across your desktop and EHR.
                        </p>
                        <p>
                            <strong>The Risk?</strong> When an audit comes, or when you need to transfer a patient, finding the right document takes hours. Worse, missing signatures or incomplete charts can lead to liability issues and clawbacks.
                        </p>
                        <p>
                            You need a librarian for your practice—someone who ensures every file is named, sorted, and compliant.
                        </p>
                    </>
                )
            }}
            solution={{
                heading: "Your Digital Filing Team",
                features: [
                    {
                        title: "Chart Organization",
                        description: "We audit your EHR charts to ensure all intake forms, consents, and treatment plans are signed and filed correctly.",
                        icon: "folder_managed"
                    },
                    {
                        title: "Lab & Report Filing",
                        description: "When a lab result or consult note comes in, we upload it to the patient's chart and alert you immediately.",
                        icon: "upload_file"
                    },
                    {
                        title: "Audit Preparation",
                        description: "We maintain a 'Compliance Dashboard' for your practice, ensuring you are always ready for a surprise payer audit.",
                        icon: "fact_check"
                    }
                ]
            }}
            cta={{
                heading: "Get Organized Today",
                subheading: "Stop drowning in digital clutter. Let us build a filing system that keeps your practice compliant and efficient.",
                buttonText: "Start Document Support",
                buttonLink: "/book-consultation"
            }}
        />
    );
}
