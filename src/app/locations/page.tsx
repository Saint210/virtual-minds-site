import { locations } from "@/data/locations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "California Psychiatric Service Area | Virtual Minds Network",
    description: "Virtual Minds provides specialized administrative support to psychiatric practices across California. Viewing our coverage map and regional economic analysis.",
    alternates: {
        canonical: 'https://thevirtualminds.com/locations'
    },
    openGraph: {
        title: "California Psychiatric Service Area | Virtual Minds Network",
        description: "From San Diego to Sacramento, we provide localized administrative intelligence for California's mental health sector.",
        url: "https://thevirtualminds.com/locations",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "website",
    }
};

export default function LocationsIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3] font-sans text-slate-600">
            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Network Map</span>
                            </nav>

                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                The California <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                    Psychiatric Network.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                                Localized administrative intelligence for the modern private practice. Select your region to analyze specific overhead savings and compliance protocols.
                            </p>
                        </div>
                    </div>
                </section>

                {/* LOCATIONS GRID */}
                <section className="pb-32 px-6">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {locations.map((location) => (
                                <Link
                                    key={location.slug}
                                    href={`/locations/${location.slug}`}
                                    className="group relative bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block h-full flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={location.heroImage || "/images/hero-dashboard.png"}
                                            alt={location.heroImageAlt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-trust-navy/20 group-hover:bg-transparent transition-colors duration-500" />

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-trust-navy shadow-lg">
                                            {location.rentSavings} Saved
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <div className="mb-6">
                                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-2 group-hover:text-primary transition-colors">
                                                {location.name}
                                            </h3>
                                            <div className="w-12 h-1 bg-slate-100 group-hover:bg-primary transition-colors duration-500" />
                                        </div>

                                        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                                            {location.metaDesc}
                                        </p>

                                        <div className="mt-auto flex items-center justify-end pt-6 border-t border-slate-100">
                                            <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NETWORK VALUE PROP */}
                <section className="py-24 bg-trust-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block p-4 rounded-2xl bg-white/10 text-primary mb-8 animate-pulse">
                            <span className="material-symbols-outlined text-4xl">travel_explore</span>
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why Location Matters <br /> for Virtual Staffing.</h2>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
                            A VA in Manila doesn't know that Kaiser predominates in Sacramento or that Cedars-Sinai has specific referral loops in Beverly Hills.
                            <strong className="text-white block mt-4">Our systems are engineered with local intelligence.</strong>
                        </p>

                        <Link href="/book-consultation" className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-[#B8860B] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                            Find a California Specialist
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
