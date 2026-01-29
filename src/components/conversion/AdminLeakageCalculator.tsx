"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLeakageCalculator() {
    const [sessionsPerWeek, setSessionsPerWeek] = useState(20);
    const [hourlyRate, setHourlyRate] = useState(300);

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
        <section id="calculator" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Context */}
                    <div className="lg:w-1/2">
                        <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm">Revenue Leakage Analysis</span>
                        <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mt-4 mb-6">
                            The "Hidden Tax" on Your Practice
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Most psychiatrists underestimate the financial impact of doing their own admin. Use this calculator to estimate how much revenue you are losing to unbilled time, no-shows, and administrative tasks.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Patients Seen Per Week: <span className="text-[#D2691E] text-lg">{sessionsPerWeek}</span>
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="60"
                                    step="1"
                                    value={sessionsPerWeek}
                                    onChange={handleSessionChange}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    Average Hourly Rate: <span className="text-[#D2691E] text-lg">${hourlyRate}</span>
                                </label>
                                <input
                                    type="range"
                                    min="150"
                                    max="600"
                                    step="25"
                                    value={hourlyRate}
                                    onChange={handleRateChange}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                                />
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-[#FAF8F3] rounded-2xl border border-[#D2691E]/10">
                            <h4 className="font-bold text-[#2A2A2A] mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#D2691E]">info</span>
                                How we calculate this:
                            </h4>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• 15 mins of admin tasks per patient session</li>
                                <li>• 15% industry-standard no-show rate (vs 5% with VA)</li>
                                <li>• Lost billing opportunity cost vs. admin time</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Results Card */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#2A2A2A] text-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E] rounded-full blur-[100px] opacity-20 -mr-16 -mt-16"></div>

                            <h3 className="text-center text-xl font-medium text-white/80 mb-8 relative z-10">Estimated Annual Revenue Loss</h3>

                            <div className="text-center mb-10 relative z-10">
                                <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-2">
                                    ${totalAnnualLeakage.toLocaleString()}
                                </div>
                                <p className="text-red-400 font-bold text-sm uppercase tracking-widest">Left on the table every year</p>
                            </div>

                            <div className="space-y-4 mb-10 relative z-10">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-white/70">Wasted Admin Hours</span>
                                    <span className="font-bold text-xl">{Math.round(weeklyAdminHours * 52)} hrs/yr</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-white/70">Monthly Opportunity Cost</span>
                                    <span className="font-bold text-xl text-[#D2691E]">${totalMonthlyLeakage.toLocaleString()}/mo</span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <Link
                                    href="/book-consultation"
                                    className="block w-full py-4 bg-white text-[#2A2A2A] text-center font-bold rounded-xl hover:bg-[#D2691E] hover:text-white transition-all shadow-lg"
                                >
                                    Stop The Leakage - Book Audit
                                </Link>
                                <p className="text-center text-white/50 text-xs mt-4">
                                    Based on conservative industry estimates. Your actual recovery may be higher.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
