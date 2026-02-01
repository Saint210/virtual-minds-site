import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";
import KeyTakeaways from "@/components/blog/KeyTakeaways";

export const metadata = {
    title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
    description: "What psychiatrists actually earn in California private practice. Compare insurance vs. private pay, overhead costs, and 2026 income projections for MDs.",
    keywords: ["psychiatrist salary California private practice", "California psychiatry income models", "private pay vs insurance psychiatry", "psychiatric practice overhead California", "net income psychiatrist CA"],
    openGraph: {
        title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
        description: "What psychiatrists actually earn in California private practice. Insurance vs. private pay income breakdown.",
        url: "https://thevirtualminds.com/blog/psychiatrist-salary-california-private-practice",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/psychiatrist-salary-california.jpg",
                width: 1200,
                height: 900,
                alt: "Psychiatrist Salary in California Private Practice",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const salaryTakeaways = [
    {
        point: "Model Dictates Margin",
        detail: "A private-pay psychiatrist net income can be 2.3x higher than an insurance-only model with the identical patient volume."
    },
    {
        point: "The 'Admin Tax'",
        detail: "Unoptimized practices lose up to 15 hours weekly to documentation and prior auths, effectively slashing the MD's hourly rate."
    },
    {
        point: "Scaling via NPs",
        detail: "The path to $500k+ in California often involves building a group practice and netting from psychiatric NP productivity."
    },
    {
        point: "California Overhead Realities",
        detail: "Commercial rent and malpractice in CA are high-water marks; shared offices and telehealth are critical margin-protection strategies."
    }
];

const tableOfContents = [
    { id: "baseline", title: "What Employed Psychiatrists Earn" },
    { id: "insurance", title: "Insurance-Based Practice Income" },
    { id: "private-pay", title: "Private Pay Practice Income" },
    { id: "hybrid", title: "The Hybrid Model" },
    { id: "overhead", title: "California Overhead Costs" },
    { id: "scaling", title: "Scaling Beyond Solo" },
    { id: "maximize", title: "Maximize Your Take-Home" }
];

const relatedArticles = [
    {
        title: "How to Scale a Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Practice Growth"
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

export default function PsychiatristSalaryCA() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* PREVIEW-GRADE EXECUTIVE HERO */}
                <section className="relative pt-16 pb-20 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#D2691E]/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            {/* In-Hero Breadcrumbs */}
                            <nav className="flex items-center gap-3 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="text-slate-300">/</span>
                                <Link href="/blog" className="hover:text-primary transition-colors">Insights</Link>
                                <span className="text-slate-300">/</span>
                                <span className="text-trust-navy">Salary Benchmarking</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-bold mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                                <span className="tracking-widest uppercase">2026 Practice Growth Series</span>
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-trust-navy mb-6 leading-[0.95] tracking-tight">
                                Psychiatrist Salary in California: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                    Expectations vs. Reality.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-8 max-w-3xl">
                                The honest breakdown of what MDs actually earn in 2026—and why your
                                <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-1">clinical model</span>
                                determines your net wealth more than your hourly rate.
                            </p>

                            {/* PRACTICE ECONOMICS BRIEFING BAR */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Strategy Pillar</p>
                                    <p className="text-xl font-bold text-trust-navy">Revenue Optimization</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Projected Yield</p>
                                    <p className="text-xl font-bold text-trust-navy">$350k — $600k+</p>
                                </div>
                                <div className="hidden md:block h-12 w-px bg-slate-200" />
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Regulatory Authority</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-xl font-bold text-trust-navy italic">California State Privacy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex gap-12">
                            {/* Main Content */}
                            <div className="flex-1 min-w-0">
                                <article className="prose prose-lg prose-slate max-w-none">
                                    {/* STRATEGIC BRIEFING INTRODUCTION (60/40) */}
                                    <div className="flex flex-col lg:flex-row gap-12 my-16 items-start">
                                        <div className="lg:w-[60%] order-2 lg:order-1">
                                            <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-0 mb-6">Revenue Optimization Benchmarking</h2>
                                            <p className="text-xl text-slate-600 font-display leading-relaxed mb-6">
                                                You finished residency, passed your boards, and opened a private practice in California. Now comes the question everyone asks but few answer honestly: <span className="text-primary italic font-bold">&quot;How much will I actually make?&quot;</span>
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-0">
                                                The answer isn&apos;t a single number—it&apos;s a spectrum determined by your insurance mix, patient volume, and administrative overhead. By analyzing current 2026 benchmarks, we can map the realistic income projections for board-certified specialists in California&apos;s private sector.
                                            </p>
                                        </div>

                                        <div className="lg:w-[40%] order-1 lg:order-2 group w-full">
                                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5] bg-slate-50">
                                                <Image
                                                    src="/images/visual-intel-salary.png"
                                                    alt="Psychiatrist Salary in California Private Practice"
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-8">
                                        The answer isn't simple because "psychiatrist salary California private practice" varies wildly based on your practice model, payer mix, overhead structure, and how much unpaid administrative work you're willing to absorb. A solo psychiatrist accepting insurance in Los Angeles might gross $250,000 while netting $180,000 after overhead. Another psychiatrist 20 miles away, operating cash-pay only, could gross $450,000 and net $350,000 with similar patient volume.
                                    </p>

                                    <p className="mb-12">
                                        This guide breaks down the real numbers, the hidden costs, and the strategic decisions that determine whether you build a comfortable practice or a highly profitable one.
                                    </p>

                                    <h2 id="baseline" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The Baseline: What Employed Psychiatrists Earn in California</h2>
                                    <p className="mb-6">
                                        Before diving into private practice numbers, let's establish the baseline. Employed psychiatrists in California—working for hospital systems, community mental health centers, or large medical groups—typically earn between $280,000 and $350,000 annually, according to 2026 compensation surveys.
                                    </p>
                                    <p className="mb-6">
                                        This salary comes with benefits: health insurance, malpractice coverage, paid time off, retirement contributions, and zero administrative burden. You show up, see patients, document, and go home. No billing headaches, no marketing, no payroll management.
                                    </p>
                                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mb-8">
                                        <p className="italic text-trust-navy font-medium">
                                            "The employed model trades income ceiling for predictability. You'll never make $500,000, but you'll also never worry about a slow month."
                                        </p>
                                    </div>
                                    <p className="mb-6">
                                        Private practice offers higher earning potential but requires you to build and manage a business. The question is: how much higher, and is the additional complexity worth it?
                                    </p>

                                    <h2 id="insurance" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Insurance-Based Private Practice Income Model</h2>
                                    <p className="mb-6">
                                        Most psychiatrists starting private practice in California begin by accepting insurance. It provides immediate patient flow without requiring extensive marketing, and patients appreciate in-network rates.
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Reimbursement Rates: The California Reality</h3>
                                    <p className="mb-6">
                                        California insurance reimbursement for psychiatric services varies significantly by payer and region. Here are typical 2026 rates:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>Initial Psychiatric Evaluation (90791):</strong> $180-$280</li>
                                        <li><strong>Medication Management (99214 + 90833):</strong> $150-$220</li>
                                        <li><strong>Psychotherapy Session (90834):</strong> $120-$180</li>
                                        <li><strong>Medicare:</strong> Generally 20-30% lower than commercial rates</li>
                                        <li><strong>Medi-Cal:</strong> Significantly lower, often $80-$120 per session</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">The Math: A Realistic Income Projection</h3>
                                    <p className="mb-6">
                                        Let's model a solo psychiatrist seeing 25 patients per week (a sustainable full-time caseload):
                                    </p>
                                    <div className="bg-slate-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-sm mb-2"><strong>Weekly Schedule:</strong></p>
                                        <ul className="font-mono text-sm space-y-1 mb-4">
                                            <li>• 20 medication management sessions @ $180 avg = $3,600</li>
                                            <li>• 5 initial evaluations @ $230 avg = $1,150</li>
                                            <li>• <strong>Weekly Gross: $4,750</strong></li>
                                            <li>• <strong>Annual Gross (48 weeks): $228,000</strong></li>
                                        </ul>
                                        <p className="font-mono text-sm mb-2"><strong>Overhead (35-45% typical):</strong></p>
                                        <ul className="font-mono text-sm space-y-1 mb-4">
                                            <li>• Office rent: $2,000/month</li>
                                            <li>• EHR + billing software: $400/month</li>
                                            <li>• Malpractice insurance: $8,000/year</li>
                                            <li>• Marketing + admin: $1,500/month</li>
                                            <li>• <strong>Total Overhead: ~$90,000/year</strong></li>
                                        </ul>
                                        <p className="font-mono text-sm font-bold">Net Income: $138,000</p>
                                    </div>
                                    <p className="mb-6">
                                        Wait—that's significantly less than employed positions. What happened?
                                    </p>
                                    <p className="mb-6">
                                        The problem: this model assumes you're seeing patients 20 hours per week. In reality, you're spending another 10-15 hours on documentation, prior authorizations, billing follow-up, and practice management. Your effective hourly rate drops to $65-$80.
                                    </p>
                                    <p className="mb-6">
                                        To match employed salaries with insurance-based practice, you need either higher volume (30+ patients weekly, which risks burnout) or you need to optimize your payer mix and reduce administrative burden.
                                    </p>

                                    <h2 id="private-pay" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Private Pay (Cash-Based) Practice Income Model</h2>
                                    <p className="mb-6">
                                        Private pay practices charge patients directly without insurance involvement. This model eliminates billing complexity, prior authorizations, and reimbursement delays—but requires patients who can afford $300-$500 per session.
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">California Market Rates for Cash-Pay Psychiatry</h3>
                                    <p className="mb-6">
                                        Cash-pay rates in California metropolitan areas (2026):
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>Initial Evaluation:</strong> $400-$600</li>
                                        <li><strong>Medication Management (30 min):</strong> $250-$400</li>
                                        <li><strong>Therapy Session (45-50 min):</strong> $300-$450</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">The Math: Private Pay Income Projection</h3>
                                    <p className="mb-6">
                                        Same 25 patients per week, private pay rates:
                                    </p>
                                    <div className="bg-slate-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-sm mb-2"><strong>Weekly Schedule:</strong></p>
                                        <ul className="font-mono text-sm space-y-1 mb-4">
                                            <li>• 20 medication management sessions @ $325 avg = $6,500</li>
                                            <li>• 5 initial evaluations @ $500 avg = $2,500</li>
                                            <li>• <strong>Weekly Gross: $9,000</strong></li>
                                            <li>• <strong>Annual Gross (48 weeks): $432,000</strong></li>
                                        </ul>
                                        <p className="font-mono text-sm mb-2"><strong>Overhead (25-30% typical):</strong></p>
                                        <ul className="font-mono text-sm space-y-1 mb-4">
                                            <li>• Office rent: $2,500/month</li>
                                            <li>• EHR software: $200/month</li>
                                            <li>• Malpractice insurance: $8,000/year</li>
                                            <li>• Marketing: $2,000/month</li>
                                            <li>• <strong>Total Overhead: ~$115,000/year</strong></li>
                                        </ul>
                                        <p className="font-mono text-sm font-bold">Net Income: $317,000</p>
                                    </div>
                                    <p className="mb-6">
                                        The private pay model generates nearly 2.3x the net income of insurance-based practice with the same patient volume. Why? Higher rates, lower overhead percentage, and minimal administrative burden.
                                    </p>
                                    <p className="mb-6">
                                        The tradeoff: patient acquisition is harder. You need strong marketing, excellent reputation, and a target demographic that can afford out-of-pocket mental health care.
                                    </p>

                                    <h2 id="hybrid" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The Hybrid Model: Best of Both Worlds?</h2>
                                    <p className="mb-6">
                                        Many California psychiatrists operate hybrid practices: accepting select insurance plans (typically PPO plans with better reimbursement) while maintaining a portion of private pay patients.
                                    </p>
                                    <p className="mb-6">
                                        This approach provides patient flow stability from insurance while capturing higher margins on cash-pay patients. A typical split might be 60% insurance, 40% private pay.
                                    </p>
                                    <div className="bg-slate-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-sm mb-2"><strong>Hybrid Model Projection:</strong></p>
                                        <ul className="font-mono text-sm space-y-1 mb-4">
                                            <li>• 15 insurance patients/week @ $180 avg = $2,700</li>
                                            <li>• 10 private pay patients/week @ $325 avg = $3,250</li>
                                            <li>• <strong>Weekly Gross: $5,950</strong></li>
                                            <li>• <strong>Annual Gross (48 weeks): $285,600</strong></li>
                                            <li>• <strong>Overhead (~32%): $91,400</strong></li>
                                            <li>• <strong>Net Income: $194,200</strong></li>
                                        </ul>
                                    </div>
                                    <p className="mb-6">
                                        The hybrid model offers a middle path: better than pure insurance, more stable than pure private pay.
                                    </p>

                                    <h2 id="overhead" className="text-3xl font-bold text-trust-navy mt-12 mb-6">California-Specific Overhead Costs That Eat Your Margin</h2>
                                    <p className="mb-6">
                                        California presents unique cost challenges that impact practice profitability:
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Office Space: The Biggest Variable</h3>
                                    <p className="mb-6">
                                        Commercial office rent varies dramatically by region:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>San Francisco/Silicon Valley:</strong> $3,000-$5,000/month for suitable office space</li>
                                        <li><strong>Los Angeles (Westside):</strong> $2,500-$4,000/month</li>
                                        <li><strong>San Diego:</strong> $2,000-$3,500/month</li>
                                        <li><strong>Sacramento/Inland areas:</strong> $1,500-$2,500/month</li>
                                    </ul>
                                    <p className="mb-6">
                                        Telehealth reduces this burden significantly. Many psychiatrists now operate hybrid models with 1-2 days in-office and 3-4 days virtual, allowing shared office arrangements that cut rent costs by 60-70%.
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Malpractice Insurance</h3>
                                    <p className="mb-6">
                                        California malpractice rates for psychiatrists range from $7,000-$12,000 annually depending on coverage limits and claims history. This is higher than many states due to California's litigation environment.
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Administrative Support</h3>
                                    <p className="mb-6">
                                        Solo practitioners often underestimate the value of administrative help. A dedicated psychiatric virtual assistant handling scheduling, insurance verification, and billing follow-up costs $5,000+ monthly but can increase your clinical time by 10-15 hours weekly—easily generating $15,000-$30,000 in additional revenue.
                                    </p>

                                    <h2 id="scaling" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Scaling Beyond Solo: The Group Practice Income Multiplier</h2>
                                    <p className="mb-6">
                                        The highest-earning psychiatrists in California private practice aren't seeing the most patients—they're building group practices and earning from other clinicians' productivity.
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">The Economics of Hiring Psychiatric NPs</h3>
                                    <p className="mb-6">
                                        A psychiatric nurse practitioner in California earns $130,000-$160,000 annually. If that NP sees 100 patients monthly at $180 average reimbursement, they generate $216,000 in annual revenue.
                                    </p>
                                    <div className="bg-slate-100 p-6 rounded-xl mb-8">
                                        <p className="font-mono text-sm mb-2"><strong>Per-NP Profit Calculation:</strong></p>
                                        <ul className="font-mono text-sm space-y-1">
                                            <li>• Revenue: $216,000</li>
                                            <li>• Salary + benefits: $165,000</li>
                                            <li>• Allocated overhead: $25,000</li>
                                            <li>• <strong>Net profit per NP: $26,000-$35,000</strong></li>
                                        </ul>
                                    </div>
                                    <p className="mb-6">
                                        A psychiatrist operating a group practice with 3 NPs can add $75,000-$105,000 to their personal income while maintaining their own clinical schedule. This is how California practice owners reach $400,000-$600,000+ in total compensation.
                                    </p>

                                    <h2 id="maximize" className="text-3xl font-bold text-trust-navy mt-12 mb-6">How to Maximize Your Take-Home as a California Psychiatrist</h2>
                                    <p className="mb-6">
                                        Based on the models above, here's the strategic framework for maximizing income:
                                    </p>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Year 1-2: Build Your Foundation</h3>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li>Accept insurance to build patient volume quickly</li>
                                        <li>Focus on high-reimbursement PPO plans; avoid Medi-Cal unless mission-driven</li>
                                        <li>Invest in efficient EHR and billing systems from day one</li>
                                        <li>Target net income: $180,000-$220,000</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Year 3-4: Optimize Your Mix</h3>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li>Gradually increase private pay percentage to 30-40%</li>
                                        <li>Drop lowest-reimbursing insurance plans</li>
                                        <li>Hire part-time administrative support to reclaim 5-10 clinical hours weekly</li>
                                        <li>Target net income: $250,000-$300,000</li>
                                    </ul>

                                    <h3 className="text-2xl font-bold text-trust-navy mt-8 mb-4">Year 5+: Scale or Specialize</h3>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>Option A:</strong> Go fully private pay, raise rates, reduce volume, improve lifestyle (net $300,000-$400,000)</li>
                                        <li><strong>Option B:</strong> Build group practice, hire 2-3 NPs, earn from their productivity (net $350,000-$600,000+)</li>
                                        <li><strong>Option C:</strong> Develop niche expertise (e.g., treatment-resistant depression, perinatal psychiatry) commanding premium rates</li>
                                    </ul>

                                    <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 mb-8 mt-12">
                                        <h3 className="text-2xl font-bold text-trust-navy mb-4">The Bottom Line</h3>
                                        <p className="mb-4">
                                            California psychiatrists in private practice can earn anywhere from $180,000 (struggling insurance-only solo practice) to $600,000+ (optimized group practice or high-end private pay).
                                        </p>
                                        <p className="mb-0">
                                            The difference isn’t clinical skill—it’s business strategy. Your practice model, payer mix, and <Link href="/services" className="text-primary font-bold hover:underline">Practice Management Model</Link> determine your income more than your hourly rate ever will.
                                        </p>
                                    </div>

                                </article>
                            </div>

                            {/* Sidebar */}
                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/psychiatrist-salary-california-private-practice"
                                articleTitle="Psychiatrist Salary California Private Practice: 2026 Reality Check"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                            Ready to Optimize Your Practice Income?
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                            We help California psychiatrists transition from "busy but broke" to profitable and sustainable. Get a custom revenue optimization plan for your practice.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/book-consultation"
                                className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">account_balance</span>
                                Schedule Revenue Strategy Call
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
