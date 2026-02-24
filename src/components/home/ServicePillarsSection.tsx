"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const servicePillars = [
    {
        title: "Clinical Operations Strategy",
        silo: "Silo 1: Ops",
        description: "Strategic consulting for psychiatrists requiring a stable, compliant, and scalable foundation.",
        image: "/images/practice-consulting-dashboard.png",
        accent: "text-accent",
        tags: ["Start-up Launch", "EHR Setup", "HIPAA Policy", "Contract Analysis"],
        link: "/services/practice-consulting",
        linkText: "View Consulting Scopes"
    },
    {
        title: "Virtual Support Systems",
        silo: "Silo 2: Support",
        description: "Administrative execution delivered with clinical nuance and absolute reliability.",
        image: "/images/psychiatrist-va-hero.png",
        accent: "text-white bg-trust-navy/90",
        tags: ["Intake Selection", "Patient Comms", "Doc Management", "Prior Auths"],
        link: "/services/virtual-assistant",
        linkText: "View Clinical Support",
        highlight: true
    },
    {
        title: "Revenue Protection Liaison",
        silo: "Silo 3: Revenue",
        description: "We coordinate with your biller to resolve issues. We do NOT submit claims.",
        image: "/images/visual-intel-rcm.png",
        accent: "text-primary",
        tags: ["Superbills", "Eligibility", "Biller Comms", "Cards & Payments"],
        link: "/services/billing-and-rcm",
        linkText: "View Liaison Scope"
    }
];

export default function ServicePillarsSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-[#FAF8F3]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl text-trust-navy mb-4"
                    >
                        Verified Service Pillars
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 max-w-2xl mx-auto"
                    >
                        Three pillars of support designed to scale your practice while minimizing liability.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-8"
                >
                    {servicePillars.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            variants={item}
                            className={`group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col ${pillar.highlight ? 'ring-1 ring-trust-navy/5 shadow-lg' : ''}`}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className={`absolute top-4 left-4 z-20 ${pillar.highlight ? 'bg-trust-navy/90' : 'bg-white/90'} backdrop-blur-md px-3 py-1 rounded-full border ${pillar.highlight ? 'border-white/20' : 'border-slate-200'} shadow-sm`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${pillar.highlight ? 'text-white' : pillar.accent}`}>
                                        {pillar.silo}
                                    </span>
                                </div>
                                <Image
                                    src={pillar.image}
                                    alt={pillar.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-serif text-2xl text-trust-navy mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {pillar.description}
                                    {pillar.link === "/services/billing-and-rcm" && (
                                        <span className="text-primary font-bold block mt-1">We do NOT submit claims.</span>
                                    )}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {pillar.tags.map((tag) => (
                                        <span key={tag} className={`${pillar.highlight ? 'bg-trust-navy/5 text-trust-navy' : 'bg-slate-50 text-slate-600'} px-3 py-1.5 rounded-lg text-xs font-bold border ${pillar.highlight ? 'border-trust-navy/5' : 'border-slate-100'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={pillar.link} className={`inline-flex items-center gap-2 ${pillar.highlight ? 'text-trust-navy' : pillar.accent.includes('text-accent') ? 'text-accent' : 'text-primary'} font-bold text-sm tracking-wide group/link hover:opacity-80 transition-colors`}>
                                    {pillar.linkText} <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
