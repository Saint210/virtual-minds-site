import Link from "next/link";
import Image from "next/image";
import LazyMapEmbed from "@/components/marketing/LazyMapEmbed";

export default function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white pt-24 pb-12 border-t border-[#D2691E]/20">
            <div className="max-w-[1240px] mx-auto px-6">

                {/* 1. TOP SECTION: BRAND & LINKS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/the-virtual-minds-logo-og-notext.jpg"
                                alt="Virtual Minds Icon"
                                width={64}
                                height={64}
                                className="w-12 h-12 object-contain rounded-lg"
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-display font-bold tracking-tight text-white leading-none">
                                    Virtual Minds
                                </span>
                                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">
                                    Psychiatric Infrastructure
                                </span>
                            </div>
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            The gold standard in psychiatric practice management.
                            We automate the "Business of Health" so you can focus on the "Practice of Healing."
                            Revolutionizing mental health delivery in the digital age.
                        </p>

                        {/* Social Buttons */}
                        <div className="flex gap-4">
                            {['language', 'alternate_email', 'mail'].map((icon) => (
                                <Link key={icon} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#D2691E] hover:text-white text-slate-500 transition-all border border-white/5">
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-8 text-[#D2691E]">Solutions</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-400">
                            <li><Link href="/services/practice-start-up" className="hover:text-white transition-colors">Practice Start-Up</Link></li>
                            <li><Link href="/services/virtual-assistant" className="hover:text-white transition-colors">Virtual Assistance</Link></li>
                            <li><Link href="/services/billing-support" className="hover:text-white transition-colors">Billing Harmony</Link></li>
                            <li><Link href="/services/hipaa-compliance-support" className="hover:text-white transition-colors">HIPAA Auditing</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Service Plans</Link></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-8 text-[#D2691E]">Support</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-400">
                            <li><Link href="/faq" className="hover:text-white transition-colors">Help Center / FAQ</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Clinician Resources</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white transition-colors">Success Stories</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Industry Insights</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact Stats Column */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-6 text-[#D2691E]">Connect</h4>
                            <div className="space-y-4">
                                <Link href="tel:3104006266" className="flex items-center gap-3 text-sm font-bold text-white">
                                    <span className="material-symbols-outlined text-[#D2691E]">call</span>
                                    (310) 400-6266
                                </Link>
                                <div className="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-tight">
                                    <span className="material-symbols-outlined text-[#D2691E]">schedule</span>
                                    MON-FRI: 9AM - 5PM
                                </div>
                            </div>
                        </div>

                        {/* California Map */}
                        <div className="rounded-xl overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity">
                            <LazyMapEmbed
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383751.5955934543!2d-119.00754000000002!3d34.08374100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f462550a12ec479%3A0x82ef737d2ad2d6d9!2sVirtual%20Minds%2C%20LLC!5e0!3m2!1sen!2sus!4v1768762142031!5m2!1sen!2sus"
                                height={100}
                                title="Virtual Minds - California Operations"
                            />
                        </div>
                    </div>

                </div>

                {/* 2. MIDDLE SECTION: LEGAL & COMPLIANCE */}
                <div className="py-12 border-t border-white/5 grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full border-2 border-[#D2691E]/20 flex items-center justify-center text-[#D2691E]">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm uppercase tracking-tight text-white mb-1">HIPAA & CCPA COMPLIANT</p>
                            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                                Specialized for California medical laws (CCPA/CMIA). Full BAA coverage. All staff background-checked and compliance-trained.
                            </p>
                        </div>
                    </div>
                    <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold text-slate-500 uppercase tracking-widest md:justify-end">
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                        <li><Link href="/resources/blueprints/controlled-substance-ops" className="hover:text-white">Compliance Guide</Link></li>
                        <li><Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link></li>
                    </ul>
                </div>

                {/* 3. BOTTOM SECTION: COPYRIGHT */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-600 font-medium">
                        © 2026 Virtual Minds, LLC. All Rights Reserved. Practice management for the digital age.
                    </p>
                    <div className="text-[10px] text-slate-700 font-black uppercase tracking-[0.2em]">
                        Architecture by Virtual Minds Digital
                    </div>
                </div>
            </div>
        </footer>
    );
}
