import Script from 'next/script';

export default function StartupGuideSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Start a Psychiatry Practice in California",
        "description": "Complete step-by-step guide for starting a psychiatry practice in California, covering licensing, business setup, credentialing, and operational requirements.",
        "image": "https://thevirtualminds.com/images/og-startup-guide.png",
        "totalTime": "P12M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "15000"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "California Medical License"
            },
            {
                "@type": "HowToSupply",
                "name": "DEA Registration"
            },
            {
                "@type": "HowToSupply",
                "name": "Professional Corporation"
            },
            {
                "@type": "HowToSupply",
                "name": "Malpractice Insurance"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "California Licensing & Credentialing",
                "text": "Obtain California medical license, ABPN board certification, DEA registration, and complete CAQH profile setup.",
                "url": "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide#licensing"
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Business Structure & Legal Setup",
                "text": "Establish Professional Corporation (required by California CPOM doctrine), obtain EIN, and secure malpractice insurance.",
                "url": "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide#business-setup"
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Location & Office Setup",
                "text": "Choose between telehealth, traditional, or hybrid practice model. Ensure HIPAA compliance and California AB 744 telehealth regulations.",
                "url": "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide#location"
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Insurance Credentialing",
                "text": "Apply to insurance panels (90-180 day process). Start with major California payers: Blue Shield, Anthem, Health Net.",
                "url": "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide#credentialing"
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Launch Practice",
                "text": "Implement EHR system, set up billing systems, establish marketing presence, and begin accepting patients.",
                "url": "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide#launch"
            }
        ],
        "about": {
            "@type": "Thing",
            "name": "Psychiatry Practice Management"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Psychiatrists",
            "geographicArea": {
                "@type": "State",
                "name": "California"
            }
        }
    };

    return (
        <Script
            id="startup-guide-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
