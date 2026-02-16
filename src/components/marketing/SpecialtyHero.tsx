"use client";

import Link from "next/link";
import Image from "next/image";
import LocationTagline from "./LocationTagline";
import { useTracking } from "@/hooks/useTracking";

interface SpecialtyHeroProps {
    name: string;
    description: string;
    image: string;
}

export default function SpecialtyHero({ name, description, image }: SpecialtyHeroProps) {
    const { trackCTAClick } = useTracking();

    return (
        <section className="relative pt-12 pb-16 bg-[#FAF8F3] overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2691E]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                            Specialized Administrative Support
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-trust-navy mb-6 leading-[1.1] tracking-tight">
                            Infrastructure for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#B8860B] to-primary">
                                {name}.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl mb-4">
                            {description}
                        </p>
                        <LocationTagline variant="specialty" specialtyName={name} className="mb-8" />

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/book-consultation"
                                onClick={() => trackCTAClick('Book Strategy Session', '/book-consultation', `specialty_${name.toLowerCase().replace(/\s+/g, '_')}`)}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                Book Strategy Session
                            </Link>
                            <Link href="#services" className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                                View Service Matrix
                                <span className="material-symbols-outlined">arrow_downward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative group">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
                            <Image
                                src={image || "/images/homepage-hero.png"}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 to-transparent" />
                        </div>

                        {/* California Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-2xl max-w-[180px]">
                            <div className="flex flex-col items-center gap-2">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Coverage</span>
                                <span className="text-sm font-bold text-trust-navy text-center">California Licensed & Registered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
