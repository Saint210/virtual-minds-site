import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "ADHD Psychiatrist Website Design | Virtual Minds",
    description: "AI-optimized website design for ADHD specialists. Rank on Google AND ChatGPT/Perplexity. Convert patients searching for medication management, diagnosis, and treatment.",
    keywords: "ADHD psychiatrist website, ADHD specialist marketing, adult ADHD SEO, AI optimized psychiatrist website, AIO, semantic SEO"
};

export default function ADHDWebsiteDesignPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Website Design", href: "/services/website-design" },
                    { label: "ADHD Specialists" }
                ]}
            />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-12 pb-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Specialty Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-[16px]">psychology</span>
                                ADHD Specialist Websites
                            </div>

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy leading-[0.95] tracking-tight mb-8">
                                Your ADHD Patients Are <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                    Googling Right Now.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                                When someone searches <strong>"ADHD psychiatrist near me"</strong> on Google—or asks ChatGPT <strong>"best ADHD doctor in Los Angeles"</strong>—your website should be the authoritative answer. We build AI-optimized, ADHD-specific sites that rank #1 on search engines AND LLMs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="/book-consultation"
                                    className="px-8 py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-xl shadow-xl shadow-[#D2691E]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">search</span>
                                    Get ADHD SEO Audit
                                </Link>
                                <Link
                                    href="#examples"
                                    className="px-8 py-4 bg-white border border-slate-200 text-trust-navy font-bold text-lg rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    See ADHD Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PATIENT PAIN POINTS */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The ADHD Patient Journey</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                Your Patients Search Differently.
                            </h2>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                ADHD patients don't search for "psychiatrist"—they search for solutions to specific problems. Your website needs to speak their language.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Pain Point 1 */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <div className="size-14 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                                    <span className="material-symbols-outlined text-3xl">work</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">"I Can't Focus at Work"</h3>
                                <p className="text-slate-500 leading-relaxed mb-4">
                                    Your patients are professionals Googling: <em>"adult ADHD diagnosis,"</em> <em>"executive dysfunction treatment,"</em> <em>"ADHD medication for professionals."</em>
                                </p>
                                <p className="text-sm font-bold text-primary">
                                    → Your site needs to rank for these exact terms.
                                </p>
                            </div>

                            {/* Pain Point 2 */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <div className="size-14 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                                    <span className="material-symbols-outlined text-3xl">medication</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">"I Need Medication Management"</h3>
                                <p className="text-slate-500 leading-relaxed mb-4">
                                    They're searching: <em>"Adderall prescriber near me,"</em> <em>"Vyvanse psychiatrist,"</em> <em>"stimulant medication doctor."</em>
                                </p>
                                <p className="text-sm font-bold text-primary">
                                    → Your homepage must say "Medication Management" above the fold.
                                </p>
                            </div>

                            {/* Pain Point 3 */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <div className="size-14 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                                    <span className="material-symbols-outlined text-3xl">schedule</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">"I Need Telehealth"</h3>
                                <p className="text-slate-500 leading-relaxed mb-4">
                                    ADHD patients value convenience: <em>"online ADHD psychiatrist,"</em> <em>"virtual ADHD diagnosis,"</em> <em>"telehealth Adderall prescription."</em>
                                </p>
                                <p className="text-sm font-bold text-primary">
                                    → Telehealth availability must be prominent.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT WE BUILD */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">ADHD-Specific Features</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                What Your ADHD Website Includes
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Feature 1: SEO + AIO */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-2xl">search</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-trust-navy mb-2">SEO + AI Optimization (AIO)</h3>
                                        <p className="text-slate-500">Rank on Google AND ChatGPT/Perplexity.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Adult ADHD diagnosis + [City]",
                                        "ADHD medication management",
                                        "Adderall prescriber near me",
                                        "Executive dysfunction treatment",
                                        "ADHD psychiatrist telehealth",
                                        "Semantic markup for LLM citations"
                                    ].map((keyword, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600">
                                            <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                            <span className="font-medium">{keyword}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Feature 2: Messaging */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-2xl">edit_note</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-trust-navy mb-2">Patient-Centered Copy</h3>
                                        <p className="text-slate-500">We write for the ADHD patient experience.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Emphasize 'Medication Management' (not just 'treatment')",
                                        "Highlight telehealth for busy professionals",
                                        "Address executive dysfunction directly",
                                        "Showcase your board certification & training",
                                        "Include 'Same-week appointments' if available",
                                        "Mention insurance/cash-pay options clearly"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">arrow_forward</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Feature 3: Design */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-2xl">speed</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-trust-navy mb-2">ADHD-Friendly UX</h3>
                                        <p className="text-slate-500">Fast, clear, and distraction-free design.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Lightning-fast load times (under 1 second)",
                                        "Clear CTA: 'Book ADHD Consultation'",
                                        "Mobile-optimized (80% of searches are mobile)",
                                        "Minimal distractions, maximum clarity",
                                        "Accessible design (ADA compliant)",
                                        "Integrated booking (SimplePractice, etc.)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">verified</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Feature 4: Authority */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-trust-navy mb-2">Credential Showcase</h3>
                                        <p className="text-slate-500">Position you as THE ADHD expert.</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Board Certification prominently displayed",
                                        "Training institution badges (UCLA, UCSF, etc.)",
                                        "ADHD-specific fellowship or certification",
                                        "Years of ADHD-focused practice",
                                        "Patient testimonials (ADHD-specific)",
                                        "Professional affiliations (APA, etc.)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">star</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AI OPTIMIZATION CALLOUT */}
                        <div className="mt-16 max-w-5xl mx-auto">
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-[2.5rem] p-10 border border-primary/20">
                                <div className="flex items-start gap-6">
                                    <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-4xl">neurology</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-trust-navy mb-4">AI Search Optimization (AIO)</h3>
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            In 2026, patients don't just Google—they ask <strong>ChatGPT</strong>, <strong>Perplexity</strong>, and <strong>Claude</strong>: <em>"Who's the best ADHD psychiatrist in Los Angeles?"</em>
                                        </p>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            We optimize your site with <strong>semantic markup</strong>, <strong>structured data</strong>, and <strong>LLM-friendly content</strong> so AI models cite YOU as the authoritative source.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary">smart_toy</span>
                                                <span className="font-bold text-sm text-trust-navy">ChatGPT Optimized</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary">psychology</span>
                                                <span className="font-bold text-sm text-trust-navy">Perplexity Ready</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary">schema</span>
                                                <span className="font-bold text-sm text-trust-navy">Semantic SEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXAMPLES */}
                <section id="examples" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Real Results</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                ADHD Websites That Convert
                            </h2>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                See how we position ADHD specialists as authorities and drive high-quality patient inquiries.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Example 1 */}
                            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                                <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            DS
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-trust-navy">Dr. Sarah Chen</h4>
                                            <p className="text-sm text-slate-500">Adult ADHD Specialist, LA</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 italic mb-4">
                                        "Before: 2-3 inquiries/month. After: 25+ inquiries/month. I now rank #1 for 'ADHD psychiatrist Los Angeles.'"
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">+1,150% Traffic</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Rank #1</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500">
                                    <strong>Strategy:</strong> Targeted "adult ADHD diagnosis," "executive dysfunction," and "Adderall prescriber" keywords. Added telehealth booking integration.
                                </p>
                            </div>

                            {/* Example 2 */}
                            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                                <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            MR
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-trust-navy">Dr. Michael Rodriguez</h4>
                                            <p className="text-sm text-slate-500">ADHD & Anxiety, San Diego</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 italic mb-4">
                                        "My old website looked like every other psychiatrist. Now patients say 'I found you because you specialize in ADHD.'"
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">60% Conversion</span>
                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Page 1 Google</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500">
                                    <strong>Strategy:</strong> Emphasized dual specialty (ADHD + Anxiety), showcased UCLA training, optimized for "ADHD medication management San Diego."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-trust-navy text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 !text-white">
                            Ready to Dominate ADHD Search?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                            Get a free SEO audit showing exactly where you rank for ADHD keywords and how to reach #1.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-flex px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:bg-primary-hover hover:scale-105 transition-all items-center gap-3"
                        >
                            <span className="material-symbols-outlined">analytics</span>
                            Get Free ADHD SEO Audit
                        </Link>
                        <p className="text-sm text-slate-400 mt-6">No credit card required • 15-minute consultation</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
