import Link from "next/link";
import Image from "next/image";
import TrackedContactLink from "@/components/ui/TrackedContactLink";

export default function Footer() {
    return (
        <footer className="relative bg-white border-t border-slate-100 overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#1A2332_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            {/* MAIN FOOTER CONTENT */}
            <div className="relative max-w-[1300px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">

                    {/* Brand Column - 4 cols */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="relative size-10 rounded-lg overflow-hidden border border-slate-200 bg-white p-1.5 group-hover:border-primary transition-all">
                                <Image
                                    src="/images/the-virtual-minds-logo-og-notext.jpg"
                                    alt="Virtual Minds - California Psychiatric Practice Management"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-serif font-black tracking-tight text-trust-navy group-hover:text-primary transition-colors">
                                Virtual Minds
                            </span>
                        </Link>

                        <p className="text-slate-600 text-base font-medium leading-relaxed pr-8">
                            California's premier <strong className="text-trust-navy font-bold">psychiatric practice management</strong> firm. We specialize in billing support coordination, HIPAA-compliant automation, and operational excellence for mental health providers.
                        </p>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-1 gap-3 pt-4">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                                <span className="size-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-green-600 text-xl">verified_user</span>
                                </span>
                                <div>
                                    <div className="font-black text-sm text-trust-navy">HIPAA & CCPA Certified</div>
                                    <div className="text-xs text-slate-600 font-semibold">Full compliance guaranteed</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                                <span className="size-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-blue-600 text-xl">workspace_premium</span>
                                </span>
                                <div>
                                    <div className="font-black text-sm text-trust-navy">Bespoke Support</div>
                                    <div className="text-xs text-slate-600 font-semibold">Psychiatric Specialized</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                                <span className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
                                </span>
                                <div>
                                    <div className="font-black text-sm text-trust-navy">Revenue Sovereignty</div>
                                    <div className="text-xs text-slate-600 font-semibold">Excellence in Coordination</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-6">
                            <Link href="#" className="size-11 rounded-xl bg-slate-100 hover:bg-primary flex items-center justify-center text-slate-500 hover:text-white transition-all border border-slate-200 hover:border-primary hover:-translate-y-1 shadow-sm hover:shadow-lg">
                                <span className="material-symbols-outlined text-lg">language</span>
                            </Link>
                            <TrackedContactLink
                                href="mailto:cheryl@thevirtualminds.com"
                                contactType="email"
                                value="cheryl@thevirtualminds.com"
                                className="size-11 rounded-xl bg-slate-100 hover:bg-primary flex items-center justify-center text-slate-500 hover:text-white transition-all border border-slate-200 hover:border-primary hover:-translate-y-1 shadow-sm hover:shadow-lg"
                            >
                                <span className="material-symbols-outlined text-lg">alternate_email</span>
                            </TrackedContactLink>
                            <Link href="#" className="size-11 rounded-xl bg-slate-100 hover:bg-primary flex items-center justify-center text-slate-500 hover:text-white transition-all border border-slate-200 hover:border-primary hover:-translate-y-1 shadow-sm hover:shadow-lg">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </Link>
                        </div>
                    </div>

                    {/* Services - 2 cols */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-trust-navy text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            Services
                        </h4>
                        <ul className="space-y-3.5">
                            <li>
                                <Link href="/services/practice-start-up" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Practice Start-Up</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/virtual-assistant" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Virtual Assistants</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/billing-and-rcm" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Billing & RCM</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/hipaa-compliance-support" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>HIPAA Compliance</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Locations - 2 cols */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-trust-navy text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            Locations
                        </h4>
                        <ul className="space-y-3.5">
                            <li>
                                <Link href="/locations/los-angeles" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Los Angeles</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/san-francisco" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>San Francisco</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/san-diego" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>San Diego</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/california" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>All California</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources - 2 cols */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-trust-navy text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            Resources
                        </h4>
                        <ul className="space-y-3.5">
                            <li>
                                <Link href="/resources" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Resource Library</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Success Stories</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>FAQ & Support</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                                    <span>Industry Insights</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - 2 cols */}
                    <div className="lg:col-span-2">
                        <h4 className="font-black text-trust-navy text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary" />
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <TrackedContactLink
                                href="tel:+13104006266"
                                contactType="phone"
                                value="+13104006266"
                                className="group flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all"
                            >
                                <span className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                    <span className="material-symbols-outlined text-lg">call</span>
                                </span>
                                <div>
                                    <div className="font-black text-trust-navy text-base group-hover:text-primary transition-colors">(310) 400-6266</div>
                                    <div className="text-xs text-slate-600 font-semibold">Click to call now</div>
                                </div>
                            </TrackedContactLink>

                            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <span className="size-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                                    <span className="material-symbols-outlined text-lg">schedule</span>
                                </span>
                                <div>
                                    <div className="font-black text-trust-navy text-sm">Mon-Fri: 9am-5pm</div>
                                    <div className="text-xs text-slate-600 font-semibold">Pacific Standard Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-sm text-slate-500 font-medium max-w-2xl">
                        © 2026 Virtual Minds, LLC. All rights reserved. <span className="hidden md:inline">|</span><br className="md:hidden" />
                        <span className="font-semibold text-slate-700">California Psychiatric Practice Management & Billing Support Coordination</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy" className="text-sm font-bold text-slate-500 hover:text-trust-navy transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm font-bold text-slate-500 hover:text-trust-navy transition-colors">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="text-sm font-bold text-slate-500 hover:text-trust-navy transition-colors">Sitemap</Link>
                        <Link href="/accessibility" className="text-sm font-bold text-slate-500 hover:text-trust-navy transition-colors">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
