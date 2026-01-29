
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Controlled Substance Ops & DEA Compliance | Virtual Minds",
    description: "Navigate the Ryan Haight Act and California prescribing regulations. Operational blueprints for compliant stimulant management in remote practices.",
};

export default function ControlledSubstanceBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Controlled Substance Ops" }
                ]}
            />

            <main className="flex-grow pb-24">
                {/* Article Hero */}
                <section className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] py-24 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9CAF88]/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <span className="text-[#9CAF88] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Psychiatric Operations Blueprint #03</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold italic mb-8 leading-[1.1] !text-white" style={{ color: 'white' }}>
                            Controlled Substance Ops <br /> & DEA Compliance
                        </h1>
                        <p className="text-xl text-slate-100 leading-relaxed font-medium italic">
                            Protect your license. Navigating the Ryan Haight Act and California CURES mandates in a remote-first practice environment.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-6 mt-16">
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-12">
                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">The Post-PHE Compliance Reality</h2>
                            <p>
                                With the end of the Public Health Emergency (PHE) flexibilities, the <strong>Ryan Haight Act</strong> frameworks are returning. For remote psychiatrists, this means one critical operational hurdle: <strong>The In-Person Requirement.</strong>
                            </p>
                            <div className="bg-white p-8 rounded-[30px] border border-red-100 shadow-xl overflow-hidden relative group mt-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="material-symbols-outlined text-red-500 text-3xl">warning</span>
                                    <h4 className="font-bold text-[#2A2A2A] text-xl">The "One In-Person Visit" Rule</h4>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                    To prescribe controlled substances (Schedule II-V) via telemedicine, a provider generally must have conducted at least one in-person medical evaluation of the patient.
                                </p>
                                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                    <p className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">Operational Risk:</p>
                                    <p className="text-sm text-red-700">Failing to document this visit—or a qualifying referral—puts your DEA registration at immediate risk.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">Building a Defensible Workflow</h2>
                            <p className="text-slate-600 mb-8">
                                Compliance isn't just about clinical judgment; it's about <strong>administrative proof</strong>. Our Virtual Assistants build the "Paper Trail" that auditors look for.
                            </p>
                            <div className="space-y-6 not-prose">
                                {[
                                    {
                                        title: "In-Person Coordination",
                                        desc: "We schedule the mandatory in-person visits (either with you or a referring practitioner) and ensure the 'Qualifying Telemedicine Referral' documentation is signed and filed before the first script is sent.",
                                        icon: "location_on"
                                    },
                                    {
                                        title: "CURES / PDMP Checks",
                                        desc: "Before every refill request reaches your desk, we verify the CURES database status (via delegate access where permitted) or queue the report for your rapid review to prevent doctor shopping.",
                                        icon: "database"
                                    },
                                    {
                                        title: "Informed Consent & Contracts",
                                        desc: "We manage the 'Controlled Substance Agreement' workflow, ensuring every patient has a signed, up-to-date contract on file regarding early refills, lost meds, and toxicology screens.",
                                        icon: "edit_document"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start p-8 bg-[#FAF8F3] rounded-3xl border border-slate-100 hover:border-[#9CAF88]/40 transition-all">
                                        <span className="material-symbols-outlined text-[#9CAF88] text-4xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#2A2A2A] mb-2">{item.title}</h4>
                                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-serif font-bold text-[#2A2A2A] mb-6">Stimulant Refill Management</h2>
                            <div className="bg-gradient-to-br from-green-50 to-slate-50 p-8 rounded-3xl border border-green-100">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Strict 30-Day Windows</p>
                                            <p className="text-sm text-slate-600">VAs schedule appointments exactly 28-30 days out, preventing "too early" refill requests from clogging your inbox.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Toxicology Screen Logistics</p>
                                            <p className="text-sm text-slate-600">We coordinate lab orders for random drug screens as per your practice policy and track results for compliance.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold text-[#2A2A2A] mb-1">Documentation Audits</p>
                                            <p className="text-sm text-slate-600">Monthly spot-checks of controlled substance charts to ensure diagnosis, plan, and last in-person visit date are clearly noted.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-[#FAF8F3] border-2 border-[#9CAF88]/20 rounded-[40px] p-12 text-center">
                            <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#2A2A2A]">Secure Your Prescribing Workflow</h2>
                            <p className="text-slate-600 mb-10 max-w-xl mx-auto">
                                Don't let administrative gaps threaten your license. Get a compliance audit of your current controlled substance protocols.
                            </p>
                            <Link href="/book-consultation" className="bg-[#9CAF88] text-white font-black uppercase tracking-widest text-xs px-12 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-all inline-block hover:bg-[#8A9F78]">
                                Book Your Compliance Audit
                            </Link>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
