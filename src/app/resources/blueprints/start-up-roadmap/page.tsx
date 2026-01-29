import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Psychiatrist Practice Start-Up Blueprint | Virtual Minds",
    description: "The complete operational roadmap for transitioning from hospital group to solo private practice in California.",
};

export default function StartUpBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Start-Up Roadmap" }
                ]}
            />

            <main className="flex-grow pb-24">
                {/* Article Hero */}
                <section className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] py-24 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <span className="text-[#D2691E] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Psychiatric Operations Blueprint #03</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-[1.1] !text-white" style={{ color: 'white' }}>
                            The Solo Practice <br /> Start-Up Roadmap
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed font-medium italic">
                            Transitioning from a hospital system to private practice? Here is the exact 90-day operational sprint to clinical independence.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 mt-16">
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The Fear of the Unknown</h2>
                            <p>
                                Most psychiatrists stay in hospital systems (W2) far longer than they want to because the "business of medicine" feels like a black box. However, the administrative lift for a modern, tech-enabled solo practice is actually quite light—if you have the correct blueprint.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The 90-Day Sprint Phases</h2>
                            <div className="space-y-4 not-prose">
                                {[
                                    { phase: "Days 1-30", title: "Infrastructure Hardening", desc: "LLC formation, Malpractice tail coverage, and selecting the 'Golden Triangle' of tech: EHR, Telehealth, and Phone/HIPAA Fax." },
                                    { phase: "Days 31-60", title: "Credentialing & Policies", desc: "Setting up CAQH profiles, drafting your Informed Consents, and defining your controlled substance prescribing policy." },
                                    { phase: "Days 61-90", title: "Deployment & Marketing", desc: "Integrating your Virtual Assistant, launching your 'authority site', and opening your calendar to the California market." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                                        <span className="text-2xl font-black text-[#D2691E] whitespace-nowrap">{item.phase}</span>
                                        <div>
                                            <h4 className="font-bold text-xl text-[#2A2A2A] mb-2">{item.title}</h4>
                                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-2xl relative overflow-hidden text-center">
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-6xl text-[#D2691E] mb-6">rocket_launch</span>
                                <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#2A2A2A]">Ready for Independence?</h2>
                                <p className="text-slate-600 mb-10 max-w-xl mx-auto">
                                    We've helped dozens of doctors transition from burnout to autonomy. Let us handle the infrastructure while you focus on the patients.
                                </p>
                                <Link href="/book-consultation" className="bg-[#2A2A2A] text-white font-black uppercase tracking-widest text-xs px-12 py-5 rounded-2xl shadow-2xl hover:bg-black transition-all inline-block">
                                    Start Your Roadmap Audit
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
