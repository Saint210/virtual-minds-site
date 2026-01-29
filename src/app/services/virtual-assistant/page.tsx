import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "Specialized Mental Health Virtual Assistants | Virtual Minds",
    description: "Highly trained virtual assistants for California psychiatric practices. We handle intake, scheduling, billing coordination, and EHR management.",
};

export default function VirtualAssistantPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Virtual Assistant Services" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Clinical Support Engine</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    The All-In-One <br />
                                    <span className="text-primary italic">Psychiatric VA</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    More than just scheduling. Our specialized VAs become the operational backbone of your practice—handling intake, EHR management, patient coordination, and billing support in one seamless workflow.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">person_add</span>
                                    Match With A VA
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                {/* Placeholder for VA Hero Image - Using a generic office/tech abstract or color block if image missing */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] p-12 flex flex-col justify-center items-center text-white text-center">
                                    <span className="material-symbols-outlined text-6xl text-[#D2691E] mb-4">smart_toy</span>
                                    <h3 className="text-2xl font-display font-bold">Hybrid Human + AI Intelligence</h3>
                                    <p className="opacity-70 mt-4 max-w-sm text-sm">Empowering human empathy with advanced operational tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specific Services Grid */}
                <section className="bg-[#FAF8F3] border-y border-[#D2691E]/20 py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-[#4A4A4A] mb-4">The Universal Provider Support</h2>
                            <p className="text-[#4A4A4A] max-w-xl mx-auto">One dedicated professional. Infinite operational leverage.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: 'manage_accounts', title: 'Start-to-Finish Intake', desc: 'From the first inquiry call to the signed consent form, we manage the entire new patient lifecycle.' },
                                { icon: 'calendar_apps_script', title: 'Smart Scheduling', desc: 'Optimizing your calendar to group similar session types and preserve your energy levels.' },
                                { icon: 'medical_services', title: 'Clinical Coordination', desc: 'Handling refill requests, pharmacy communications, and care team coordination protocols.' },
                                { icon: 'verified_user', title: 'Compliance Monitoring', desc: 'Ensuring every patient file has updated consents, IDs, and insurance cards on file.' },
                                { icon: 'receipt_long', title: 'Billing Liaison', desc: 'Acting as the bridge between your clinical notes and your billing team to ensure accurate claims.' },
                                { icon: 'psychology', title: 'Patient Relationship', desc: 'Providing a warm, consistent human touchpoint for your anxious or dispirited patients.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-[#D2691E]/20 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                                    <span className="material-symbols-outlined text-[#D2691E] text-4xl mb-6">{item.icon}</span>
                                    <h3 className="font-display text-xl font-bold text-[#4A4A4A] mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-[#4A4A4A] leading-relaxed text-sm flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow section */}
                <section className="max-w-[1280px] mx-auto px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="font-display text-5xl font-bold text-[#4A4A4A] leading-tight italic">Why Generalists <br />Don't Work</h2>
                            <p className="text-lg text-[#4A4A4A] leading-relaxed">
                                Generic VAs don't understand the difference between an SSRI and an MAOI. They don't know why a 5150 hold history matters. Our team is specifically trained for the nuance of California mental healthcare.
                            </p>
                            <div className="space-y-4">
                                {[
                                    '100% HIPAA Certified Staff',
                                    'Trained on California Consent Laws',
                                    'Familiar with 50+ Psychiatric Medications',
                                    'Crisis De-escalation Protocol Aware'
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#D2691E]">check_circle</span>
                                        <span className="font-bold text-[#4A4A4A]">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#4A4A4A] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                            <h3 className="font-display text-3xl font-bold mb-8 italic !text-white" style={{ color: 'white' }}>The "One-Touch" Rule</h3>
                            <div className="space-y-8">
                                <p className="text-lg leading-relaxed text-slate-300">
                                    We operate on the philosophy that you should only have to "touch" a task once. If you send an instruction, consider it done. We handle the follow-up, the documentation, and the closure.
                                </p>
                                <div className="border-t border-white/10 pt-8">
                                    <p className="font-bold text-xl text-[#D2691E]">Ready to delegate?</p>
                                    <p className="text-sm text-slate-400 mt-2">Most practices can fully onboard a dedicated VA within 5 business days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="bg-primary/5 border-y border-primary/10 py-24">
                    <div className="max-w-[1280px] mx-auto px-6 text-center">
                        <h2 className="font-display text-3xl font-bold text-trust-navy mb-8">Seamless Platform Integration</h2>
                        <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Simple text placeholders for logos for now */}
                            {['SimplePractice', 'CharmHealth', 'Kareo', 'AdvancedMD', 'DrChrono', 'Google Workspace'].map((platform) => (
                                <div key={platform} className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm shadow-sm">
                                    {platform}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
