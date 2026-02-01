import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="relative bg-white text-trust-navy pt-16 pb-8 overflow-hidden border-t border-slate-100">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* 1. BRAND COLUMN */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-100 bg-white shadow-sm p-1.5">
                                <Image
                                    src="/images/the-virtual-minds-logo-og-notext.jpg"
                                    alt="Virtual Minds Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-trust-navy leading-none">
                                Virtual Minds
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            Automating the Business of Health so you can focus on the Practice of Healing.
                        </p>
                        <div className="flex gap-2">
                            {['language', 'alternate_email', 'share'].map((icon) => (
                                <Link key={icon} href="#" className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-[#D2691E] hover:text-white text-slate-400 transition-all border border-slate-100">
                                    <span className="material-symbols-outlined text-base">{icon}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 2. SERVICES */}
                    <div>
                        <h4 className="font-bold text-trust-navy text-[10px] uppercase tracking-[0.2em] mb-6 text-[#D2691E]">Services</h4>
                        <ul className="space-y-3 text-sm font-semibold text-slate-500">
                            <li><Link href="/services/practice-start-up" className="hover:text-[#D2691E] transition-colors">Practice Start-Up</Link></li>
                            <li><Link href="/services/virtual-assistant" className="hover:text-[#D2691E] transition-colors">Virtual Assistance</Link></li>
                            <li><Link href="/services/billing-and-rcm" className="hover:text-[#D2691E] transition-colors">Billing & RCM</Link></li>
                            <li><Link href="/services/hipaa-compliance-support" className="hover:text-[#D2691E] transition-colors">HIPAA Auditing</Link></li>
                        </ul>
                    </div>

                    {/* 3. RESOURCES */}
                    <div>
                        <h4 className="font-bold text-trust-navy text-[10px] uppercase tracking-[0.2em] mb-6 text-[#D2691E]">Resources</h4>
                        <ul className="space-y-3 text-sm font-semibold text-slate-500">
                            <li><Link href="/faq" className="hover:text-[#D2691E] transition-colors">Help Center / FAQ</Link></li>
                            <li><Link href="/resources" className="hover:text-[#D2691E] transition-colors">Clinician Resources</Link></li>
                            <li><Link href="/case-studies" className="hover:text-[#D2691E] transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-[#D2691E] transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* 4. CONTACT (Condensed) */}
                    <div>
                        <h4 className="font-bold text-trust-navy text-[10px] uppercase tracking-[0.2em] mb-6 text-[#D2691E]">Contact</h4>
                        <div className="space-y-4 text-sm font-bold text-trust-navy">
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400">call</span>
                                (310) 400-6266
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400">schedule</span>
                                Mon-Fri: 9am - 5pm
                            </p>
                            <div className="pt-4 flex items-center gap-2 text-slate-500 font-medium text-xs">
                                <span className="material-symbols-outlined text-[#D2691E]">verified_user</span>
                                HIPAA & CCPA Compliant
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">
                        © 2026 Virtual Minds, LLC.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 hover:text-trust-navy">Privacy</Link>
                        <Link href="/terms" className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 hover:text-trust-navy">Terms</Link>
                        <Link href="/sitemap.xml" className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 hover:text-trust-navy">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
