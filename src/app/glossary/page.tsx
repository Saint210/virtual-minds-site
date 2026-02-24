"use client";

import { glossaryTerms, GlossaryTerm } from "@/data/glossary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

export default function GlossaryIndexPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = ["All", "Financial", "Operational", "Clinical", "Compliance"];

    const filteredTerms = activeCategory === "All"
        ? glossaryTerms
        : glossaryTerms.filter(term => term.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3] font-sans text-slate-600">
            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Technical Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
                    </div>

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Resources</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 bg-white border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-sm">menu_book</span>
                                Operational Dictionary
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                The Language of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                    Private Practice.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                                A curated index of the administrative, financial, and clinical terminology that defines modern psychiatric operations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FILTER & GRID */}
                <section className="pb-32 px-6 border-t border-slate-100 pt-12 bg-white relative min-h-[600px]">
                    <div className="max-w-[1400px] mx-auto">

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 mb-16">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all
                                        ${activeCategory === cat
                                            ? "bg-trust-navy text-white shadow-lg scale-105"
                                            : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-trust-navy"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Terms Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTerms.map((term, idx) => (
                                <div
                                    key={term.slug}
                                    className="group relative flex flex-col bg-white rounded-[2rem] p-8 border border-slate-200 transition-all duration-300 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                                >
                                    {/* Technical Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider
                                            ${term.category === "Financial" ? "bg-green-50 text-green-700 border border-green-100" :
                                                term.category === "Operational" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                                                    term.category === "Clinical" ? "bg-purple-50 text-purple-700 border border-purple-100" :
                                                        "bg-amber-50 text-amber-700 border border-amber-100"
                                            }`}>
                                            {term.category}
                                        </span>
                                        <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                            DEF_{String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6 relative z-10">
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {term.term}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                            {term.definition}
                                        </p>
                                    </div>

                                    {/* Context Footer */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:border-primary/20 transition-colors">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-primary text-sm">info</span>
                                                <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                                                    Clinical Context
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium italic">
                                                "{term.context}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Active State Indicator */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-24 bg-trust-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block p-4 rounded-2xl bg-white/10 text-primary mb-8 animate-pulse">
                            <span className="material-symbols-outlined text-4xl">school</span>
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Master Your Operations.</h2>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
                            Understanding the terminology is the first step. Building the systems to manage it is the next.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/book-consultation" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-[#B8860B] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                Audit My Practice
                            </Link>
                            <Link href="/services" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 hover:-translate-y-1">
                                View Solutions
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
