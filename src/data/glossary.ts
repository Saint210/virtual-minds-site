export interface GlossaryTerm {
    term: string;
    slug: string;
    category: "Financial" | "Operational" | "Clinical" | "Compliance";
    definition: string;
    context: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Revenue Cycle Management (RCM)",
        slug: "revenue-cycle-management",
        category: "Financial",
        definition: "The financial process that facilities use to manage the administrative and clinical functions associated with claims processing, payment, and revenue generation.",
        context: "Crucial for private practice viability; poor RCM leads to 15-20% revenue leakage."
    },
    {
        term: "Prior Authorization",
        slug: "prior-authorization",
        category: "Financial",
        definition: "A utilization management process used by health insurance companies to determine if they will cover a prescribed procedure, service, or medication.",
        context: "The #1 administrative burden reported by psychiatrists, consuming 10+ hours of staff time weekly."
    },
    {
        term: "Credentialing",
        slug: "credentialing",
        category: "Compliance",
        definition: "The process of verifying that a healthcare provider is qualified to provide medical services, often required for insurance panel participation.",
        context: "Delays in credentialing are the primary bottleneck for new practice launches."
    },
    {
        term: "Superbill",
        slug: "superbill",
        category: "Financial",
        definition: "An itemized form used by healthcare providers that details services provided to a patient. It is the main source of data for creating a healthcare claim.",
        context: "Essential for out-of-network practices to allow patients to seek reimbursement."
    },
    {
        term: "Panel Coordination",
        slug: "panel-coordination",
        category: "Operational",
        definition: "The strategic management of a provider's patient load to ensure balanced scheduling, timely follow-ups, and capacity planning.",
        context: "Prevents provider burnout while maximizing practice revenue."
    },
    {
        term: "BAA (Business Associate Agreement)",
        slug: "business-associate-agreement",
        category: "Compliance",
        definition: "A contract between a HIPAA-covered entity and a HIPAA business associate (BA) that is used to protect personal health information (PHI) in accordance with HIPAA guidelines.",
        context: "Mandatory for any virtual assistant or software vendor handling patient data."
    },
    {
        term: "Intake Triage",
        slug: "intake-triage",
        category: "Clinical",
        definition: "The initial assessment process to determine the urgency and appropriateness of a patient referral before they are scheduled with a provider.",
        context: "Ensures psychiatrists only see patients that match their clinical focus and expertise."
    },
    {
        term: "EHR Optimization",
        slug: "ehr-optimization",
        category: "Operational",
        definition: "The process of refining Electronic Health Record software configurations to minimize clicks and streamline clinical documentation.",
        context: "Reduces 'pajama time'—documentation work done after clinic hours."
    },
    {
        term: "No-Show Protection",
        slug: "no-show-protection",
        category: "Financial",
        definition: "Administrative protocols including credit card holds and automated reminders designed to minimize appointment cancellations.",
        context: "Critical for maintaining billable hour density in private practice."
    },
    {
        term: "CMS-1500",
        slug: "cms-1500",
        category: "Financial",
        definition: "The standard paper claim form (or its electronic equivalent) used by healthcare professionals to bill Medicare and private insurers.",
        context: "Errors in this form are the leading cause of claim denials."
    },
    {
        term: "Psychiatric Mental Health Nurse Practitioner (PMHNP)",
        slug: "pmhnp",
        category: "Clinical",
        definition: "An advanced practice registered nurse trained to provide a wide range of mental health services, including medication management and therapy.",
        context: "Often requires specific collaborative agreement workflows in private practice."
    },
    {
        term: "Telehealth Parity",
        slug: "telehealth-parity",
        category: "Compliance",
        definition: "Laws requiring private insurers to reimburse for telemedicine services at the same rate as in-person services.",
        context: "A key revenue driver for modern hybrid practices in California."
    }
];
