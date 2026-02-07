import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata: Metadata = {
    title: "Women's Mental Health Practice Management | California",
    description: "Specialized administrative support for Reproductive Psychiatry. PMAD screening, hormone tracking logs, and sensitive intake protocols.",
};

export default function WomensMentalHealthPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Specialties", href: "/specialties" },
                    { label: "Women's Mental Health" }
                ]}
            />
            <main className="flex-grow">
                {/* HERO SECTION - SOFT & CLINICAL */}
                <section className="relative pt-4 pb-20 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">

                            {/* Copy */}
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5 text-rose-800 text-[11px] font-black uppercase tracking-widest mb-4">
                                    <span className="material-symbols-outlined text-sm">female</span>
                                    Reproductive Psychiatry Support
                                </div>
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1]">
                                    Care That Understands<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
                                        The Cycle.
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Your patients are navigating PMADs, peri-menopause, and fertility trauma. They need an intake team that understands <span className="text-trust-navy font-bold">sensitivity is a clinical necessity</span>, not just a soft skill.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                        Schedule Consult
                                    </Link>
                                    <Link href="#protocols" className="px-8 py-4 rounded-xl border-2 border-slate-200 text-trust-navy font-bold text-lg hover:bg-white hover:border-primary/20 transition-all flex items-center justify-center">
                                        View Protocols
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                    <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                                    <Image
                                        src="/images/womens-mental-health-hero.jpg"
                                        alt="Women's Mental Health Administration"
                                        width={800}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Card */}
                                    <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="size-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                                                <span className="material-symbols-outlined">psychiatry</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-trust-navy text-lg">PMAD Aware</h3>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    Our VAs are trained to screen for urgency in perinatal mood and anxiety disorders during the first call.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPECIALIZED PROTOCOLS */}
                <section id="protocols" className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl font-bold text-trust-navy mb-4">Specialized Intake Protocols</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Standard VAs ask "Name and Date of Birth." We ask about where they are in their treatment journey.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Perinatal Logistics",
                                    desc: "Coordinating authorizations for Zulresso or Spravato, and managing frequent appointment cadence during pregnancy.",
                                    icon: "nest_cam_iq_outdoor"
                                },
                                {
                                    title: "Hormone Tracking",
                                    desc: "Helping patients upload cycle tracking logs to the EHR before their appointment for better clinical data.",
                                    icon: "calendar_today"
                                },
                                {
                                    title: "Fertility Sensitivity",
                                    desc: "Navigating scheduling around IVF cycles with extreme flexibility and empathy.",
                                    icon: "favorite"
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#FAF8F3] p-8 rounded-[2.5rem] border border-slate-200 hover:border-rose-200 transition-all group">
                                    <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-rose-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-rose-900 py-32 relative overflow-hidden text-center">
                    <div className="absolute top-0 inset-x-0 h-px bg-white/10"></div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic !text-white leading-tight" style={{ color: 'white' }}>
                            <span className="text-[#FFFFFF]">Elevate Your Practice Standard.</span>
                        </h2>
                        <p className="text-xl text-rose-100/80 mb-12 max-w-2xl mx-auto font-medium">
                            Reproductive psychiatry requires a higher level of administrative care. We provide it.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="px-12 py-5 bg-white text-rose-900 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform inline-block"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
