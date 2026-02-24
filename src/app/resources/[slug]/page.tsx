import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import specialties from '@/data/specialties.json';

// Generate static params for all specialties
export async function generateStaticParams() {
    return specialties.map((specialty) => ({
        slug: `virtual-assistants-for-${specialty.slug}`,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const specialtySlug = params.slug.replace('virtual-assistants-for-', '');
    const data = specialties.find((s) => s.slug === specialtySlug);

    if (!data) {
        return {
            title: 'Resource Not Found',
        };
    }

    return {
        title: data.metaTitle,
        description: data.metaDescription,
    };
}

export default async function SpecialtyResourcePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    // Parse the slug to get the specialty
    // Expected format: virtual-assistants-for-[specialty]
    const prefix = 'virtual-assistants-for-';

    if (!params.slug.startsWith(prefix)) {
        notFound();
    }

    const specialtySlug = params.slug.replace(prefix, '');
    const data = specialties.find((s) => s.slug === specialtySlug);

    if (!data) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-grow">
                {/* Breadcrumbs */}
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-8">
                    <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                        <Link className="hover:text-primary" href="/">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-trust-navy font-medium">Resources</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-trust-navy">
                                The Essential Guide to <span className="text-primary italic">{data.name}</span> Virtual Assistants
                            </h1>
                            <p className="text-lg text-slate-600 max-w-xl">
                                {data.heroDescription}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow">
                                    Access Full Library
                                </Link>
                                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/5 transition-colors">
                                    Watch Case Study
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-slate-100">
                                <div
                                    className="aspect-video bg-cover bg-center"
                                    style={{ backgroundImage: `url("${data.heroImage}")` }}
                                ></div>
                                <div className="p-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">verified_user</span>
                                    <span className="text-sm font-medium text-trust-navy">Verified HIPAA-Compliant Workflows</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories / Chips */}
                <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-12 border-b border-slate-200 pb-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold font-display text-trust-navy">Browse {data.name} Topics</h3>
                        <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline" href="#">
                            View all categories <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {data.categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-6 cursor-pointer transition-colors ${cat.active
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'bg-white border border-slate-200 hover:border-primary'
                                    }`}
                            >
                                <p className="text-sm font-medium">{cat.name}</p>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Main Content Grid */}
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Resource Cards */}
                        <div className="flex-1 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {data.resources.map((resource, i) => (
                                    <div key={i} className="flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 group hover:shadow-xl transition-all">
                                        <div
                                            className="h-48 bg-cover bg-center overflow-hidden"
                                            style={{ backgroundImage: `url("${resource.image}")` }}
                                        ></div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-1 rounded">{resource.category}</span>
                                                <span className="text-xs text-slate-400">{resource.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors text-trust-navy">{resource.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                                {resource.description}
                                            </p>
                                            <a className="text-sm font-bold flex items-center gap-2 text-trust-navy group-hover:gap-3 transition-all" href="#">
                                                Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <div className="flex justify-center pt-8">
                                <button className="bg-slate-100 text-trust-navy px-10 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                                    Load More Articles
                                </button>
                            </div>
                        </div>

                        {/* Sidebar Widget */}
                        <aside className="w-full lg:w-[320px] shrink-0">
                            <div className="sticky top-28 space-y-8">
                                {/* Scaling Guide Widget */}
                                <div className="bg-primary rounded-xl p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 opacity-10 scale-150 transform translate-x-1/4 -translate-y-1/4">
                                        <span className="material-symbols-outlined text-9xl">auto_graph</span>
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-bold font-display mb-4">Practice Scaling Guide 2026</h4>
                                        <p className="text-white/90 text-sm leading-relaxed mb-6">
                                            Learn the exact frameworks top {data.name.toLowerCase()} practices use to double their patient capacity without adding overhead.
                                        </p>
                                        <div className="space-y-4">
                                            <input
                                                className="w-full bg-white/20 border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white border focus:bg-white/30 transition-all text-sm"
                                                placeholder="Work Email"
                                                type="email"
                                            />
                                            <button className="w-full bg-white text-trust-navy font-bold py-3 rounded-lg hover:shadow-lg transition-all text-sm">
                                                Download Scaling Guide
                                            </button>
                                            <p className="text-[10px] text-white/70 text-center">
                                                By clicking, you agree to receive expert VA scaling tips.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Signals Widget */}
                                <div className="bg-white border border-slate-100 rounded-xl p-6">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">HIPAA Security Center</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary">security</span>
                                            <div>
                                                <p className="text-xs font-bold text-trust-navy">End-to-End Encryption</p>
                                                <p className="text-[11px] text-slate-500">All VA workflows utilize 256-bit encryption standards.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary">gavel</span>
                                            <div>
                                                <p className="text-xs font-bold text-trust-navy">BAA Included</p>
                                                <p className="text-[11px] text-slate-500">Standard Business Associate Agreements provided for all staff.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary">verified</span>
                                            <div>
                                                <p className="text-xs font-bold text-trust-navy">Ongoing Training</p>
                                                <p className="text-[11px] text-slate-500">Quarterly HIPAA re-certification for all virtual personnel.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
