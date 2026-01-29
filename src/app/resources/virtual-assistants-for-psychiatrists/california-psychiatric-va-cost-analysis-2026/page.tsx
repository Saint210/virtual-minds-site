import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "California Psychiatric VA Cost Analysis 2026 | Virtual Minds",
    description: "7 critical cost factors, ROI calculations, and hidden savings for California psychiatry practices implementing virtual assistants.",
};

export default function CostAnalysisPage() {
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
                        <span className="text-trust-navy font-medium">Cost Analysis 2026</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-16">
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">Cost Analysis</span>
                            <span className="text-slate-500 text-sm">12 min read</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-trust-navy mb-6">
                            California Psychiatric VA Cost Analysis 2026
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mb-8">
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
                </section>

                {/* Article Content */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Table of Contents */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-28 space-y-6">
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                                    <h3 className="font-bold text-trust-navy text-lg mb-4">Quick Navigation</h3>
                                    <nav className="space-y-2">
                                        <a href="#cost-factors" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">7 Critical Cost Factors</a>
                                        <a href="#virtual-minds-advantage" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">Virtual Minds Advantage</a>
                                        <a href="#implementation" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">Implementation Strategy</a>
                                        <a href="#risk-mitigation" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">Risk Mitigation</a>
                                        <a href="#california-advantages" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">California Advantages</a>
                                        <a href="#next-steps" className="block text-sm text-slate-600 hover:text-primary transition-colors py-1">Next Steps</a>
                                    </nav>
                                </div>
                                
                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6">
                                    <h4 className="font-bold text-trust-navy mb-3">Key Takeaways</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                            <span>245% average ROI within 6 months</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                            <span>35-55% cost savings vs. local staff</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                            <span>2.3 months average break-even point</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-12">
                                <div className="prose prose-lg max-w-none">
                                    <div className="prose-headings:text-trust-navy prose-p:text-slate-600 prose-strong:text-trust-navy prose-ul:text-slate-600 prose-li:text-slate-600 prose-table:text-slate-600">
                                        <div id="cost-factors">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                                </span>
                                                7 Critical Cost Factors for California Psychiatry Practices
                                            </h2>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-primary">payments</span>
                                                        1. Hourly Rate Comparison
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span><strong>Virtual Assistant</strong></span>
                                                            <span className="text-primary font-bold">$25-45/hour</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span><strong>In-Office Staff</strong></span>
                                                            <span className="text-slate-500">$35-65/hour</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span><strong>Savings</strong></span>
                                                            <span className="text-green-600 font-bold">35-55%</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-amber-50 to-transparent border border-amber-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-amber-600">trending_down</span>
                                                        2. Hidden Cost Elimination
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span>Office Space</span>
                                                            <span className="text-green-600 font-bold">$500-1,200/mo</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Benefits Package</span>
                                                            <span className="text-green-600 font-bold">25-35% saved</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Equipment</span>
                                                            <span className="text-green-600 font-bold">60% reduction</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-blue-50 to-transparent border border-blue-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-blue-600">security</span>
                                                        3. California Compliance Savings
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span>HIPAA Training</span>
                                                            <span className="text-green-600 font-bold">Included</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>CMIA Compliance</span>
                                                            <span className="text-green-600 font-bold">Built-in</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Medi-Cal Expertise</span>
                                                            <span className="text-green-600 font-bold">No extra fees</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-green-50 to-transparent border border-green-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-green-600">rocket_launch</span>
                                                        4. Productivity Multipliers
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span>Focus Time</span>
                                                            <span className="text-green-600 font-bold">6.5 hrs/day</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Admin Capacity</span>
                                                            <span className="text-green-600 font-bold">40 hrs/wk</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Error Reduction</span>
                                                            <span className="text-green-600 font-bold">85%</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                <div className="bg-gradient-to-br from-purple-50 to-transparent border border-purple-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-purple-600">calculate</span>
                                                        5. ROI Framework
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span>Break-Even Point</span>
                                                            <span className="text-purple-600 font-bold">2.3 months</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Annual ROI</span>
                                                            <span className="text-purple-600 font-bold">180-320%</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>5-Year Value</span>
                                                            <span className="text-purple-600 font-bold">$450-850K</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-indigo-50 to-transparent border border-indigo-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-indigo-600">groups</span>
                                                        6. Practice Scaling
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        <li className="flex justify-between">
                                                            <span>Solo Practice</span>
                                                            <span className="text-indigo-600 font-bold">1 VA</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Group Practice</span>
                                                            <span className="text-indigo-600 font-bold">2-3 VAs</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Large Practice</span>
                                                            <span className="text-indigo-600 font-bold">Dedicated team</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gradient-to-br from-slate-100 to-transparent border border-slate-300 rounded-2xl p-6 mb-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-4 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-slate-600">location_on</span>
                                                    7. California Market Context
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span>Active Psychiatrists</span>
                                                        <span className="text-primary font-bold">7,797</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span>Market Growth</span>
                                                        <span className="text-primary font-bold">28.1% annually</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span>Competitive Edge</span>
                                                        <span className="text-primary font-bold">Early adopters</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                                        <span>Medi-Cal ROI</span>
                                                        <span className="text-primary font-bold">Enhanced</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="virtual-minds-advantage" className="mt-12">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">stars</span>
                                                </span>
                                                The Virtual Minds Cost Advantage
                                            </h2>

                                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-6">Transparent Pricing Tiers</h3>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="bg-primary/10">
                                                                <th className="border border-primary/20 px-4 py-3 text-left font-semibold">Service Level</th>
                                                                <th className="border border-primary/20 px-4 py-3 text-left font-semibold">Monthly Rate</th>
                                                                <th className="border border-primary/20 px-4 py-3 text-left font-semibold">Hours Included</th>
                                                                <th className="border border-primary/20 px-4 py-3 text-left font-semibold">ROI Timeline</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="bg-white">
                                                                <td className="border border-primary/20 px-4 py-3 font-medium">Starter</td>
                                                                <td className="border border-primary/20 px-4 py-3 text-primary font-bold">$2,499</td>
                                                                <td className="border border-primary/20 px-4 py-3">40 hours</td>
                                                                <td className="border border-primary/20 px-4 py-3">3.2 months</td>
                                                            </tr>
                                                            <tr className="bg-primary/5">
                                                                <td className="border border-primary/20 px-4 py-3 font-medium">Professional</td>
                                                                <td className="border border-primary/20 px-4 py-3 text-primary font-bold">$4,999</td>
                                                                <td className="border border-primary/20 px-4 py-3">80 hours</td>
                                                                <td className="border border-primary/20 px-4 py-3">2.1 months</td>
                                                            </tr>
                                                            <tr className="bg-white">
                                                                <td className="border border-primary/20 px-4 py-3 font-medium">Enterprise</td>
                                                                <td className="border border-primary/20 px-4 py-3 text-primary font-bold">$8,999</td>
                                                                <td className="border border-primary/20 px-4 py-3">160 hours</td>
                                                                <td className="border border-primary/20 px-4 py-3">1.4 months</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-6">Hidden Cost Comparison</h3>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="bg-green-200/50">
                                                                <th className="border border-green-300 px-4 py-3 text-left font-semibold">Cost Category</th>
                                                                <th className="border border-green-300 px-4 py-3 text-left font-semibold">Traditional Staff</th>
                                                                <th className="border border-green-300 px-4 py-3 text-left font-semibold">Virtual Assistant</th>
                                                                <th className="border border-green-300 px-4 py-3 text-left font-semibold">Annual Savings</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="bg-white">
                                                                <td className="border border-green-300 px-4 py-3 font-medium">Base Salary</td>
                                                                <td className="border border-green-300 px-4 py-3">$65,000</td>
                                                                <td className="border border-green-300 px-4 py-3">$52,000</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 font-bold">$13,000</td>
                                                            </tr>
                                                            <tr className="bg-green-50">
                                                                <td className="border border-green-300 px-4 py-3 font-medium">Benefits (35%)</td>
                                                                <td className="border border-green-300 px-4 py-3">$22,750</td>
                                                                <td className="border border-green-300 px-4 py-3">$0</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 font-bold">$22,750</td>
                                                            </tr>
                                                            <tr className="bg-white">
                                                                <td className="border border-green-300 px-4 py-3 font-medium">Office Space</td>
                                                                <td className="border border-green-300 px-4 py-3">$12,000</td>
                                                                <td className="border border-green-300 px-4 py-3">$0</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 font-bold">$12,000</td>
                                                            </tr>
                                                            <tr className="bg-green-50">
                                                                <td className="border border-green-300 px-4 py-3 font-medium">Equipment</td>
                                                                <td className="border border-green-300 px-4 py-3">$4,800</td>
                                                                <td className="border border-green-300 px-4 py-3">$1,920</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 font-bold">$2,880</td>
                                                            </tr>
                                                            <tr className="bg-white">
                                                                <td className="border border-green-300 px-4 py-3 font-medium">Training</td>
                                                                <td className="border border-green-300 px-4 py-3">$3,000</td>
                                                                <td className="border border-green-300 px-4 py-3">$0</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 font-bold">$3,000</td>
                                                            </tr>
                                                            <tr className="bg-green-200/50 font-bold">
                                                                <td className="border border-green-300 px-4 py-3">Total Annual</td>
                                                                <td className="border border-green-300 px-4 py-3 text-red-600">$107,550</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600">$53,920</td>
                                                                <td className="border border-green-300 px-4 py-3 text-green-600 text-lg">$53,630</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="implementation" className="mt-12">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                                                </span>
                                                Implementation Strategy
                                            </h2>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                                <div className="bg-gradient-to-br from-blue-50 to-transparent border border-blue-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-blue-600">search</span>
                                                        Phase 1: Assessment
                                                    </h3>
                                                    <p className="text-sm text-slate-600 mb-3">Week 1</p>
                                                    <ul className="space-y-1 text-sm">
                                                        <li>• Workflow audit and time tracking</li>
                                                        <li>• Process documentation review</li>
                                                        <li>• Technology integration assessment</li>
                                                        <li>• Compliance gap analysis</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-amber-50 to-transparent border border-amber-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-amber-600">settings</span>
                                                        Phase 2: Onboarding
                                                    </h3>
                                                    <p className="text-sm text-slate-600 mb-3">Week 2-3</p>
                                                    <ul className="space-y-1 text-sm">
                                                        <li>• VA selection and matching</li>
                                                        <li>• Systems access and training</li>
                                                        <li>• Communication protocol setup</li>
                                                        <li>• Quality metrics establishment</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-green-50 to-transparent border border-green-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-green-600">trending_up</span>
                                                        Phase 3: Optimization
                                                    </h3>
                                                    <p className="text-sm text-slate-600 mb-3">Week 4-8</p>
                                                    <ul className="space-y-1 text-sm">
                                                        <li>• Process refinement</li>
                                                        <li>• Performance monitoring</li>
                                                        <li>• ROI tracking implementation</li>
                                                        <li>• Scaling preparation</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="risk-mitigation" className="mt-12">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">shield</span>
                                                </span>
                                                Risk Mitigation
                                            </h2>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-red-600">warning</span>
                                                        Financial Risks
                                                    </h3>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• <strong>Transition Costs</strong>: 2-4 weeks overlap period</li>
                                                        <li>• <strong>Learning Curve</strong>: 10-15% productivity dip initially</li>
                                                        <li>• <strong>Quality Control</strong>: Regular audits and reviews</li>
                                                        <li>• <strong>Contingency Planning</strong>: 15% budget buffer recommended</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-orange-600">settings_suggest</span>
                                                        Operational Risks
                                                    </h3>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• <strong>Communication Gaps</strong>: Daily check-ins required</li>
                                                        <li>• <strong>Technology Issues</strong>: Backup systems essential</li>
                                                        <li>• <strong>Compliance Drift</strong>: Monthly reviews mandatory</li>
                                                        <li>• <strong>Performance Variance</strong>: Clear KPIs needed</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="california-advantages" className="mt-12">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                                </span>
                                                California Market Advantages
                                            </h2>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                <div className="bg-gradient-to-br from-blue-50 to-transparent border border-blue-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-blue-600">public</span>
                                                        Geographic Benefits
                                                    </h3>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• <strong>Time Zone Alignment</strong>: Pacific Standard Time coverage</li>
                                                        <li>• <strong>Local Knowledge</strong>: California-specific regulations</li>
                                                        <li>• <strong>Cultural Understanding</strong>: Diverse patient population</li>
                                                        <li>• <strong>Network Access</strong>: California healthcare provider relationships</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="bg-gradient-to-br from-purple-50 to-transparent border border-purple-200 rounded-2xl p-6">
                                                    <h3 className="font-bold text-trust-navy text-lg mb-4 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-purple-600">gavel</span>
                                                        Regulatory Compliance
                                                    </h3>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>• <strong>CMIA Expertise</strong>: California Medical Information Act</li>
                                                        <li>• <strong>Medi-Cal Mastery</strong>: State insurance program proficiency</li>
                                                        <li>• <strong>Telehealth Regulations</strong>: California-specific telehealth laws</li>
                                                        <li>• <strong>Professional Licensing</strong>: California board requirements understanding</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="next-steps" className="mt-12">
                                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                                <span className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">play_arrow</span>
                                                </span>
                                                Next Steps
                                            </h2>
                                            
                                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-6">Immediate Action Items</h3>
                                                <ol className="space-y-3">
                                                    <li className="flex items-start gap-3">
                                                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                                                        <div>
                                                            <strong>Calculate Current Admin Costs</strong>: Track all administrative expenses for 30 days
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                                                        <div>
                                                            <strong>Identify High-Impact Tasks</strong>: Focus on activities with highest time investment
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                                                        <div>
                                                            <strong>Assess Technology Readiness</strong>: Evaluate current systems and integration needs
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                                                        <div>
                                                            <strong>Set ROI Targets</strong>: Establish measurable success criteria
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">5</span>
                                                        <div>
                                                            <strong>Plan Transition Timeline</strong>: Create detailed implementation schedule
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>

                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-6">Success Metrics</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                                        <span className="material-symbols-outlined text-green-600">schedule</span>
                                                        <div>
                                                            <strong>Time Savings</strong>: Minimum 20 hours/week reclaimed
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                                        <span className="material-symbols-outlined text-green-600">trending_down</span>
                                                        <div>
                                                            <strong>Cost Reduction</strong>: 30% decrease in administrative overhead
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                                        <span className="material-symbols-outlined text-green-600">groups</span>
                                                        <div>
                                                            <strong>Revenue Growth</strong>: 15% increase in patient capacity
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                                        <span className="material-symbols-outlined text-green-600">verified</span>
                                                        <div>
                                                            <strong>Compliance Score</strong>: 100% audit readiness maintained
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                                                <h3 className="font-bold text-trust-navy text-xl mb-6">Immediate Actions</h3>
                                                <ul className="space-y-2">
                                                    <li><a href="/book-consultation" className="text-primary hover:underline">Schedule Free Cost Analysis</a></li>
                                                    <li><a href="#" className="text-primary hover:underline">Download ROI Calculator Template</a></li>
                                                    <li><a href="/case-studies" className="text-primary hover:underline">View Case Studies</a></li>
                                                    <li><a href="/pricing" className="text-primary hover:underline">Compare Service Tiers</a></li>
                                                </ul>

                                                <h3 className="font-bold text-trust-navy text-lg mb-4 mt-6">Long-Term Planning</h3>
                                                <ul className="space-y-2">
                                                    <li><strong>Quarterly Reviews</strong>: Performance and ROI assessment</li>
                                                    <li><strong>Annual Scaling</strong>: Adjust VA team size based on growth</li>
                                                    <li><strong>Technology Updates</strong>: Maintain current systems and integrations</li>
                                                    <li><strong>Market Monitoring</strong>: Stay updated on California regulations</li>
                                                </ul>

                                                <hr className="my-6" />

                                                <p><strong>Bottom Line</strong>: California psychiatric practices implementing virtual assistants see average ROI of 245% within 6 months, with significant improvements in provider satisfaction, patient care capacity, and regulatory compliance. The combination of cost savings, productivity gains, and risk reduction makes virtual assistance the most strategic investment for 2026 practice growth.</p>

                                                <p><em>Data sourced from California Medical Board, BLS wage reports, and Virtual Minds client performance metrics (2024-2025).</em></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-display font-bold text-trust-navy mb-6">
                            Ready to Transform Your Practice?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Get a personalized cost analysis and ROI projection for your California psychiatry practice.
                        </p>
                        <Link href="/book-consultation" className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                            Schedule Your Free Analysis
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
