import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Interactive VA Comparison Guide | Virtual Minds",
    description: "Compare Virtual Minds specialized psychiatric VAs against generalist agencies and in-house staffing.",
};

export default function ComparisonPage() {
    const features = [
        {
            category: "HIPAA Compliance & BAA",
            sub: "Legal protection & liability coverage",
            vm: { status: "check_circle", text: "Full Liability Coverage", type: "success" },
            general: { status: "warning", text: "Partial / Risk Involved", type: "amber" },
            inhouse: { status: "cancel", text: "High Employer Liability", type: "error" }
        },
        {
            category: "Psychiatric EMR Expertise",
            sub: "Luminello, Charm, AdvancedMD",
            vm: { status: "workspace_premium", text: "Certified Specialist", type: "primary" },
            general: { status: null, text: "General Training Only", type: "slate" },
            inhouse: { status: null, text: "Variable / Training Needed", type: "slate" }
        },
        {
            category: "CPT Coding Knowledge",
            sub: "E/M codes for psychiatry",
            vm: { status: null, text: "Advanced Psychiatric", type: "success" },
            general: { status: null, text: "Basic Medical Only", type: "amber" },
            inhouse: { status: null, text: "Requires Certification", type: "slate" }
        },
        {
            category: "Medication Refill Protocol",
            sub: "Prior auths & pharmacy coord.",
            vm: { status: null, text: "Clinical Workflow Ready", type: "success" },
            general: { status: null, text: "Restricted Access", type: "error" },
            inhouse: { status: null, text: "High Oversight Req.", type: "slate" }
        },
        {
            category: "Hourly Rate Efficiency",
            sub: "Total cost of ownership",
            vm: { status: null, text: "High ROI / Fixed Cost", type: "primary" },
            general: { status: null, text: "Low Rate / High Training", type: "amber" },
            inhouse: { status: null, text: "Highest Total Cost", type: "error" }
        }
    ];

    const getStatusStyles = (type: string) => {
        switch (type) {
            case "success": return "bg-green-100 text-green-700 font-bold";
            case "amber": return "bg-amber-100 text-amber-700 font-medium";
            case "error": return "bg-red-100 text-red-700 font-medium";
            case "primary": return "bg-primary text-white font-bold";
            default: return "bg-slate-100 text-slate-600 font-medium";
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider w-fit">
                                Expertise Matters
                            </div>
                            <h1 className="text-trust-navy text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight font-display">
                                Psychiatric-Specific <br /><span className="text-primary italic">VA Comparison Guide</span>
                            </h1>
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                                Evaluate HIPAA liability, psychiatric workflow expertise, and long-term cost efficiency across Virtual Minds, Generalist Agencies, and In-House staffing.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contact" className="h-14 px-10 rounded-xl bg-primary text-white font-bold text-lg hover:scale-[1.05] transition-transform shadow-2xl shadow-primary/25 flex items-center">
                                    Schedule a Consultation
                                </Link>
                                <button className="h-14 px-10 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                                    Download PDF Guide
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-8 border-white">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCTE8LjAh6djY0zVjY66wMaqN0VN0BvhYjGVWmWxXdnHoV0wT71uZUQf2_fDPUL2Z7iCdXC1LYLuWpM8Tsxq-OaYH7tkg-KRJhD3zENnlQn2tHmQoPsGoz7iQ5h9__4ScwU9G61mvNOac9ef5-woZnPgv5EC3i_3Ky4t0gHkHCdovM23-REy-KgGqXeagb1jbk5DiX-g1T0e03HX0CvSGT19o__7fVTrUfJ9ADJsUWH8Z6fW-OkhbtFlmBpehDdtjBDS7UDT17mdU"
                                    alt="Workflow"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/60 to-transparent flex items-end p-10">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-primary text-5xl">verified_user</span>
                                        <p className="text-white font-bold text-xl leading-tight">100% HIPAA Compliant <br />Psychiatric Workflows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Matrix */}
                <section className="max-w-[1280px] mx-auto px-6 py-20 pb-40">
                    <div className="mb-12">
                        <h2 className="text-trust-navy text-3xl md:text-4xl font-black mb-6 flex items-center gap-4 font-display">
                            <span className="w-2 h-12 bg-primary rounded-full block"></span>
                            The Professional Comparison Matrix
                        </h2>
                        <p className="text-slate-500 text-lg max-w-2xl">A detailed breakdown of how our specialized VAs stack up against traditional options.</p>
                    </div>

                    <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-2xl relative">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-8 text-trust-navy text-sm font-bold uppercase tracking-widest border-b border-slate-200 w-[25%] font-display">
                                        Feature Category
                                    </th>
                                    <th className="p-8 text-white text-sm font-bold uppercase tracking-widest border-b border-slate-200 bg-trust-navy text-center w-[25%]">
                                        Virtual Minds <br /><span className="text-[10px] text-primary">(Psych-Only Specialist)</span>
                                    </th>
                                    <th className="p-8 text-trust-navy text-sm font-bold uppercase tracking-widest border-b border-slate-200 text-center w-[25%]">
                                        Generalist Agencies
                                    </th>
                                    <th className="p-8 text-trust-navy text-sm font-bold uppercase tracking-widest border-b border-slate-200 text-center w-[25%]">
                                        In-House Hiring
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {features.map((f, i) => (
                                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="p-8 align-middle">
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold text-trust-navy text-lg">{f.category}</span>
                                                <span className="text-sm text-slate-500">{f.sub}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 text-center bg-primary/5 border-x border-primary/10">
                                            <div className={`inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 w-full shadow-sm ${getStatusStyles(f.vm.type)}`}>
                                                {f.vm.status && <span className="material-symbols-outlined text-lg">{f.vm.status}</span>}
                                                {f.vm.text}
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className={`inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 w-full ${getStatusStyles(f.general.type)}`}>
                                                {f.general.status && <span className="material-symbols-outlined text-lg">{f.general.status}</span>}
                                                {f.general.text}
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className={`inline-flex items-center justify-center gap-2 rounded-xl py-3 px-6 w-full ${getStatusStyles(f.inhouse.type)}`}>
                                                {f.inhouse.status && <span className="material-symbols-outlined text-lg">{f.inhouse.status}</span>}
                                                {f.inhouse.text}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-[1280px] mx-auto px-6 py-20 pb-40">
                    <div className="bg-trust-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl text-center">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black !text-white leading-tight font-display">
                                Ready to specialize your practice?
                            </h2>
                            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
                                Join 200+ psychiatric clinics that have reduced administrative overhead by 40% with Virtual Minds.
                            </p>
                            <Link href="/contact" className="h-16 px-12 rounded-2xl bg-primary text-white font-bold text-xl hover:scale-[1.05] transition-transform shadow-2xl shadow-primary/40 flex items-center">
                                Request a Personalized Demo
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
