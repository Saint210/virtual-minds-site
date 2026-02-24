
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2023-05-03',
});

const blogPosts = [
    {
        title: "How to Start a Private Psychiatric Practice in California: The Cash-Pay Guide",
        excerpt: "Don't build a replica of the insurance anxiety you just left. Build a compliant, high-margin concierge practice. Legal structure, opting out of Medicare, and operational setup.",
        category: "Practice Launch",
        date: "February 2026",
        readTime: "15 min read",
        image: "practice-startup-blueprint-v4.png",
        slug: "how-to-start-private-psychiatric-practice-california-guide",
        featured: true
    },
    {
        title: "How to Choose a California Psychiatric Virtual Assistant Service",
        excerpt: "Complete guide to selecting the right virtual assistant service for your California psychiatric practice. Key factors, red flags, and decision framework.",
        category: "Selection Guide",
        date: "January 2026",
        readTime: "8 min read",
        image: "visual-intel-audit.png",
        slug: "how-to-choose-california-psychiatric-virtual-assistant",
        featured: true
    },
    {
        title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
        excerpt: "What psychiatrists actually earn in California private practice. Compare insurance vs. private pay models, overhead costs, and realistic income projections.",
        category: "Practice Growth",
        date: "January 2026",
        readTime: "12 min read",
        image: "visual-intel-salary.png",
        slug: "psychiatrist-salary-california-private-practice"
    },
    {
        title: "Operational Process Review for Mental Health Practices",
        excerpt: "Identify bottlenecks and streamline your psychiatric practice with a comprehensive operational process review.",
        category: "Practice Growth",
        date: "January 2026",
        readTime: "6 min read",
        image: "visual-intel-audit.png",
        slug: "operational-process-review-mental-health-practices"
    },
    {
        title: "How to Scale a Private Psychiatry Practice",
        excerpt: "Strategies for safe and sustainable practice growth. Moving from solo practitioner to group practice owner.",
        category: "Practice Growth",
        date: "January 2026",
        readTime: "8 min read",
        image: "visual-intel-scaling.png",
        slug: "how-to-scale-private-psychiatry-practice"
    },
    {
        title: "Revenue Cycle Management vs. Billing: What You Need",
        excerpt: "Understand the critical difference between simple billing and true Revenue Cycle Management (RCM).",
        category: "Billing",
        date: "January 2026",
        readTime: "7 min read",
        image: "visual-intel-rcm.png",
        slug: "revenue-cycle-management-vs-billing"
    },
    {
        title: "Optimizing Patient Workflow in Psychiatry",
        excerpt: "Streamline your patient journey from intake to follow-up. Learn how automation can enhance patient experience.",
        category: "Efficiency",
        date: "January 2026",
        readTime: "5 min read",
        image: "visual-intel-workflow.png",
        slug: "optimizing-patient-workflow-psychiatry"
    },
    {
        title: "Implementing Efficiency Models in Mental Health Clinics",
        excerpt: "Apply Lean principles to your mental health clinic. Reduce waste, improve patient flow, and increase satisfaction.",
        category: "Efficiency",
        date: "January 2026",
        readTime: "6 min read",
        image: "visual-intel-efficiency.png",
        slug: "implementing-efficiency-models-mental-health"
    },
    {
        title: "Top 10 EMR Systems for Psychiatry Practices Using Virtual Assistants",
        excerpt: "Comprehensive review of the best EMR systems that integrate seamlessly with virtual assistants for psychiatric practices.",
        category: "EMR Integration",
        date: "January 2026",
        readTime: "12 min read",
        image: "hero-dashboard.png",
        slug: "top-emr-systems-psychiatry-virtual-assistants"
    },
    {
        title: "HIPAA Compliance Guide for California Mental Health Offices",
        excerpt: "Essential HIPAA compliance requirements for California psychiatric practices using virtual assistants. Checklists and best practices.",
        category: "HIPAA Compliance",
        date: "January 2026",
        readTime: "10 min read",
        image: "hipaa-security-matrix.png",
        slug: "hipaa-compliance-guide-california-mental-health"
    },
    {
        title: "Cost Analysis: Psychiatric Virtual Assistant Services in California",
        excerpt: "Detailed breakdown of costs, ROI analysis, and value comparison for virtual assistant services in California psychiatric practices.",
        category: "Cost Analysis",
        date: "January 2026",
        readTime: "6 min read",
        image: "case-administrative-crisis.png",
        slug: "cost-analysis-psychiatric-virtual-assistant-california"
    },
    {
        title: "ROI Calculator for Virtual Assistant Investment in Psychiatry",
        excerpt: "Interactive guide to calculating return on investment for psychiatric virtual assistant services. Real examples and benchmarks.",
        category: "ROI Analysis",
        date: "January 2026",
        readTime: "7 min read",
        image: "case-launch-crisis.webp",
        slug: "roi-calculator-virtual-assistant-psychiatry"
    },
    {
        title: "California Medi-Cal Billing with Virtual Assistants",
        excerpt: "How virtual assistants help navigate Medi-Cal billing requirements and optimize reimbursement for psychiatric practices.",
        category: "Billing",
        date: "January 2026",
        readTime: "9 min read",
        image: "elite_psychiatry_hub.png",
        slug: "california-medical-billing-virtual-assistants"
    }
];

async function migrate() {
    console.log('Starting migration...');

    for (const post of blogPosts) {
        console.log(`Migrating: ${post.title}`);

        let imageAsset;
        const imagePath = path.join(process.cwd(), 'public', 'images', post.image);

        if (fs.existsSync(imagePath)) {
            console.log(`Uploading image: ${post.image}`);
            const imageBuffer = fs.readFileSync(imagePath);
            imageAsset = await client.assets.upload('image', imageBuffer, {
                filename: post.image,
            });
        }

        const doc = {
            _type: 'post',
            title: post.title,
            slug: {
                _type: 'slug',
                current: post.slug,
            },
            excerpt: post.excerpt,
            categories: [post.category],
            publishedAt: new Date(post.date).toISOString().includes('Invalid')
                ? new Date('2026-01-01').toISOString()
                : new Date(post.date).toISOString(),
            mainImage: imageAsset ? {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                },
            } : undefined,
            body: [
                {
                    _type: 'block',
                    children: [
                        {
                            _type: 'span',
                            text: 'This post was migrated from static data. Please add the full content here.',
                        },
                    ],
                    markDefs: [],
                    style: 'normal',
                },
            ],
        };

        try {
            await client.create(doc);
            console.log(`Successfully migrated: ${post.title}`);
        } catch (err) {
            console.error(`Failed to migrate: ${post.title}`, err.message);
        }
    }

    console.log('Migration complete!');
}

migrate();
