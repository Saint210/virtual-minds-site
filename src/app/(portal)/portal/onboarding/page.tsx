"use client";

import { useState } from "react";
import Link from "next/link";

export default function OnboardingWizard() {
    const [step, setStep] = useState(1);
    const [url, setUrl] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState("");

    const startMigration = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsProcessing(true);
        setStep(2);

        // Simulate the Scrape -> Extract -> Build Flow 
        const sequence = [
            { p: 10, t: "Initializing Stealth Scraper..." },
            { p: 25, t: "Crawling Homepage & About Bio..." },
            { p: 40, t: "Extracting clinical services & specialties..." },
            { p: 65, t: "AI: Analyzing Brand Voice & Tone..." },
            { p: 85, t: "AI: Defining Patient Personas & Keywords..." },
            { p: 100, t: "Migration Config Generated." },
        ];

        let current = 0;
        const interval = setInterval(() => {
            if (current < sequence.length) {
                setProgress(sequence[current].p);
                setStatusText(sequence[current].t);
                current++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setIsProcessing(false);
                    setStep(3);
                }, 800);
            }
        }, 1200);
    };

    return (
        <div className="max-w-4xl mx-auto py-10">

            {/* 
        HEADER 
      */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Migration Hub</h2>
                <p className="text-slate-500 text-lg">Turn your existing content into a world-class digital ecosystem.</p>
            </div>

            {/* 
        WIZARD STEPS 
      */}
            <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

                {/* Step 1: Input URL */}
                {step === 1 && (
                    <div className="p-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="w-20 h-20 bg-[#FAF8F3] rounded-3xl flex items-center justify-center text-[#D2691E] mx-auto mb-8">
                            <span className="material-symbols-outlined text-4xl">auto_fix</span>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Connect Your Existing Website</h3>
                        <p className="text-slate-500 mb-10 max-w-sm mx-auto font-medium">
                            We'll crawl your current site to extract your story, services, and credentials.
                        </p>

                        <form onSubmit={startMigration} className="max-w-md mx-auto relative">
                            <input
                                type="url"
                                required
                                placeholder="https://your-current-practice.com"
                                className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-3xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#D2691E]/10 focus:border-[#D2691E] transition-all"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="mt-6 w-full py-5 bg-[#2A2A2A] text-white font-black text-lg rounded-3xl hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/10"
                            >
                                Start AI Extraction
                            </button>
                        </form>

                        <p className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-widest">
                            Powered by Virtual Minds AI Logic
                        </p>
                    </div>
                )}

                {/* Step 2: Processing Animation */}
                {step === 2 && (
                    <div className="p-20 text-center animate-in zoom-in duration-700">
                        <div className="relative w-48 h-48 mx-auto mb-12">
                            {/* Outer Ring */}
                            <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                            {/* Progress Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="96"
                                    cy="96"
                                    r="92"
                                    fill="transparent"
                                    stroke="#D2691E"
                                    strokeWidth="8"
                                    strokeDasharray="578"
                                    strokeDashoffset={578 - (578 * progress) / 100}
                                    className="transition-all duration-1000 ease-out"
                                />
                            </svg>
                            {/* Inner Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-6xl text-[#D2691E] animate-pulse">molecule</span>
                            </div>
                        </div>

                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Analyzing Brand DNA</h3>
                        <p className="text-[#D2691E] font-black text-sm uppercase tracking-widest animate-pulse h-6">
                            {statusText}
                        </p>

                        <div className="mt-12 max-w-xs mx-auto space-y-3">
                            {[
                                "Scraping current content",
                                "Rewriting clinical bios",
                                "Synthesizing USP"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-left">
                                    <span className={`material-symbols-outlined text-sm ${progress > (i + 1) * 30 ? "text-green-500" : "text-slate-200"}`}>
                                        {progress > (i + 1) * 30 ? "check_circle" : "circle"}
                                    </span>
                                    <span className={`text-sm font-bold ${progress > (i + 1) * 30 ? "text-slate-900" : "text-slate-300"}`}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Result Preview */}
                {step === 3 && (
                    <div className="p-16 animate-in slide-in-from-right-8 duration-700">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-full">Analysis Complete</span>
                                <h3 className="text-3xl font-serif font-bold text-slate-900 mt-3">Verify Your Brand DNA</h3>
                            </div>
                            <button onClick={() => setStep(1)} className="text-sm font-bold text-[#D2691E] hover:underline">Restart Analysis</button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Target Keywords</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Concierge Psychiatry", "Adult ADHD", "Work Burnout", "Evidence Based"].map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Proposed Brand Tone</h4>
                                    <p className="text-slate-800 font-medium p-4 bg-slate-50 rounded-2xl border border-slate-100 italic">
                                        "Authoritative but deeply human. Focused on science-backed metrics while maintaining an empathetic, coastal-modern aesthetic."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#1E1E1E] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <span className="material-symbols-outlined text-4xl">dashboard_customize</span>
                                </div>
                                <h4 className="text-[10px] font-black text-[#D2691E] uppercase tracking-widest mb-4">Suggested Design Template</h4>
                                <h3 className="text-2xl font-serif font-bold mb-4">Premium Clinical Clarity</h3>
                                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                                    Based on your high-end service list and focus on privacy, we recommend our premium split-screen layout.
                                </p>
                                <Link href="/portal/site/preview" className="block text-center py-3 bg-white text-black font-bold rounded-xl text-sm transition-transform group-hover:scale-105 active:scale-95">
                                    Preview Live Demo
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center">
                            <p className="text-slate-500 font-medium mb-6">Happy with the identity? Generate your site now.</p>
                            <div className="flex gap-4 w-full md:w-auto">
                                <Link href="/portal/brand" className="px-8 py-4 border border-slate-200 text-slate-600 font-bold rounded-2xl text-center flex-grow md:flex-none hover:bg-slate-50 transition-colors">
                                    Edit Identity Manualy
                                </Link>
                                <button className="px-10 py-4 bg-[#D2691E] text-white font-bold rounded-2xl text-center flex-grow md:flex-none shadow-xl shadow-[#D2691E]/20 hover:scale-105 transition-transform">
                                    Generate My Premium Site
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
