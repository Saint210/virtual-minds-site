import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "HIPAA Compliant Virtual Assistants for Psychiatrists | Virtual Minds",
    description: "HIPAA compliant virtual assistants for psychiatrists with BAA coverage, secure workflows, audit trails, and clinical-grade data security.",
};

export default function HIPAAPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "HIPAA Compliance Support" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Clinical Security</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    HIPAA Compliant <br />
                                    <span className="text-primary italic">Virtual Assistants</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    We don&apos;t just &apos;follow&apos; HIPAA. We support private psychiatric practices with HIPAA compliant virtual assistants, secure workflows, and disciplined process controls for data integrity and legal protection.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">enhanced_encryption</span>
                                    Request Compliance Audit
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-square w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="/images/hipaa-security-matrix.png"
                                    className="w-full h-full object-cover"
                                    alt="HIPAA Compliance Security Matrix"
                                    fill
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Grid with Enhanced Background Layering */}
                <div className="bg-white border-y border-slate-100 py-24 md:py-32">
                    <section className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { icon: 'gavel', title: 'Full BAA Coverage', desc: 'Every Virtual Minds specialist is covered by a comprehensive Business Associate Agreement before their first day.' },
                                { icon: 'verified_user', title: 'Annual Certification', desc: 'Our VAs undergo mandatory annual HIPAA re-certification and regular phishing/security drills.' },
                                { icon: 'vpn_lock', title: 'Secure VPN Access', desc: 'All clinical work is performed through encrypted, dedicated VPNs with multi-factor authentication.' },
                                { icon: 'desktop_access_disabled', title: 'Data Sovereignty', desc: 'No patient data is ever stored on local machines. PHI remains strictly within your EHR environment.' },
                                { icon: 'policy', title: 'SOC2 Type II', desc: 'Our administrative infrastructure is built on SOC2 compliant standards for maximum operational security.' },
                                { icon: 'history', title: 'Audit Trail Logs', desc: 'Every action taken by a VA is logged and timestamped within our internal systems for full transparency.' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-6 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
                                    <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-trust-navy shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-black text-trust-navy">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Audit Checklist Section */}
                <section className="bg-[#FAF8F3] py-24 md:py-32">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="bg-white rounded-[3.5rem] p-12 md:p-24 shadow-2xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h2 className="font-display text-4xl md:text-5xl font-black text-trust-navy mb-8 leading-tight">The 2026 Psychiatric <br /><span className="text-primary italic">Compliance Matrix</span></h2>
                                    <p className="text-slate-500 text-lg mb-12">How we protect your practice from HIPAA liability and administrative errors.</p>
                                    <div className="space-y-6">
                                        {[
                                            'Encrypted End-to-End PHI Handling',
                                            'Dedicated Clinical Infrastructure',
                                            'Rigorous Background Screenings',
                                            'Ongoing Security Oversight'
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="size-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <span className="font-black text-trust-navy uppercase tracking-widest text-xs">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="bg-trust-navy rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden border border-white/5 relative">
                                        {/* Subtle Glow inside monitor */}
                                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 blur-[60px] rounded-full"></div>

                                        <div className="flex justify-between items-center mb-10 relative z-10">
                                            <span className="text-xs font-black tracking-widest text-primary uppercase">Security Monitor</span>
                                            <div className="flex gap-1.5">
                                                <div className="size-2 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></div>
                                                <div className="size-2 rounded-full bg-green-500/50"></div>
                                                <div className="size-2 rounded-full bg-green-500/30"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-8 relative z-10">
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Active Status</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>Clinical BAA Active</p>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Encryption Level</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>AES-256 Grade</p>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Integrity Check</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>Vault Integrity 100%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
