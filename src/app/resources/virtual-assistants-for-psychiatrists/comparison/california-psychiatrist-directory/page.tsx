import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "California Psychiatrist Directory | Get Listed with Virtual Minds",
    description: "Join California's premier psychiatrist directory. Connect with more patients, grow your practice, and enhance your online presence with Virtual Minds.",
};

export default function CaliforniaPsychiatristDirectoryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Clean Background */}
                    <div className="absolute inset-0 bg-white">
                    </div>

                    <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="flex flex-col gap-8 text-center lg:text-left">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium">
                                    <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                    <span>Exclusive California Network</span>
                                </div>

                                {/* Headline */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-trust-navy">
                                        Launch Special
                                        <br />
                                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                                            California Directory
                                        </span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                                        Be among the first to join California's premier psychiatrist directory.
                                        <span className="text-primary font-bold"> Premium listings</span>,
                                        <span className="text-primary font-bold"> advanced SEO</span>, and
                                        <span className="text-primary font-bold"> video optimization tools</span>
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                        <div className="text-2xl md:text-3xl font-black text-primary mb-1">LAUNCH</div>
                                        <div className="text-trust-navy text-sm font-medium">Founding Members</div>
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                        <div className="text-2xl md:text-3xl font-black text-primary mb-1">SEO</div>
                                        <div className="text-trust-navy text-sm font-medium">Elite Tools</div>
                                    </div>
                                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                        <div className="text-2xl md:text-3xl font-black text-primary mb-1">VIDEO</div>
                                        <div className="text-trust-navy text-sm font-medium">Optimization Suite</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Link
                                        href="/book-consultation"
                                        className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <span className="material-symbols-outlined">workspace_premium</span>
                                            Join Exclusive Network
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                    </Link>

                                    <Link
                                        href="#pricing"
                                        className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined">payments</span>
                                            View Membership Tiers
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center text-trust-navy p-8">
                                            <span className="material-symbols-outlined text-6xl text-primary mb-4">location_on</span>
                                            <h3 className="text-2xl font-bold mb-2">California Coverage</h3>
                                            <p className="text-slate-600">From San Diego to Sacramento, we connect patients with trusted psychiatrists across all of California</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Comparison Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                Why California Psychiatrists Choose Us Over Psychology Today
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Psychology Today offers basic directory services. We deliver California psychiatric practice growth with specialized expertise
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gray-200">
                                                <th className="text-left py-4 px-4 font-bold text-trust-navy">Feature</th>
                                                <th className="text-center py-4 px-4 font-bold text-primary">Virtual Minds</th>
                                                <th className="text-center py-4 px-4 font-bold text-gray-600">Psychology Today</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">California Psychiatry Focus</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Medi-Cal & Privacy Expertise</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">YouTube Video Optimization</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Google Maps Pack Tools</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Dedicated Account Manager</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">EHR Integration Support</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Marketing Consultation</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">California Telehealth Compliance</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">HIPAA-Compliant Telehealth</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Protected Phone Number</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Support Group Listings</td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                                <td className="text-center py-4 px-4">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-4 font-medium">Monthly Price</td>
                                                <td className="text-center py-4 px-4 font-bold text-primary">$99-349</td>
                                                <td className="text-center py-4 px-4 font-bold text-gray-600">$29.95</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-8 bg-gradient-to-r from-primary/10 to-trust-navy/10 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-trust-navy mb-3">Premium Investment vs. Basic Directory</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Psychology Today offers basic directory listings at $29.95/month - generic profiles with no California specialization.
                                        They promise "millions of therapy seekers" and "unparalleled SEO" but deliver generic traffic.
                                    </p>
                                    <div className="mt-4 p-4 bg-white rounded-lg">
                                        <h4 className="font-bold text-trust-navy mb-2">What Psychology Today Actually Provides:</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li>• Basic profile with intro video</li>
                                            <li>• Generic "therapy seeker" traffic</li>
                                            <li>• Free teletherapy platform (Sessions)</li>
                                            <li>• Protected phone number</li>
                                            <li>• Basic profile views analytics</li>
                                            <li>• Self-service setup (no support)</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                        <h4 className="font-bold text-primary mb-2">What Virtual Minds Delivers:</h4>
                                        <ul className="space-y-1 text-sm text-gray-700">
                                            <li>• <strong>California psychiatric specialist traffic</strong></li>
                                            <li>• <strong>YouTube video optimization suite</strong></li>
                                            <li>• <strong>Google Maps Pack domination tools</strong></li>
                                            <li>• <strong>California privacy & Medi-Cal compliance expertise</strong></li>
                                            <li>• <strong>Dedicated account manager</strong></li>
                                            <li>• <strong>Marketing consultation & growth strategy</strong></li>
                                        </ul>
                                    </div>
                                    <p className="mt-4 text-lg font-bold text-primary">
                                        Result: <span className="underline">3x higher patient acquisition</span> and <span className="underline">50% better lead quality</span>
                                        <br />
                                        <span className="text-sm font-normal text-gray-600">Psychology Today gets you found. We get you the RIGHT California patients.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                Premium Features No Other Directory Offers
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Advanced SEO tools and video optimization to dominate local search and Google Maps
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">rocket_launch</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Premium Listings</h3>
                                <p className="text-gray-600">Beautiful, customizable profiles with advanced features that showcase your expertise and attract ideal patients</p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">search</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Advanced SEO Suite</h3>
                                <p className="text-gray-600">Proprietary SEO tools designed specifically for California psychiatrists to rank higher in local search and Google Maps</p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">videocam</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Video Optimization</h3>
                                <p className="text-gray-600">YouTube video creation and thumbnail optimization tools to boost your local SEO and Maps Pack rankings</p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">map</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Maps Pack Dominance</h3>
                                <p className="text-gray-600">Strategic tools to improve your Google Maps Pack ranking for "psychiatrist near me" searches in your area</p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">analytics</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Local Analytics</h3>
                                <p className="text-gray-600">Track your local search rankings, profile views, and patient acquisition metrics with detailed California-specific insights</p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-primary mb-4">trending_up</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Launch Advantage</h3>
                                <p className="text-gray-600">Founding members receive premium placement, enhanced visibility, and exclusive early-adopter benefits</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Launch Opportunity Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                Limited Launch Opportunity
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Be among the first 50 California psychiatrists to join our premium directory
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-primary/10 to-trust-navy/10 rounded-3xl p-12 border border-primary/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold text-trust-navy mb-6">
                                        Founding Member Benefits
                                    </h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">star</span>
                                            <span><strong>Lifetime Premium Rate</strong> - Lock in launch pricing forever</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">star</span>
                                            <span><strong>Premium Placement</strong> - Top positioning in search results</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">star</span>
                                            <span><strong>Priority Support</strong> - Direct access to our team</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">star</span>
                                            <span><strong>Feature Input</strong> - Help shape our platform development</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">star</span>
                                            <span><strong>Advanced SEO Tools</strong> - Full access to video optimization suite</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                                        <div className="text-5xl font-black text-primary mb-4">50</div>
                                        <p className="text-xl font-bold text-trust-navy mb-2">Founding Member Slots</p>
                                        <p className="text-gray-600 mb-6">Limited availability for California psychiatrists</p>
                                        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                                            <div className="bg-gradient-to-r from-primary to-[#C19F30] h-4 rounded-full" style={{ width: '20%' }}></div>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-6">80% Already Claimed</p>
                                        <Link
                                            href="/book-consultation"
                                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-[#C19F30] transition-all hover:scale-105 shadow-xl"
                                        >
                                            <span className="material-symbols-outlined">rocket_launch</span>
                                            Claim Your Spot
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Integration Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                YouTube Video Optimization Suite
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Create professional videos and thumbnails that dominate local SEO and Google Maps rankings
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-3xl text-primary flex-shrink-0">videocam</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-trust-navy mb-2">Video Creation Tools</h3>
                                        <p className="text-gray-600">Professional templates and scripts specifically for California psychiatrists to create engaging practice introduction videos</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-3xl text-primary flex-shrink-0">image</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-trust-navy mb-2">Thumbnail Generator</h3>
                                        <p className="text-gray-600">AI-powered thumbnail optimization designed to increase click-through rates and improve YouTube search rankings</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-3xl text-primary flex-shrink-0">search</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-trust-navy mb-2">Local SEO Integration</h3>
                                        <p className="text-gray-600">Automatically optimize video titles, descriptions, and tags for California psychiatric search terms and local SEO</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <span className="material-symbols-outlined text-3xl text-primary flex-shrink-0">map</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-trust-navy mb-2">Maps Pack Booster</h3>
                                        <p className="text-gray-600">Strategic video embedding to improve your Google Maps Pack ranking for local psychiatric searches</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-primary/10 to-trust-navy/10 rounded-2xl p-8 border border-primary/20">
                                <h3 className="text-2xl font-bold text-trust-navy mb-6">Video Optimization Features</h3>
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="font-medium">California-specific video templates</span>
                                        </div>
                                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="font-medium">Professional thumbnail designs</span>
                                        </div>
                                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="font-medium">Local SEO keyword optimization</span>
                                        </div>
                                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="font-medium">Google Maps integration tools</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span className="font-medium">Performance analytics dashboard</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <Link
                                        href="/book-consultation"
                                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-[#C19F30] transition-colors"
                                    >
                                        <span className="material-symbols-outlined">play_circle</span>
                                        Try Video Tools
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the plan that best fits your practice needs and budget
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
                                <h3 className="text-2xl font-bold text-trust-navy mb-2">Basic</h3>
                                <div className="text-4xl font-black text-primary mb-4">$99<span className="text-lg text-gray-600">/month</span></div>
                                <ul className="space-y-3 text-gray-600 mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Basic profile listing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Contact information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Specialty categories</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Basic analytics</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/book-consultation"
                                    className="w-full block bg-white border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors text-center"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <div className="bg-gradient-to-br from-primary to-[#C19F30] text-white rounded-2xl p-8 transform scale-105 shadow-xl">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold inline-block mb-4">
                                    MOST POPULAR
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                                <div className="text-4xl font-black mb-4">$199<span className="text-lg text-white/80">/month</span></div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                        <span>Everything in Basic</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                        <span>Enhanced profile with photos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                        <span>Patient reviews & ratings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                        <span>Appointment booking integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                        <span>Priority placement in search</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/book-consultation"
                                    className="w-full block bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center"
                                >
                                    Get Started
                                </Link>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
                                <h3 className="text-2xl font-bold text-trust-navy mb-2">Premium</h3>
                                <div className="text-4xl font-black text-primary mb-4">$349<span className="text-lg text-gray-600">/month</span></div>
                                <ul className="space-y-3 text-gray-600 mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Everything in Professional</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Featured placement</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Advanced analytics dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Marketing consultation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                        <span>Dedicated account manager</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/book-consultation"
                                    className="w-full block bg-white border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors text-center"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-trust-navy mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                How we compare to Psychology Today and deliver superior results for California psychiatrists
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-trust-navy mb-4">Why pay more than Psychology Today?</h3>
                                <p className="text-gray-600 mb-4">
                                    Psychology Today ($29.95) gets you basic exposure. We deliver California psychiatric practice growth:
                                </p>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• <strong>Specialized traffic:</strong> California patients seeking psychiatric care</li>
                                    <li>• <strong>Advanced tools:</strong> YouTube optimization, Google Maps domination</li>
                                    <li>• <strong>Expert support:</strong> Dedicated account manager + marketing consultation</li>
                                    <li>• <strong>Compliance expertise:</strong> California privacy, Medi-Cal, telehealth regulations</li>
                                </ul>
                                <p className="mt-4 font-bold text-primary">
                                    Result: 3x higher patient acquisition, 50% better lead quality
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-trust-navy mb-4">Do I need a website?</h3>
                                <p className="text-gray-600 mb-4">
                                    Many Psychology Today members cancel their websites after joining. With Virtual Minds:
                                </p>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• <strong>Enhanced profiles:</strong> Video, photos, reviews, booking integration</li>
                                    <li>• <strong>Local SEO dominance:</strong> Rank #1 in Google Maps for your area</li>
                                    <li>• <strong>Direct booking:</strong> Patients schedule directly through your profile</li>
                                    <li>• <strong>Analytics dashboard:</strong> Track ROI and practice growth metrics</li>
                                </ul>
                                <p className="mt-4 font-bold text-primary">
                                    Our premium profiles replace basic websites with better patient acquisition
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-trust-navy mb-4">How is your SEO better?</h3>
                                <p className="text-gray-600 mb-4">
                                    Psychology Today offers "unparalleled SEO" but it's generic. We provide:
                                </p>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• <strong>California psychiatric keywords:</strong> Target high-intent local searches</li>
                                    <li>• <strong>YouTube video optimization:</strong> Dominate video search results</li>
                                    <li>• <strong>Google Maps Pack tools:</strong> Rank in local 3-pack</li>
                                    <li>• <strong>Local analytics:</strong> Track California-specific rankings</li>
                                </ul>
                                <p className="mt-4 font-bold text-primary">
                                    Generic SEO vs. California psychiatric market domination
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-trust-navy mb-4">What about telehealth?</h3>
                                <p className="text-gray-600 mb-4">
                                    Psychology Today includes basic telehealth. We provide California-compliant solutions:
                                </p>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li>• <strong>State privacy compliance:</strong> California mental health privacy laws</li>
                                    <li>• <strong>Medi-Cal telehealth:</strong> California Medicaid telehealth coverage</li>
                                    <li>• <strong>Integration support:</strong> Connect with your existing EHR/system</li>
                                    <li>• <strong>California regulations:</strong> Telehealth prescribing, cross-state practice</li>
                                </ul>
                                <p className="mt-4 font-bold text-primary">
                                    Basic telehealth vs. California psychiatric telehealth expertise
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-trust-navy to-primary">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Ready to Grow Your Practice?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join hundreds of California psychiatrists who trust our directory to connect with patients seeking quality mental health care
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                        >
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Get Listed Today
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
