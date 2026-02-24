import Script from 'next/script';

export default function VirtualAssistantSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Virtual Assistant for Psychiatrists",
        "description": "Expert virtual assistants for California psychiatrists. HIPAA-compliant administrative support, billing, and practice management.",
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
        "areaServed": {
            "@type": "State",
            "name": "California"
        },
        "serviceType": "Virtual Assistant Services",
        "audience": {
            "@type": "Audience",
            "audienceType": "Psychiatrists"
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Virtual Assistant Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Administrative Support",
                        "description": "HIPAA-compliant scheduling, patient intake, and practice management"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Billing & Revenue Cycle Management",
                        "description": "Insurance credentialing, claims processing, and revenue optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "EHR & Technology Support",
                        "description": "EHR optimization, telehealth setup, and workflow automation"
                    }
                }
            ]
        }
    };

    return (
        <Script
            id="virtual-assistant-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
