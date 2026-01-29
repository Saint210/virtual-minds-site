import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Cream Background */}
            <div className="absolute inset-0 bg-[#FAF8F3]">
            </div>
            
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Mobile First */}
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-4 py-2 text-[#4A4A4A] text-sm font-medium">
                            <span className="material-symbols-outlined text-[#D2691E]">verified</span>
                            <span>California's Premier Psychiatric VA Service</span>
                        </div>

                        {/* Modern Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-[#4A4A4A]">
                                Virtual Assistants for
                                <br />
                                <span className="text-[#D2691E]">
                                    California Psychiatrists
                                </span>
                            </h1>
                            
                            {/* Value Proposition */}
                            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-lg">
                                HIPAA‑compliant psychiatric virtual assistant services for California's elite mental health practices. 
                                <span className="text-[#D2691E] font-bold"> CMIA‑trained specialists</span> supporting psychiatrists who care for industry leaders, public figures, and their families.
                            </p>
                        </div>

                        {/* Interactive Metrics */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                            <div className="bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-xl p-4 hover:bg-[#D2691E]/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-[#D2691E] mb-1">40%</div>
                                <div className="text-[#4A4A4A] text-xs font-medium">Less Admin Time</div>
                            </div>
                            <div className="bg-[#9CAF88]/10 border border-[#9CAF88]/20 rounded-xl p-4 hover:bg-[#9CAF88]/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-[#9CAF88] mb-1">95%</div>
                                <div className="text-[#4A4A4A] text-xs font-medium">Billing Accuracy</div>
                            </div>
                            <div className="bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl p-4 hover:bg-[#DAA520]/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-[#DAA520] mb-1">$311M</div>
                                <div className="text-[#4A4A4A] text-xs font-medium">CA Market Size</div>
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
                                href="/virtual-assistant-for-psychiatrists"
                                className="group border-2 border-[#D2691E] text-[#D2691E] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D2691E]/5 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">info</span>
                                    Learn More
                                </span>
                            </Link>
                        </div>

                        {/* Urgency & Social Proof */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#4A4A4A] text-sm">
                                <span className="material-symbols-outlined text-[#D2691E]">schedule</span>
                                <span>Limited spots available for elite practices</span>
                            </div>
                            
                            <div className="bg-[#9CAF88]/10 border border-[#9CAF88]/20 rounded-xl p-4 max-w-md mx-auto lg:mx-0">
                                <p className="text-[#4A4A4A] text-sm italic">
                                    Join California's leading psychiatric practices in transforming patient care with specialized virtual assistant support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Modern Visual */}
                    <div className="relative">
                        {/* Main Image with Glassmorphism */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D2691E]/20">
                            <Image
                                src="/images/hero-new.png"
                                alt="Virtual Minds Assistant Working with Psychiatrist"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D2691E]/10 to-transparent"></div>
                        </div>
                        
                        {/* Floating California Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#DAA520]/10 border border-[#DAA520]/20 rounded-xl p-6 shadow-xl max-w-[200px] hover:bg-[#DAA520]/20 transition-all">
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-[#DAA520] mb-1">CA</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">Specialists</p>
                            </div>
                        </div>

                        {/* Floating Trust Indicators */}
                        <div className="absolute top-6 -left-6 bg-[#9CAF88]/10 border border-[#9CAF88]/20 rounded-xl p-4 shadow-xl hover:bg-[#9CAF88]/20 transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#9CAF88]">security</span>
                                <div>
                                    <p className="text-xs font-bold text-[#4A4A4A]">HIPAA</p>
                                    <p className="text-xs text-[#4A4A4A]">Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Metrics Section */}
                <div className="mt-16 max-w-[1200px] mx-auto">
                    <div className="bg-[#9CAF88]/5 border border-[#9CAF88]/10 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#4A4A4A] mb-8">California Practices See Real Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-[#FAF8F3] border border-[#D2691E]/20 rounded-xl p-6 hover:bg-[#D2691E]/5 transition-all">
                                <p className="text-3xl md:text-4xl font-black text-[#D2691E] mb-2">40%</p>
                                <p className="text-sm font-semibold text-[#4A4A4A]">Less Admin Time</p>
                            </div>
                            <div className="bg-[#FAF8F3] border border-[#9CAF88]/20 rounded-xl p-6 hover:bg-[#9CAF88]/5 transition-all">
                                <p className="text-3xl md:text-4xl font-black text-[#9CAF88] mb-2">95%</p>
                                <p className="text-sm font-semibold text-[#4A4A4A]">Billing Accuracy</p>
                            </div>
                            <div className="bg-[#FAF8F3] border border-[#DAA520]/20 rounded-xl p-6 hover:bg-[#DAA520]/5 transition-all">
                                <p className="text-3xl md:text-4xl font-black text-[#DAA520] mb-2">25%</p>
                                <p className="text-sm font-semibold text-[#4A4A4A]">More Patient Capacity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
