import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Psychiatry Practice Start-Up Services | California | Virtual Minds",
    description: "Comprehensive start-up support for California psychiatric practices. EHR implementation, contract negotiation, and HIPAA compliance setup.",
    keywords: ["psychiatry practice startup", "launch private practice California", "EHR implementation for psychiatrists", "medical contract review"],
};

export default function PracticeStartUpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Practice Start-Up" }
                ]}
            />
            <main className="flex-grow">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-40 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-3/5">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-xs mb-6 block italic">Phase 1: Foundation</span>
                                <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2A2A2A] leading-[1.1] mb-8">
                                    Launch Your Practice <br />
                                    <span className="text-[#D2691E]">Without the Friction.</span>
                                </h1>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                    Stop navigating the complexities of California medical compliance alone. We provide the turnkey blueprint and implementation support to take your practice from concept to opening day.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link
                                        href="/book-consultation"
                                        className="px-10 py-5 bg-[#D2691E] text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-[#B8860B] transition-all flex items-center justify-center gap-2"
                                    >
                                        Request Your Start-Up Blueprint
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-2/5 relative">
                                <div className="absolute -inset-4 bg-[#D2691E]/10 rounded-[40px] blur-3xl"></div>
                                <div className="relative p-2 bg-white rounded-[44px] shadow-2xl border border-slate-100 overflow-hidden">
                                    <div className="relative aspect-square w-full rounded-[36px] overflow-hidden">
                                        <Image
                                            src="/images/psychiatry-startup-mindmap.png"
                                            alt="Psychiatry Practice Strategic Mindmap"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HIGH-CONTRAST PAIN SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] p-12 md:p-20 rounded-[40px] text-white relative overflow-hidden shadow-2xl border border-white/5">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight !text-white" style={{ color: 'white' }}>
                                    <span className="text-[#FFFFFF]">The "First Year" Reality Check</span>
                                </h2>
                                <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                    50% of new mental health practices struggle within the first year not because of clinical ability, but because of <span className="text-[#D2691E] font-bold italic">administrative exhaustion.</span>
                                </p>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold text-white italic">The Start-Up Gaps:</h4>
                                        <ul className="space-y-4 text-slate-400">
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#D2691E] text-sm">warning</span>
                                                Manual, non-compliant intake forms
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#D2691E] text-sm">warning</span>
                                                EHR systems that hinder flow
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#D2691E] text-sm">warning</span>
                                                Poorly negotiated payer contracts
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center">
                                        <p className="text-sm font-bold uppercase tracking-widest text-[#D2691E] mb-2">Our Solution</p>
                                        <p className="text-lg text-white font-medium italic">We install the "Practice Operating System" so you start profitable on Day 1.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TURNKEY START-UP SERVICES */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-4">Turnkey Start-Up Services</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Specific to the unique regulatory landscape of California Psychiatry.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Review Current Plans",
                                    desc: "Feasibility analysis and business plan refinement based on modern psychiatric demand data.",
                                    icon: "edit_document"
                                },
                                {
                                    title: "Office Set-Up",
                                    desc: "Physical or virtual location logistics, leasing guidance, and digital environment security.",
                                    icon: "apartment"
                                },
                                {
                                    title: "EHR Implementation",
                                    desc: "Selection and custom configuration of SimplePractice, Kareo, or Jane App for your clinical workflow.",
                                    icon: "monitor_heart"
                                },
                                {
                                    title: "Contract Review",
                                    desc: "Expert support in negotiating with payers and vendors to ensure baseline financial success.",
                                    icon: "gavel"
                                },
                                {
                                    title: "HIPAA Compliance",
                                    desc: "Establishing secure policies, BAA management, and California-specific CMIA risk assessments.",
                                    icon: "shield_lock"
                                },
                                {
                                    title: "Experience Policies",
                                    desc: "Drafting intake procedures and patient experience protocols that reduce churn from the start.",
                                    icon: "history_edu"
                                }
                            ].map((service, i) => (
                                <div key={i} className="p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#131313] to-[#252525] py-32 relative overflow-hidden text-center">
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic !text-white leading-tight" style={{ color: 'white' }}>
                            <span className="text-[#FFFFFF]">Your Practice Starts Here.</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                            Ready to launch? Book your Strategy Audit to define your launch timeline and roadmap.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="px-12 py-5 bg-[#D2691E] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform inline-block"
                        >
                            Book Your Start-Up Strategy Call
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
