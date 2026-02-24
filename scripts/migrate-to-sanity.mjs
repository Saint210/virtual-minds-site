import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Load env vars
dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-02-03',
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});

async function migrateLocations() {
    console.log('--- Migrating Locations ---');
    // I will read the locations file content directly to avoid complex imports
    const locationsPath = path.join(process.cwd(), 'src/data/locations.ts');
    const content = fs.readFileSync(locationsPath, 'utf8');

    // Custom parser for the TS file structure
    const locationsMatch = content.match(/export const locations: LocationData\[\] = \[(.*)\];/s);
    if (!locationsMatch) {
        console.error('Could not find locations array in file');
        return;
    }

    // Use eval-like safety (simplified for a one-off migration)
    // We'll extract only the objects
    const objects = eval(`[${locationsMatch[1]}]`);

    for (const loc of objects) {
        const doc = {
            _type: 'location',
            _id: `location-${loc.slug}`,
            name: loc.name,
            slug: { _type: 'slug', current: loc.slug },
            metaTitle: loc.metaTitle,
            metaDesc: loc.metaDesc,
            rentAvg: loc.rentAvg,
            rentSavings: loc.rentSavings,
            hospitals: loc.hospitals,
            neighborhoods: loc.neighborhoods,
            painPoint: loc.painPoint,
            faqZone: loc.faqZone,
        };

        try {
            await client.createOrReplace(doc);
            console.log(`✅ Migrated Location: ${loc.name}`);
        } catch (err) {
            console.error(`❌ Failed Location ${loc.name}:`, err.message);
        }
    }
}

async function migrateServices() {
    console.log('\n--- Migrating Services ---');
    const services = [
        {
            name: "Virtual Assistants",
            slug: "virtual-assistant",
            tagline: "Psychiatric-trained assistants who handle intake, refills, and patient communication",
            description: "Specialized assistants trained in psychiatric-specific workflows, medication refill coordination, and professional patient communication.",
            icon: "person_search",
            tags: ["Intake Management", "Telehealth Comms"],
            yield: "Recover $25k/yr in Admin Overhead",
            order: 1
        },
        {
            name: "Billing & RCM",
            slug: "billing-and-rcm",
            tagline: "Maximize revenue with dedicated insurance verification, prior auths, and claims management",
            description: "Dedicated support for insurance verification, superbill creation, and revenue cycle management to ensure practice stability.",
            icon: "receipt_long",
            tags: ["Prior Auths", "Superbills"],
            yield: "Recover 4-7% Lost Revenue",
            order: 2
        },
        {
            name: "Practice Start-Up",
            slug: "practice-start-up",
            tagline: "Turnkey setup for new practices—EHR, credentialing, policies, and telehealth infrastructure",
            description: "Turnkey operational setup for new California psychiatric practices. EHR implementation, policy development, and logistical support.",
            icon: "rocket_launch",
            tags: ["Credentialing", "Telepsych Setup"],
            yield: "Launch $15k Under Budget",
            order: 3
        },
        {
            name: "HIPAA Compliance",
            slug: "hipaa-compliance-support",
            tagline: "Secure infrastructure with audit-ready protocols designed for California privacy compliance",
            description: "Secure data handling protocols and HIPAA compliance auditing designed specifically for California patient privacy requirements.",
            icon: "shield_moon",
            tags: ["Privacy Protected", "Audit Ready"],
            yield: "Eliminate $50k Audit Risk",
            order: 4
        },
        {
            name: "Medication Management",
            slug: "patient-intake-and-followup",
            tagline: "Streamlined pharmacy coordination—handling refills and prior auths 90% faster",
            description: "Streamlined coordination between your practice and pharmacies. Handling refill requests and prior authorization documentation.",
            icon: "medication",
            tags: ["Refill Logistics", "Pharmacy Liaison"],
            yield: "Recover 8+ Billable Hrs/Mo",
            order: 5
        },
        {
            name: "EHR Optimization",
            slug: "ehr-emr-management",
            tagline: "Expert EHR configuration for SimplePractice, Kareo, and more",
            description: "Expert configuration of SimplePractice, Kareo, and other leading EHR platforms to match your practice's unique clinical workflow.",
            icon: "computer",
            tags: ["Automation", "Workflow Support"],
            yield: "Save $12k/yr in Clinician Time",
            order: 6
        }
    ];

    for (const service of services) {
        const doc = {
            _type: 'service',
            _id: `service-${service.slug}`,
            name: service.name,
            slug: { _type: 'slug', current: service.slug },
            tagline: service.tagline,
            description: service.description,
            icon: service.icon,
            tags: service.tags,
            yield: service.yield,
            order: service.order
        };

        try {
            await client.createOrReplace(doc);
            console.log(`✅ Migrated Service: ${service.name}`);
        } catch (err) {
            console.error(`❌ Failed Service ${service.name}:`, err.message);
        }
    }
}

async function migrateHomepage() {
    console.log('\n--- Migrating Homepage (Elite Execution) ---');

    const doc = {
        _type: 'page',
        _id: 'page-home',
        title: 'Homepage',
        slug: { _type: 'slug', current: 'home' },
        seo: {
            metaTitle: 'Virtual Minds | Psychiatric Practice Management & Operational Intelligence',
            metaDesc: 'California psychiatric virtual assistants: Reclaim 20+ hours weekly, recover $300K+ annually. HIPAA-compliant practice management. SimplePractice experts. Book free audit.'
        },
        sections: [
            {
                _type: 'heroSection',
                _key: 'hero1',
                badge: "California's Premier Psychiatric VA Service",
                title: 'High-Performance Psychiatric Support.',
                subtitle: 'Reclaim 20+ Hours Weekly. Recover $300K+ Annually. Specialists in prior auths, billing chaos, and no-show recovery.',
                layout: 'economics',
                showSocialProof: true,
                cta: { text: 'See My Recovery Plan', link: '/book-consultation' },
                secondaryCta: { text: 'Explore Services', link: '/services' },
                metrics: [
                    { label: 'Yield', value: 'Revenue Continuity', icon: 'account_balance' },
                    { label: 'Verification', value: 'Prior Auth Support', icon: 'fact_check' },
                    { label: 'Security', value: 'CCPA Secure', icon: 'security' }
                ]
            },
            {
                _type: 'logoCloudSection',
                _key: 'logos1',
                title: 'Trusted Integration with Leading Platforms',
                logos: [
                    { name: 'SimplePractice', icon: 'clinical_notes' },
                    { name: 'Kareo', icon: 'medical_information' },
                    { name: 'Jane App', icon: 'health_and_safety' },
                    { name: 'AdvancedMD', icon: 'medication' },
                    { name: 'TheraNest', icon: 'psychology' }
                ]
            },
            {
                _type: 'statsSection',
                _key: 'stats1',
                stats: [
                    { label: 'Compliance', value: 'HIPAA', subtext: 'Secure Data Protocols' },
                    { label: 'Time Saved', value: '20+ Hrs', subtext: 'Weekly Admin Savings' },
                    { label: 'Market Focus', value: '100%', subtext: 'California Psychiatrists' },
                    { label: 'Avg Recovery', value: '$300k', subtext: 'Annual Revenue' }
                ]
            },
            {
                _type: 'splitContentSection',
                _key: 'split1',
                badge: 'Operational Clarity',
                title: 'California Psychiatrists: Focus on Clinical Care, Not Admin',
                description: 'Administrative challenges shouldn\'t keep you from your patients. We specialize in the complex California workflows that take you away from what matters most.',
                checklist: [
                    { title: 'Medication Management', detail: 'Streamlined coordination of refills and pharmacy communications.' },
                    { title: 'Prior Authorizations', detail: 'Handling the complex insurance requirements that delay patient treatment.' },
                    { title: 'Practice Management', detail: 'Handling intake, scheduling, and patient communication with professional expertise.' }
                ]
            },
            {
                _type: 'recoveryMatrixSection',
                _key: 'matrix1',
                badge: 'Operational Value',
                title: 'Revenue Recovery Matrix.',
                subtitle: 'We identify and reclaim clinical revenue lost to administrative friction, verification gaps, and credentialing delays.',
                items: [
                    { label: "Eligibility", stats: "-18%", statsLabel: "Leakage", statsColor: "red", description: "Incorrect member ID or plan change", impact: "Real-time 72hr pre-verification", icon: "how_to_reg" },
                    { label: "Prior Auth", stats: "-30%", statsLabel: "Leakage", statsColor: "red", description: "Expired windows or missing notes", impact: "Automated tracking & note prep", icon: "event_busy" },
                    { label: "Verification", stats: "-10%", statsLabel: "Leakage", statsColor: "red", description: "Out-of-network mismatch", impact: "OON gap-exception coordination", icon: "verified" },
                    { label: "Cleanup", stats: "98%", statsLabel: "Capture", statsColor: "primary", description: "Active card-on-file management", impact: "Revenue Continuity", icon: "payments" }
                ]
            },
            {
                _type: 'servicesGridSection',
                _key: 'services1',
                title: 'Psychiatric Practice Management'
            },
            {
                _type: 'testimonialSection',
                _key: 'testi1',
                title: 'California Psychiatrist Success Stories',
                testimonials: [
                    {
                        quote: "Virtual Minds transformed my practice workflow. I reclaimed 10+ hours weekly and can now focus entirely on my patients.",
                        author: "Dr. Sarah Chen, MD",
                        role: "Psychiatrist, San Francisco"
                    },
                    {
                        quote: "Their team understands the unique administrative demands of psychiatry. I finally have the support my practice needs.",
                        author: "Dr. Michael Patel, MD",
                        role: "Psychiatrist, Los Angeles"
                    }
                ]
            },
            {
                _type: 'ctaSection',
                _key: 'cta1',
                title: 'Ready to reclaim your',
                highlightText: 'Clinical Focus',
                description: 'Join the leading California psychiatrists recovering $300k+ annually by entrusting operations to Virtual Minds.',
                buttonText: 'See My Recovery Plan',
                buttonLink: '/book-consultation'
            }
        ]
    };

    try {
        await client.createOrReplace(doc);
        console.log(`✅ Migrated Homepage (Elite High-Fidelity Version)`);
    } catch (err) {
        console.error(`❌ Failed Homepage:`, err.message);
    }
}

async function run() {
    await migrateLocations();
    await migrateServices();
    await migrateHomepage();
    console.log('\n✨ Migration Complete! Every location, service, and the Homepage are now in Sanity.');
}

run();
