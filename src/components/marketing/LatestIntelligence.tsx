import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
    {
        title: "The 2026 Vetting Framework for California Psychiatric VAs",
        excerpt: "Why specialized support is replacing general staffing for board-certified specialists.",
        category: "Strategic Vetting",
        href: "/blog/how-to-choose-california-psychiatric-virtual-assistant",
        image: "/images/how-to-scale-psychiatry-practice.jpg",
        readTime: "8 min read"
    },
    {
        title: "Revenue Optimization for Private Pay Psychiatry",
        excerpt: "How to recover 15-20% of lost clinical revenue through operational intelligence.",
        category: "Yield Strategy",
        href: "/resources",
        image: "/images/psychiatrist-salary-california.jpg",
        readTime: "6 min read"
    },
    {
        title: "California Privacy Shield: Beyond HIPAA Compliance",
        excerpt: "Navigating state-specific medical privacy laws for psychiatric data integrity.",
        category: "Compliance",
        href: "/resources/hipaa-compliance-support",
        image: "/images/operational-process-review-mental-health.jpg",
        readTime: "10 min read"
    }
];

export default function LatestIntelligence() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* SEO BACKGROUND ELEMENT */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-4 py-1.5 text-[#D2691E] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-[16px]">menu_book</span>
                            Resource Pillar
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                            Strategic <span className="text-[#D2691E] italic">Intelligence.</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed">
                            Access our frameworks for psychiatric operational excellence, legislative compliance, and clinical yield optimization.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="group flex items-center gap-3 text-trust-navy font-bold hover:text-[#D2691E] transition-colors pb-2 border-b-2 border-slate-100 hover:border-[#D2691E]"
                    >
                        View Full Library
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.href}
                            className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-[#D2691E]/30 transition-all hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors z-10" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur-sm text-trust-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="w-full h-full relative">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    {article.readTime}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 group-hover:text-[#D2691E] transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-[#D2691E] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Read Analysis
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* TOPIC CLUSTER LINKS (SEO Pillar Interlinking) */}
                <div className="mt-20 pt-10 border-t border-slate-50">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 text-center md:text-left">Pillar Directories:</p>
                    <div className="flex flex-wrap gap-4 md:gap-12">
                        <Link href="/services" className="flex items-center gap-3 group">
                            <span className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">clinical_notes</span>
                            </span>
                            <span className="font-bold text-trust-navy hover:text-primary transition-colors">Core Services</span>
                        </Link>
                        <Link href="/locations" className="flex items-center gap-3 group">
                            <span className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">location_on</span>
                            </span>
                            <span className="font-bold text-trust-navy hover:text-primary transition-colors">California Locations</span>
                        </Link>
                        <Link href="/resources/case-studies" className="flex items-center gap-3 group">
                            <span className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">analytics</span>
                            </span>
                            <span className="font-bold text-trust-navy hover:text-primary transition-colors">Case Studies</span>
                        </Link>
                        <Link href="/faq" className="flex items-center gap-3 group">
                            <span className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">help</span>
                            </span>
                            <span className="font-bold text-trust-navy hover:text-primary transition-colors">Vetting FAQ</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
