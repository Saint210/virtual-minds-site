import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Medication Management Infrastructure for Psychiatrists | Virtual Minds",
    description: "Elite operational blueprint for automating refills and pharmacy liaison workflows in California psychiatric practices.",
};

export default function MedManagementBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Medication Management" }
                ]}
            />

            <main className="flex-grow pb-24">
                {/* Article Hero */}
                <section className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] py-24 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <span className="text-[#D2691E] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Psychiatric Operations Blueprint #01</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-[1.1] !text-white" style={{ color: 'white' }}>
                            The Medication Management <br /> & Refill Infrastructure
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed font-medium italic">
                            How elite California practices automate the "Refill Vortex" to reclaim 10+ clinical hours weekly without sacrificing safety or control.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 mt-16">
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The "Refill Vortex" Problem</h2>
                            <p>
                                For most psychiatrists, the administration of refills is a constant, low-level drain on clinical energy. Pharmacy calls, prior authorization denials, and patient portal messages create a "vortex" that pulls attention away from complex clinical decision-making.
                            </p>
                            <p className="font-serif italic font-medium bg-[#D2691E]/5 p-6 border-l-4 border-[#D2691E] rounded-r-xl">
                                "If you are handling pharmacy liaising yourself, you aren't just a doctor—you're a high-priced secretary. This administration leakage costs the average solo practitioner over $40,000 in lost billable time annually."
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The 5-Step Automation Framework</h2>
                            <div className="grid md:grid-cols-2 gap-8 not-prose">
                                {[
                                    { step: "01", title: "Refill Sprints", desc: "Batch refill approvals into a 15-minute daily sprint, rather than handling them ad-hoc between patients." },
                                    { step: "02", title: "Pharmacy Liaison", desc: "Your VA handles all outbound pharmacy calls, resolving supply issues and basic technical blocks before they reach your desk." },
                                    { step: "03", title: "Portal Hardening", desc: "Standardize portal response templates to ensure consistency and speed in patient communications." },
                                    { step: "04", title: "Monitoring Logs", desc: "Audit logs for every refill action to maintain 100% HIPAA and Board of Behavioral Sciences compliance." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[30px] border border-slate-100 shadow-sm">
                                        <span className="text-4xl font-black text-[#D2691E] opacity-20 block mb-4">{item.step}</span>
                                        <h4 className="font-bold text-[#2A2A2A] text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#2A2A2A] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#D2691E]">Secure Your Practice</h2>
                                <p className="text-white/90 mb-8 leading-relaxed">
                                    Implementing this infrastructure isn't just about speed—it's about clinical safety. We ensure that every VA action is triple-checked and fully logged within your EHR.
                                </p>
                                <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-[#D2691E] text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:scale-105 transition-all">
                                    Request Your Audit <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                            <div className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4">
                                <span className="material-symbols-outlined text-[300px]">verified_user</span>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
