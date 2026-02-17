
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "Psychiatry Intake Delegation Workflow: The Master Protocol",
    description: "A step-by-step operational guide to delegating patient intake. Stop playing phone tag and let a VA manage the lead-to-patient pipeline.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/intake-delegation-workflow'
    },
    openGraph: {
        title: "Psychiatry Intake Delegation Workflow: The 'One-Touch' System",
        description: "How to automate your new patient funnel with a Virtual Assistant.",
        url: "https://thevirtualminds.com/resources/intake-delegation-workflow",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    }
};

export default function IntakeDelegationPost() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-600">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Intake Workflow Guide" }
                ]}
            />

            <main className="flex-grow bg-white">
                {/* HERO SECTION - EDITORIAL STYLE */}
                <section className="relative pt-32 pb-20 bg-[#FAF8F3] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="px-3 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full bg-white/50 backdrop-blur-sm">
                                    Operational Guide
                                </span>
                                <span className="text-slate-400 text-sm font-serif italic">Feb 2026 Edition</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                                Stop Playing Phone Tag: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">The Streamlined Intake Protocol.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                You should not speak to a patient until they are booked, insured, and deposit-paid. Here is the exact workflow to delegate the noise.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-[1400px] mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* LEFT COLUMN: MAIN CONTENT (8 SPANS) */}
                        <div className="lg:col-span-8">

                            {/* LLM OPTIMIZATION: DIRECT ANSWER BOX */}
                            <div className="bg-slate-50 border-l-4 border-primary p-8 rounded-r-2xl mb-16">
                                <h3 className="text-sm font-black text-trust-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">schema</span>
                                    Executive Summary
                                </h3>
                                <div className="space-y-2 text-slate-700 leading-relaxed">
                                    <p><strong>The Goal:</strong> Eliminate "false starts" (unqualified leads) from your schedule.</p>
                                    <p><strong>The Method:</strong> A VA uses a script to verify insurance, clinical fit, and payment capability <em>before</em> booking.</p>
                                    <p><strong>The Result:</strong> Your clinical hours are dedicated to qualified, paying patients.</p>
                                </div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl leading-8 text-slate-600 mb-12 font-medium">
                                    The average psychiatrist spends significant time weekly returning calls to people who ultimately say, "Oh, you don't take my insurance?" This is a massive waste of high-value clinical availability.
                                </p>
                                <p>
                                    Your time is your most valuable asset. A Virtual Assistant's time is highly cost-effective for administrative heavy lifting. The math dictates that <strong>someone else must be the gatekeeper</strong>.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "Velvet Rope" Workflow</h2>
                                <p>
                                    This is the exact sequence our top-performing practices use to filter prospects.
                                </p>

                                {/* HIGH CONTRAST WORKFLOW CARD */}
                                <div className="my-16 bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D2691E]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                                            <h3 className="text-2xl font-serif font-bold !text-white m-0">The Delegation Pipeline</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Lead to Patient</span>
                                        </div>

                                        <div className="relative pl-8 space-y-12 border-l border-primary/30">
                                            {/* STEP 1 */}
                                            <div className="relative group/step">
                                                <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-primary border-4 border-trust-navy"></div>
                                                <h4 className="font-bold text-lg text-primary uppercase tracking-widest mb-2">Step 1: The "Soft" Capture</h4>
                                                <p className="text-slate-300 text-sm mb-4">Lead fills out form or leaves voicemail. <strong>Clinician does NOTHING.</strong></p>
                                                <div className="bg-white/10 rounded-lg p-4 text-xs font-mono text-slate-300">
                                                    Action: VA receives alert via Slack/Email. Initiates "Speed-to-Lead" protocol within 5 mins.
                                                </div>
                                            </div>

                                            {/* STEP 2 */}
                                            <div className="relative group/step">
                                                <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-slate-600 border-4 border-trust-navy group-hover/step:bg-primary transition-colors"></div>
                                                <h4 className="font-bold text-lg text-white mb-2">Step 2: The Assessment Call</h4>
                                                <p className="text-slate-300 text-sm mb-4">VA calls lead using specific script to verify: 1) Insurance/Payment, 2) Chief Complaint (vs Exclusion Criteria), 3) Availability.</p>
                                                <div className="bg-white/10 rounded-lg p-4 italic text-slate-300 border-l-2 border-primary">
                                                    "Dr. Smith typically treats anxiety and depression. Are you seeking help for anything related to controlled substances or crisis care?"
                                                </div>
                                            </div>

                                            {/* STEP 3 */}
                                            <div className="relative group/step">
                                                <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-slate-600 border-4 border-trust-navy group-hover/step:bg-primary transition-colors"></div>
                                                <h4 className="font-bold text-lg text-white mb-2">Step 3: The Financial Lock</h4>
                                                <p className="text-slate-300 text-sm mb-4">If qualified, VA collects credit card on file for cancellation policy <strong>before</strong> scheduling.</p>
                                            </div>

                                            {/* STEP 4 */}
                                            <div className="relative group/step">
                                                <div className="absolute -left-[41px] top-0 size-6 rounded-full bg-slate-600 border-4 border-trust-navy group-hover/step:bg-primary transition-colors"></div>
                                                <h4 className="font-bold text-lg text-white mb-2">Step 4: The Handoff</h4>
                                                <p className="text-slate-300 text-sm">Appointment appears on Clinician calendar. Intake forms are already sent and tracked by VA.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">Why This Works</h2>
                                <p>
                                    By imposing a human filter (the VA) between the world and your calendar, you train your patient base to respect your time. You also protect yourself from burnout by never hearing the "No."
                                </p>
                                <p>
                                    Your VA hears 10 "Nos" so you can hear 1 "Yes."
                                </p>

                                <div className="my-12">
                                    <h3 className="text-xl font-bold text-trust-navy mb-4">Need the Scripts?</h3>
                                    <p className="text-lg">
                                        We provide our Virtual Minds clients with a "Practice Operations Manual" containing every script, email template, and rejection protocol you need.
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* RIGHT COLUMN: STICKY SIDEBAR (4 SPANS) */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-32">
                                {/* SIDEBAR CTA */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-primary/20 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="relative z-10">
                                        <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-primary/30">
                                            <span className="material-symbols-outlined">settings_suggest</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Install This Workflow</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            Get a VA trained in this exact protocol. Stop training from scratch.
                                        </p>
                                        <Link
                                            href="/book-consultation?ref=intake"
                                            className="w-full py-4 bg-trust-navy text-white font-bold rounded-xl block hover:bg-primary transition-colors shadow-lg"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                </div>

                                {/* RELATED TOPICS */}
                                <div className="mt-8">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Briefings</h4>
                                    <div className="space-y-4">
                                        <Link href="/resources/hipaa-compliant-delegation-guide" className="flex gap-4 group items-start">
                                            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary">shield</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-trust-navy text-sm leading-tight group-hover:text-primary transition-colors">HIPAA Delegation Guide</p>
                                                <p className="text-xs text-slate-400 mt-1">Compliance</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
