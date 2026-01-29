
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Psychiatric EHR Hardening & Template Optimization | Virtual Minds",
    description: "Turn your basic EMR into an automated EHR engine. Custom templates, macros, and decision trees for SimplePractice, Kareo, and DrChrono.",
};

export default function EHRHardeningBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "EHR Hardening" }
                ]}
            />

            <main className="flex-grow pb-24">
                {/* Article Hero */}
                <section className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] py-24 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4169E1]/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <span className="text-[#4169E1] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Psychiatric Operations Blueprint #04</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-[1.1] !text-white" style={{ color: 'white' }}>
                            EHR Hardening & <br /> Workflow Automation
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed font-medium italic">
                            Stop clicking 50 times for one prescription. Turn your passive "digital filing cabinet" into an active clinical partner.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 mt-16">
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The "EHR vs. EMR" Reality Gap</h2>
                            <p>
                                Many psychiatrists ask about the difference between <strong>EHR vs EMR</strong>. In theory, they are similar. In practice, the difference is <strong>automation</strong>.
                            </p>
                            <p>
                                If you are manually typing standard phrases, clicking through 8 screens to refill a med, or searching for the "Last PHQ-9 Score," you are using a passive <strong>EMR (Electronic Medical Record)</strong>. It stores data, but it doesn't help you work.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-[30px] border border-blue-100 shadow-sm mt-8">
                                <h4 className="font-bold text-[#2A2A2A] text-lg mb-4">What is "EHR Hardening"?</h4>
                                <p className="text-sm text-slate-600 leading-relaxed mb-0">
                                    "Hardening" is the engineering process of configuring your <strong>EHR software</strong> to enforce safety protocols and automate routine tasks. We build the "guardrails" and "shortcuts" that the software company didn't setup for you.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">3 Ways We Optimize Your Instance</h2>
                            <div className="grid md:grid-cols-3 gap-6 not-prose">
                                {[
                                    {
                                        title: "One-Click Macros",
                                        desc: "We program text expanders for your most common MSE findings, risk assessments, and plan instructions. Type 'WNL' and get 3 paragraphs of compliant documentation.",
                                        icon: "keyboard_command_key"
                                    },
                                    {
                                        title: "Decision Support",
                                        desc: "We configure your intake templates to force a 'Hard Stop' if critical fields (like Suicide Risk Assessment) are skipped, preventing liability gaps.",
                                        icon: "account_tree"
                                    },
                                    {
                                        title: "Inbox Triaging",
                                        desc: "We restructure your message portal so refill requests, clinical questions, and scheduling issues route to your VA first, not you.",
                                        icon: "filter_alt"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-blue-600 text-4xl mb-4">{item.icon}</span>
                                        <h4 className="font-bold text-lg text-[#2A2A2A] mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">EHR Platforms We Specialize In</h2>
                            <p className="text-slate-600 mb-8">
                                We don't sell software. We are the pit crew that tunes your engine. Our Virtual Assistants and implementation specialists are certified experts in the top <strong>EHR companies</strong> serving psychiatry:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
                                {["SimplePractice", "Kareo (Tebra)", "DrChrono", "AdvancedMD", "CharmHealth", "Valant", "AthenaHealth", "TheraNest"].map((ehr) => (
                                    <div key={ehr} className="bg-[#FAF8F3] border border-slate-100 rounded-xl p-4 flex items-center justify-center font-bold text-slate-600 text-sm">
                                        {ehr}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#FAF8F3] border-2 border-blue-100 rounded-[40px] p-12 text-center">
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#2A2A2A]">Stop Fighting Your Software</h2>
                            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
                                If you spend more than 5 minutes documenting a 30-minute session, your EHR is broken. Let us audit your configuration.
                            </p>
                            <Link href="/book-consultation" className="bg-blue-600 text-white font-black uppercase tracking-widest text-xs px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all inline-block hover:bg-blue-700">
                                Audit My EHR Config
                            </Link>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
