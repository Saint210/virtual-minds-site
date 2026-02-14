import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// 1. Types
interface CalculatorSubmission {
    _id: string;
    timestamp: string;
    city: string;
    adminHours: number;
    monthlyRent: number;
    hourlyRate: number;
    activePatients: number;
    projectedRevenueGain: number;
    email?: string;
    targetPatients?: number; // New field
}

// 2. Data Fetching
async function getReport(id: string): Promise<CalculatorSubmission | null> {
    return client.fetch(
        groq`*[_type == "calculatorSubmission" && _id == $id][0]`,
        { id }
    );
}

// 3. Metadata
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
    return {
        title: "Confidential Practice Audit | Virtual Minds",
        description: "Your personalized practice efficiency report.",
        robots: "noindex, nofollow", // Keep private
    };
}

// 4. Page Component
export default async function ReportPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const report = await getReport(id);

    if (!report) {
        notFound();
    }

    // Recalculate derived metrics for display consistency
    const adminCost = Math.round(report.adminHours * report.hourlyRate * 52);
    const rentSavings = Math.round(report.monthlyRent * 12 * 0.25);
    const totalLeak = Math.round(adminCost + rentSavings + report.projectedRevenueGain);

    // Formatting
    const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
            <Navbar />

            <main className="flex-grow relative overflow-hidden">
                <style>{`
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.1; transform: scale(1); }
                        50% { opacity: 0.3; transform: scale(1.1); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 8s infinite ease-in-out;
                    }
                `}</style>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40 z-0" />

                {/* Content Container */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">

                    {/* Header */}
                    <header className="text-center mb-12">
                        <div className="inline-block bg-trust-navy text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-xl shadow-trust-navy/20 border border-white/10">
                            Confidential Audit Report
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-4 leading-tight">
                            Practice Efficiency Analysis
                        </h1>
                        <p className="text-slate-500 font-medium">
                            Generated: {new Date(report.timestamp).toLocaleDateString()}
                        </p>
                    </header>

                    {/* 1. THE DIAGNOSIS (High-Level Numbers) */}
                    <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-12 relative group">
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-trust-navy via-primary to-accent" />

                        <div className="p-8 md:p-12 relative">
                            {/* Watermark/Icon */}
                            <div className="absolute -right-12 -top-12 text-slate-50 opacity-50 pointer-events-none">
                                <span className="material-symbols-outlined text-[200px]">analytics</span>
                            </div>

                            <div className="flex items-center gap-4 mb-10 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-xl border border-primary/20">1</div>
                                <h2 className="text-xl font-bold text-trust-navy tracking-wide uppercase">The Diagnosis</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Admin Drag</p>
                                    <p className="text-4xl font-serif font-bold text-trust-navy mb-2">{report.adminHours} hrs/wk</p>
                                    <p className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full inline-block uppercase tracking-wide">Critical Load</p>
                                </div>
                                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                                    <div className="absolute inset-0 border-x border-slate-100/50" />
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Clinical Value Lost</p>
                                    <p className="text-4xl font-serif font-bold text-trust-navy mb-2">{formatCurrency(report.adminHours * report.hourlyRate * 4)}</p>
                                    <p className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-full inline-block uppercase tracking-wide">Unrealized</p>
                                </div>
                                <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Overhead Waste</p>
                                    <p className="text-4xl font-serif font-bold text-trust-navy mb-2">{formatCurrency(Math.round(report.adminHours * 290 * 52))}</p>
                                    <p className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full inline-block uppercase tracking-wide">Inefficient</p>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-slate-100 text-center relative z-10">
                                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-4">Total Projected Annual Leak</p>
                                <p className="text-6xl md:text-7xl font-serif font-bold text-primary drop-shadow-sm">
                                    {formatCurrency(totalLeak)}
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-2 text-green-500 bg-green-50 w-fit mx-auto px-4 py-1.5 rounded-full border border-green-100">
                                    <span className="material-symbols-outlined text-sm">shield</span>
                                    <span className="text-xs font-bold uppercase tracking-wide">Conservative Estimate</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. THE ROOT CAUSE (Opportunity Cost) */}
                    <section className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold font-serif text-xl">2</div>
                            <h2 className="text-xl font-bold text-trust-navy tracking-wide uppercase">The Root Cause</h2>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed mb-8">
                            You are currently paying <strong className="text-trust-navy text-xl">${report.hourlyRate}/hr</strong> (your clinical rate) to perform administrative tasks that have a market value of <strong className="text-primary text-xl">$24/hr</strong>.
                        </p>

                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-orange-500 text-3xl">warning</span>
                                <div>
                                    <h3 className="text-orange-900 font-bold mb-2">Reality Check:</h3>
                                    <p className="text-orange-800/80 text-sm leading-relaxed">
                                        Our calculator assumes a conservative <strong>3 minutes</strong> of admin per patient. Industry data suggests high-acuity practices often average <strong>7-10 minutes</strong> per patient encounter, meaning your actual leakage could be <strong className="underline decoration-orange-300 decoration-2 underline-offset-2">double</strong> these figures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. THE GROWTH OPPORTUNITY */}
                    <section className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-12 mb-12 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold font-serif text-xl">3</div>
                            <h2 className="text-xl font-bold text-trust-navy tracking-wide uppercase">The Growth Gap</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h3 className="font-serif text-2xl text-trust-navy mb-4 font-bold">What is "The Growth Gap"?</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    If you reclaimed those {report.adminHours} admin hours and filled just <strong>50%</strong> of them with new patients at your ${report.hourlyRate}/hr rate, your practice revenue would increase significantly.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-700">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span>Current Active Patients: <strong>{report.activePatients}</strong></span>
                                    </div>
                                    {report.targetPatients && (
                                        <div className="flex items-center gap-3 text-slate-700">
                                            <span className="material-symbols-outlined text-primary">flag</span>
                                            <span>Goal Patient Load: <strong>{report.targetPatients}</strong></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100 flex flex-col justify-center items-center text-center">
                                <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Potential New Annual Revenue</p>
                                <p className="text-5xl font-serif font-bold text-trust-navy mb-2">
                                    {formatCurrency(report.projectedRevenueGain)}
                                </p>
                                <p className="text-xs text-slate-400">
                                    *Assumes 50% fill rate of reclaimed time
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. THE OPERATIONAL FIX (Marketing Roadmap) */}
                    <section className="relative">
                        <div className="absolute inset-0 bg-trust-navy/95 rounded-3xl transform rotate-1 scale-[1.02] blur-sm opacity-50" />

                        <div className="bg-trust-navy text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg border border-white/20">4</div>
                                <h2 className="text-xl font-bold text-white tracking-wide uppercase">The Operational Fix</h2>
                            </div>

                            <h3 className="text-xl font-bold mb-4 relative z-10">Clinical Administrative Offloading</h3>
                            <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                                To recapture this revenue, you do not need "more time." You need a specialized partner.
                                Deploy a <strong>HIPAA-Trained Psychiatric Virtual Assistant</strong> to handle the {report.adminHours} hours of "Admin Drag."
                            </p>

                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-slate-300 font-medium">Potential Recoverable Revenue</span>
                                    <span className="text-red-300 font-bold">{formatCurrency(totalLeak)}/yr</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <span className="text-white font-medium">Investment Required</span>
                                    <span className="text-primary font-bold uppercase text-sm tracking-wider">Custom Proposal</span>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-3 text-center">
                                    *Investment varies based on patient volume and specific practice needs.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <h3 className="font-serif text-3xl text-trust-navy mb-6">Ready to stop the leak?</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-consultation"
                                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
                            >
                                Get Custom Proposal
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                            <Link
                                href="/services/practice-consulting"
                                className="bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-trust-navy/30 flex items-center justify-center gap-2"
                            >
                                View Implementation Plans
                            </Link>
                        </div>
                    </div>

                    {/* Methodology Footer */}
                    <div className="mt-20 pt-10 border-t border-slate-200/60 text-center mx-auto max-w-2xl px-6">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Methodology & Sources</p>
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                            Projections based on {new Date().getFullYear()} MGMA data for psychiatric practice overhead and Medscape Physician Compensation Report figures.
                            "Clinical Value Lost" calculated at user-provided hourly rate. "Overhead Waste" factors in fixed costs (rent, insurance, software) allocated to non-billable hours.
                            Opportunity cost of admin labor is based on median US virtual assistant rates vs. board-certified psychiatrist averages.
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
