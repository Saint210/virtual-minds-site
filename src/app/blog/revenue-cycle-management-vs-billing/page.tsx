import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
    title: "Revenue Cycle Management vs. Billing: What You Need | Virtual Minds",
    description: "Understand the critical difference between simple billing and true Revenue Cycle Management (RCM) to maximize your psychiatric practice's financial health.",
    openGraph: {
        title: "Revenue Cycle Management vs. Billing",
        description: "Maximize your psychiatric practice's financial health with RCM.",
        url: "https://thevirtualminds.com/blog/revenue-cycle-management-vs-billing",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.png",
                width: 1200,
                height: 900,
                alt: "RCM vs Billing",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const tableOfContents = [
    { id: "introduction", title: "Understanding the Difference" },
    { id: "hidden-leaks", title: "The Hidden Revenue Leaks" },
    { id: "comparison", title: "Billing vs. RCM Comparison" },
    { id: "implementation", title: "Implementing Full RCM" }
];

const relatedArticles = [
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "How to Scale a Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Practice Growth"
    },
    {
        title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
        slug: "psychiatrist-salary-california-private-practice",
        category: "Practice Growth"
    }
];

const comparison = [
    {
        feature: "Focus",
        billing: "Submitting claims",
        rcm: "Holistic financial health"
    },
    {
        feature: "Timing",
        billing: "Reactive (After appointment)",
        rcm: "Proactive (Starts at scheduling)"
    },
    {
        feature: "Denial Management",
        billing: "Resubmitting errors",
        rcm: "Preventing errors before submission"
    },
    {
        feature: "Patient Responsibility",
        billing: "Send invoice",
        rcm: "Transparent upfront verification"
    }
];

export default function RCMvsBilling() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: "RCM vs Billing" }
                ]}
            />

            <main className="flex-grow">
                <section className="bg-[#FAF8F3] py-20">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                            Revenue Cycle Management vs. Billing
                        </h1>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            Why "just sending bills" is costing your practice thousands in unclaimed revenue.
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
                                            alt="Revenue Cycle Management vs Billing"
                                            width={800}
                                            height={450}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Understanding the Difference</h2>
                                    <p className="mb-6">
                                        Many private practice psychiatrists use the terms "billing" and "Revenue Cycle Management" (RCM) interchangeably. However, treating them as synonyms is a costly mistake.
                                    </p>
                                    <p className="mb-6">
                                        <strong>Billing</strong> is a transactional clerical task. It involves filling out a form and hitting send.<br />
                                        <strong>RCM</strong> is a strategic financial process. It begins the moment a patient calls to schedule and doesn't end until the final dollar is in your bank account.
                                    </p>

                                    <h2 id="hidden-leaks" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The Hidden Revenue Leaks</h2>
                                    <p className="mb-6">
                                        Without a robust RCM strategy, practices often lose 5-10% of revenue to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 mb-8">
                                        <li>Unverified insurance eligibility prior to visits.</li>
                                        <li>Incorrect coding that leads to lower reimbursement rates.</li>
                                        <li>Write-offs of "small" balances that add up over time.</li>
                                    </ul>

                                    <h2 id="comparison" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Billing vs. RCM: Side-by-Side Comparison</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/revenue-cycle-management-vs-billing"
                                articleTitle="Revenue Cycle Management vs. Billing: What You Need"
                            />
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 mt-12">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-6 py-4 text-left font-bold">Aspect</th>
                                        <th className="px-6 py-4 text-left font-bold">Standard Billing</th>
                                        <th className="px-6 py-4 text-left font-bold">Strategic RCM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-bold text-trust-navy">{row.feature}</td>
                                            <td className="px-6 py-4 text-slate-600">{row.billing}</td>
                                            <td className="px-6 py-4 text-green-700 font-semibold">{row.rcm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Upgrade Your Financial Strategy</h2>
                        <p className="text-slate-600 mb-8">
                            Virtual Minds doesn't just do data entry. We partner with your billing team to implement full-cycle revenue management.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">trending_up</span>
                            Analyze My Revenue Cycle
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
