"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
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
                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-primary/10">
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
            {mounted && mobileMenuOpen && createPortal(
                <div className="relative z-[99999]">
                    <div
                        className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Slide-out Menu */}
                    <div className="fixed top-28 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto border-l border-slate-100">
                        <div className="flex flex-col p-6 gap-2">
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
                                    className="text-lg font-bold text-trust-navy hover:text-primary transition-colors py-4 border-b border-slate-50 flex justify-between items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                    <span className="material-symbols-outlined text-slate-200">chevron_right</span>
                                </Link>
                            ))}
                            <Link
                                href="/book-consultation"
                                className="bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-primary/20 text-center mt-6"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Schedule Call
                            </Link>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </nav>
    );
}
