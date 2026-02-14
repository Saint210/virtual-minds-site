import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import React from 'react';

interface RelatedTerm {
    term: string;
    slug: string;
}

interface GlossaryTemplateProps {
    term: string;
    pronunciation?: string;
    definition: {
        short: string;
        extended: React.ReactNode;
    };
    context: {
        title: string; // e.g. "Why it matters for Private Practice"
        content: React.ReactNode;
    };
    bridge: {
        problem: string;
        solution: string;
        ctaText: string;
        ctaLink: string; // Links to Service Cluster
    };
    relatedTerms?: RelatedTerm[];
}

export default function GlossaryTemplate({
    term,
    pronunciation,
    definition,
    context,
    bridge,
    relatedTerms
}: GlossaryTemplateProps) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">

                {/* HEADER: Dictionary Style */}
                <section className="pt-32 pb-12 bg-white border-b border-slate-100">
                    <div className="max-w-4xl mx-auto px-6">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                            Psychiatric Operations Glossary
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-trust-navy mb-4">
                            {term}
                        </h1>
                        {pronunciation && (
                            <p className="text-xl text-slate-400 font-serif italic mb-8">
                                {pronunciation}
                            </p>
                        )}

                        {/* DEFINITION BOX */}
                        <div className="bg-[#FAF8F3] p-8 md:p-10 rounded-2xl border-l-4 border-primary">
                            <p className="text-xl md:text-2xl text-trust-navy font-medium leading-relaxed">
                                {definition.short}
                            </p>
                        </div>
                    </div>
                </section>

                {/* DEEP DIVE & CONTEXT */}
                <section className="py-16 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed mb-16">
                            {definition.extended}
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-serif font-bold text-trust-navy mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">clinical_notes</span>
                                {context.title}
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                {context.content}
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE BRIDGE: Funnel to Service */}
                <section className="py-20 bg-trust-navy text-white relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm font-bold text-primary-light border border-white/20">
                            From Definition to Solution
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Handing {term} manually?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 items-center text-left max-w-2xl mx-auto mb-10">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="text-red-300 font-bold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">close</span>
                                    The Problem
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {bridge.problem}
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-primary/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10"></div>
                                <div className="text-primary-light font-bold mb-2 flex items-center gap-2 relative z-10">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                    The Solution
                                </div>
                                <p className="text-white text-sm leading-relaxed relative z-10">
                                    {bridge.solution}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={bridge.ctaLink}
                            className="bg-white text-trust-navy hover:bg-slate-100 px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:-translate-y-1 inline-flex items-center gap-3"
                        >
                            {bridge.ctaText}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* RELATED TERMS */}
                {relatedTerms && relatedTerms.length > 0 && (
                    <section className="py-16 bg-slate-50 border-t border-slate-200">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Related Concepts</h3>
                            <div className="flex flex-wrapjustify-center gap-4">
                                {relatedTerms.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={`/glossary/${item.slug}`}
                                        className="bg-white px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
                                    >
                                        {item.term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
}
