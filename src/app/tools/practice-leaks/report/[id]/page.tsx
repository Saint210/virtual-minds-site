import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

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
export default async function ReportPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const report = await getReport(params.id);

    if (!report) {
        notFound();
    }

    // Recalculate derived metrics for display consistency
    const adminCost = Math.round((report.adminHours * 45 * 52) - (report.adminHours * 24 * 52));
    const rentSavings = Math.round(report.monthlyRent * 12 * 0.25);
    const totalLeak = Math.round(adminCost + rentSavings + report.projectedRevenueGain);

    // Formatting
    const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">

                {/* HEADER */}
                <div className="bg-trust-navy text-white p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4 relative z-10">Confidential Audit Report</p>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 relative z-10">Practice Efficiency Analysis</h1>
                    <p className="text-slate-300 text-sm relative z-10">Generated: {new Date(report.timestamp).toLocaleDateString()}</p>
                </div>

                {/* MAIN CONTENT */}
                <div className="p-8 md:p-12 space-y-12">

                    {/* 1. THE DIAGNOSIS */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">1</div>
                            <h2 className="text-xl font-bold text-trust-navy uppercase tracking-wider">The Diagnosis</h2>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-black tracking-wider mb-1">Admin Drag</p>
                                    <p className="text-2xl font-serif font-bold text-slate-700">{report.adminHours} hrs/wk</p>
                                    <p className="text-[10px] text-red-500 font-bold mt-1">CRITICAL LOAD</p>
                                </div>
                                <div className="md:border-x border-slate-200 px-6">
                                    <p className="text-xs text-slate-500 uppercase font-black tracking-wider mb-1">Clinical Value Lost</p>
                                    <p className="text-2xl font-serif font-bold text-slate-700">{formatCurrency(report.projectedRevenueGain)}</p>
                                    <p className="text-[10px] text-red-500 font-bold mt-1">UNREALIZED</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-black tracking-wider mb-1">Overhead Waste</p>
                                    <p className="text-2xl font-serif font-bold text-slate-700">{formatCurrency(adminCost + rentSavings)}</p>
                                    <p className="text-[10px] text-red-500 font-bold mt-1">INEFFICIENT</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Total Projected Annual Leak</p>
                                <p className="text-5xl md:text-6xl font-serif font-bold text-[#D2691E] tracking-tight">{formatCurrency(totalLeak)}</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. THE ROOT CAUSE */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-8 rounded-full bg-trust-navy/10 flex items-center justify-center text-trust-navy font-bold">2</div>
                            <h2 className="text-xl font-bold text-trust-navy uppercase tracking-wider">The Root Cause</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            You are currently paying <strong>{formatCurrency(report.hourlyRate)}/hr</strong> (your clinical rate) to perform administrative tasks that have a market value of <strong>$24/hr</strong>.
                        </p>
                        <ul className="space-y-3 bg-red-50/50 p-6 rounded-xl border border-red-50">
                            {[
                                "Scheduling intakes & follow-ups",
                                "Wait times on insurance verification calls",
                                "Handling prescription refills & pharmacy tag",
                                "Managing EHR documentation backlog"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-red-400">remove_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 3. THE PRESCRIPTION */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">3</div>
                            <h2 className="text-xl font-bold text-trust-navy uppercase tracking-wider">The Prescription</h2>
                        </div>

                        <div className="bg-trust-navy text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-xl font-bold mb-4 relative z-10">Clinical Administrative Offloading</h3>
                            <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                                To recapture this revenue, you do not need "more time." You need a specialized partner.
                                Deploy a <strong>HIPAA-Trained Psychiatric Virtual Assistant</strong> to handle the {report.adminHours} hours of "Admin Drag."
                            </p>

                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 relative z-10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-300 font-medium">Cost of Problem</span>
                                    <span className="text-red-300 font-bold">{formatCurrency(totalLeak)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                                    <span className="text-slate-300 font-medium">Cost of Solution</span>
                                    <span className="text-white font-bold">~{formatCurrency(18000)}/yr</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-primary font-bold uppercase tracking-wider">Net Profit</span>
                                    <span className="text-2xl font-bold text-green-400">+{formatCurrency(totalLeak - 18000)} / yr</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center pt-8">
                        <Link
                            href={`/book-consultation?leak=${totalLeak}&source=report_page`}
                            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white text-lg font-bold py-4 px-12 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                        >
                            <span>Activate Recovery Plan</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                        <p className="mt-4 text-xs text-slate-400">
                            Schedule your free 15-minute strategy call to implement this fix.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
