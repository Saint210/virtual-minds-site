import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "California Psychiatric VA Cost Analysis 2026 | Virtual Minds",
    description: "7 critical cost factors, ROI calculations, and hidden savings for California psychiatry practices implementing virtual assistants.",
};

export default function CostAnalysisPageV2() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                {/* Breadcrumbs */}
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8">
                    <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                        <Link className="hover:text-primary" href="/">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link className="hover:text-primary" href="/resources/virtual-assistants-for-psychiatrists">Resources</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-trust-navy font-medium">Cost Analysis 2026 (V2)</span>
                    </nav>
                </div>

                {/* Hero Section - Version 2: Minimal & Clean */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-16">
                    <div className="text-center py-16">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Cost Analysis</span>
                            <span className="text-slate-500 text-sm">12 min read</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-trust-navy mb-6">
                            California Psychiatric<br />VA Cost Analysis 2026
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
                            7 critical cost factors, ROI calculations, and hidden savings for California psychiatry practices implementing virtual assistants.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/book-consultation" className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                                Get Custom Cost Analysis
                            </Link>
                            <Link href="/resources/virtual-assistants-for-psychiatrists" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-colors">
                                Back to Resources
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Key Metrics Section */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-2xl border border-slate-100">
                            <div className="text-4xl font-bold text-primary mb-2">245%</div>
                            <div className="text-slate-600">Average ROI within 6 months</div>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl border border-slate-100">
                            <div className="text-4xl font-bold text-primary mb-2">35-55%</div>
                            <div className="text-slate-600">Cost savings vs. local staff</div>
                        </div>
                        <div className="text-center p-8 bg-white rounded-2xl border border-slate-100">
                            <div className="text-4xl font-bold text-primary mb-2">2.3</div>
                            <div className="text-slate-600">Months average break-even</div>
                        </div>
                    </div>
                </section>

                {/* Article Content - Version 2: Simple & Scannable */}
                <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-24">
                    <div className="bg-white rounded-2xl border border-slate-100 p-12">

                        {/* 7 Critical Cost Factors */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-trust-navy mb-8">7 Critical Cost Factors</h2>

                            <div className="space-y-6">
                                <div className="border-l-4 border-primary pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">1. Hourly Rate Comparison</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Virtual Assistant</strong>: $25-45/hour</div>
                                        <div>• <strong>In-Office Staff</strong>: $35-65/hour</div>
                                        <div>• <strong>California Minimum Wage</strong>: $16.90/hour</div>
                                        <div>• <strong>Savings Range</strong>: 35-55%</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-amber-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">2. Hidden Cost Elimination</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Office Space</strong>: $500-1,200/month saved</div>
                                        <div>• <strong>Benefits Package</strong>: 25-35% eliminated</div>
                                        <div>• <strong>Equipment</strong>: 60% reduction in costs</div>
                                        <div>• <strong>Training</strong>: Included in VA rate</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">3. California Compliance Savings</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>HIPAA Training</strong>: $2,000-5,000/year included</div>
                                        <div>• <strong>California Privacy</strong>: Built into service</div>
                                        <div>• <strong>Medi-Cal Expertise</strong>: No extra fees</div>
                                        <div>• <strong>Audit Preparation</strong>: Documentation included</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">4. Productivity Multipliers</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Focus Time</strong>: 6.5 hours/day reclaimed</div>
                                        <div>• <strong>Admin Capacity</strong>: 40 hours/week dedicated</div>
                                        <div>• <strong>Error Reduction</strong>: 85% decrease in mistakes</div>
                                        <div>• <strong>Patient Volume</strong>: 20-30% increase</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">5. ROI Framework</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Break-Even Point</strong>: 2.3 months average</div>
                                        <div>• <strong>Annual ROI</strong>: 180-320% typical</div>
                                        <div>• <strong>5-Year Value</strong>: $450,000-850,000</div>
                                        <div>• <strong>Risk Mitigation</strong>: Coverage built-in</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">6. Practice Scaling</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Solo Practice</strong>: 1 VA replaces 0.8 FTE</div>
                                        <div>• <strong>Group Practice</strong>: 2-3 VAs optimal</div>
                                        <div>• <strong>Large Practice</strong>: Dedicated VA team</div>
                                        <div>• <strong>Telehealth Expansion</strong>: VAs scale with volume</div>
                                    </div>
                                </div>

                                <div className="border-l-4 border-slate-500 pl-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-2">7. California Market Context</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                        <div>• <strong>Psychiatrists</strong>: 7,797 active (2025)</div>
                                        <div>• <strong>Market Growth</strong>: 28.1% annually</div>
                                        <div>• <strong>Competitive Edge</strong>: Early adopters advantage</div>
                                        <div>• <strong>Medi-Cal ROI</strong>: Enhanced efficiency</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Tiers */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-trust-navy mb-8">Transparent Pricing Tiers</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="border border-slate-200 px-4 py-3 text-left">Service Level</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">Monthly Rate</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">Hours Included</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">ROI Timeline</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Starter</td>
                                            <td className="border border-slate-200 px-4 py-3 text-primary font-bold">$2,499</td>
                                            <td className="border border-slate-200 px-4 py-3">40 hours</td>
                                            <td className="border border-slate-200 px-4 py-3">3.2 months</td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Professional</td>
                                            <td className="border border-slate-200 px-4 py-3 text-primary font-bold">$4,999</td>
                                            <td className="border border-slate-200 px-4 py-3">80 hours</td>
                                            <td className="border border-slate-200 px-4 py-3">2.1 months</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Enterprise</td>
                                            <td className="border border-slate-200 px-4 py-3 text-primary font-bold">$8,999</td>
                                            <td className="border border-slate-200 px-4 py-3">160 hours</td>
                                            <td className="border border-slate-200 px-4 py-3">1.4 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Hidden Cost Comparison */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-trust-navy mb-8">Hidden Cost Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-green-50">
                                            <th className="border border-slate-200 px-4 py-3 text-left">Cost Category</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">Traditional Staff</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">Virtual Assistant</th>
                                            <th className="border border-slate-200 px-4 py-3 text-left">Annual Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Base Salary</td>
                                            <td className="border border-slate-200 px-4 py-3">$65,000</td>
                                            <td className="border border-slate-200 px-4 py-3">$52,000</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 font-bold">$13,000</td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Benefits (35%)</td>
                                            <td className="border border-slate-200 px-4 py-3">$22,750</td>
                                            <td className="border border-slate-200 px-4 py-3">$0</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 font-bold">$22,750</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Office Space</td>
                                            <td className="border border-slate-200 px-4 py-3">$12,000</td>
                                            <td className="border border-slate-200 px-4 py-3">$0</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 font-bold">$12,000</td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Equipment</td>
                                            <td className="border border-slate-200 px-4 py-3">$4,800</td>
                                            <td className="border border-slate-200 px-4 py-3">$1,920</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 font-bold">$2,880</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-200 px-4 py-3 font-medium">Training</td>
                                            <td className="border border-slate-200 px-4 py-3">$3,000</td>
                                            <td className="border border-slate-200 px-4 py-3">$0</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 font-bold">$3,000</td>
                                        </tr>
                                        <tr className="bg-green-50 font-bold">
                                            <td className="border border-slate-200 px-4 py-3">Total Annual</td>
                                            <td className="border border-slate-200 px-4 py-3 text-red-600">$107,550</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600">$53,920</td>
                                            <td className="border border-slate-200 px-4 py-3 text-green-600 text-lg">$53,630</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Implementation Strategy */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-trust-navy mb-8">Implementation Strategy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                                    <h3 className="font-bold text-trust-navy mb-2">Assessment</h3>
                                    <p className="text-slate-600 text-sm">Week 1: Workflow audit, process review, tech assessment, compliance analysis</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                                    <h3 className="font-bold text-trust-navy mb-2">Onboarding</h3>
                                    <p className="text-slate-600 text-sm">Week 2-3: VA selection, systems access, communication setup, quality metrics</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                                    <h3 className="font-bold text-trust-navy mb-2">Optimization</h3>
                                    <p className="text-slate-600 text-sm">Week 4-8: Process refinement, performance monitoring, ROI tracking, scaling</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-slate-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-trust-navy mb-4">Bottom Line</h2>
                            <p className="text-slate-600 mb-4">
                                California psychiatric practices implementing virtual assistants see average ROI of 245% within 6 months, with significant improvements in provider satisfaction, patient care capacity, and regulatory compliance. The combination of cost savings, productivity gains, and risk reduction makes virtual assistance the most strategic investment for 2026 practice growth.
                            </p>
                            <p className="text-sm text-slate-500">
                                <em>Data sourced from California Medical Board, BLS wage reports, and Virtual Minds client performance metrics (2024-2025).</em>
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-24">
                    <div className="bg-primary text-white rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Transform Your Practice?
                        </h2>
                        <p className="text-xl mb-8">
                            Get a personalized cost analysis and ROI projection for your California psychiatry practice.
                        </p>
                        <Link href="/book-consultation" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all">
                            Schedule Your Free Analysis
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
