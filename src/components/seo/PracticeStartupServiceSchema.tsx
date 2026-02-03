import Script from 'next/script';

export default function PracticeStartupServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Psychiatry Practice Start-Up Services",
        "description": "Comprehensive start-up support for California psychiatric practices. EHR implementation, contract negotiation, HIPAA compliance setup, and operational infrastructure for day-one readiness.",
        "provider": {
            "@type": "Organization",
            "name": "Virtual Minds",
            "url": "https://thevirtualminds.com",
            "logo": "https://thevirtualminds.com/images/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "CA",
                "addressCountry": "US"
            }
        },
        "serviceType": "Practice Management Consulting",
        "areaServed": {
            "@type": "State",
            "name": "California"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Psychiatrists and Psychiatric Nurse Practitioners"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Start-Up Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "EHR Implementation",
                        "description": "Custom configuration of SimplePractice, Kareo, or Jane App for psychiatric workflows"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Contract Review & Negotiation",
                        "description": "Expert support in negotiating with payers and vendors"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "HIPAA Compliance Setup",
                        "description": "Establishing secure policies, BAA management, and California privacy compliance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Plan Review",
                        "description": "Feasibility analysis and refinement based on modern psychiatric demand data"
                    }
                }
            ]
        }
    };

    return (
        <Script
            id="practice-startup-service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
