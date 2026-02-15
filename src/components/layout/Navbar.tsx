"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTracking } from "@/hooks/useTracking";

interface NavbarProps {
    practiceName?: string;
    logoSrc?: string;
}

export default function Navbar({
    practiceName = "Virtual Minds",
    logoSrc = "/images/virtual-minds-logo-opt.png"
}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { trackCTAClick } = useTracking();


    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-[112px]">
            <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-6 h-28 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-5">
                        {/* V2 Neural Network Icon */}
                        <div className="relative w-20 h-20 overflow-hidden rounded-[1.5rem] bg-white shadow-md border border-slate-100 flex items-center justify-center">
                            <Image
                                src={logoSrc}
                                alt={`${practiceName} Icon`}
                                fill
                                className="object-contain p-1"
                                priority
                            />
                        </div>
                        {/* Wordmark */}
                        <span className="text-3xl font-bold tracking-tight text-trust-navy">
                            {practiceName}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 font-semibold text-slate-500 text-sm tracking-tight">

                        {/* Services Dropdown - The "Silo" Architecture */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors py-4">
                                Services
                                <span className="material-symbols-outlined text-sm opacity-50 group-hover:rotate-180 transition-transform">expand_more</span>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-xl border border-slate-100 p-8 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                                <div className="grid grid-cols-[1.2fr_1fr] gap-12">
                                    {/* Silo 1: Clinical Ops */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-xs font-bold text-trust-navy uppercase tracking-widest border-b border-slate-100 pb-2 mb-2">
                                            <span className="material-symbols-outlined text-sm text-primary">clinical_notes</span>
                                            Clinical Operations
                                        </div>
                                        <Link href="/services/practice-consulting" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                            <div className="mt-1 p-2 rounded-lg bg-primary/5 text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">psychology</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-trust-navy group-hover/link:text-primary transition-colors">Practice Consulting</div>
                                                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">Workflow diagnostics & clinical optimization</div>
                                            </div>
                                        </Link>
                                        <Link href="/services/practice-start-up" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                            <div className="mt-1 p-2 rounded-lg bg-primary/5 text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-trust-navy group-hover/link:text-primary transition-colors">New Practice Launch</div>
                                                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">Turnkey startup infrastructure & credentialing</div>
                                            </div>
                                        </Link>
                                        <Link href="/services/hipaa-compliance-support" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                            <div className="mt-1 p-2 rounded-lg bg-primary/5 text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">shield_lock</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-trust-navy group-hover/link:text-primary transition-colors">Compliance Architecture</div>
                                                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">HIPAA hardening & regulatory protection</div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-8">
                                        {/* Silo 2: Virtual Support */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-trust-navy uppercase tracking-widest border-b border-slate-100 pb-2 mb-2">
                                                <span className="material-symbols-outlined text-sm text-primary">support_agent</span>
                                                Virtual Support
                                            </div>
                                            <Link href="/services/virtual-assistant" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                                <div className="mt-1 p-2 rounded-lg bg-primary/5 text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-trust-navy group-hover/link:text-primary transition-colors">Psychiatric VAs</div>
                                                    <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">Core administrative execution</div>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Silo 3: Revenue */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-trust-navy uppercase tracking-widest border-b border-slate-100 pb-2 mb-2">
                                                <span className="material-symbols-outlined text-sm text-primary">attach_money</span>
                                                Revenue Protection
                                            </div>
                                            <Link href="/services/billing-and-rcm" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group/link">
                                                <div className="mt-1 p-2 rounded-lg bg-primary/5 text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-trust-navy group-hover/link:text-primary transition-colors">Billing Liaison</div>
                                                    <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">RCM coordination & oversight</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Dropdown Footer */}
                                <div className="mt-8 pt-4 border-t border-slate-50 bg-slate-50/50 -mx-8 -mb-8 p-6 rounded-b-2xl">
                                    <Link href="/services" className="flex items-center justify-between group/footer">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover/footer:text-primary transition-colors">
                                            Explore Complete Operational Suite
                                        </span>
                                        <span className="flex items-center gap-2 text-xs font-bold text-primary group-hover/footer:translate-x-1 transition-transform">
                                            View All Services
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/locations" className="hover:text-primary transition-colors">
                            California Market
                        </Link>

                        <Link href="/about" className="hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/pricing" className="hover:text-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="/resources" className="hover:text-primary transition-colors">
                            Resources
                        </Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link
                            href="/book-consultation"
                            onClick={() => trackCTAClick('Schedule Call', '/book-consultation', 'navbar_desktop')}
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-primary/10"
                        >
                            Schedule Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-500 hover:text-primary transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay - Portaled to Body */}
                {mounted && (
                    createPortal(
                        <div
                            className={`fixed inset-0 z-[99999] transition-all duration-500 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                        >
                            {/* Backdrop */}
                            <div
                                className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                                onClick={() => setMobileMenuOpen(false)}
                            />

                            {/* Slide-out Menu */}
                            <div
                                className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-white/20 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            >
                                <div className="flex flex-col h-full">
                                    {/* Header */}
                                    <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-100/50">
                                        <div className="text-xl font-serif font-bold text-trust-navy">
                                            Menu
                                        </div>
                                        <button
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="p-2 -mr-2 text-slate-400 hover:text-trust-navy transition-colors"
                                        >
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>

                                    {/* Mobile Menu Links - Grouped by Silo */}
                                    <div className="flex-1 overflow-y-auto p-8 pt-4 gap-6 flex flex-col">

                                        {/* Silo 1: Clinical Ops */}
                                        <div className="space-y-3">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Clinical Operations
                                            </div>
                                            <Link href="/services/practice-consulting" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Consulting
                                            </Link>
                                            <Link href="/services/practice-start-up" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Start-Up Launch
                                            </Link>
                                            <Link href="/services/hipaa-compliance-support" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                HIPAA Compliance
                                            </Link>
                                        </div>

                                        {/* Silo 2: Virtual Support */}
                                        <div className="space-y-3">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Virtual Support
                                            </div>
                                            <Link href="/services/virtual-assistant" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Virtual Assistants
                                            </Link>
                                        </div>

                                        {/* Silo 3: Revenue */}
                                        <div className="space-y-3">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Revenue Protection
                                            </div>
                                            <Link href="/services/billing-and-rcm" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Billing Liaison
                                            </Link>
                                        </div>

                                        {/* Other Links */}
                                        <div className="space-y-3 pt-4 border-t border-slate-100">
                                            <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                California Market
                                            </Link>
                                            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                About Firm
                                            </Link>
                                            <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Resources
                                            </Link>
                                            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif font-medium text-trust-navy hover:text-primary">
                                                Blog
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Footer CTA */}
                                    <div className="p-8 border-t border-slate-100 bg-slate-50/50">
                                        <Link
                                            href="/book-consultation"
                                            className="w-full flex items-center justify-center gap-2 bg-trust-navy text-white px-6 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-trust-navy/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                            onClick={() => {
                                                trackCTAClick('Schedule Call', '/book-consultation', 'navbar_mobile');
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            Schedule Call
                                            <span className="material-symbols-outlined">calendar_month</span>
                                        </Link>
                                        <div className="mt-6 text-center">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Line</p>
                                            <a href="tel:+13104006266" className="text-lg font-bold text-trust-navy hover:text-primary transition-colors">(310) 400-6266</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )
                )}
            </nav>
        </div>
    );
}
