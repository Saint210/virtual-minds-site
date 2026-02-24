"use client";

import React, { useState, useRef } from 'react';
import Navbar from "@/components/layout/Navbar";
import html2canvas from 'html2canvas';

// AI Content Bank (Simulating RAG)
const CONTENT_BANK = {
    anxiety: [
        "Anxiety is not a weakness; it's your brain trying to protect you from a danger that isn't there.",
        "Deep breathing is the remote control for your nervous system.",
        "You don't have to control your thoughts. You just have to stop letting them control you."
    ],
    adhd: [
        "ADHD isn't a deficit of attention, it's a deficit of interest-based stimulation.",
        "Your brain isn't broken. It just runs on a different operating system.",
        "Hyperfocus is a superpower when you learn how to aim it."
    ],
    depression: [
        "Depression is a liar. It tells you that you've always felt this way and always will.",
        "Healing is not linear. Some days are victories, others are lessons.",
        "You are allowed to be a masterpiece and a work in progress simultaneously."
    ]
};

export default function SocialRxPage() {
    const [quote, setQuote] = useState("Healing takes time, and asking for help is &ldquo;the first step&rdquo;.");
    const [author, setAuthor] = useState("Dr. Jane Doe");
    const [theme, setTheme] = useState<'navy' | 'sage' | 'white' | 'gold'>('navy');
    const [layout, setLayout] = useState<'modern' | 'split' | 'bold'>('modern');
    const [format, setFormat] = useState<'instagram' | 'linkedin' | 'story'>('instagram');
    const [topic, setTopic] = useState<'anxiety' | 'adhd' | 'depression'>('anxiety');

    // Customization State
    const [logoUrl, setLogoUrl] = useState<string | null>(null);
    const [bgUrl, setBgUrl] = useState<string | null>(null);
    const [textColor, setTextColor] = useState<string>("#ffffff");
    const [isExporting, setIsExporting] = useState(false);

    const exportRef = useRef<HTMLDivElement>(null);

    // Theme Configs
    const themes = {
        navy: "bg-trust-navy",
        sage: "bg-calm-sage",
        white: "bg-white border-2 border-slate-100",
        gold: "bg-[#F3EFE0]"
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'bg') => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'logo') setLogoUrl(reader.result as string);
                if (type === 'bg') setBgUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const generateContent = () => {
        const quotes = CONTENT_BANK[topic];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    };

    const handleExport = async () => {
        if (!exportRef.current) return;
        setIsExporting(true);

        try {
            // Wait a tick to ensure images are loaded/rendered if changed recently
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(exportRef.current, {
                useCORS: true,
                scale: 2, // Retina quality
                backgroundColor: null,
            });

            const link = document.createElement('a');
            link.download = `social-rx-${topic}-${format}-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error("Export failed:", err);
            alert("Failed to export image. Please try again.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                            <span className="text-primary font-bold text-xs uppercase tracking-widest">AI-Powered Design Suite v3.0</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-trust-navy mb-4">
                            The Social <span className="text-primary italic">Rx</span> Studio
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            An advanced creative engine for psychiatric professionals.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
                        {/* 1. Advanced Control Panel */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-28 space-y-8">

                            {/* AI Writer Section */}
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                                <h3 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    Magic Content Writer
                                </h3>
                                <div className="flex gap-2 mb-4">
                                    <select
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value as 'anxiety' | 'adhd' | 'depression')}
                                        className="flex-1 h-12 px-4 rounded-xl bg-white border border-slate-200 font-bold text-trust-navy focus:outline-none focus:border-primary"
                                    >
                                        <option value="anxiety">Anxiety & Panic</option>
                                        <option value="adhd">Adult ADHD</option>
                                        <option value="depression">Depression</option>
                                    </select>
                                    <button
                                        onClick={generateContent}
                                        className="h-12 w-12 bg-trust-navy hover:bg-primary text-white rounded-xl flex items-center justify-center transition-colors shadow-lg"
                                        title="Generate New Quote"
                                    >
                                        <span className="material-symbols-outlined">refresh</span>
                                    </button>
                                </div>
                                <textarea
                                    value={quote}
                                    onChange={(e) => setQuote(e.target.value)}
                                    className="w-full p-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-medium text-trust-navy min-h-[100px] text-sm"
                                    placeholder="Or type your own..."
                                />
                            </div>

                            {/* Attribution */}
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Doctor Attribution</label>
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary font-bold text-trust-navy"
                                />
                            </div>

                            {/* Customization Controls */}
                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Customization</label>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Logo Upload */}
                                    <div className="relative group">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileUpload(e, 'logo')}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <button className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center gap-2 text-xs font-bold text-slate-600 group-hover:bg-slate-100 transition-colors">
                                            <span className="material-symbols-outlined text-lg">upload_file</span>
                                            {logoUrl ? 'Change Logo' : 'Upload Logo'}
                                        </button>
                                    </div>

                                    {/* Background Upload */}
                                    <div className="relative group">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileUpload(e, 'bg')}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <button className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center gap-2 text-xs font-bold text-slate-600 group-hover:bg-slate-100 transition-colors">
                                            <span className="material-symbols-outlined text-lg">image</span>
                                            {bgUrl ? 'Change BG' : 'Upload BG'}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Text Color</label>
                                        <div className="h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center px-2">
                                            <input
                                                type="color"
                                                value={textColor}
                                                onChange={(e) => setTextColor(e.target.value)}
                                                className="w-full h-8 cursor-pointer bg-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Design Controls */}
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Theme Palette</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { id: 'navy', color: 'bg-trust-navy', text: '#ffffff' },
                                            { id: 'sage', color: 'bg-calm-sage', text: '#ffffff' },
                                            { id: 'white', color: 'bg-white border border-slate-200', text: '#0B2C4D' },
                                            { id: 'gold', color: 'bg-[#F3EFE0]', text: '#0B2C4D' }
                                        ].map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => {
                                                    setTheme(t.id as 'navy' | 'sage' | 'white' | 'gold');
                                                    setBgUrl(null); // Clear custom BG on theme switch
                                                    setTextColor(t.text);
                                                }}
                                                className={`h-12 rounded-lg ${t.color} transition-all ${theme === t.id ? 'ring-4 ring-primary/30 scale-105' : 'hover:scale-105'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Layout Structure</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['modern', 'split', 'bold'].map((l) => (
                                            <button
                                                key={l}
                                                onClick={() => setLayout(l as 'modern' | 'split' | 'bold')}
                                                className={`h-10 rounded-lg border-2 font-bold text-xs capitalize transition-all ${layout === l ? 'border-primary text-primary bg-primary/5' : 'border-slate-100 text-slate-400 hover:border-slate-300'}`}
                                            >
                                                {l}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Download Action */}
                            <button
                                onClick={handleExport}
                                disabled={isExporting}
                                className="w-full py-5 bg-gradient-to-r from-trust-navy to-slate-800 hover:to-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                {isExporting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <span className="material-symbols-outlined group-hover:animate-bounce relative z-10">download_for_offline</span>
                                )}
                                <span className="relative z-10">{isExporting ? 'Generating PNG...' : 'Export High-Res PNG'}</span>
                            </button>
                        </div>

                        {/* 2. Live Preview Engine */}
                        <div className="space-y-8">
                            <div className="flex gap-4 border-b border-slate-200 pb-1 overflow-x-auto">
                                {['instagram', 'linkedin', 'story'].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFormat(f as 'instagram' | 'linkedin' | 'story')}
                                        className={`px-6 py-3 font-bold text-sm capitalize transition-colors border-b-2 ${format === f ? 'border-primary text-trust-navy' : 'border-transparent text-slate-400 hover:text-trust-navy'}`}
                                    >
                                        {f} Post
                                    </button>
                                ))}
                            </div>

                            {/* The Canvas */}
                            <div className="bg-slate-200/50 rounded-[3rem] p-8 md:p-16 flex items-center justify-center min-h-[600px] shadow-inner relative overflow-hidden">
                                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4 }}></div>

                                {/* Asset Wrapper */}
                                <div
                                    ref={exportRef}
                                    className={`relative shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between p-12 ${themes[theme]} ${format === 'instagram' ? 'aspect-square w-[600px]' :
                                        format === 'linkedin' ? 'aspect-[4/5] w-[500px]' :
                                            'aspect-[9/16] w-[400px]'
                                        }`}
                                    style={{
                                        color: textColor,
                                        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderColor: textColor
                                    }}
                                >

                                    {/* Overlay for contrast if Text Color is white and BG is custom */}
                                    {bgUrl && (
                                        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>
                                    )}

                                    {/* --- LAYOUT: MODERN --- */}
                                    {layout === 'modern' && (
                                        <>
                                            <div className="relative z-10 flex justify-between items-center opacity-90">
                                                <div className="flex items-center gap-2">
                                                    {logoUrl ? (
                                                        <img src={logoUrl} alt="Logo" className="h-8 object-contain" />
                                                    ) : (
                                                        <div className="size-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                                                            <span className="material-symbols-outlined text-sm">psychiatry</span>
                                                        </div>
                                                    )}
                                                    <span className="font-display font-bold text-sm tracking-wider uppercase">Virtual Minds</span>
                                                </div>
                                            </div>
                                            <div className="relative z-10 text-center">
                                                <h3 className={`font-display font-medium leading-tight mb-6 ${format === 'story' ? 'text-2xl' : 'text-4xl'}`} style={{ color: textColor }}>
                                                    &ldquo;{quote}&rdquo;
                                                </h3>
                                                <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                                            </div>
                                            <div className="relative z-10 text-center opacity-90">
                                                <p className="font-bold text-lg" style={{ color: textColor }}>{author}</p>
                                            </div>
                                        </>
                                    )}

                                    {/* --- LAYOUT: SPLIT --- */}
                                    {layout === 'split' && (
                                        <>
                                            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 z-0"></div>
                                            <div className="relative z-10 h-full flex flex-col justify-center">
                                                <span className="text-6xl text-primary font-display absolute top-10 left-0 opacity-40">&quot;</span>
                                                <h3 className={`font-display font-bold leading-tight mb-8 pr-12 ${format === 'story' ? 'text-2xl' : 'text-3xl lg:text-5xl'}`} style={{ color: textColor }}>
                                                    {quote}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px w-8 bg-current opacity-50" style={{ backgroundColor: textColor }}></div>
                                                    <p className="font-bold text-lg" style={{ color: textColor }}>{author}</p>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-12 right-12 z-10">
                                                {logoUrl ? (
                                                    <img src={logoUrl} alt="Logo" className="w-16 object-contain opacity-50" />
                                                ) : (
                                                    <span className="material-symbols-outlined text-4xl opacity-20">psychiatry</span>
                                                )}
                                            </div>
                                        </>
                                    )}

                                    {/* --- LAYOUT: BOLD --- */}
                                    {layout === 'bold' && (
                                        <>
                                            <div className="absolute inset-4 border-2 border-current opacity-20 rounded-2xl z-0" style={{ borderColor: textColor }}></div>
                                            <div className="relative z-10 flex-1 flex items-center justify-center text-center">
                                                <h3 className={`font-black uppercase tracking-tight leading-none ${format === 'story' ? 'text-3xl' : 'text-5xl md:text-6xl'}`} style={{ color: textColor }}>
                                                    {quote}
                                                </h3>
                                            </div>
                                            <div className="relative z-10 flex justify-between items-end border-t-4 border-primary pt-6">
                                                <p className="font-bold text-xl" style={{ color: textColor }}>{author}</p>
                                                {logoUrl ? (
                                                    <img src={logoUrl} alt="Logo" className="h-10 object-contain" />
                                                ) : (
                                                    <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
