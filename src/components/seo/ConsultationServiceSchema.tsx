import Script from 'next/script';

export default function ConsultationServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Psychiatric Practice Strategy Consultation",
        "description": "15-minute California psychiatric strategy call to analyze clinical administrative load and map out a high-yield operational path.",
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
        "serviceType": "Business Consultation",
        "areaServed": {
            "@type": "State",
            "name": "California"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Board-Certified Psychiatrists and Psychiatric Nurse Practitioners"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "Free 15-minute strategy consultation"
        }
    };

    return (
        <Script
            id="consultation-service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
