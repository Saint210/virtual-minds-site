"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProtectedEmail from "@/components/ui/ProtectedEmail";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

type Section = {
    num: string;
    title: string;
    content: React.ReactNode;
};

const sections: Section[] = [
    {
        num: "1",
        title: "Acceptance of Terms",
        content: <p>By accessing or using Virtual Minds services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>,
    },
    {
        num: "2",
        title: "Services Description",
        content: (
            <>
                <p className="mb-4">Virtual Minds provides specialized virtual assistant services for psychiatric practices, including:</p>
                <ul className="space-y-2">
                    {["Administrative and scheduling support", "Patient intake and follow-up coordination", "Billing assistance and superbills", "HIPAA compliance support", "Practice consulting services"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-blue-50 border-l-4 border-blue-400 text-blue-900 text-sm font-medium">
                    <strong>Important:</strong> Our virtual assistants are administrative support staff and do not provide clinical services or medical advice.
                </div>
            </>
        ),
    },
    {
        num: "3",
        title: "Client Responsibilities",
        content: (
            <ul className="space-y-2">
                {["Provide accurate and complete information for service delivery", "Maintain appropriate professional boundaries", "Ensure secure handling of patient information", "Provide timely feedback and communication", "Pay service fees as agreed", "Comply with all applicable laws and regulations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[14px]">check</span>
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        ),
    },
    {
        num: "4",
        title: "Payment Terms",
        content: (
            <>
                <p className="mb-4"><strong className="text-trust-navy">Fee Structure:</strong> Service fees are outlined in your service agreement and may include:</p>
                <ul className="space-y-2 mb-4">
                    {["Monthly retainer fees", "Hourly rates for additional services", "Setup or onboarding fees", "Custom pricing for specialized projects"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm font-medium space-y-1">
                    <p><strong>Payment Schedule:</strong> Fees are due monthly in advance unless otherwise specified in your service agreement.</p>
                    <p><strong>Late Payments:</strong> Late payments may incur interest at 1.5% per month.</p>
                </div>
            </>
        ),
    },
    {
        num: "5",
        title: "Confidentiality and HIPAA",
        content: (
            <>
                <p className="mb-4"><strong className="text-trust-navy">Business Associate Agreement:</strong> As required by HIPAA, we sign a BAA with all covered entities and agree to:</p>
                <ul className="space-y-2 mb-4">
                    {["Implement appropriate safeguards for PHI", "Report any security breaches promptly", "Ensure workforce compliance with HIPAA requirements", "Provide access to PHI for audit purposes", "Return or destroy PHI upon termination"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-slate-500"><strong className="text-trust-navy">Permitted Uses and Disclosures:</strong> We only use or disclose PHI as authorized by you or as required by law.</p>
            </>
        ),
    },
    {
        num: "6",
        title: "Intellectual Property",
        content: (
            <div className="space-y-4">
                <p><strong className="text-trust-navy">Virtual Minds Property:</strong> All materials, processes, software, and methodologies developed by Virtual Minds remain our exclusive property.</p>
                <p><strong className="text-trust-navy">Client Property:</strong> You retain all rights to your practice information, patient data, and proprietary systems. We only access what is necessary for service delivery.</p>
            </div>
        ),
    },
    {
        num: "7",
        title: "Service Level Agreement",
        content: (
            <div className="grid sm:grid-cols-3 gap-4">
                {[
                    { icon: "schedule", label: "Availability", value: "Mon–Fri, 9am–5pm PT" },
                    { icon: "chat", label: "Response Time", value: "Within 24 business hours" },
                    { icon: "cloud_done", label: "Uptime Target", value: "99.5% service availability" },
                ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="material-symbols-outlined text-primary mb-2 block">{item.icon}</span>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                        <p className="font-bold text-trust-navy text-sm">{item.value}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        num: "8",
        title: "Limitation of Liability",
        content: (
            <>
                <p className="mb-4"><strong className="text-trust-navy">Service Disclaimer:</strong> Our virtual assistants provide administrative support only and do not:</p>
                <ul className="space-y-2 mb-4">
                    {["Provide medical diagnosis or treatment", "Make clinical decisions", "Practice medicine or therapy"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">remove</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-slate-500 italic"><strong className="text-trust-navy not-italic">Liability Cap:</strong> Our total liability shall not exceed the fees paid by you in the six months preceding the claim.</p>
            </>
        ),
    },
    {
        num: "9",
        title: "Termination",
        content: (
            <div className="space-y-3">
                <p><strong className="text-trust-navy">By Either Party:</strong> Either party may terminate the service agreement with 30 days written notice.</p>
                <p><strong className="text-trust-navy">Immediate Termination:</strong> We may terminate immediately for material breach, non-payment, or illegal activities.</p>
                <p className="mb-2"><strong className="text-trust-navy">Post-Termination Obligations:</strong> Upon termination, we will:</p>
                <ul className="space-y-2">
                    {["Return all client property and information", "Provide final deliverables and reports", "Delete or return all PHI per HIPAA requirements"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
    {
        num: "10",
        title: "Dispute Resolution",
        content: (
            <div className="space-y-3">
                <p><strong className="text-trust-navy">Good Faith Negotiation:</strong> We will attempt to resolve disputes through good faith negotiation.</p>
                <p><strong className="text-trust-navy">Mediation:</strong> If negotiation fails, disputes will be resolved through binding mediation in California.</p>
                <p><strong className="text-trust-navy">Governing Law:</strong> These terms are governed by California law, excluding conflict of law principles.</p>
            </div>
        ),
    },
    {
        num: "11",
        title: "General Provisions",
        content: (
            <div className="space-y-3">
                <p><strong className="text-trust-navy">Entire Agreement:</strong> These terms constitute the entire agreement between you and Virtual Minds.</p>
                <p><strong className="text-trust-navy">Severability:</strong> If any provision is found unenforceable, the remainder remains in full effect.</p>
                <p><strong className="text-trust-navy">Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.</p>
                <p><strong className="text-trust-navy">Notices:</strong> All notices must be in writing and sent to the contact information in your service agreement.</p>
            </div>
        ),
    },
];

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            {/* PREMIUM HERO */}
            <section className="relative bg-trust-navy overflow-hidden pt-20 pb-16">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                    <motion.div {...fadeUp(0)}>
                        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-slate-300">Terms of Service</span>
                        </nav>
                    </motion.div>

                    <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">California Governing Law</span>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.15)} className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Service.</span>
                    </motion.h1>

                    <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-6 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500 text-base">calendar_today</span>
                            Effective: January 16, 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500 text-base">update</span>
                            Last Updated: January 16, 2026
                        </span>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow">
                <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">

                    {/* TOC */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-[2rem] border border-slate-200 p-8 mb-12 shadow-sm"
                    >
                        <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Contents</h2>
                        <div className="grid sm:grid-cols-2 gap-2">
                            {sections.map((s) => (
                                <a key={s.num} href={`#section-${s.num}`} className="text-sm font-semibold text-trust-navy hover:text-primary transition-colors flex items-center gap-2 group">
                                    <span className="size-5 rounded-full bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-primary transition-colors">{s.num}</span>
                                    {s.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* SECTIONS */}
                    <div className="space-y-8">
                        {sections.map((s, i) => (
                            <motion.div
                                key={s.num}
                                id={`section-${s.num}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: 0.04 * i }}
                                className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-10 shadow-sm"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{s.num}</span>
                                    <h2 className="font-serif text-2xl font-bold text-trust-navy leading-tight pt-1">{s.title}</h2>
                                </div>
                                <div className="text-slate-600 leading-relaxed space-y-3 pl-14">
                                    {s.content}
                                </div>
                            </motion.div>
                        ))}

                        {/* CONTACT CARD */}
                        <motion.div
                            id="section-12"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-trust-navy rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-black text-sm shrink-0">12</span>
                                    <h2 className="font-serif text-2xl font-bold text-white leading-tight pt-1">Contact Information</h2>
                                </div>
                                <div className="ml-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { label: "Company", value: "Virtual Minds" },
                                        { label: "Phone", value: "(310) 400-6266" },
                                        { label: "Address", value: "Los Angeles, CA" },
                                        { label: "Hours", value: "Mon–Fri, 9am–5pm PT" },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                                            <p className="text-white font-bold text-sm">{item.value}</p>
                                        </div>
                                    ))}
                                    <div className="bg-white/10 border border-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors sm:col-span-2 lg:col-span-4">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</p>
                                        <ProtectedEmail
                                            localPart="Cheryl"
                                            domain="thevirtualminds.com"
                                            buttonClassName="rounded-md bg-white/10 px-2 py-1 text-[11px] font-bold text-white hover:bg-white/20 transition-colors"
                                            revealedClassName="text-primary underline"
                                            label="Reveal Email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
