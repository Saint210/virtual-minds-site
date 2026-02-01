import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "California Psychiatric VA Cost Analysis 2026 | Virtual Minds",
    description: "7 critical cost factors, ROI calculations, and hidden savings for California psychiatry practices implementing virtual assistants.",
};

export default function CostAnalysisPageV3() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navbar />
            <main className="flex-grow">
                {/* Breadcrumbs */}
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8">
                    <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                        <Link className="hover:text-primary" href="/">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link className="hover:text-primary" href="/resources/virtual-assistants-for-psychiatrists">Resources</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-trust-navy font-medium">Cost Analysis 2026 (V3)</span>
                    </nav>
                </div>

                {/* Hero Section - Version 3: Bold & Visual */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-20"></div>
                    <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">Cost Analysis</span>
                                    <span className="text-slate-600 text-sm">12 min read</span>
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight text-trust-navy mb-6">
                                    California Psychiatric<br />VA Cost Analysis 2026
                                </h1>
                                <p className="text-xl text-slate-600 mb-8">
                                    7 critical cost factors, ROI calculations, and hidden savings for California psychiatry practices implementing virtual assistants.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                                        Get Custom Cost Analysis
                                    </Link>
                                    <Link href="/resources/virtual-assistants-for-psychiatrists" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-colors">
                                        Back to Resources
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                                    <div className="text-center mb-6">
                                        <div className="text-5xl font-bold text-primary mb-2">245%</div>
                                        <div className="text-slate-600">Average ROI</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600 mb-1">35-55%</div>
                                            <div className="text-sm text-slate-600">Cost Savings</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600 mb-1">2.3</div>
                                            <div className="text-sm text-slate-600">Months Break-Even</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content - Version 3: Card-Based & Interactive */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* 7 Critical Cost Factors */}
                            <div>
                                <h2 className="text-3xl font-bold text-trust-navy mb-8 flex items-center gap-3">
                                    <span className="bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
                                    </span>
                                    7 Critical Cost Factors
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-primary/10 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-primary">payments</span>
                                            </div>
                                            <h3 className="font-bold text-trust-navy">Hourly Rates</h3>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Virtual Assistant</span>
                                                <span className="text-primary font-bold">$25-45/hr</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>In-Office Staff</span>
                                                <span className="text-slate-500">$35-65/hr</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Savings</span>
                                                <span className="text-green-600 font-bold">35-55%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-amber-100 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-amber-600">trending_down</span>
                                            </div>
                                            <h3 className="font-bold text-trust-navy">Hidden Costs</h3>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Office Space</span>
                                                <span className="text-green-600 font-bold">$500-1,200/mo</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Benefits</span>
                                                <span className="text-green-600 font-bold">25-35% saved</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Equipment</span>
                                                <span className="text-green-600 font-bold">60% reduction</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-blue-600">security</span>
                                            </div>
                                            <h3 className="font-bold text-trust-navy">Compliance</h3>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>HIPAA Training</span>
                                                <span className="text-green-600 font-bold">Included</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>State Privacy Compliance</span>
                                                <span className="text-green-600 font-bold">Built-in</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Medi-Cal Expertise</span>
                                                <span className="text-green-600 font-bold">No extra fees</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-green-100 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-green-600">rocket_launch</span>
                                            </div>
                                            <h3 className="font-bold text-trust-navy">Productivity</h3>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Focus Time</span>
                                                <span className="text-green-600 font-bold">6.5 hrs/day</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Admin Capacity</span>
                                                <span className="text-green-600 font-bold">40 hrs/wk</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Error Reduction</span>
                                                <span className="text-green-600 font-bold">85%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ROI Framework */}
                            <div>
                                <h2 className="text-3xl font-bold text-trust-navy mb-8 flex items-center gap-3">
                                    <span className="bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-primary text-2xl">calculate</span>
                                    </span>
                                    ROI Framework
                                </h2>

                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">2.3</div>
                                            <div className="text-slate-600 mb-4">Months Break-Even</div>
                                            <p className="text-sm text-slate-600">Average time to recover initial investment</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">180-320%</div>
                                            <div className="text-slate-600 mb-4">Annual ROI</div>
                                            <p className="text-sm text-slate-600">Typical return on investment range</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">$450-850K</div>
                                            <div className="text-slate-600 mb-4">5-Year Value</div>
                                            <p className="text-sm text-slate-600">Net value per practice over 5 years</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">Built-in</div>
                                            <div className="text-slate-600 mb-4">Risk Mitigation</div>
                                            <p className="text-sm text-slate-600">Downtime coverage included</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Tiers */}
                            <div>
                                <h2 className="text-3xl font-bold text-trust-navy mb-8 flex items-center gap-3">
                                    <span className="bg-primary/10 p-3 rounded-xl">
                                        <span className="material-symbols-outlined text-primary text-2xl">stars</span>
                                    </span>
                                    Transparent Pricing Tiers
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <h3 className="font-bold text-trust-navy text-lg mb-4">Starter</h3>
                                        <div className="text-3xl font-bold text-primary mb-4">$2,499</div>
                                        <div className="text-slate-600 mb-6">40 hours/month</div>
                                        <div className="text-sm text-slate-600 mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Basic administrative support</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Email & phone support</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Monthly reporting</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-slate-600 mb-2">ROI Timeline</div>
                                            <div className="font-bold text-primary">3.2 months</div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 shadow-lg border border-primary/20 hover:shadow-xl transition-shadow relative">
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                                            Most Popular
                                        </div>
                                        <h3 className="font-bold text-trust-navy text-lg mb-4">Professional</h3>
                                        <div className="text-3xl font-bold text-primary mb-4">$4,999</div>
                                        <div className="text-slate-600 mb-6">80 hours/month</div>
                                        <div className="text-sm text-slate-600 mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Advanced administrative support</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Priority support</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Bi-weekly reporting</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-slate-600 mb-2">ROI Timeline</div>
                                            <div className="font-bold text-primary">2.1 months</div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                                        <h3 className="font-bold text-trust-navy text-lg mb-4">Enterprise</h3>
                                        <div className="text-3xl font-bold text-primary mb-4">$8,999</div>
                                        <div className="text-slate-600 mb-6">160 hours/month</div>
                                        <div className="text-sm text-slate-600 mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Full administrative support</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Dedicated support team</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                                                <span>Weekly reporting</span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm text-slate-600 mb-2">ROI Timeline</div>
                                            <div className="font-bold text-primary">1.4 months</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 space-y-8">

                                {/* Quick Stats */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                                    <h3 className="font-bold text-trust-navy text-lg mb-4">Quick Stats</h3>
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">7,797</div>
                                            <div className="text-sm text-slate-600">Active Psychiatrists in CA</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">28.1%</div>
                                            <div className="text-sm text-slate-600">Annual Market Growth</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">$53,630</div>
                                            <div className="text-sm text-slate-600">Annual Savings</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Implementation Timeline */}
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                                    <h3 className="font-bold text-trust-navy text-lg mb-4">Implementation Timeline</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                                            <div>
                                                <div className="font-medium text-trust-navy">Assessment</div>
                                                <div className="text-sm text-slate-600">Week 1</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                                            <div>
                                                <div className="font-medium text-trust-navy">Onboarding</div>
                                                <div className="text-sm text-slate-600">Week 2-3</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                                            <div>
                                                <div className="font-medium text-trust-navy">Optimization</div>
                                                <div className="text-sm text-slate-600">Week 4-8</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-primary text-white rounded-2xl p-6">
                                    <h3 className="font-bold text-lg mb-4">Ready to Start?</h3>
                                    <p className="text-sm mb-6">Get your personalized cost analysis and ROI projection.</p>
                                    <Link href="/book-consultation" className="bg-white text-primary px-6 py-3 rounded-lg font-bold text-center block hover:bg-slate-100 transition-all">
                                        Schedule Free Analysis
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Line Section */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Bottom Line</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            California psychiatric practices implementing virtual assistants see average ROI of 245% within 6 months, with significant improvements in provider satisfaction, patient care capacity, and regulatory compliance.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/book-consultation" className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                                Get Started Today
                            </Link>
                            <Link href="/resources/virtual-assistants-for-psychiatrists" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-colors">
                                View More Resources
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
