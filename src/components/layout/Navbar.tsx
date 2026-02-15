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
                        <Link href="/services" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="/services/practice-consulting" className="hover:text-primary transition-colors">
                            Consulting
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

                                    {/* Links */}
                                    <div className="flex-1 overflow-y-auto p-8 pt-4 gap-2 flex flex-col">
                                        {[
                                            { name: "Services", href: "/services" },
                                            { name: "Consulting", href: "/services/practice-consulting" },
                                            { name: "About", href: "/about" },
                                            { name: "Pricing", href: "/pricing" },
                                            { name: "Resources", href: "/resources" },
                                            { name: "Blog", href: "/blog" }
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="group flex justify-between items-center py-5 border-b border-slate-50 text-xl font-serif font-medium text-trust-navy hover:text-primary transition-all hover:pl-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                                <span className="material-symbols-outlined text-slate-200 group-hover:text-primary transition-colors">arrow_forward</span>
                                            </Link>
                                        ))}
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
