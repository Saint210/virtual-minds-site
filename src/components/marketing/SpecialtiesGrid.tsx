"use client";

import Link from "next/link";
import Image from "next/image";
import specialties from "@/data/specialties.json";

export default function SpecialtiesHistory() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <span className="material-symbols-outlined text-[400px] text-trust-navy translate-x-1/2">clinical_notes</span>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                            Clinical Specialization
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl font-bold text-trust-navy leading-[1.1] mb-6 italic">
                            Bespoke Support for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#B8860B]">
                                Every Niche.
                            </span>
                        </h2>
                        <p className="text-xl text-slate-500 font-medium font-sans">
                            A general assistant doesn't understand the nuances of California psychiatric law.
                            Our systems are built for your specific medical subspecialty.
                        </p>
                    </div>
                    <Link href="/services" className="px-8 py-4 border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-primary hover:text-primary transition-all flex items-center gap-2 mb-2">
                        View All Services
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.slice(0, 6).map((specialty) => {
                        const iconMap: Record<string, string> = {
                            "psychiatrists": "clinical_notes",
                            "womens-mental-health": "female",
                            "child-adolescent-psychiatry": "family_restroom",
                            "integrative-psychiatry": "science",
                            "adhd-neuropsychiatry": "neurology",
                            "private-practice-launch": "rocket_launch"
                        };

                        return (
                            <div
                                key={specialty.slug}
                                className="group relative bg-[#FAF8F3]/50 rounded-[2.5rem] border border-slate-100 p-10 hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Card Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="size-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <span className="material-symbols-outlined text-3xl">
                                            {iconMap[specialty.slug] || "medical_information"}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        {specialty.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                                        {specialty.metaDescription.split('.')[0]}. Optimized for California patient law and specialized intake logic.
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {specialty.vaServices.slice(0, 3).map((service, i) => (
                                            <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-trust-navy transition-colors">
                                                <span className="size-1 rounded-full bg-primary" />
                                                {service}
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/specialties/${specialty.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-trust-navy group-hover:text-primary transition-colors"
                                    >
                                        Explore Support Matrix
                                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
