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

const sections = [
    {
        num: "1",
        title: "Information We Collect",
        content: (
            <>
                <p className="mb-4">Virtual Minds collects only information necessary for providing virtual assistant services to psychiatric practices. This includes:</p>
                <ul className="space-y-2">
                    {["Practice contact information and basic details", "Service requirements and preferences", "Professional credentials and qualifications", "Communication related to service delivery"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm font-medium">
                    We <strong>never</strong> collect patient Protected Health Information (PHI) without explicit authorization.
                </div>
            </>
        ),
    },
    {
        num: "2",
        title: "How We Use Your Information",
        content: (
            <ul className="space-y-2">
                {["Provide virtual assistant services", "Coordinate scheduling and administrative tasks", "Improve service quality and delivery", "Communicate about service updates", "Ensure HIPAA compliance"].map((item, i) => (
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
        num: "3",
        title: "Data Security & HIPAA Compliance",
        content: (
            <>
                <p className="mb-4"><strong className="text-trust-navy">Virtual Minds is a HIPAA Business Associate.</strong> We implement appropriate administrative, physical, and technical safeguards to protect your information:</p>
                <ul className="space-y-2">
                    {["Encryption of all electronic PHI", "Secure access controls and authentication", "Regular security audits and assessments", "Employee HIPAA training and certification", "Breach notification procedures"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        num: "4",
        title: "Information Sharing",
        content: (
            <>
                <p className="mb-4">We do not sell, rent, or trade your personal information. We may share information only:</p>
                <ul className="space-y-2">
                    {["With your explicit consent", "As required by law (e.g., HIPAA-mandated disclosures)", "With service providers necessary for delivery", "To protect our legal rights and prevent fraud"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        num: "5",
        title: "Data Retention",
        content: <p>We retain information only as long as necessary to provide services and comply with legal requirements. When retention is no longer needed, we securely destroy or delete the information.</p>,
    },
    {
        num: "6",
        title: "Your Rights",
        content: (
            <ul className="space-y-2">
                {["Access and update your personal information", "Request deletion of your information (where legally permitted)", "Opt-out of non-essential communications", "Request a copy of our privacy practices", "File a complaint with our privacy officer"].map((item, i) => (
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
        num: "7",
        title: "California Privacy Rights",
        content: (
            <>
                <p className="mb-4"><strong className="text-trust-navy">California Residents:</strong> Under the California Consumer Privacy Act (CCPA), you have additional rights regarding your personal information.</p>
                <ul className="space-y-2">
                    {["Right to know what personal information is collected", "Right to delete personal information", "Right to opt-out of sale or sharing", "Right to non-discrimination for exercising privacy rights"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">gavel</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        num: "9",
        title: "Policy Updates",
        content: (
            <>
                <p className="mb-4">We may update this privacy policy periodically. We will notify you of significant changes by:</p>
                <ul className="space-y-2">
                    {["Email notification", "Website posting", "Direct communication for major changes"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-sm text-slate-500 italic">Continued use of our services constitutes acceptance of any updated policy.</p>
            </>
        ),
    },
];

export default function PrivacyPage() {
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
                            <span className="text-slate-300">Privacy Policy</span>
                        </nav>
                    </motion.div>

                    <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">HIPAA Business Associate</span>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.15)} className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Policy.</span>
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
                                transition={{ duration: 0.6, delay: 0.05 * i }}
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
                            id="section-8"
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
                                    <span className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-black text-sm shrink-0">8</span>
                                    <h2 className="font-serif text-2xl font-bold text-white leading-tight pt-1">Contact Us</h2>
                                </div>
                                <p className="text-slate-300 mb-6 pl-14">For privacy questions, concerns, or to exercise your rights, please contact our Privacy Officer:</p>
                                <div className="ml-14 grid sm:grid-cols-3 gap-4">
                                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</p>
                                        <ProtectedEmail
                                            localPart="Cheryl"
                                            domain="thevirtualminds.com"
                                            buttonClassName="rounded-md bg-white/10 px-2 py-1 text-[11px] font-bold text-white hover:bg-white/20 transition-colors"
                                            revealedClassName="text-primary underline"
                                            label="Reveal Email"
                                        />
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone</p>
                                        <p className="text-white font-bold">(310) 400-6266</p>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Response Time</p>
                                        <p className="text-white font-bold">Within 30 days</p>
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
