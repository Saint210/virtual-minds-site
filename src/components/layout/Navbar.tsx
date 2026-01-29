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
    logoSrc = "/images/the-virtual-minds-logo-og-notext.jpg"
}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md">
            <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    {/* V2 Neural Network Icon */}
                    <Image
                        src={logoSrc}
                        alt={`${practiceName} Icon`}
                        width={64}
                        height={64}
                        className="w-12 h-12 object-contain rounded-lg"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                    {/* Wordmark */}
                    <span className="text-2xl font-display font-bold tracking-tight text-foreground">
                        {practiceName}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium text-foreground">
                    <Link href="/services" className="hover:text-primary transition-colors" aria-label="View all services">
                        Services
                    </Link>
                    <Link href="/pricing" className="hover:text-primary transition-colors" aria-label="View pricing information">
                        Pricing
                    </Link>
                    <Link href="/case-studies" className="hover:text-primary transition-colors" aria-label="View case studies">
                        Case Studies
                    </Link>
                    <Link href="/resources" className="hover:text-primary transition-colors" aria-label="View resources">
                        Resources
                    </Link>
                    <Link href="/blog" className="hover:text-primary transition-colors" aria-label="Read blog articles">
                        Insights
                    </Link>
                    <Link href="/book-consultation" className="bg-primary hover:opacity-90 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm">
                        Schedule Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-[#4A4A4A] hover:text-[#D2691E] transition-colors"
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? (
                        // X icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay - Portaled to Body */}
            {mounted && mobileMenuOpen && createPortal(
                <div className="relative z-[99999]">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Slide-out Menu */}
                    <div className="fixed top-20 right-0 bottom-0 w-80 max-w-[85vw] bg-[#FAF8F3] shadow-2xl overflow-y-auto border-l border-[#D2691E]/20">
                        <div className="flex flex-col p-6 gap-4">
                            <Link
                                href="/services"
                                className="text-lg font-medium text-[#4A4A4A] hover:text-[#D2691E] transition-colors py-3 border-b border-[#D2691E]/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-lg font-medium text-[#4A4A4A] hover:text-[#D2691E] transition-colors py-3 border-b border-[#D2691E]/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/case-studies"
                                className="text-lg font-medium text-[#4A4A4A] hover:text-[#D2691E] transition-colors py-3 border-b border-[#D2691E]/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Case Studies
                            </Link>
                            <Link
                                href="/resources"
                                className="text-lg font-medium text-[#4A4A4A] hover:text-[#D2691E] transition-colors py-3 border-b border-[#D2691E]/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Resources
                            </Link>
                            <Link
                                href="/blog"
                                className="text-lg font-medium text-[#4A4A4A] hover:text-[#D2691E] transition-colors py-3 border-b border-[#D2691E]/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Insights
                            </Link>
                            <Link
                                href="/book-consultation"
                                className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg text-center mt-4"
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
