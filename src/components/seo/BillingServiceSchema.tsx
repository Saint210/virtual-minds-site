import Script from 'next/script';

export default function BillingServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Psychiatric Billing & RCM Support Services",
        "description": "Specialized administrative support for eligibility, prior authorizations, and revenue cycle coordination built exclusively for California psychiatric practices.",
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
        "serviceType": "Medical Billing Administration",
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
            "name": "Billing Administration Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Insurance Verification & Eligibility",
                        "description": "Real-time verification of patient insurance eligibility and benefits"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Prior Authorization Management",
                        "description": "Obtaining and tracking prior authorizations for psychiatric services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Revenue Cycle Coordination",
                        "description": "Administrative support coordinating with billing teams and software"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Superbill Generation",
                        "description": "Creation and distribution of superbills for out-of-network patients"
                    }
                }
            ]
        }
    };

    return (
        <Script
            id="billing-service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
