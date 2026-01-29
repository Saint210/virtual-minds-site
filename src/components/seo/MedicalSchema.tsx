"use client";

import Script from "next/script";

export default function MedicalSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Virtual Minds",
        "url": "https://virtualminds.com",
        "logo": "https://virtualminds.com/images/the-virtual-minds-logo-og-notext.jpg",
        "description": "Specialized virtual assistant services for California psychiatric practices. HIPAA-compliant administrative support.",
        "medicalSpecialty": [
            {
                "@type": "MedicalSpecialty",
                "name": "Psychiatry",
                "url": "https://www.wikidata.org/wiki/Q18866",
                "alternateName": "Mental Health"
            }
        ],
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "name": "HIPAA Compliant",
                "url": "https://www.wikidata.org/wiki/Q1523270",
                "description": "Fully compliant with Health Insurance Portability and Accountability Act"
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "CMIA Compliant",
                "description": "Compliant with California Confidentiality of Medical Information Act"
            }
        ],
        "areaServed": {
            "@type": "State",
            "name": "California",
            "url": "https://www.wikidata.org/wiki/Q99"
        },
        "knowsAbout": [
            {
                "@type": "Thing",
                "name": "DrChrono",
                "description": "Electronic Health Record System"
            },
            {
                "@type": "Thing",
                "name": "CharmHealth",
                "description": "EHR for Psychiatry"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
        }
    };

    return (
        <Script
            id="medical-organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            strategy="afterInteractive"
        />
    );
}
