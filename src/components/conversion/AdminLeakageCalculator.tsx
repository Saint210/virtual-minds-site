"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLeakageCalculator() {
    const [sessionsPerWeek, setSessionsPerWeek] = useState(30);
    const [hourlyRate, setHourlyRate] = useState(400);

    // Assumptions based on industry data
    const adminMinutesPerSession = 15; // Charting, scheduling, billing per session
    const noShowRate = 0.15; // 15% without reminders
    const noShowRateWithVA = 0.05; // 5% with VA

    // Calculations
    const weeklyRevenue = sessionsPerWeek * hourlyRate;
    const weeklyAdminHours = (sessionsPerWeek * adminMinutesPerSession) / 60;

    // Opportunity Cost: Admin hours * Hourly Rate (money lost doing admin instead of seeing patients)
    const monthlyOpportunityCost = (weeklyAdminHours * hourlyRate) * 4;

    // No-Show Loss
    const weeklyNoShowLoss = (sessionsPerWeek / (1 - noShowRate) * noShowRate) * hourlyRate;
    const weeklyNoShowLossWithVA = (sessionsPerWeek / (1 - noShowRate) * noShowRateWithVA) * hourlyRate;
    const monthlyRecoverableRevenue = (weeklyNoShowLoss - weeklyNoShowLossWithVA) * 4;

    const totalMonthlyLeakage = monthlyOpportunityCost + monthlyRecoverableRevenue;
    const totalAnnualLeakage = totalMonthlyLeakage * 12;

    const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSessionsPerWeek(parseInt(e.target.value));
    };

    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHourlyRate(parseInt(e.target.value));
    };

    return (
        <section id="calculator" className="py-24 bg-[#EDE8E0] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Context */}
                    <div className="lg:w-1/2">
                        <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm">Revenue Leakage Analysis</span>
                        <h2 className="text-4xl font-serif font-bold text-trust-navy mt-4 mb-6">
                            The &quot;Hidden Tax&quot; on Your Practice
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            Most psychiatrists underestimate the financial impact of doing their own admin. Use this calculator to estimate how much revenue you are losing to unbilled time, no-shows, and administrative tasks.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Patients Seen Per Week: <span className="text-[#D2691E] text-xl">{sessionsPerWeek}</span>
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="60"
                                    step="1"
                                    value={sessionsPerWeek}
                                    onChange={handleSessionChange}
                                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Average Hourly Rate: <span className="text-[#D2691E] text-xl">${hourlyRate}</span>
                                </label>
                                <input
                                    type="range"
                                    min="150"
                                    max="600"
                                    step="25"
                                    value={hourlyRate}
                                    onChange={handleRateChange}
                                    className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                                />
                            </div>
                        </div>

                        <div className="mt-10 p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
                            <h4 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#D2691E]">info</span>
                                How we calculate this:
                            </h4>
                            <ul className="text-sm text-slate-500 space-y-3 font-medium">
                                <li className="flex items-center gap-2">• 15 mins of admin tasks per patient session</li>
                                <li className="flex items-center gap-2">• 15% industry-standard no-show rate (vs 5% with VA)</li>
                                <li className="flex items-center gap-2">• Lost billing opportunity cost vs. admin time</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Results Card */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-trust-navy text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E] rounded-full blur-[100px] opacity-10 -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"></div>

                            <h3
                                className="text-center text-[11px] font-black uppercase tracking-[0.2em] mb-8 relative"
                                style={{ color: '#FFFFFF', opacity: 1, zIndex: 50 }}
                            >
                                Estimated Annual Revenue Loss
                            </h3>

                            <div className="text-center mb-10 relative z-10">
                                <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-2 tracking-tight">
                                    ${Math.round(totalAnnualLeakage).toLocaleString()}
                                </div>
                                <p className="text-[#D2691E] font-black text-[10px] uppercase tracking-widest">Left on the table every year</p>
                            </div>

                            <div className="space-y-4 mb-10 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/5 pb-5">
                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Wasted Admin Hours</span>
                                    <span className="font-bold text-xl">{Math.round(weeklyAdminHours * 52)} hrs/yr</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-5">
                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Monthly Opportunity Cost</span>
                                    <span className="font-bold text-xl text-[#D2691E]">${Math.round(totalMonthlyLeakage).toLocaleString()}/mo</span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <Link
                                    href="/book-consultation"
                                    className="block w-full py-5 bg-[#D2691E] text-white text-center font-black text-lg rounded-2xl hover:bg-[#B8860B] transition-all shadow-xl shadow-[#D2691E]/20 hover:scale-[1.02]"
                                >
                                    Stop The Leakage - Book Audit
                                </Link>
                                <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-6">
                                    Based on conservative industry estimates.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
