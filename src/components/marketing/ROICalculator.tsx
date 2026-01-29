"use client";

import { useState } from "react";

export default function ROICalculator() {
    const [adminHours, setAdminHours] = useState(20);
    const [hourlyRate, setHourlyRate] = useState(150);
    const [errorRate, setErrorRate] = useState(5);
    const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
    const [priorAuthHours, setPriorAuthHours] = useState(5);

    const calculateSavings = () => {
        const adminSavings = adminHours * 4 * hourlyRate; // 4 weeks
        const priorAuthSavings = priorAuthHours * 4 * hourlyRate; // 4 weeks of prior auth time saved
        const billingSavings = monthlyRevenue * errorRate / 100;
        const totalSavings = adminSavings + priorAuthSavings + billingSavings;
        const annualSavings = totalSavings * 12;

        return {
            adminSavings,
            priorAuthSavings,
            billingSavings,
            totalSavings,
            annualSavings
        };
    };

    const savings = calculateSavings();

    return (
        <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
            {/* Modern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/10">
                {/* Animated Elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                        <span className="material-symbols-outlined text-primary">calculate</span>
                        <span>California Practice ROI Calculator</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Calculate Your Practice Savings
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        See exactly how much time and money your California psychiatric practice can save with a specialized virtual assistant
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Calculator Inputs */}
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:bg-white transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-trust-navy mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">business</span>
                            Practice Information
                        </h3>
                        
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-sm font-semibold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                                    Weekly Admin Hours
                                </label>
                                <input
                                    type="range"
                                    min="5"
                                    max="40"
                                    value={adminHours}
                                    onChange={(e) => setAdminHours(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs md:text-sm text-slate-600">
                                    <span>5 hours</span>
                                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">{adminHours} hours</span>
                                    <span>40 hours</span>
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-sm font-semibold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">medical_services</span>
                                    Weekly Prior Authorization Hours
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="20"
                                    value={priorAuthHours}
                                    onChange={(e) => setPriorAuthHours(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs md:text-sm text-slate-600">
                                    <span>0 hours</span>
                                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">{priorAuthHours} hours</span>
                                    <span>20 hours</span>
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-sm font-semibold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">payments</span>
                                    Hourly Rate ($)
                                </label>
                                <input
                                    type="range"
                                    min="50"
                                    max="300"
                                    step="10"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs md:text-sm text-slate-600">
                                    <span>$50</span>
                                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">${hourlyRate}</span>
                                    <span>$300</span>
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-sm font-semibold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">error</span>
                                    Billing Error Rate (%)
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="15"
                                    value={errorRate}
                                    onChange={(e) => setErrorRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs md:text-sm text-slate-600">
                                    <span>1%</span>
                                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">{errorRate}%</span>
                                    <span>15%</span>
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-sm font-semibold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                                    Monthly Revenue ($)
                                </label>
                                <input
                                    type="range"
                                    min="10000"
                                    max="200000"
                                    step="5000"
                                    value={monthlyRevenue}
                                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs md:text-sm text-slate-600">
                                    <span>$10k</span>
                                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">${(monthlyRevenue/1000).toFixed(0)}k</span>
                                    <span>$200k</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:scale-105 transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-semibold text-trust-navy mb-4 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-primary">savings</span>
                                Monthly Savings
                            </h3>
                            <p className="text-4xl md:text-5xl font-black text-primary mb-2 animate-pulse">
                                ${savings.totalSavings.toLocaleString()}
                            </p>
                            <p className="text-sm md:text-base text-slate-600">Per Month</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg hover:bg-white transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-bold text-trust-navy mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">assessment</span>
                                Annual Impact
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                    <span className="text-sm md:text-base text-slate-600 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                                        Admin Time Savings
                                    </span>
                                    <span className="font-bold text-trust-navy">${savings.adminSavings.toLocaleString()}/mo</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                    <span className="text-sm md:text-base text-slate-600 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">medical_services</span>
                                        Prior Authorization Time Saved
                                    </span>
                                    <span className="font-bold text-trust-navy">${savings.priorAuthSavings.toLocaleString()}/mo</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                                    <span className="text-sm md:text-base text-slate-600 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">payments</span>
                                        Billing Error Recovery
                                    </span>
                                    <span className="font-bold text-trust-navy">${savings.billingSavings.toLocaleString()}/mo</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-base md:text-lg font-bold text-trust-navy flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">trending_up</span>
                                        Annual Total
                                    </span>
                                    <span className="text-xl md:text-2xl font-black text-primary">${savings.annualSavings.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="/book-consultation"
                                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                    Start Saving Today
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
