"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCard {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    features: string[];
    clinicalImpact: string;
    icon: string;
    link: string;
    highlight?: boolean;
}

interface ServiceEcosystemProps {
    services: ServiceCard[];
}

export default function ServiceEcosystem({ services }: ServiceEcosystemProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const silos = [
        {
            title: "Clinical Operations Systems",
            subtitle: "Systems & Compliance",
            icon: "engineering",
            ids: ["SYS_AUDIT_02", "SYS_LAUNCH_04", "SYS_HIPAA_05", "SYS_EHR_07"],
        },
        {
            title: "Virtual Support Systems",
            subtitle: "Execution & Administration",
            icon: "support_agent",
            ids: ["SYS_CLINICAL_01", "SYS_RX_06", "SYS_ADMIN_08"],
        },
        {
            title: "Revenue Protection",
            subtitle: "Financial Stabilization",
            icon: "payments",
            ids: ["SYS_RCM_03"],
        },
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100 relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">The Ecosystem</span>
                    <h2 className="font-serif text-4xl text-trust-navy leading-tight mb-4">Operational <span className="italic text-slate-400">Services</span></h2>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Our services are organized into three integrated systems designed to stabilize, operate, and protect your practice.
                    </p>
                </motion.div>

                {silos.map((silo, sIdx) => (
                    <div key={sIdx} className="mb-24 last:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4"
                        >
                            <div className="size-10 rounded-lg bg-trust-navy/5 flex items-center justify-center text-trust-navy">
                                <span className="material-symbols-outlined">{silo.icon}</span>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-trust-navy">{silo.title}</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{silo.subtitle}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {services
                                .filter((s) => silo.ids.includes(s.id))
                                .map((service, idx) => (
                                    <motion.div key={idx} variants={itemVariants}>
                                        <Link
                                            href={service.link}
                                            className={`group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full
                        ${service.highlight
                                                    ? "border-2 border-primary/20 shadow-xl shadow-primary/5 ring-1 ring-primary/10"
                                                    : "border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="flex justify-between items-start mb-6 relative z-10">
                                                <div className={`size-12 rounded-xl flex items-center justify-center transition-colors duration-300 
                          ${service.highlight ? "bg-primary text-white" : "bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white"}`}>
                                                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                                </div>
                                                <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                    {service.id}
                                                </span>
                                            </div>
                                            <div className="mb-6 relative z-10">
                                                <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                                    {service.subtitle}
                                                </p>
                                                <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                                    {service.desc}
                                                </p>
                                            </div>
                                            <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                                    <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">Impact</span>
                                                </div>
                                                <p className="text-xs text-slate-500 font-medium">{service.clinicalImpact}</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
