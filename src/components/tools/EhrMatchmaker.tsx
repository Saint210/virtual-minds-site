"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type PracticeType = "solo" | "group" | "interventional";
type RevenueModel = "cash" | "insurance" | "mixed";
type Priority = "speed" | "simplicity" | "outcomes";

interface QuizState {
    practiceType: PracticeType | null;
    revenueModel: RevenueModel | null;
    clinicalPriority: Priority | null;
}

const slideVariants = {
    initial: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
};

export default function EhrMatchmaker() {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState<QuizState>({
        practiceType: null,
        revenueModel: null,
        clinicalPriority: null
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const selectOption = (key: keyof QuizState, value: any) => {
        setSelections(prev => ({ ...prev, [key]: value }));
        nextStep();
    };

    // Results Mapping Logic
    const getResult = () => {
        const { practiceType, revenueModel, clinicalPriority } = selections;

        if (practiceType === "interventional" || clinicalPriority === "outcomes") {
            return {
                name: "Osmind",
                category: "The Scientific Choice",
                tagline: "Best for Interventional & Measurement-Based Care",
                description: "Osmind is the infrastructure of choice for Ketamine, TMS, and high-acuity psychiatry. Their automated outcome tracking and specialized charting save hours on clinical compliance.",
                benefit: "Automated Rating Scales",
                icon: "psychology",
                cta: "https://www.osmind.org",
                badge: "Outcome Leader"
            };
        }

        if (revenueModel === "insurance" && clinicalPriority === "simplicity") {
            return {
                name: "Tebra (Kareo)",
                category: "The All-in-One",
                tagline: "Best for Fast-Growing Solo Practices",
                description: "Tebra combines billing, clinical notes, and patient marketing into a single clinical engine. It is the 'Easy Button' for transitioning from residency to private practice.",
                benefit: "Integrated Billing Engine",
                icon: "rocket_launch",
                cta: "https://www.tebra.com",
                badge: "Solo Standard"
            };
        }

        if (clinicalPriority === "speed") {
            return {
                name: "DrChrono",
                category: "The Documentation Master",
                tagline: "Best for High-Volume Clinical Automation",
                description: "If documentation speed is your #1 bottleneck, DrChrono's macro-driven interface and iPad-first workflow is the answer. It is built for the doctor who hates typing.",
                benefit: "Elite Macro Logic",
                icon: "clinical_notes",
                cta: "https://www.drchrono.com",
                badge: "Automation Pro"
            };
        }

        // Default / CharmHealth Logic
        return {
            name: "CharmHealth",
            category: "The Flexible Veteran",
            tagline: "Best for Cash-Pay Efficiency & Privacy",
            description: "CharmHealth offers a highly cost-effective, modular approach. It is legendary for its 'Private Charting' features, perfect for Keeping psychotherapy notes confidential.",
            benefit: "Granular Privacy Controls",
            icon: "enhanced_encryption",
            cta: "https://www.charmhealth.com",
            badge: "Privacy First"
        };
    };

    const result = getResult();

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[500px] bg-white rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-100">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                />
            </div>

            <div className="flex-grow p-8 md:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div key="step0" variants={slideVariants} initial="initial" animate="enter" exit="exit" transition={{ duration: 0.4 }} className="text-center">
                            <span className="material-symbols-outlined text-5xl text-primary mb-6">clinical_notes</span>
                            <h2 className="text-4xl font-serif font-bold text-trust-navy mb-4 italic">EHR Matchmaker Quiz</h2>
                            <p className="text-slate-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                                We&apos;ve analyzed the entire 2026 psychiatric tech landscape. Answer 3 questions to find the <strong className="text-trust-navy italic underline decoration-primary/30">exact engine</strong> your practice needs.
                            </p>
                            <button
                                onClick={nextStep}
                                className="bg-trust-navy text-white px-12 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl hover:scale-105"
                            >
                                Start Matching
                            </button>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div key="step1" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="space-y-8">
                            <div className="text-center mb-8">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">Step 01 / 03</span>
                                <h3 className="text-3xl font-serif font-bold text-trust-navy mt-2 italic">What is your practice archetype?</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { id: "solo", label: "Solo Practitioner", desc: "Just me and a part-time admin.", icon: "person" },
                                    { id: "group", label: "Group Practice", desc: "Expanding with multiple MDs/NPs.", icon: "groups" },
                                    { id: "interventional", label: "Interventional", desc: "Ketamine, TMS, or Spravato focus.", icon: "psychology" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => selectOption("practiceType", opt.id)}
                                        className="p-8 border-2 border-slate-100 rounded-3xl hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary mb-4 transition-colors">{opt.icon}</span>
                                        <h4 className="font-bold text-trust-navy mb-2">{opt.label}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{opt.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="step2" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="space-y-8">
                            <div className="text-center mb-8">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">Step 02 / 03</span>
                                <h3 className="text-3xl font-serif font-bold text-trust-navy mt-2 italic">How do you get paid?</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { id: "cash", label: "100% Cash Pay", desc: "Concierge or low-volume premium care.", icon: "payments" },
                                    { id: "insurance", label: "Insurance Based", desc: "High volume, heavy billing requirements.", icon: "account_balance_wallet" },
                                    { id: "mixed", label: "Mixed Model", desc: "OON billing with some direct pay.", icon: "published_with_changes" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => selectOption("revenueModel", opt.id)}
                                        className="p-8 border-2 border-slate-100 rounded-3xl hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary mb-4 transition-colors">{opt.icon}</span>
                                        <h4 className="font-bold text-trust-navy mb-2">{opt.label}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{opt.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="step3" variants={slideVariants} initial="initial" animate="enter" exit="exit" className="space-y-8">
                            <div className="text-center mb-8">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">Step 03 / 03</span>
                                <h3 className="text-3xl font-serif font-bold text-trust-navy mt-2 italic">Your #1 Technical Priority?</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { id: "speed", label: "Documentation Speed", desc: "Hate typing? Need elite macros.", icon: "bolt" },
                                    { id: "simplicity", label: "Simplicity", desc: "Everything in one clinical window.", icon: "done_all" },
                                    { id: "outcomes", label: "Research/Outcomes", desc: "Measurement-based care focus.", icon: "bar_chart" }
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => selectOption("clinicalPriority", opt.id)}
                                        className="p-8 border-2 border-slate-100 rounded-3xl hover:border-primary/50 hover:bg-primary/5 transition-all group text-left"
                                    >
                                        <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary mb-4 transition-colors">{opt.icon}</span>
                                        <h4 className="font-bold text-trust-navy mb-2">{opt.label}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{opt.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                            <div className="inline-block p-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                                <span className="text-primary font-black text-[9px] uppercase tracking-widest px-4">Match Found</span>
                            </div>

                            <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{result.category}</h3>
                            <h2 className="text-5xl font-serif font-bold text-trust-navy mb-4 italic">{result.name}</h2>
                            <p className="text-xl text-primary font-bold mb-8 italic">{result.tagline}</p>

                            <div className="max-w-2xl mx-auto bg-slate-50 border-2 border-slate-100 rounded-[32px] p-8 md:p-10 mb-10 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="flex items-start gap-6 text-left relative z-10">
                                    <div className="size-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-200 shrink-0">
                                        <span className="material-symbols-outlined text-4xl">{result.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-600 leading-relaxed font-medium mb-6 italic">
                                            {result.description}
                                        </p>
                                        <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm">
                                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Edge:</span>
                                            <span className="text-trust-navy font-bold">{result.benefit}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Link
                                    href={result.cta}
                                    className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
                                >
                                    <span>Get Partner Rate</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">refresh</span>
                                    Restart Quiz
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="bg-slate-50 px-12 py-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <span>© 2026 Virtual Minds Intellectual Property</span>
                <span className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="material-symbols-outlined text-sm">shield</span>
                    HIPAA Compliant Data Siphon
                </span>
            </div>
        </div>
    );
}
