import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
    title: "Implementing Efficiency Models in Mental Health Clinics | Virtual Minds",
    description: "Apply Lean principles to your mental health clinic. Reduce waste, improve patient flow, and increase staff satisfaction with proven efficiency models.",
    openGraph: {
        title: "Efficiency Models in Mental Health Clinics",
        description: "Apply Lean principles to reduce waste and improve patient flow.",
        url: "https://thevirtualminds.com/blog/implementing-efficiency-models-mental-health",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.png",
                width: 1200,
                height: 900,
                alt: "Clinic Efficiency",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const tableOfContents = [
    { id: "lean-clinic", title: "The Lean Clinic Concept" },
    { id: "deadly-wastes", title: "The 4 Deadly Wastes" },
    { id: "streamline", title: "Streamline Operations" }
];

const relatedArticles = [
    {
        title: "Optimizing Patient Workflow in Psychiatry",
        slug: "optimizing-patient-workflow-psychiatry",
        category: "Workflow"
    },
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "Revenue Cycle Management vs. Billing",
        slug: "revenue-cycle-management-vs-billing",
        category: "Billing"
    }
];

const wastes = [
    { title: "Waiting", text: "Patients waiting for providers, or providers waiting for intake info." },
    { title: "Defects", text: "Billing errors requiring rework or incomplete charts." },
    { title: "Motion", text: "Clicking through 10 screens to find one piece of data." },
    { title: "Underutilized Talent", text: "MDs doing data entry instead of clinical work." },
];

export default function EfficiencyModels() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: "Clinic Efficiency Models" }
                ]}
            />

            <main className="flex-grow">
                <section className="bg-[#FAF8F3] py-20">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                            Implementing Efficiency Models in Mental Health Clinics
                        </h1>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            How adopting "Lean" principles can transform chaos into calm for your staff and patients.
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
                                            alt="Implementing Efficiency Models in Mental Health"
                                            width={800}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <h2 id="lean-clinic" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The "Lean" Clinic</h2>
                                    <p className="mb-6">
                                        Efficiency isn't about working harder; it's about removing friction. In manufacturing, "Lean" methodology removes physical waste. In mental health, we focus on removing <strong>cognitive waste</strong>.
                                    </p>
                                    <p className="mb-6">
                                        Every time a clinician has to hunt for a form, correct a billing code, or search for a patient link, they lose focus. This "context switching" is the enemy of quality care.
                                    </p>

                                    <h2 id="deadly-wastes" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The 4 Deadly Wastes in Clinics</h2>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-8">
                                        <ul className="space-y-4">
                                            {wastes.map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                    <div>
                                                        <strong className="text-trust-navy">{item.title}:</strong>
                                                        <span className="text-slate-600 ml-1">{item.text}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h2 id="streamline" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Streamline Your Operations</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/implementing-efficiency-models-mental-health"
                                articleTitle="Implementing Efficiency Models in Mental Health Clinics"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Ready to Optimize?</h2>
                        <p className="text-slate-600 mb-8">
                            Let Virtual Minds implement these efficiency models for you. We build the systems so you can focus on the patients.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">speed</span>
                            Boost Clinic Efficiency
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
