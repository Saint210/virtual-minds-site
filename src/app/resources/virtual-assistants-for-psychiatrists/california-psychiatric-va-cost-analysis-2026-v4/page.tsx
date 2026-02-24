import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Psychiatric Virtual Assistant Cost Analysis 2026 | California VA Services",
    description: "Complete cost breakdown for psychiatric virtual assistants in California. Compare pricing, ROI calculations, and hidden savings for mental health practices.",
};

export default function CostAnalysisPageV4() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">
                    <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <Link className="hover:text-terracotta transition-colors" href="/">Home</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link className="hover:text-terracotta transition-colors" href="/resources/virtual-assistants-for-psychiatrists">Resources</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-terracotta font-semibold">Cost Analysis 2026</span>
                    </nav>
                </div>

                {/* Testimonial Quote */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
                    <div className="flex justify-start">
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border-l-4 border-terracotta shadow-sm max-w-lg flex items-start gap-4">
                            <Image alt="Dr. Michael Torres" className="w-14 h-14 rounded-full border-2 border-cream object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtRGwNk2r27dHDW-Q8EdizTO2ki4FIPM5bCcVa6mV7PI-zjWHwb6Ez4pgRVoHcfWxrLQAQk_la4YETrBUZu38L5d8eyTYJy05Xtg_Tcnwwwj2YL_TRZWzPieCnMkGM4rl1k6AnHgJmPOGx1f7TwnIBBqqn5HkXWoo6Zx8cbxp3_72_4LYNk_n4-zM1wyN6jTSUuA-wVY1y8lJ9j-kT41uEfnnhr54rijK_Tde51qORgCmS6abwlwuLUHbiJZdvwWrvUDzsuRmogKY" width={160} height={160} />
                            <div>
                                <p className="text-sm italic text-slate-700 dark:text-slate-300">"The 2026 analysis was a wake-up call. We cut overhead significantly in two months while improving our overall compliance scores."</p>
                                <p className="text-xs font-bold mt-2 text-terracotta">— Dr. Michael Torres, MD (San Diego Psychiatric Group)</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Hero Section - Exact HTML Layout */}
                <section className="bg-cream/30 dark:bg-sage/10 rounded-2xl p-8 mb-12 border border-cream dark:border-slate-800 relative overflow-hidden mx-6 lg:mx-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="absolute top-4 right-4">
                            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 animate-pulse shadow-sm">
                                <span className="material-symbols-outlined text-[12px]">warning</span> MEDI-CAL CHANGES 2026
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-white leading-tight mb-4">
                                    CA Psychiatric VA Cost Analysis 2026
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-300 font-display">
                                    Strategic financial optimization for California practices. Navigate new Medi-Cal billing requirements and maximize billable hours with HIPAA-compliant clinical integration.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                                    <span className="material-symbols-outlined">analytics</span>
                                    Request Your Custom ROI Report
                                </Link>
                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">Takes less than 2 minutes</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Social Proof Bar */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex flex-wrap items-center justify-center gap-8 py-8 border-y border-cream dark:border-slate-800 mb-12">
                        <div className="flex -space-x-3 overflow-hidden">
                            <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjwtIIpwaykhUH2O10YwMv-2U9KGJ8VN6SZ_nXpl4RH-q3XJsuVA6ZNy6DdstjzQGC6mT3GkCJwL86-l1Ztv3C4J1MD32FvgubxXHB_WhSx-DvaPoOHjvCzU0UHWDTfFreQEJbXtctIdK7Kb1N2kvTpI3qtZ2qIL7WJn7jSowS-nRGCgVkql6TwnaFzn35Rxb_SbS3DXN_M3jFHVEOuTY0ZsDdBtW0OfpbJkU8K3H_PqG89ttmbztCXcspY9mwDK5azEo-Po7YaXw" width={100} height={100} />
                            <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxZIbxoCSGOVFjHQlofMxF_sKRbLP9zVskcgJd5bWLSKWgOO_rzgFAIFYrYfX5-zledalbkPr7-wNiYA6G_k6z4lpBS4jeVF59g5-m73nkHxy8Ty0xuztSHBFd9QM6_eqjziHc5Nlp8l5Yp6QBxRB9CwckxjCOYxsYay3g2kwrVnKQZaFa1LZkvJjMPOsIiBAWojWz4GcCaW92ZX9gVJS7kN841HYfRjG3ibNysDSHQczU-laDrkAA1E_rQBEmQ2OMHudQCRkuHSc" width={100} height={100} />
                            <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe3gSeo6IOCjvOa0s9L9XHYEPYgA2S_emOJ3-6LlC51nb5gTj7T1VqWvo_OxaZr1wXBDQ_x_OS5kpvjdkauvFrx-x1Lys0dSgvLT9rfBJEUanbn3FHnAgN5uuowOCeN7G4D_hVGsRMqPFtTCGVDDL-cfIMJkwzqiAqymYT11d2lFCXyzRxhUMPzgB8mkf271c3fqeXKWPTHa3P95kttgUkf9s3OlYgANxj7nsVsSZgFJiq_ts9jDanTOdgxTpDqK71DZjCTbt0ZvM" width={100} height={100} />
                            <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmj3WZ_tj-Ao-JLA_IGERW5d1Frg_hTF_SPndqbcBDp59wwyJxA6DImCneXxEn2QDcKyYeXKEmO-coMnBeK4_W-GIMSUAyxL7A-V_AMmEGXld8ixAkozSdtHmwvxPmkeFSpex9uEPNZIw3gaO6ENW9WVS0sbJm2S1QAX1f2RQTrByArkoPyU3CJQQqQobM5VtVJREErt-vX4Y7-KyjVPo7Cac_W18jl9kuIXisdPlA8QG7kKM-N-N8qiQvAZNDILbaNllE5J30Es" width={100} height={100} />
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-white ring-2 ring-white">+127</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 text-terracotta">
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star</span>
                                <span className="material-symbols-outlined fill-1">star_half</span>
                                <span className="text-navy dark:text-white font-bold ml-1">4.9/5</span>
                            </div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Trusted by 127+ California Psychiatrists</p>
                        </div>
                    </div>
                </div>

                {/* Key Metrics Dashboard */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        <div className="relative flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-cream dark:border-slate-800 shadow-sm overflow-hidden">
                            <div className="absolute top-0 right-0 bg-sage text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg">PROVEN</div>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Projected ROI</p>
                                <span className="material-symbols-outlined text-terracotta">trending_up</span>
                            </div>
                            <p className="text-navy dark:text-white text-3xl font-extrabold">245%</p>
                            <p className="text-sage text-sm font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">arrow_upward</span> +12% vs 2025
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-cream dark:border-slate-800 shadow-sm overflow-hidden">
                            <div className="absolute top-0 right-0 bg-sage text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg">PROVEN</div>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Avg Rev Increase</p>
                                <span className="material-symbols-outlined text-terracotta">add_chart</span>
                            </div>
                            <p className="text-navy dark:text-white text-3xl font-extrabold">+$127K</p>
                            <p className="text-sage text-sm font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">verified</span> Net Billing Gains
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-cream dark:border-slate-800 shadow-sm overflow-hidden">
                            <div className="absolute top-0 right-0 bg-sage text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg">PROVEN</div>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Annual Savings</p>
                                <span className="material-symbols-outlined text-terracotta">payments</span>
                            </div>
                            <p className="text-navy dark:text-white text-3xl font-extrabold">$53,000</p>
                            <p className="text-sage text-sm font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">arrow_upward</span> +5% Efficiency
                            </p>
                        </div>
                        <div className="relative flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-cream dark:border-slate-800 shadow-sm overflow-hidden">
                            <div className="absolute top-0 right-0 bg-sage text-white text-[8px] font-black px-2 py-0.5 rounded-bl-lg">PROVEN</div>
                            <div className="flex items-center justify-between">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Admin Reduction</p>
                                <span className="material-symbols-outlined text-terracotta">speed</span>
                            </div>
                            <p className="text-navy dark:text-white text-3xl font-extrabold">Significant</p>
                            <p className="text-sage text-sm font-bold flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">remove_circle</span> Practitioner Burnout
                            </p>
                        </div>
                    </div>
                </div>

                {/* Case Study Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <section className="mb-16">
                        <div className="bg-sage/5 dark:bg-slate-900 border-2 border-sage/20 rounded-2xl p-8 flex flex-col md:flex-row gap-10 items-center">
                            <div className="md:w-1/3">
                                <div className="aspect-square rounded-2xl overflow-hidden bg-cream shadow-lg">
                                    <img alt="Dr. Sarah Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjqhAtwTwwYe1csARv_Uv4t92nLKWag_yd_s6DHII-jXPyR8StA1FZK40pop4qyAylBCui07vFG9WS7f_0stqEZAzsajthunfXKIwXhB1i-aXTHRBqEDohRin9ecqSZN3UTWAGi7_VUF_Ef-mjoY_frW3KsyVIQtzZ-GAcJzcxicxK0rSl4xJPzC3doirGK564Jg54oD0eREM0noUmV6nMmwwtJ1Bmf07dIYj_aQ7vVCGhrwSeTRZSWw0c7-9-di67zt81bopXgSY" />
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="bg-sage text-white text-[10px] font-black px-2 py-1 rounded">CASE STUDY</span>
                                    <h3 className="text-2xl font-bold text-navy dark:text-white">The Los Angeles Expansion Result</h3>
                                </div>
                                <p className="text-lg text-slate-700 dark:text-slate-300 italic">"Scaling from a solo practice to a multi-provider clinic seemed impossible until we integrated PsychVA. The results were immediate."</p>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-sage/10">
                                        <p className="text-sm font-bold text-slate-500">Revenue Impact</p>
                                        <p className="text-2xl font-black text-sage">+$127,000</p>
                                    </div>
                                    <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-lg border border-sage/10">
                                        <p className="text-sm font-bold text-slate-500">Admin Load</p>
                                        <p className="text-2xl font-black text-terracotta">Significant Reduction</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-navy dark:text-terracotta">— Dr. Sarah Chen, Clinical Director</p>
                            </div>
                        </div>
                    </section>
                </div>


                {/* ROI Calculator Section */}
                <section className="mb-16 bg-navy text-white rounded-2xl p-10 overflow-hidden relative shadow-xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <span className="material-symbols-outlined text-[180px]">calculate</span>
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold mb-8">Estimate Your California Savings</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-cream tracking-widest">Current Staff Count</label>
                                <select className="w-full bg-[#3D4F45] border border-white/20 rounded-lg p-3 text-white focus:ring-terracotta focus:border-terracotta appearance-none">
                                    <option>1-2 Employees</option>
                                    <option>3-5 Employees</option>
                                    <option>6-10 Employees</option>
                                    <option>10+ Employees</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-cream tracking-widest">Practice Size</label>
                                <select className="w-full bg-[#3D4F45] border border-white/20 rounded-lg p-3 text-white focus:ring-terracotta focus:border-terracotta appearance-none">
                                    <option>Solo Practitioner</option>
                                    <option>Small Group (2-4)</option>
                                    <option>Medium Group (5-9)</option>
                                    <option>Enterprise (10+)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-cream tracking-widest">Weekly Patient Volume</label>
                                <select className="w-full bg-[#3D4F45] border border-white/20 rounded-lg p-3 text-white focus:ring-terracotta focus:border-terracotta appearance-none">
                                    <option>0-25 Patients</option>
                                    <option>26-50 Patients</option>
                                    <option>51-100 Patients</option>
                                    <option>100+ Patients</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <button className="w-full sm:w-auto px-10 py-4 bg-terracotta text-white font-black rounded-lg hover:scale-105 transition-all shadow-xl">
                                Calculate My Savings
                            </button>
                            <div className="flex items-center gap-2 text-cream">
                                <span className="material-symbols-outlined">shield_person</span>
                                <span className="text-sm font-bold">100% HIPAA-Compliant Calculation</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost Comparison Table */}
                <section className="mb-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <h2 className="text-3xl font-serif font-bold text-navy dark:text-white mb-8 text-center">In-Clinic vs. Virtual Psychiatric Staff</h2>
                        <div className="overflow-x-auto rounded-xl border border-cream dark:border-slate-800 shadow-md">
                            <table className="w-full text-left border-collapse bg-white dark:bg-slate-900">
                                <thead className="bg-sage text-white">
                                    <tr>
                                        <th className="p-4 font-bold">Expense Category</th>
                                        <th className="p-4 font-bold">In-Clinic Admin (CA)</th>
                                        <th className="p-4 font-bold">Psychiatric VA (2026)</th>
                                        <th className="p-4 font-bold text-cream">Total Savings</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-cream dark:divide-slate-800">
                                    <tr>
                                        <td className="p-4 font-semibold">Annual Base Salary</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$62,400 (Avg)</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$22,000 - $28,000</td>
                                        <td className="p-4 text-sage font-bold">$34,400</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Benefits & UI/WC</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">Substantial Portion</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$0 (Inclusive)</td>
                                        <td className="p-4 text-sage font-bold">$18,720</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Office Space / Utilities</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$8,500 / Seat</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$0</td>
                                        <td className="p-4 text-sage font-bold">$8,500</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">IT & Malpractice Admin</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$4,200</td>
                                        <td className="p-4 text-slate-600 dark:text-slate-300">$800</td>
                                        <td className="p-4 text-sage font-bold">$3,400</td>
                                    </tr>
                                </tbody>
                                <tfoot className="bg-cream/20 dark:bg-slate-800 font-bold">
                                    <tr>
                                        <td className="p-4 text-navy dark:text-white uppercase text-sm">Estimated Annual Total</td>
                                        <td className="p-4 text-navy dark:text-white">$93,820</td>
                                        <td className="p-4 text-navy dark:text-white">$28,800</td>
                                        <td className="p-4 text-sage text-xl">+$65,020</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Implementation Framework */}
                <section className="mb-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <h2 className="text-2xl font-serif font-bold text-navy dark:text-white mb-8">Implementation Framework</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-cream dark:border-slate-800">
                                <div className="size-12 rounded-lg bg-sage/10 flex items-center justify-center text-sage mb-4">
                                    <span className="material-symbols-outlined text-3xl">clinical_notes</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-navy dark:text-white">1. Assessment</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">We audit your current EMR workflows and identify friction points in your California-specific billing cycles.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-cream dark:border-slate-800">
                                <div className="size-12 rounded-lg bg-sage/10 flex items-center justify-center text-sage mb-4">
                                    <span className="material-symbols-outlined text-3xl">group_add</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-navy dark:text-white">2. Onboarding</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Matched VAs undergo practice-specific training including your preferred intake protocols and physician style guides.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-cream dark:border-slate-800">
                                <div className="size-12 rounded-lg bg-sage/10 flex items-center justify-center text-sage mb-4">
                                    <span className="material-symbols-outlined text-3xl">monitoring</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-navy dark:text-white">3. Optimization</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Monthly ROI reviews and efficiency adjustments to ensure your overhead continues to decline as you scale.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Urgency Banner */}
                <div className="bg-red-700 text-white py-3 text-center text-sm font-bold">
                    <span className="material-symbols-outlined text-sm align-middle mr-1">trending_up</span>
                    2026 PRICE INCREASE NOTICE: Secure current rates by scheduling before February 1st.
                </div>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-navy to-slate-800 py-20 px-6 text-center text-white">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Ready for your practice's financial transformation?</h2>
                        <p className="text-cream/80 text-lg md:text-xl font-display max-w-2xl mx-auto">
                            Get a tailored analysis of how much you can save and how quickly you can scale in the California market.
                        </p>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl max-w-sm mx-auto mb-8">
                            <div className="flex items-center justify-center gap-2 text-cream mb-2">
                                <span className="material-symbols-outlined">verified</span>
                                <span className="font-bold uppercase tracking-widest text-sm">Risk-Free Guarantee</span>
                            </div>
                            <p className="text-xs text-white/60">If we don't find at least $30k in annual savings during your analysis, the consultation is on us.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/book-consultation" className="px-12 py-5 bg-terracotta text-white font-black text-xl rounded-lg shadow-2xl hover:scale-105 transition-all">
                                Schedule Free Analysis
                            </Link>
                            <Link href="/resources/virtual-assistants-for-psychiatrists" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all">
                                View Live Demo
                            </Link>
                        </div>
                        <div className="pt-12 border-t border-white/10 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <span className="material-symbols-outlined text-2xl text-terracotta">psychology</span>
                                <span>HIPAA & California Privacy Compliant Support</span>
                            </div>
                            <div className="text-white/30 text-xs text-right">
                                © 2026 PsychVA California. All Rights Reserved.<br />
                                Strategic financial data based on 2025-2026 market projections.
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
