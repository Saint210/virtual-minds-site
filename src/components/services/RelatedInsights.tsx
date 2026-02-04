
import Link from "next/link";
import React from "react";

interface Insight {
    title: string;
    category: string;
    excerpt: string;
    href: string;
    readTime?: string;
}

interface RelatedInsightsProps {
    title?: string;
    subtitle?: string;
    insights: Insight[];
    className?: string;
}

export default function RelatedInsights({
    title = "Related Executive Briefings",
    subtitle = "Strategic insights to optimize your practice operations.",
    insights,
    className = "",
}: RelatedInsightsProps) {
    return (
        <section className={`py-24 bg-[#FAF8F3] boundary-check ${className}`}>
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-[16px]">library_books</span>
                            Knowledge Base
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                            {title}
                        </h2>
                        <p className="text-slate-600 text-lg">
                            {subtitle}
                        </p>
                    </div>
                    <Link
                        href="/resources"
                        className="hidden md:inline-flex items-center gap-2 text-trust-navy font-bold hover:text-primary transition-colors group"
                    >
                        View All Resources
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <Link
                            key={index}
                            href={insight.href}
                            className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                                    {insight.category}
                                </span>
                                {insight.readTime && (
                                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                                        {insight.readTime}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-serif text-xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors leading-tight">
                                {insight.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                                {insight.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-trust-navy font-bold text-sm group-hover:text-primary transition-colors mt-auto">
                                Read Briefing
                                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-trust-navy font-bold hover:text-primary transition-colors"
                    >
                        View All Resources
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
