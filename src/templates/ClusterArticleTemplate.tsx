import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon: string; // Material Symbol name
}

interface ClusterArticleProps {
    metadata: {
        title: string;
        description: string;
    };
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        primaryCtaText: string;
        primaryCtaLink: string;
    };
    problem: {
        heading: string;
        content: React.ReactNode;
    };
    solution: {
        heading: string;
        features: Feature[];
    };
    cta: {
        heading: string;
        subheading: string;
        buttonText: string;
        buttonLink: string;
    };
}

export default function ClusterArticleTemplate({
    hero,
    problem,
    solution,
    cta
}: ClusterArticleProps) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">

                {/* HERO: Problem-Aware & Direct */}
                <section className="relative py-24 md:py-32 bg-[#FAF8F3] border-b border-slate-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-trust-navy/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-block border border-trust-navy/10 bg-white/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                            <span className="text-trust-navy font-bold uppercase tracking-widest text-xs">
                                {hero.badge}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-trust-navy mb-8 leading-[1.1] tracking-tight">
                            {hero.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                            {hero.subtitle}
                        </p>

                        <div className="flex justify-center">
                            <Link
                                href={hero.primaryCtaLink}
                                className="bg-trust-navy hover:bg-slate-800 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-trust-navy/20 transition-all hover:-translate-y-1 hover:scale-[1.02]"
                            >
                                {hero.primaryCtaText}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* THE PROBLEM: Agitation (Text-Heavy, SEO Rich) */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-10 leading-tight">
                            {problem.heading}
                        </h2>
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                            {problem.content}
                        </div>
                    </div>
                </section>

                {/* THE SOLUTION: Virtual Minds Approach */}
                <section className="py-24 bg-slate-50 border-y border-slate-200 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"> The Virtual Minds Standard</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy">
                                {solution.heading}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {solution.features.map((feature, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="font-serif font-bold text-2xl text-trust-navy mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMPARISON TABLE: Us vs General VAs */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-trust-navy mb-12 text-center">
                            The Specialist Difference
                        </h2>

                        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-trust-navy text-white">
                                        <th className="p-6 md:p-8 font-serif text-xl border-r border-slate-700/50">Feature</th>
                                        <th className="p-6 md:p-8 font-serif text-xl bg-primary border-r border-primary-hover relative overflow-hidden">
                                            <span className="relative z-10">Virtual Minds</span>
                                            <div className="absolute inset-0 bg-white/10 z-0"></div>
                                        </th>
                                        <th className="p-6 md:p-8 font-serif text-xl bg-slate-800 text-slate-400">General VA</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 bg-white">
                                    <tr className="border-b border-slate-100">
                                        <td className="p-6 md:p-8 font-bold text-trust-navy border-r border-slate-100">Clinical Context</td>
                                        <td className="p-6 md:p-8 font-bold text-primary border-r border-slate-100 bg-primary/5">Psychiatry-Specific Training</td>
                                        <td className="p-6 md:p-8 text-slate-500">Zero Medical Knowledge</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-6 md:p-8 font-bold text-trust-navy border-r border-slate-100">HIPAA Compliance</td>
                                        <td className="p-6 md:p-8 font-bold text-primary border-r border-slate-100 bg-primary/5">Full BAA & Liability Shield</td>
                                        <td className="p-6 md:p-8 text-slate-500">Often Consumer Tools Only</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-6 md:p-8 font-bold text-trust-navy border-r border-slate-100">Management</td>
                                        <td className="p-6 md:p-8 font-bold text-primary border-r border-slate-100 bg-primary/5">Managed Oversight</td>
                                        <td className="p-6 md:p-8 text-slate-500">Unsupervised Freelancer</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 md:p-8 font-bold text-trust-navy border-r border-slate-100">Cost Efficiency</td>
                                        <td className="p-6 md:p-8 font-bold text-primary border-r border-slate-100 bg-primary/5">1 Hour = 3 Hours of Output</td>
                                        <td className="p-6 md:p-8 text-slate-500">Slow Learning Curve</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* BOTTOM CTA: High Contrast */}
                <section className="py-32 bg-trust-navy relative overflow-hidden text-white">
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            {cta.heading}
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-3xl mx-auto">
                            {cta.subheading}
                        </p>
                        <Link
                            href={cta.buttonLink}
                            className="bg-primary hover:bg-primary-hover text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-[0_20px_50px_-12px_rgba(var(--primary-rgb),0.5)] transition-all hover:scale-[1.02] inline-flex items-center gap-3"
                        >
                            {cta.buttonText}
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
