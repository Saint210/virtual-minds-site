import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OnboardingProcess from "@/components/marketing/OnboardingProcess";
import FAQSection from "@/components/marketing/FAQSection";
import Brands from "@/components/marketing/Brands";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "Los Angeles Psychiatric Virtual Assistant – Practice Rescue Specialists | Virtual Minds",
    description: "Los Angeles-based virtual assistants for California psychiatrists. HIPAA-compliant, California-trained, and specializing in practice recovery when business transitions create administrative gaps.",
};

export default function VirtualAssistantForPsychiatristsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <Breadcrumbs 
                items={[
                    { label: "Home", href: "/" },
                    { label: "Psychiatrist VA" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section - 2026 Modern Design */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                    {/* Clean Background */}
                    <div className="absolute inset-0 bg-white">
                    </div>
                    
                    <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Mobile First */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium">
                            <span className="material-symbols-outlined text-primary">emergency</span>
                            <span>Los Angeles-Based Practice Recovery Specialists</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-trust-navy">
                                Los Angeles Psychiatric VAs
                                <br />
                                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                                    Rescue & Recover Your Practice
                                </span>
                            </h1>
                            
                            {/* Value Proposition */}
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                                When business transitions create administrative gaps, our Los Angeles-based practice recovery specialists eliminate burnout and restore stability. Trained in 
                                <span className="text-primary font-bold"> emergency response</span>, 
                                <span className="text-primary font-bold"> HIPAA compliance</span>, and 
                                <span className="text-primary font-bold"> California telehealth</span>
                            </p>
                        </div>

                        {/* Interactive Metrics */}
                        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 hover:bg-primary/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-primary mb-1">Same Day</div>
                                <div className="text-trust-navy text-xs font-medium">Rapid Deployment</div>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 hover:bg-primary/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-primary mb-1">100%</div>
                                <div className="text-trust-navy text-xs font-medium">Crisis Resolution</div>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 hover:bg-primary/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-primary mb-1">0</div>
                                <div className="text-trust-navy text-xs font-medium">Days Downtime</div>
                            </div>
                        </div>

                        {/* Modern CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/book-consultation"
                                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-6 py-3 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl shadow-black/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                    Book Free Strategy Call
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                            </Link>
                            
                            <button className="group border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold text-base hover:bg-primary/5 transition-colors">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">calculate</span>
                                    Calculate Your ROI
                                </span>
                            </button>
                        </div>

                        {/* Urgency & Social Proof */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm">
                                <span className="material-symbols-outlined text-primary">emergency</span>
                                <span>Rapid deployment for practice transitions, compliance emergencies, and launch crises</span>
                            </div>
                            
                            <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 max-w-md mx-auto lg:mx-0">
                                <p className="text-slate-700 text-xs italic">
                                    Whether facing sudden administrative gaps, compliance deadlines, or practice launch challenges, our Los Angeles-based team provides immediate support to prevent practice disruption.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Modern Visual */}
                    <div className="relative">
                        {/* Main Image with Glassmorphism */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center text-trust-navy p-6">
                                    <span className="material-symbols-outlined text-5xl text-primary mb-3">location_on</span>
                                    <h3 className="text-xl font-bold mb-2">Serving California</h3>
                                    <p className="text-sm">Rapid deployment across all California markets for psychiatric practices</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                        
                        {/* Floating LA Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-primary/10 border border-primary/20 rounded-xl p-4 shadow-xl max-w-[180px] hover:bg-primary/20 transition-all">
                            <div className="text-center">
                                <p className="text-2xl font-display font-bold text-primary mb-1">LA</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-trust-navy">Based</p>
                            </div>
                        </div>

                        {/* Floating Trust Indicators */}
                        <div className="absolute top-4 -left-4 bg-primary/10 border border-primary/20 rounded-xl p-3 shadow-xl hover:bg-primary/20 transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">security</span>
                                <div>
                                    <p className="text-xs font-bold text-trust-navy">HIPAA</p>
                                    <p className="text-xs text-slate-600">Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>

                {/* Location Images Grid */}
                <section className="py-20 bg-[#FAF8F3]">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <span>Serving California Psychiatric Practices</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-4">Emergency Response Across California</h3>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Our Los Angeles-based practice recovery specialists provide emergency support to psychiatric practices throughout California
                            </p>
                            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
                            {/* Downtown LA */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Downtown-LA-Hero-1024x640.jpg"
                                            alt="Los Angeles downtown psychiatric virtual assistant services addiction and women's reproductive mental health treatments"
                                            title="Downtown Los Angeles - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            DOWNTOWN LA
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Addiction & Women's Health
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Santa Monica */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Santa-Monica-Hero-1024x640.jpg"
                                            alt="Santa Monica depression and anxiety treatment psychiatric virtual assistant services"
                                            title="Santa Monica - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            SANTA MONICA
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Depression & Anxiety
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Hermosa Beach */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2019/07/HERMOSA-1024x640.jpg"
                                            alt="Hermosa Beach mental health treatments psychiatric virtual assistant services"
                                            title="Hermosa Beach - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            HERMOSA BEACH
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Mental Health Services
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Marina Del Rey */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Marina-Del-Rey-Hero-1024x640.jpg"
                                            alt="Marina Del Rey mood disorders and ADHD treatment psychiatric virtual assistant services"
                                            title="Marina Del Rey - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            MARINA DEL REY
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Mood Disorders & ADHD
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Echo Park */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Echo-Park-Hero-1024x640.jpg"
                                            alt="Echo Park Los Angeles psychiatric virtual assistant services"
                                            title="Echo Park - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            ECHO PARK
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Psychiatric Services
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Santa Barbara */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Santa-Barbara-Hero-1024x640.jpg"
                                            alt="santa-barbara-at-dusk coastal mental health"
                                            title="Santa Barbara - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            SANTA BARBARA
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Coastal Mental Health
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Palo Alto */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2023/04/Palo-Alto-Hero-1024x640.jpg"
                                            alt="silicon valley psychiatry services palo alto"
                                            title="Palo Alto - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            PALO ALTO
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Silicon Valley Psychiatry
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* San Francisco */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2021/09/san-francisco-3-1024x640.jpg"
                                            alt="bay area psychiatry services san francisco"
                                            title="San Francisco - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            SAN FRANCISCO
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Bay Area Psychiatry
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Del Mar */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2022/07/Del-Mar-Hero-1024x640.jpg"
                                            alt="coastal mental wellness services del mar california"
                                            title="Del Mar - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            DEL MAR
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Coastal Mental Wellness
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* La Jolla */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2022/07/La-Jolla-Hero-1024x640.jpg"
                                            alt="be city psychiatry services la jolla california"
                                            title="La Jolla - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            LA JOLLA
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Beach City Psychiatry
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Orange County */}
                            <div className="group relative w-full max-w-[200px]">
                                <div className="bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="https://web.archive.org/web/20230622001034im_/https://calpsychiatry.com/wp-content/uploads/2022/07/Orange-County-Hero-1024x640.jpg"
                                            alt="community mental health services orange county california"
                                            title="Orange County - Virtual Minds Psychiatric Services"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4">
                                        <span className="text-lg md:text-xl text-white tracking-tight text-center block font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                            ORANGE COUNTY
                                        </span>
                                        <span className="text-xs text-white/90 text-center block leading-relaxed">
                                            Community Mental Health
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Onboarding Process */}
                <OnboardingProcess />

                {/* FAQ Section */}
                <FAQSection />

                {/* Ready to Transform Final CTA */}
                <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
                    {/* Modern Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/10">
                        {/* Animated Elements */}
                        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-12 md:p-20 text-center shadow-xl">
                            {/* Section Header */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                                <span className="material-symbols-outlined text-primary">emergency</span>
                                <span>Ready to Rescue & Recover</span>
                            </div>
                            
                            <h2 className="!text-trust-navy text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Facing Practice Transition Crisis?
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                            <p className="text-slate-600 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                                When administrative support undergoes unexpected transitions, compliance deadlines loom, or practice launches stall, our Los Angeles-based rapid deployment team restores stability and prevents practice collapse.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/book-consultation"
                                    className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white text-xl font-bold px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                        Request Rapid Deployment Call
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                </Link>
                                <button className="group bg-white/80 backdrop-blur-md border border-slate-200 text-trust-navy text-xl font-bold px-12 py-6 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg inline-flex items-center">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">support_agent</span>
                                        Speak to a Los Angeles Expert
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
