"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Location {
    slug: string;
    name: string;
    heroImage: string;
    heroImageAlt?: string;
    rentSavings: string;
    metaDesc: string;
}

interface LocationGridProps {
    locations: Location[];
}

export default function LocationGrid({ locations }: LocationGridProps) {
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

    return (
        <section className="pb-32 px-6 border-t border-slate-100 pt-24 bg-white relative">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Active Nodes</span>
                        <h2 className="font-serif text-4xl text-trust-navy leading-tight">Service <span className="italic text-slate-400">Territories</span></h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-px w-12 bg-slate-200"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{locations.length} Markets Activated</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {locations.map((location, idx) => (
                        <motion.div key={location.slug} variants={itemVariants}>
                            <Link
                                href={`/locations/${location.slug}`}
                                className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full"
                            >
                                {/* 1. DIGITAL MAP HEADER */}
                                <div className="relative h-48 w-full overflow-hidden bg-[#0F172A]">
                                    <Image
                                        src={location.heroImage}
                                        alt={location.heroImageAlt || location.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
                                    <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                                    <div className="absolute bottom-[-1rem] right-[-1rem] text-[8rem] font-serif font-bold text-white/10 leading-none select-none pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                                        {location.name.substring(0, 1)}
                                    </div>
                                </div>

                                {/* 2. CARD CONTENT */}
                                <div className="p-8 pb-6 flex flex-col flex-grow relative">
                                    <div className="absolute left-0 top-10 bottom-10 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-serif text-3xl text-trust-navy group-hover:text-primary transition-colors duration-300">
                                                {location.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="material-symbols-outlined text-slate-300 text-sm">location_on</span>
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">California Market</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors duration-300">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Avg Savings</p>
                                            <p className="text-lg font-bold text-emerald-600">{location.rentSavings}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Impact</p>
                                            <div className="flex items-center gap-1">
                                                <span className="text-trust-navy font-bold">15+ Hrs</span>
                                                <span className="text-[9px] text-slate-400">/wk</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity font-medium">
                                        {location.metaDesc}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group/footer">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-primary transition-colors">
                                                SYS_ID_{String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-trust-navy text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                            Market Data
                                            <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
