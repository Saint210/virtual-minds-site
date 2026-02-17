"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

const faqSections = [
    {
        id: "hipaa-compliance",
        title: "Compliance Integrity",
        subtitle: "Section 01: Data Governance",
        icon: "shield",
        items: [
            {
                q: "Do you provide a formal BAA (Business Associate Agreement)?",
                a: "Yes. Every client engagement begins with a dual-signed BAA, establishing our full legal and operational accountability under HIPAA and California state privacy regulations."
            },
            {
                q: "Is all practice data encrypted to military-grade standards?",
                a: "Correct. All system interactions utilize AES-256 bit encryption. Our specialists access your EHR through dedicated, secure protocols—no PHI is ever stored locally on firm devices."
            },
            {
                q: "Are the specialists trained in California-specific telehealth parity?",
                a: "Our firm executes training specific to the California Telehealth Act, ensuring our staff understands reimbursement parity, cross-state licensing logs, and documentation requirements."
            }
        ]
    },
    {
        id: "billing-yield",
        title: "Revenue & Yield",
        subtitle: "Section 02: Financial Operations",
        icon: "payments",
        items: [
            {
                q: "How does the flat-rate management billing work?",
                a: "We operate on a transparent monthly retainer model. This aligns our incentives with your practice's stability. No hourly surprise bills, no recruitment fees, and no backend overhead."
            },
            {
                q: "Do you handle CPT coding for 90833/99214 psychiatric combinations?",
                a: "Our billing support specialists are specifically trained in 'E/M + Psychotherapy' add-on coding to maximize yield and ensure documentation supports the complexity of psychiatric care."
            }
        ]
    }
];

export default function FAQClient() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic: Check if query matches Question OR Answer
    const filteredSections = faqSections.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    // Generate FAQ Schema for AI/SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSections.flatMap(section =>
            section.items.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                }
            }))
        )
    };

    return (
        <div className="max-w-[1400px] mx-auto px-6">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                strategy="afterInteractive"
            />
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                {/* Left: Heading (60%) */}
                <div className="lg:w-[60%]">
                    <div className="inline-flex items-center gap-2 bg-[#1A2332]/5 border border-[#1A2332]/10 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        <span className="material-symbols-outlined text-[#D2691E] text-[16px]">terminal</span>
                        Operational Repository
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                        Intelligence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                            Support Protocols.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-xl">
                        Technical data and operational answers for California psychiatric practices scaling on the Virtual Minds platform.
                    </p>
                </div>

                {/* Right: Search Box (40%) */}
                <div className="lg:w-[40%] w-full">
                    <div className="p-1 bg-gradient-to-br from-slate-200 to-white rounded-3xl shadow-2xl relative group">
                        <div className="absolute inset-0 bg-white rounded-3xl m-[1px]" />
                        <div className="relative z-10 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2691E]/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#D2691E]/10 transition-all" />

                            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-trust-navy/60 mb-6 flex items-center gap-2 relative z-10">
                                <span className="w-1.5 h-1.5 bg-[#D2691E] rounded-full animate-pulse" /> QUERY_DATABASE::V1
                            </p>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Protocols..."
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#D2691E]/20 focus:border-[#D2691E] transition-all outline-none text-sm font-mono font-bold text-trust-navy placeholder:text-slate-400"
                                />
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#D2691E]/30 hover:text-[#D2691E] transition-colors cursor-default">HIPAA</span>
                                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#D2691E]/30 hover:text-[#D2691E] transition-colors cursor-default">BAA</span>
                                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#D2691E]/30 hover:text-[#D2691E] transition-colors cursor-default">EHR_SYNC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Sidebar: Visual Intel aside (30%) */}
                <aside className="lg:w-[30%] space-y-12 h-fit lg:sticky lg:top-24">
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white mb-8 group">
                        <Image
                            src="/images/visual-intel-audit.png"
                            alt="Operational Security and Protocols"
                            fill
                            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/20 mb-3">
                                <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Operations</span>
                            </div>
                            <p className="text-white text-sm font-medium leading-relaxed opacity-90">Real-time answers from our operational command center.</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D2691E] mb-6">Support Categories</p>
                        <nav className="space-y-2">
                            {faqSections.map((section) => (
                                <a key={section.id} href={`#${section.id}`} className="flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-500 hover:text-white hover:bg-[#1A2332] rounded-xl transition-all group">
                                    {section.title}
                                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity text-[#D2691E]">arrow_forward</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main FAQ Content (70%) */}
                <div className="lg:w-[70%] space-y-24 min-h-[50vh]">
                    {filteredSections.length > 0 ? (
                        filteredSections.map((section) => (
                            <div key={section.id} id={section.id} className="scroll-mt-32">
                                <div className="flex items-center gap-5 mb-10">
                                    <div className="size-14 bg-[#1A2332] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#1A2332]/20">
                                        <span className="material-symbols-outlined text-2xl">{section.icon}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display font-bold text-trust-navy">{section.title}</h2>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D2691E] mt-1">{section.subtitle}</p>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    {section.items.map((item, idx) => (
                                        <details key={idx} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-trust-navy hover:shadow-lg transition-all duration-300 overflow-hidden">
                                            <summary className="flex cursor-pointer items-center justify-between p-6 select-none relative z-10">
                                                <p className="text-trust-navy font-bold text-lg font-display pr-8">{item.q}</p>
                                                <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:border-trust-navy/30 group-open:bg-trust-navy group-open:border-trust-navy transition-all duration-300 shrink-0">
                                                    <span className="material-symbols-outlined text-slate-400 group-open:text-white group-open:rotate-180 transition-all duration-300">expand_more</span>
                                                </div>
                                            </summary>
                                            <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed max-w-3xl relative z-10 border-t border-slate-50 pt-4 mt-2 mx-6">
                                                {item.a}
                                            </div>
                                            {/* Tech Grid Background on Open */}
                                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-open:opacity-100 transition-opacity pointer-events-none" />
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-20 text-center">
                            <div className="inline-flex items-center justify-center size-20 rounded-full bg-slate-100 mb-6">
                                <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
                            </div>
                            <h3 className="text-2xl font-bold text-trust-navy mb-2">No answers found</h3>
                            <p className="text-slate-500">Try adjusting your search terms for better results.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
