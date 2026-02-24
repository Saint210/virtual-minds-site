"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTracking } from "@/hooks/useTracking";
import { submitCalculatorData } from "@/app/actions/submitCalculatorData";

interface PracticeLeaksCalculatorProps {
    initialRent?: number;
    cityName?: string;
}

export default function PracticeLeaksCalculator({ initialRent = 2500, cityName }: PracticeLeaksCalculatorProps) {
    // Tracking
    const { trackCalculatorView, trackCalculatorInteraction, trackCalculatorResult, trackCTAClick } = useTracking();
    const calculatorRef = useRef<HTMLDivElement>(null);
    const [hasTrackedView, setHasTrackedView] = useState(false);

    // Modals & State
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false); // Track if user actually used the tool

    // State for user inputs
    const [adminHours, setAdminHours] = useState(15);
    const [activePatients, setActivePatients] = useState(40);
    const [targetPatients, setTargetPatients] = useState(60); // Default to 50% growth
    const [monthlyRent, setMonthlyRent] = useState(initialRent);
    const [hourlyRate, setHourlyRate] = useState(300);

    // State for calculated values
    const [annualAdminCost, setAnnualAdminCost] = useState(0);
    const [annualRentSavings, setAnnualRentSavings] = useState(0);
    const [potentialRevenueGain, setPotentialRevenueGain] = useState(0);
    const [totalAnnualImpact, setTotalAnnualImpact] = useState(0);

    // Constants for calculation
    const IN_HOUSE_ADMIN_COST = 45; // Hourly cost of in-house staff (w/ benefits)
    const VIRTUAL_ADMIN_COST = 60000 / 52 / 15; // Normalized to ~$77/hr based on $5k/mo avg for 15hrs/wk pack
    // SIMPLIFIED LOGIC: If we want to show $60k/yr as the cost for the "solution" regardless of hours, we should just use that.
    // BUT, the calculator allows 5-60 hours.
    // Let's keep it dynamic but scaled to the $5k/mo anchor for the default 15 hours.
    // $60,000 / 52 weeks / 15 hours = $76.92/hr effective rate for the "Executive" service.

    // const ADMIN_EFFICIENCY_MULTIPLIER = 1.4; // Virtual VAs are faster/focused

    useEffect(() => {
        // 1. Calculate Admin Staff Savings
        // In-house yearly cost
        const inHouseYearly = adminHours * IN_HOUSE_ADMIN_COST * 52;

        // Virtual yearly cost (Dynamic based on "Average $5k/mo for 15 hours")
        // If they need more hours, we scale it up.
        // Base rate: $77/hr (approx).
        const virtualRate = 77;
        const virtualYearly = adminHours * virtualRate * 52;

        const adminSavings = inHouseYearly - virtualYearly;
        // Note: This might turn negative if "in-house" is $45 and "virtual" is $77.
        // But the "Value" is in the REVENUE GAIN, not just staff arbitrage.
        // Let's stick to the user's "Revenue Recovery" focus.

        // Actually, if the cost is $5k/mo, and they are saving $20k/mo in leaks... it works.
        // BUT, if we show "Admin Savings" as negative, it might look bad.
        // Let's re-frame "Admin Savings" to just "Cost of Solution" in the UI calculations?
        // The calculator logic `totalAnnualImpact` = `adminSavings` + `rentSavings` + `revenueGain`.
        // If `adminSavings` is negative, it reduces the total impact.
        // Let's set `VIRTUAL_ADMIN_COST` to be competitive or just rely on the Revenue Gain to drive the "Total Impact"

        // RE-READ: User said "charges on average 5k a month".
        // If we use $77/hr, `adminSavings` (Cost diff) will be: ($45 - $77) * 15 * 52 = -$25k.
        // This effectively says "It costs MORE to hire us than a cheap in-house person".
        // WHICH IS TRUE for "Executive" talent.
        // The ROI comes from `revenueGain`.
        // Let's use the actual numbers.

        const adminCostDiff = (adminHours * 45 * 52) - (adminHours * 77 * 52);

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

    // Track when calculator enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasTrackedView) {
                    trackCalculatorView('practice_leaks');
                    setHasTrackedView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (calculatorRef.current) {
            observer.observe(calculatorRef.current);
        }

        return () => observer.disconnect();
    }, [hasTrackedView, trackCalculatorView]);

    // Track slider changes (debounced) - Admin Hours
    useEffect(() => {
        const timer = setTimeout(() => {
            if (hasTrackedView) {
                trackCalculatorInteraction('practice_leaks', 'admin_hours', adminHours);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [adminHours, hasTrackedView, trackCalculatorInteraction]);

    // Track slider changes - Active Patients
    useEffect(() => {
        const timer = setTimeout(() => {
            if (hasTrackedView) {
                trackCalculatorInteraction('practice_leaks', 'active_patients', activePatients);
                // Auto-adjust target if active > target
                if (activePatients >= targetPatients) {
                    setTargetPatients(Math.ceil(activePatients * 1.5));
                }
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [activePatients, hasTrackedView, trackCalculatorInteraction, targetPatients]);

    // Track slider changes - Target Patients
    useEffect(() => {
        const timer = setTimeout(() => {
            if (hasTrackedView) {
                trackCalculatorInteraction('practice_leaks', 'target_patients', targetPatients);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [targetPatients, hasTrackedView, trackCalculatorInteraction]);

    // Track slider changes - Monthly Rent
    useEffect(() => {
        const timer = setTimeout(() => {
            if (hasTrackedView) {
                trackCalculatorInteraction('practice_leaks', 'monthly_rent', monthlyRent);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [monthlyRent, hasTrackedView, trackCalculatorInteraction]);

    // Track slider changes - Hourly Rate
    useEffect(() => {
        const timer = setTimeout(() => {
            if (hasTrackedView) {
                trackCalculatorInteraction('practice_leaks', 'hourly_rate', hourlyRate);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [hourlyRate, hasTrackedView, trackCalculatorInteraction]);


    // ... inside useEffect ...
    // Track final results (after 3 seconds of no interaction)
    useEffect(() => {
        const timer = setTimeout(() => {
            // Only submit if they've actually interacted with the tool (prevents spam on page load)
            if (hasTrackedView && hasInteracted && totalAnnualImpact > 0) {

                // 1. Analytics Tracking (Plausible)
                trackCalculatorResult('practice_leaks', {
                    admin_hours: adminHours,
                    monthly_rent: monthlyRent,
                    hourly_rate: hourlyRate,
                    active_patients: activePatients,
                    target_patients: targetPatients,
                    growth_gap: targetPatients - activePatients,
                }, {
                    admin_savings: annualAdminCost,
                    rent_savings: annualRentSavings,
                    revenue_gain: potentialRevenueGain,
                    totalAnnualImpact: totalAnnualImpact,
                });

                // 2. The Data Siphon (Sanity Database)
                // We keep this purely for anonymous agg data, even if they don't submit email
                submitCalculatorData({
                    adminHours,
                    monthlyRent,
                    hourlyRate,
                    activePatients,
                    projectedRevenueGain: potentialRevenueGain,
                    city: cityName || "Website Visitor", // Better default than "Unknown"
                    source: window.location.pathname,
                    targetPatients: targetPatients
                });

            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [totalAnnualImpact, hasTrackedView, hasInteracted, adminHours, monthlyRent, hourlyRate, activePatients, annualAdminCost, annualRentSavings, potentialRevenueGain, trackCalculatorResult, cityName]);

    // Formatting helper
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(amount);
    };
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = require("next/navigation").useRouter(); // Using require to avoid top-level import conflict if any

    // Handle "Calculate" Click
    const handleCalculateClick = () => {
        trackCalculatorInteraction('practice_leaks', 'calculate_click', totalAnnualImpact);
        setShowEmailModal(true);
    };

    // Handle Form Submit
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 1. Analytics
        trackCalculatorResult('practice_leaks', {
            admin_hours: adminHours,
            monthly_rent: monthlyRent,
            hourly_rate: hourlyRate,
            active_patients: activePatients,
            email_captured: 1
        }, {
            totalAnnualImpact: totalAnnualImpact,
        });

        // 2. Submit to Sanity & Redirect
        const result = await submitCalculatorData({
            adminHours,
            monthlyRent,
            hourlyRate,
            activePatients,
            projectedRevenueGain: potentialRevenueGain,
            city: cityName || "Website Visitor",
            source: window.location.pathname,
            targetPatients: targetPatients,
            email: email
        });

        if (result.success && result.id) {
            // Redirect to Report Page
            router.push(`/tools/practice-leaks/report/${result.id}`);
        } else {
            console.error("Submission failed", result.error);
            setIsSubmitting(false);
            // Fallback: just show results inline if error? 
            // For now, let's just alert or keep them here.
            alert(`Error: ${result.error || "Submission failed"}. Please try again.`);
        }
    };


    return (
        <div ref={calculatorRef} className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200 relative">

            {/* EMAIL MODAL OVERLAY */}
            {showEmailModal && (
                <div className="absolute inset-0 z-50 bg-trust-navy/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
                        <button
                            onClick={() => setShowEmailModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div className="text-center mb-6">
                            <div className="size-12 rounded-full bg-green-100 mx-auto flex items-center justify-center text-green-600 mb-4">
                                <span className="material-symbols-outlined text-2xl">lock</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-trust-navy mb-2">Unlock Your Confidential Audit</h3>
                            <p className="text-slate-600 text-sm">
                                We have generated your custom efficiency report. Where should we send the secure link?
                            </p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only">Work Email</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-sm">mail</span>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your work email..."
                                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <span>Reveal My Report</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>
                        <p className="text-[10px] text-slate-400 text-center mt-4">
                            We respect your privacy. Your data is encrypted and never shared.
                        </p>
                    </div>
                </div>
            )}

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
                                aria-label="Weekly Admin Hours"
                                min="5"
                                max="60"
                                value={adminHours}
                                onChange={(e) => {
                                    setAdminHours(parseInt(e.target.value));
                                    setHasInteracted(true);
                                }}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-500 mt-1">Time spent on scheduling, billing, & intake (staff + you).</p>
                        </div>

                        {/* Input 2: Monthly Rent */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Monthly Facility & Overhead</label>
                                <span className="text-[#D2691E] font-bold">${monthlyRent.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                aria-label="Monthly Facility & Overhead"
                                min="0"
                                max="10000"
                                step="100"
                                value={monthlyRent}
                                onChange={(e) => {
                                    setMonthlyRent(parseInt(e.target.value));
                                    setHasInteracted(true);
                                }}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-500 mt-1">Rent, utilities, software, or home office equivalent.</p>
                        </div>

                        {/* Input 3: Hourly Rate */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Your Hourly Clinical Rate</label>
                                <span className="text-[#D2691E] font-bold">${hourlyRate}/hr</span>
                            </div>
                            <input
                                type="range"
                                aria-label="Your Hourly Clinical Rate"
                                min="100"
                                max="800"
                                step="10"
                                value={hourlyRate}
                                onChange={(e) => {
                                    setHourlyRate(parseInt(e.target.value));
                                    setHasInteracted(true);
                                }}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-500 mt-1">Estimates the value of your clinical time lost to admin work.</p>
                        </div>

                        {/* Input 4: Active Patients (Proxy for complexity) */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Active Patient Load</label>
                                <span className="text-[#D2691E] font-bold">{activePatients} patients</span>
                            </div>
                            <input
                                type="range"
                                aria-label="Active Patient Load"
                                min="10"
                                max="150"
                                value={activePatients}
                                onChange={(e) => {
                                    setActivePatients(parseInt(e.target.value));
                                    setHasInteracted(true);
                                }}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D2691E]"
                            />
                            <p className="text-xs text-slate-500 mt-1">Estimates billing complexity and "Lost Revenue" potential.</p>
                        </div>

                        {/* Input 5: Growth Goal (Target Patients) */}
                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-trust-navy flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
                                    12-Month Patient Goal
                                </label>
                                <span className="text-primary font-bold">{targetPatients} patients</span>
                            </div>
                            <input
                                type="range"
                                aria-label="12-Month Patient Goal"
                                min={activePatients}
                                max="300"
                                value={targetPatients}
                                onChange={(e) => {
                                    setTargetPatients(parseInt(e.target.value));
                                    setHasInteracted(true);
                                }}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <p className="text-xs text-slate-600 mt-1">
                                Gap: <span className="font-bold">{targetPatients - activePatients} new patients</span> needed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Results Section (Dark Mode) */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-[#2A2A2A] text-white flex flex-col justify-center relative overflow-hidden group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    {/* BLUR OVERLAY - REVEALED ON HOVER/INTERACTION IF WE WANTED, BUT HERE WE JUST SHOW A TEASER */}
                    {/* Actually, user wants flow: Adjust numbers -> See preview -> Click Calculate -> Gate -> Report. */}
                    {/* Since existing codebase showed results live, let's keep live results but GATE the "Actionable" part? */}
                    {/* Better: "Calculate" button replaces the live results to induce curiosity? */}
                    {/* COMPROMISE: Show "Potential Impact" but blur the exact final number until they click? */}
                    {/* User request: "Once they calculate... take them to page with report". */}
                    {/* So let's hide the BIG number and show "Calculation Ready". */}

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">

                        <div className="size-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                            <span className="material-symbols-outlined text-4xl text-[#D2691E]">analytics</span>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-400 mb-1 uppercase tracking-widest">Potential Annual Revenue Leak</h3>
                            <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 transition-all duration-300">
                                {formatCurrency(totalAnnualImpact)}
                            </div>
                            <p className="text-slate-400 text-sm max-w-xs mx-auto mb-6">
                                Based on your inputs, we have identified <span className="text-white font-bold">3 critical efficiency leaks</span> in your practice.
                            </p>
                        </div>

                        <button
                            onClick={handleCalculateClick}
                            className="bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-3"
                        >
                            <span>Generate Efficiency Report</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>

                        <div className="mt-8 bg-amber-950/40 rounded-lg p-5 border border-amber-500/30 text-left max-w-sm mx-auto shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition-all">
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-amber-500 shrink-0 text-2xl animate-pulse">warning</span>
                                <div>
                                    <p className="text-xs font-black text-amber-500 uppercase tracking-widest mb-1">Reality Check</p>
                                    <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
                                        We assume just <strong>3 mins/patient</strong>.
                                        Industry data suggests <strong>15 mins</strong> (5x higher). <br />
                                        <span className="text-white/90 border-b border-amber-500/50 pb-0.5">Your actual leak is likely much larger.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 mt-4">
                            *Includes full revenue analysis & recovery plan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
