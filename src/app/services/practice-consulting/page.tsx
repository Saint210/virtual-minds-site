import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "California Psychiatric Practice Consulting | Virtual Minds",
    description: "California psychiatric practice consulting to launch or scale your private practice, including EHR implementation and HIPAA workflow design.",
};

export default function ConsultingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Practice Consulting" }
                ]}
            />
            <main className="flex-grow">
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Strategic Advisory</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    California Psychiatric <br />
                                    <span className="text-primary italic">Practice Consulting</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    Whether you are launching your first private practice or scaling an existing one, our consultants provide California-focused operational guidance for psychiatric practices.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">strategy</span>
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIs-e4a-f4-7uj8yWiSP3rNLYN_Boma2Tgdcn5bUw8hqtXAUHQyb-qDi7AKUdHx-GCxYa3eNgOe81MF1REhLV2CVH_Sls4iNME-hTc8k5fl-Tb1kXZyux0Sa5sVTDQnijCxYeLTWp4TKBZQhus2ybkrT0i_wDKQOeS67GekG9XE6VtL5ZDMFIDkeuMUaTEIbYYKxYwdImRu3l7Uu2IXDDkpe2RKtraj-_KeBtMCw-vqpiESj5rRn7Yo11HdJx53yh3SZq6z2fwl0"
                                    className="w-full h-full object-cover"
                                    alt="Practice Consulting Strategy"
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Sectors */}
                <section id="services" className="py-24 max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Practice Start-Up Services */}
                        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

                            <div className="size-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-10 relative z-10">
                                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                            </div>

                            <h2 className="font-display text-4xl font-black text-trust-navy mb-6 relative z-10">Practice Start-Up</h2>
                            <p className="text-slate-500 text-lg mb-10 relative z-10">A turnkey structured program to take you from concept to opening day.</p>

                            <ul className="space-y-6 relative z-10">
                                {[
                                    { icon: 'description', text: 'Review Current Plans', desc: 'Feasibility analysis and business plan refinement.' },
                                    { icon: 'apartment', text: 'Office Set-Up', desc: 'Physical or virtual location logistics and leasing guidance.' },
                                    { icon: 'monitor_heart', text: 'EHR Implementation', desc: 'Selection, configuration, and migration of electronic health records.' },
                                    { icon: 'gavel', text: 'Contract Review', desc: 'Negotiation support for payer contracts and vendor agreements.' },
                                    { icon: 'shield_lock', text: 'HIPAA Compliance', desc: 'Establishing secure policies, BAAs, and risk assessments.' },
                                    { icon: 'policy', text: 'Policy Creation', desc: 'Drafting client manuals, intake procedures, and experience protocols.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 text-primary">
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-trust-navy text-lg">{item.text}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Growing Your Practice */}
                        <div className="bg-trust-navy rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute opacity-20 inset-0 bg-[radial-gradient(#d4af35_1px,transparent_1px)] [background-size:20px_20px]"></div>

                            <div className="size-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary mb-10 relative z-10">
                                <span className="material-symbols-outlined text-4xl">trending_up</span>
                            </div>

                            <h2 className="font-display text-4xl font-black !text-white mb-6 relative z-10">Growing Your Practice</h2>
                            <p className="text-slate-300 text-lg mb-10 relative z-10">Optimization strategies for established practices looking to scale efficiency.</p>

                            <div className="space-y-8 relative z-10">
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-4 !text-primary">1. Operational Audit</h3>
                                    <p className="text-slate-200 leading-relaxed">
                                        Comprehensive review of your current processes, systems, and staffing structures to identify bottlenecks and revenue leaks.
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-4 !text-primary">2. Strategic Recommendations</h3>
                                    <p className="text-slate-200 leading-relaxed">
                                        Data-driven insights for scaling, hiring new providers, or expanding into new service lines (e.g., TMS, Ketamine).
                                    </p>
                                </div>
                                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <h3 className="font-bold text-xl mb-4 !text-primary">3. Implementation</h3>
                                    <p className="text-slate-200 leading-relaxed">
                                        We don&apos;t just advise; we help you implement new procedures, train staff, and configure software for the next level of growth.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 relative z-10">
                                <Link href="/book-consultation" className="w-full block bg-white hover:bg-slate-100 text-trust-navy font-bold py-5 rounded-2xl text-center text-lg transition-colors">
                                    Request a Growth Audit
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Why Us Section */}
                <section className="bg-white py-24 border-t border-slate-100">
                    <div className="max-w-[1000px] mx-auto px-6 text-center">
                        <h2 className="font-display text-4xl font-black text-trust-navy mb-8">Beyond Virtual Assistants</h2>
                        <p className="text-xl text-slate-500 leading-relaxed mb-16">
                            Virtual Minds is founded by healthcare administration experts. We understand that a VA is only as effective as the system they are working in. Our consulting services ensure your foundation is solid.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 text-slate-400">
                            {/* Placeholder generic indicators for 'partners' or 'standards' to add trust without specific logos if not provided */}
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl">local_hospital</span>
                                <span className="font-bold text-xl uppercase tracking-widest text-slate-800">Clinic OS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl">encrypted</span>
                                <span className="font-bold text-xl uppercase tracking-widest text-slate-800">HIPAA First</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl">analytics</span>
                                <span className="font-bold text-xl uppercase tracking-widest text-slate-800">Data Driven</span>
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
