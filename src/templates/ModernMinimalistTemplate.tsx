import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

/**
 * TEMPLATE: Modern Minimalist
 * 
 * Design Philosophy:
 * - Abundant whitespace and breathing room
 * - Scandinavian aesthetic (clean, simple, functional)
 * - Soft, muted color palette (Sage, Sand, Charcoal)
 * - Sans-serif typography throughout
 * - Subtle interactions and micro-animations
 * - Perfect for: Wellness-focused practices, younger psychiatrists, holistic approaches
 */

export default function ModernMinimalistTemplate() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAF9]">
            <Navbar />
            <main className="flex-grow">

                {/* 
          HERO: Centered Minimalist
          - Lots of whitespace
          - Simple, direct messaging
          - Soft colors
        */}
                <section className="relative py-32 md:py-40">
                    <div className="max-w-4xl mx-auto px-6 text-center">

                        {/* Subtle decorative element */}
                        <div className="w-16 h-1 bg-[#9CAF88] mx-auto mb-8"></div>

                        <h1 className="text-4xl md:text-6xl font-light text-[#2A2A2A] mb-8 leading-tight tracking-tight">
                            Mental wellness,<br />
                            <span className="font-normal">simplified.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                            Compassionate psychiatric care that meets you where you are.
                            No judgment, no rush—just thoughtful, evidence-based support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-8 py-4 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white font-medium rounded-full transition-all hover:shadow-lg"
                            >
                                Book a Session
                            </Link>
                            <Link
                                href="/approach"
                                className="px-8 py-4 bg-transparent border border-slate-300 hover:border-[#2A2A2A] text-[#2A2A2A] font-medium rounded-full transition-all"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Minimal trust indicator */}
                        <p className="mt-12 text-sm text-slate-400 font-light">
                            Accepting new patients • Telehealth available
                        </p>
                    </div>
                </section>

                {/* 
          APPROACH: Simple 3-Column
          - Icons optional (can be just text)
          - Minimal borders/shadows
        */}
                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-[#2A2A2A] mb-4">
                                How I work
                            </h2>
                            <div className="w-12 h-0.5 bg-[#9CAF88] mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">

                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#9CAF88]/10 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Listen First
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Your story matters. We start by understanding your unique experience, not fitting you into a diagnosis.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#9CAF88]/10 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl">🔬</span>
                                </div>
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Evidence-Based
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Treatment grounded in research, but flexible enough to adapt to what works for you.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[#9CAF88]/10 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Sustainable Change
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-light">
                                    Building long-term wellness, not quick fixes. Progress over perfection.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 
          SERVICES: Minimal Cards
          - No heavy shadows
          - Subtle hover states
        */}
                <section className="py-20 bg-[#FAFAF9]">
                    <div className="max-w-5xl mx-auto px-6">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-[#2A2A2A] mb-4">
                                What I treat
                            </h2>
                            <div className="w-12 h-0.5 bg-[#9CAF88] mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#9CAF88] transition-all">
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Anxiety & Stress
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    Generalized anxiety, panic disorder, social anxiety, and stress management.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#9CAF88] transition-all">
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Depression
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    Major depression, persistent depressive disorder, seasonal affective disorder.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#9CAF88] transition-all">
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    ADHD
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    Adult ADHD assessment and treatment, executive function support.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#9CAF88] transition-all">
                                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                                    Life Transitions
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    Career changes, relationship challenges, identity exploration.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 
          ABOUT: Simple Bio Section
          - Personal, approachable
          - Photo placeholder
        */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Photo */}
                            <div className="order-2 md:order-1">
                                <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center">
                                    <span className="text-slate-400 font-light">[Professional Photo]</span>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-light text-[#2A2A2A] mb-6">
                                    About me
                                </h2>
                                <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                                    <p>
                                        I'm a board-certified psychiatrist who believes mental health care should feel
                                        human, not clinical. After years in traditional settings, I started this practice
                                        to create the kind of care I'd want for myself.
                                    </p>
                                    <p>
                                        My approach blends medication management with lifestyle medicine, therapy referrals,
                                        and a lot of listening. I work with adults navigating anxiety, depression, ADHD,
                                        and major life transitions.
                                    </p>
                                    <p>
                                        Outside the office, you'll find me hiking, reading neuroscience papers (for fun),
                                        and advocating for mental health accessibility.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center gap-2 text-[#2A2A2A] font-medium hover:gap-3 transition-all"
                                    >
                                        Full bio
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 
          FAQ: Accordion Style (Minimal)
        */}
                <section className="py-20 bg-[#FAFAF9]">
                    <div className="max-w-3xl mx-auto px-6">

                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-light text-[#2A2A2A] mb-4">
                                Common questions
                            </h2>
                            <div className="w-12 h-0.5 bg-[#9CAF88] mx-auto"></div>
                        </div>

                        <div className="space-y-4">

                            <details className="group bg-white rounded-xl border border-slate-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-[#2A2A2A]">
                                    Do you accept insurance?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 font-light">
                                    I'm out-of-network with most insurance plans, but I provide superbills for reimbursement.
                                    Many patients find they get 50-80% back from their insurance.
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-[#2A2A2A]">
                                    What's your availability?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 font-light">
                                    I typically have openings within 2-3 weeks. I offer both in-person and telehealth appointments
                                    on weekdays and some Saturdays.
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl border border-slate-100 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-[#2A2A2A]">
                                    How long are sessions?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 font-light">
                                    Initial consultations are 60 minutes. Follow-ups are typically 30 minutes, though we can
                                    schedule longer if needed.
                                </div>
                            </details>

                        </div>
                    </div>
                </section>

                {/* 
          CTA: Minimal & Calm
        */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-light text-[#2A2A2A] mb-6">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-slate-600 font-light mb-8 max-w-xl mx-auto">
                            Book a consultation to see if we're a good fit. No pressure, just conversation.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-block px-10 py-4 bg-[#2A2A2A] hover:bg-[#1A1A1A] text-white font-medium rounded-full transition-all hover:shadow-lg"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
