import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[auto] lg:min-h-[90vh] flex items-start lg:items-center overflow-hidden">
            {/* Premium Matte Cream Background (Matches Services Hub) */}
            <div className="absolute inset-0 bg-[#FAF8F3]">
                {/* Subtle Grain/Texture overlay for premium feel */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-6 lg:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Left Content - Mobile First */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm border border-[#b25a2a]/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium shadow-sm">
                            <span className="material-symbols-outlined text-[#b25a2a]">verified</span>
                            <span>California's Premier Psychiatric VA Service</span>
                        </div>

                        {/* Modern Headline - SEO + Conversion Optimized */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] text-trust-navy tracking-tight">
                                California Psychiatric Virtual Assistants:
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                    Reclaim 20+ Hours Weekly. Recover $300K+ Annually.
                                </span>
                            </h1>

                            {/* Value Proposition - Benefit-Focused */}
                            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-lg font-medium">
                                California psychiatric VAs who handle <strong className="text-trust-navy">prior auths, billing chaos, and no-show recovery</strong>.
                                <span className="text-primary font-bold"> HIPAA-compliant. SimplePractice experts. Psychiatry-only focus.</span>
                            </p>
                        </div>


                        {/* Modern CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                            <Link
                                href="/book-consultation"
                                className="group relative overflow-hidden bg-[#D2691E] hover:bg-[#B8860B] text-white px-6 py-3 rounded-xl font-bold text-base transition-all hover:shadow-xl hover:shadow-[#D2691E]/20 hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined">trending_up</span>
                                    See My Recovery Plan
                                </span>
                            </Link>

                            <Link
                                href="/virtual-assistant-for-psychiatrists"
                                className="group border-2 border-primary/30 text-primary px-6 py-3 rounded-xl font-bold text-base hover:bg-primary/5 transition-colors flex items-center gap-2"
                            >
                                <span>Explore Services</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Interactive Metrics */}
                        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                            <div className="bg-white/40 backdrop-blur-sm border border-[#b25a2a]/20 rounded-2xl p-3 hover:bg-white/60 transition-all shadow-sm group cursor-default">
                                <div className="text-xl md:text-2xl font-black text-[#b25a2a] mb-1 group-hover:scale-110 transition-transform origin-left">40%</div>
                                <div className="text-trust-navy text-xs font-bold uppercase tracking-wider">Less Admin</div>
                            </div>
                            <div className="bg-white/40 backdrop-blur-sm border border-[#9CAF88]/20 rounded-2xl p-3 hover:bg-white/60 transition-all shadow-sm group cursor-default">
                                <div className="text-xl md:text-2xl font-black text-[#9CAF88] mb-1 group-hover:scale-110 transition-transform origin-left">95%</div>
                                <div className="text-trust-navy text-xs font-bold uppercase tracking-wider">Accuracy</div>
                            </div>
                            <div className="bg-white/40 backdrop-blur-sm border border-[#DAA520]/20 rounded-2xl p-3 hover:bg-white/60 transition-all shadow-sm group cursor-default">
                                <div className="text-xl md:text-2xl font-black text-[#DAA520] mb-1 group-hover:scale-110 transition-transform origin-left">20hr</div>
                                <div className="text-trust-navy text-xs font-bold uppercase tracking-wider">Recovered</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Modern Visual */}
                    <div className="relative pt-6 lg:pt-0">
                        {/* Main Image Container - Matches Services Architecture Style */}
                        <div className="relative aspect-[5/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm group/hero-image transform transition-transform hover:scale-[1.01] duration-700">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b25a2a]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                            <Image
                                src="/images/homepage-hero.png"
                                alt="California Psychiatrist Collaborating with Virtual Minds Assistant"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />

                            {/* Inner Border/Sheen */}
                            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none" />
                        </div>

                        {/* Floating California Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl p-6 shadow-xl max-w-[200px] hover:bg-[#DAA520]/20 transition-all">
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-[#DAA520] mb-1">CA</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-trust-navy">Specialists</p>
                            </div>
                        </div>

                        {/* Floating Trust Indicators */}
                        <div className="absolute top-6 -left-6 bg-[#9CAF88]/10 border border-[#9CAF88]/20 rounded-xl p-4 shadow-xl hover:bg-[#9CAF88]/20 transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#9CAF88]">security</span>
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
    );
}
