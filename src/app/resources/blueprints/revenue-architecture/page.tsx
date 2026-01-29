import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Revenue Architecture for California Psychiatrists | Virtual Minds",
    description: "Maximize practice revenue through optimized documentation, proper CPT coding guidance, and seamless billing company coordination.",
};

export default function RevenueBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Revenue Architecture" }
                ]}
            />

            <main className="flex-grow pb-24">
                {/* Article Hero */}
                <section className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] py-24 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9CAF88]/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <span className="text-[#D2691E] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Psychiatric Operations Blueprint #02</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-[1.1] !text-white" style={{ color: 'white' }}>
                            Psychiatric Revenue <br /> & Documentation Architecture
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed font-medium italic">
                            Stop the leakage. Master documentation that supports 99214+90833 optimization and streamlines your billing company's workflow.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 mt-16">
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The CPT Optimization Opportunity</h2>
                            <p>
                                Most California psychiatrists are under-coding their sessions or failing to document properly for "Add-on" codes that correctly reflect the clinical depth of their work. Transitioning from simple med-management to integrated therapy + med-management can increase per-hour revenue by <strong>22-35%</strong>.
                            </p>
                            <div className="bg-white p-8 rounded-[30px] border border-slate-100 shadow-xl overflow-hidden relative group mt-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-[#2A2A2A]">99214 + 90833 Documentation Support</h4>
                                    <span className="text-green-600 font-black">+ $75-120 / Visit</span>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed mb-0">
                                    Our Virtual Assistants organize your clinical templates and scribing workflows to prompt for proper time tracking, therapeutic element notation, and compliant session summaries—empowering you to capture this revenue.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">3 Pillars of Revenue Protection</h2>
                            <p className="text-slate-600 mb-8">
                                <strong className="text-[#2A2A2A]">Important:</strong> Virtual Minds does not create claims or submit billing. We coordinate with your billing company to prevent revenue loss through administrative excellence.
                            </p>
                            <div className="space-y-6 not-prose">
                                {[
                                    {
                                        title: "Intake Capture",
                                        desc: "Missed calls are missed revenue. We convert 95%+ of initial psychiatric inquiries into booked evaluations through empathetic, professional intake coordination.",
                                        icon: "call"
                                    },
                                    {
                                        title: "Documentation Quality Control",
                                        desc: "We prepare accurate superbills and session documentation that your billing company needs for clean first-pass submissions—reducing rejections and speeding up reimbursement.",
                                        icon: "fact_check"
                                    },
                                    {
                                        title: "Billing Company Liaison",
                                        desc: "We work directly with your billing partner to resolve documentation issues, track outstanding claims, and ensure nothing falls through the cracks.",
                                        icon: "handshake"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start p-8 bg-[#FAF8F3] rounded-3xl border border-slate-100 hover:border-[#D2691E]/20 transition-all">
                                        <span className="material-symbols-outlined text-[#D2691E] text-4xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#2A2A2A] mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">How Virtual Minds Supports Your Revenue Cycle</h2>
                            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-3xl border border-blue-100">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Documentation That Supports Higher Codes</p>
                                            <p className="text-sm text-slate-600">We optimize your templates to include time stamps, therapeutic interventions, and medical decision-making prompts.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Accurate Superbill Preparation</p>
                                            <p className="text-sm text-slate-600">We compile diagnosis codes, CPT codes, session details, and patient information for your billing company.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Proactive Billing Coordination</p>
                                            <p className="text-sm text-slate-600">We track claim status with your billing company and alert you to issues before they become denials.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Patient Payment Follow-Up</p>
                                            <p className="text-sm text-slate-600">We manage patient billing inquiries, payment collections, and credit card processing coordination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-[#FAF8F3] border-2 border-[#D2691E]/10 rounded-[40px] p-12 text-center">
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#2A2A2A]">Analyze Your Revenue Leakage</h2>
                            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
                                In 15 minutes, we can audit your current documentation and billing coordination workflow to identify where your practice is losing billable revenue.
                            </p>
                            <Link href="/book-consultation" className="bg-[#D2691E] text-white font-black uppercase tracking-widest text-xs px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all inline-block">
                                Book Your Revenue Audit
                            </Link>
                        </section>
                    </div>
                </div >
            </main >
            <Footer />
        </div >
    );
}
