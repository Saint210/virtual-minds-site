import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Beverly Hills Psychiatric Virtual Assistant | Elite Practice Support",
    description: "Premium virtual assistants for Beverly Hills psychiatric practices serving discerning clientele. HIPAA and CMIA compliant, specializing in confidentiality and high-profile patient care.",
};

export default function BeverlyHillsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-terracotta/10 to-cream/50 p-8 mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-terracotta text-white rounded-full px-4 py-2 text-sm font-medium mb-6">
                            <span className="material-symbols-outlined">location_on</span>
                            <span>Beverly Hills, California</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                            Beverly Hills Psychiatric Virtual Assistants
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            Elite virtual assistant services for Beverly Hills psychiatric practices serving industry leaders, public figures, and families who demand exceptional care and absolute confidentiality.
                        </p>
                        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule Private Consultation
                        </Link>
                    </div>
                </section>

                {/* Beverly Hills Advantage */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="bg-slate-50 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-navy mb-6">The Beverly Hills Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-terracotta mb-4">Elite Practice Expertise</h3>
                                <p className="text-slate-600 mb-4">
                                    Our virtual assistants understand the unique demands of Beverly Hills psychiatric practices:
                                </p>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">diamond</span>
                                        <span>Discretion for high-profile patients</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">diamond</span>
                                        <span>Coordination with executive assistants</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">diamond</span>
                                        <span>Understanding of privacy expectations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">diamond</span>
                                        <span>Professional communication standards</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-terracotta mb-4">Beverly Hills Market Knowledge</h3>
                                <p className="text-slate-600 mb-4">
                                    Local expertise that makes a difference:
                                </p>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">location_city</span>
                                        <span>Referral network familiarity</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">location_city</span>
                                        <span>Local specialist coordination</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">location_city</span>
                                        <span>Concierge medicine protocols</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">location_city</span>
                                        <span>High-end practice management</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialized Services */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">Services for Beverly Hills Practices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">privacy_tip</span>
                            <h3 className="font-bold text-navy mb-3">Elite Patient Coordination</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Discreet scheduling, communication with personal assistants, and coordination with family members while maintaining strict confidentiality.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• Private appointment scheduling</li>
                                <li>• Executive assistant liaison</li>
                                <li>• Family coordination</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">security</span>
                            <h3 className="font-bold text-navy mb-3">Enhanced Privacy Protection</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Advanced security protocols for high-profile patients, including encrypted communications and enhanced access controls.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• Encrypted messaging</li>
                                <li>• Enhanced access controls</li>
                                <li>• Privacy-first workflows</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">handshake</span>
                            <h3 className="font-bold text-navy mb-3">Referral Network Management</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Coordination with Beverly Hills specialists, luxury treatment centers, and exclusive mental health resources.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• Specialist coordination</li>
                                <li>• Luxury facility referrals</li>
                                <li>• Network management</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">payments</span>
                            <h3 className="font-bold text-navy mb-3">Premium Billing Services</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Expert handling of high-value claims, private insurance coordination, and discreet payment processing.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• High-value claims</li>
                                <li>• Private insurance</li>
                                <li>• Discreet billing</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">travel_explore</span>
                            <h3 className="font-bold text-navy mb-3">Travel Coordination</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                Support for patients who travel, including telehealth coordination across time zones and international compliance.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• Multi-timezone scheduling</li>
                                <li>• Telehealth coordination</li>
                                <li>• Travel documentation</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">support_agent</span>
                            <h3 className="font-bold text-navy mb-3">Concierge Support</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                White-glove service matching the expectations of Beverly Hills clientele and their families.
                            </p>
                            <ul className="space-y-1 text-slate-500 text-xs">
                                <li>• White-glove service</li>
                                <li>• Family support</li>
                                <li>• Premium experience</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">Beverly Hills Practice Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-cream/50 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">
                                    JD
                                </div>
                                <div>
                                    <p className="font-bold text-navy">Dr. James Davidson</p>
                                    <p className="text-sm text-slate-600">Beverly Hills Psychiatry</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">
                                "Virtual Minds understands the discretion required for our clientele. Their coordination with executive assistants and family members is seamless and professional."
                            </p>
                        </div>
                        <div className="bg-cream/50 rounded-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold">
                                    SC
                                </div>
                                <div>
                                    <p className="font-bold text-navy">Dr. Sarah Chen</p>
                                    <p className="text-sm text-slate-600">Golden Triangle Mental Health</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">
                                "The level of professionalism and privacy protection is exactly what our high-profile patients expect. Virtual Minds delivers Beverly Hills standards."
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="bg-gradient-to-r from-terracotta to-sage rounded-2xl p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Elevate Your Beverly Hills Practice
                        </h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join Beverly Hills' most prestigious psychiatric practices that trust Virtual Minds for elite virtual assistant services. 
                            Experience the difference that specialized, discreet support can make.
                        </p>
                        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-terracotta rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule Private Consultation
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
