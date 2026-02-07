"use client";

import Script from "next/script";

export default function MedicalSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalOrganization",
                "@id": "https://thevirtualminds.com/#organization",
                "name": "Virtual Minds, LLC",
                "url": "https://thevirtualminds.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://thevirtualminds.com/images/the-virtual-minds-logo-og-notext.jpg"
                },
                "brand": {
                    "@type": "Brand",
                    "name": "Virtual Minds"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/virtual-minds-ca"
                ],
                "description": "Elite specialized virtual assistant services for California psychiatrists. Experts in Telehealth workflows, HIPAA compliance, and EHR optimization.",
                "medicalSpecialty": [
                    {
                        "@type": "MedicalSpecialty",
                        "name": "Psychiatry",
                        "url": "https://www.wikidata.org/wiki/Q18866"
                    }
                ],
                "areaServed": {
                    "@type": "State",
                    "name": "California",
                    "url": "https://www.wikidata.org/wiki/Q99"
                },
                "knowsAbout": ["DrChrono", "CharmHealth", "SimplePractice", "Luminello", "Kareo", "AdvancedMD", "California Mental Health Law"]
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://thevirtualminds.com/#localbusiness",
                "name": "Virtual Minds, LLC",
                "image": "https://thevirtualminds.com/images/the-virtual-minds-logo-og-notext.jpg",
                "telePhone": "+13104006266",
                "url": "https://thevirtualminds.com",
                "priceRange": "$$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Los Angeles",
                    "addressRegion": "CA",
                    "addressCountry": "US"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 34.0837415,
                    "longitude": -119.0075401
                },
                "hasMap": "https://www.google.com/maps?cid=9435017122116245209",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "1"
                }
            },
            {
                "@type": "Service",
                "name": "Psychiatric EHR Optimization & Management",
                "provider": { "@id": "https://thevirtualminds.com/#organization" },
                "areaServed": "California",
                "serviceType": "Medical Practice Management",
                "description": "Specialized workflow automation and management for DrChrono, SimplePractice, and CharmHealth EHR systems."
            },
            {
                "@type": "Service",
                "name": "California Psychiatric Virtual Assistant Staffing",
                "provider": { "@id": "https://thevirtualminds.com/#organization" },
                "areaServed": "California",
                "serviceType": "Medical Staffing",
                "description": "Elite HIPAA-compliant virtual assistants trained specifically for psychiatry workflows."
            },
            {
                "@type": "Service",
                "name": "Psychiatric Revenue Optimization & Billing Liaison",
                "provider": { "@id": "https://thevirtualminds.com/#organization" },
                "areaServed": "California",
                "serviceType": "Revenue Cycle Management",
                "description": "Holistic revenue health management and billing coordination for psychiatric practices."
            },
            {
                "@type": "Service",
                "name": "Telepsychiatry Infrastructure Operations",
                "provider": { "@id": "https://thevirtualminds.com/#organization" },
                "areaServed": "California",
                "serviceType": "Telehealth Support",
                "description": "Complete setup and administrative management for remote and hybrid psychiatric practices."
            }
        ]
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
