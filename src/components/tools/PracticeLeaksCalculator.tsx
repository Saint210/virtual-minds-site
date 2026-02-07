"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PracticeLeaksCalculatorProps {
    initialRent?: number;
    cityName?: string;
}

export default function PracticeLeaksCalculator({ initialRent = 2500, cityName }: PracticeLeaksCalculatorProps) {
    // State for user inputs
    const [adminHours, setAdminHours] = useState(15);
    const [activePatients, setActivePatients] = useState(40);
    const [monthlyRent, setMonthlyRent] = useState(initialRent);
    const [hourlyRate, setHourlyRate] = useState(300);

    // State for calculated values
    const [annualAdminCost, setAnnualAdminCost] = useState(0);
    const [annualRentSavings, setAnnualRentSavings] = useState(0);
    const [potentialRevenueGain, setPotentialRevenueGain] = useState(0);
    const [totalAnnualImpact, setTotalAnnualImpact] = useState(0);

    // Constants for calculation
    const IN_HOUSE_ADMIN_COST = 45; // Hourly cost of in-house staff (w/ benefits)
    const VIRTUAL_ADMIN_COST = 24; // Hourly cost of Virtual Minds VA
    const ADMIN_EFFICIENCY_MULTIPLIER = 1.4; // Virtual VAs are faster/focused

    useEffect(() => {
        // 1. Calculate Admin Staff Savings
        // In-house yearly cost vs Virtual yearly cost
        const inHouseYearly = adminHours * IN_HOUSE_ADMIN_COST * 52;
        // Virtual efficient hours (assuming they do same work in less time or straight trade)
        const virtualYearly = adminHours * VIRTUAL_ADMIN_COST * 52;
        const adminSavings = inHouseYearly - virtualYearly;

        // 2. Rent Savings (Assumes you could downsize or sub-lease space)
        // Illustrative estimate: significant portion of rent is typically for admin/waiting space overhead
        const rentSavings = monthlyRent * 12 * 0.25;

        // 3. Revenue Gain (Opportunity Cost)
        // Assumption: For every 20 active patients, you lose ~1 hour/week to non-billable admin tasks
        // that a specialized VA could handle (scheduling, refills, insurance calls).
        const reclaimedHoursPerWeek = activePatients / 20;
        const revenueGain = reclaimedHoursPerWeek * hourlyRate * 50; // 50 weeks

        setAnnualAdminCost(adminSavings);
        setAnnualRentSavings(rentSavings);
        setPotentialRevenueGain(revenueGain);
        setTotalAnnualImpact(adminSavings + rentSavings + revenueGain);

    }, [adminHours, activePatients, monthlyRent, hourlyRate]);

    // Formatting helper
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200">
            <div className="flex flex-col lg:flex-row">

                {/* LEFT: Inputs Section */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-slate-50 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D2691E] to-[#B8860B]"></div>

                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-2">
                        {cityName ? `${cityName} Practice Audit` : 'Practice Leakage Audit'}
                    </h3>
                    <p className="text-slate-500 mb-8 text-sm">
                        {cityName
                            ? `Adjust the sliders to match your current ${cityName} practice reality.`
                            : 'Adjust the sliders to match your current practice reality.'
                        }
                    </p>

                    <div className="space-y-8">
                        {/* Input 1: Admin Hours */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Weekly Admin Hours</label>
                                <span className="text-[#D2691E] font-bold">{adminHours} hrs/wk</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="60"
                                value={adminHours}
                                onChange={(e) => setAdminHours(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-400 mt-1">Time spent on scheduling, billing, & intake (staff + you).</p>
                        </div>

                        {/* Input 2: Monthly Rent */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Monthly Office Expense</label>
                                <span className="text-[#D2691E] font-bold">${monthlyRent.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="100"
                                value={monthlyRent}
                                onChange={(e) => setMonthlyRent(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-400 mt-1">Rent, utilities, parking, cleaning for office space.</p>
                        </div>

                        {/* Input 3: Hourly Rate */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Your Hourly Clinical Rate</label>
                                <span className="text-[#D2691E] font-bold">${hourlyRate}/hr</span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="800"
                                step="10"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-400 mt-1">Estimates the value of your clinical time lost to admin work.</p>
                        </div>

                        {/* Input 4: Active Patients (Proxy for complexity) */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Active Patient Load</label>
                                <span className="text-[#D2691E] font-bold">{activePatients} patients</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="150"
                                value={activePatients}
                                onChange={(e) => setActivePatients(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-400 mt-1">Estimates billing complexity and "Lost Revenue" potential.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results Section (Dark Mode) */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-[#2A2A2A] text-white flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10">
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 border-l-4 border-[#D2691E] pl-4">
                            Projected Annual Impact
                        </h4>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-slate-300 text-sm">Staff Overhead Savings</span>
                                <span className="text-xl font-bold text-green-400">+{formatCurrency(annualAdminCost)}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-slate-300 text-sm">Office Space Savings</span>
                                <span className="text-xl font-bold text-green-400">+{formatCurrency(annualRentSavings)}</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                <span className="text-slate-300 text-sm">Reclaimed Clinical Revenue</span>
                                <span className="text-xl font-bold text-[#D2691E]">+{formatCurrency(potentialRevenueGain)}</span>
                            </div>
                        </div>

                        <div className="mt-10 mb-8">
                            <p className="text-slate-400 text-sm mb-1">Total Annual Value Unlocked</p>
                            <div className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
                                {formatCurrency(totalAnnualImpact)}
                            </div>
                        </div>

                        <Link
                            href="/book-consultation"
                            className="block w-full text-center bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                        >
                            Start Recovering This Revenue
                        </Link>

                        <p className="text-center text-xs text-slate-500 mt-4">
                            *Illustrative estimates based on California market trends. Not a guarantee of results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
