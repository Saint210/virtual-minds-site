import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
    title: "Optimizing Patient Workflow in Psychiatry | Virtual Minds",
    description: "Streamline your patient journey from intake to follow-up. Learn how opportunities for automation can enhance patient experience and practice efficiency.",
    openGraph: {
        title: "Optimizing Patient Workflow in Psychiatry",
        description: "Streamline your patient journey from intake to follow-up.",
        url: "https://thevirtualminds.com/blog/optimizing-patient-workflow-psychiatry",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.png",
                width: 1200,
                height: 900,
                alt: "Patient Workflow Optimization",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const tableOfContents = [
    { id: "introduction", title: "Why Workflow Matters" },
    { id: "pillars", title: "4 Pillars of Streamlined Workflow" },
    { id: "digital-intake", title: "Digital Intake Systems" },
    { id: "automation", title: "Automation Opportunities" }
];

const relatedArticles = [
    {
        title: "Implementing Efficiency Models in Mental Health Clinics",
        slug: "implementing-efficiency-models-mental-health",
        category: "Efficiency"
    },
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "How to Scale a Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Practice Growth"
    }
];

const steps = [
    {
        step: "1. Digital Intake",
        description: "Replace PDF attachments with secure, mobile-friendly digital forms that sync directly to your EHR.",
    },
    {
        step: "2. Automated Scheduling",
        description: "Allow patients to book and reschedule via a controlled portal, reducing phone tag.",
    },
    {
        step: "3. Pre-Visit Prep",
        description: "Automate reminders and pre-visit questionnaires to ensure sessions start on time.",
    },
    {
        step: "4. Follow-Up Loops",
        description: "Trigger automated check-ins and refill reminders based on appointment outcomes.",
    },
];

export default function PatientWorkflowOptimization() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: "Patient Workflow Optimization" }
                ]}
            />

            <main className="flex-grow">
                <section className="bg-[#FAF8F3] py-20">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                            Optimizing Patient Workflow in Psychiatry
                        </h1>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            Create a seamless experience for your patients while reducing the administrative load on your team.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex gap-12">
                            <div className="flex-1 min-w-0">
                                <article className="prose prose-lg prose-slate max-w-none">
                                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src="/images/hero-new.png"
                                            alt="Optimizing Patient Workflow in Psychiatry"
                                            width={800}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Why Workflow Optimization Matters</h2>
                                    <p className="mb-6">
                                        A "patient workflow" encompasses every interaction a patient has with your practice, from the moment they land on your website to their ongoing treatment plan. When this workflow is disjointed, patients feel neglected and staff feel overwhelmed.
                                    </p>
                                    <p className="mb-8">
                                        Optimization isn't just about speed; it's about <strong>clarity and consistency</strong>. By standardizing these steps, you minimize errors and maximize the therapeutic alliance. This is a key component of <Link href="/blog/implementing-efficiency-models-mental-health" className="text-primary hover:underline">implementing efficiency models</Link> in your clinic.
                                    </p>

                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
                                        <h3 className="text-2xl font-bold text-trust-navy mb-4">The Golden Rule of Workflow</h3>
                                        <p className="italic text-lg mb-0">"Never ask a human to do what a computer can do better. Never ask a computer to do what only a human can do."</p>
                                    </div>

                                    <h2 id="pillars" className="text-3xl font-bold text-trust-navy mt-12 mb-6">4 Pillars of a Streamlined Workflow</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/optimizing-patient-workflow-psychiatry"
                                articleTitle="Optimizing Patient Workflow in Psychiatry"
                            />
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 mt-12 bg-slate-50 py-12 rounded-2xl">
                        <h3 className="font-display text-2xl font-bold text-trust-navy mb-8 text-center">
                            4 Key Steps to Implement
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {steps.map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.step}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Need a Workflow Makeover?</h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            We specialize in redesigning patient journeys for California psychiatric practices. Let's build a system that works for you.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">build</span>
                            Design My Workflow
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
