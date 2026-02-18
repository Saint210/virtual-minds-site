import Link from "next/link";
import Image from "next/image";

export default function EnhancedHero() {
    return (
        <section className="relative min-h-[auto] flex items-center overflow-hidden">
            {/* Cream Background */}
            <div className="absolute inset-0 bg-[#FAF8F3]">
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Mobile First */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium w-fit mx-auto lg:mx-0">
                            <span className="material-symbols-outlined text-[#D2691E]">verified</span>
                            <span>California's Premier Psychiatric VA Service</span>
                        </div>

                        {/* Modern Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-trust-navy">
                                Specialized Support for
                                <br />
                                <span className="text-[#D2691E]">
                                    California Psychiatry.
                                </span>
                            </h1>

                            {/* Enhanced Value Proposition */}
                            <p className="text-xl md:text-2xl text-trust-navy leading-relaxed max-w-lg">
                                Tailored administrative intelligence for psychiatrists who manage leading practices.
                                We provide <span className="text-[#D2691E] font-bold italic">hardened operational support</span> so you can reclaim your clinical focus.
                            </p>
                        </div>

                        {/* Enhanced Interactive Metrics */}
                        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                            <div className="bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-xl p-3 hover:bg-[#D2691E]/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-[#D2691E] mb-1">Expert</div>
                                <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">VA Support</div>
                            </div>
                            <div className="bg-[#9CAF88]/10 border border-[#9CAF88]/20 rounded-xl p-3 hover:bg-[#9CAF88]/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-[#9CAF88] mb-1">HIPAA</div>
                                <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">Guarded</div>
                            </div>
                            <div className="bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl p-3 hover:bg-[#DAA520]/20 transition-all">
                                <div className="text-xl md:text-2xl font-black text-[#DAA520] mb-1">Statewide</div>
                                <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">California</div>
                            </div>
                        </div>

                        {/* Modern CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/book-consultation"
                                className="group relative overflow-hidden bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                    Book Free Strategy Call
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                            </Link>

                            <Link
                                href="/pricing"
                                className="group border-2 border-[#D2691E] text-[#D2691E] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D2691E]/5 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">payments</span>
                                    View Pricing
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Modern Visual */}
                    <div className="relative order-first lg:order-last mb-12 lg:mb-0">
                        {/* Main Image with Glassmorphism */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D2691E]/20">
                            <Image
                                src="/images/homepage-hero.webp"
                                alt="California Psychiatrist Collaborating with Virtual Minds Assistant"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority={true}
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D2691E]/10 to-transparent"></div>
                        </div>

                        {/* Floating ROI Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white border-2 border-[#D2691E]/20 rounded-xl p-6 shadow-xl max-w-[200px] hidden sm:block">
                            <div className="text-center">
                                <p className="text-lg font-display font-bold text-[#D2691E] mb-1">Rapid</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-trust-navy">Onboarding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
