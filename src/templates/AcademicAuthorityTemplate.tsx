import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

/**
 * TEMPLATE: Academic Authority
 * 
 * Design Philosophy:
 * - Full-width layouts emphasizing credentials and expertise
 * - Publication-style typography (larger serif headlines, readable body)
 * - Muted, professional color palette (Navy, Slate, Cream)
 * - Structured sections with clear hierarchy
 * - Perfect for: Research-focused psychiatrists, university affiliates, published authors
 */

export default function AcademicAuthorityTemplate() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">

                {/* 
          HERO: Full-Width Academic Header
          - Credentials front and center
          - Clean, authoritative typography
          - Subtle background texture
        */}
                <section className="relative py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-5xl mx-auto px-6">
                        {/* Credentials Badge */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded">MD, PhD</span>
                            <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded">Board Certified</span>
                            <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded">Stanford Medicine</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Evidence-Based Psychiatric Care
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
                            Integrating the latest neuroscience research with personalized treatment protocols.
                            Over 15 years of clinical experience and 40+ peer-reviewed publications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/book-consultation"
                                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors text-center"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/research"
                                className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-slate-900 text-slate-900 font-semibold rounded-lg transition-colors text-center"
                            >
                                View Publications
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 
          CREDENTIALS SECTION: Academic Timeline
          - Education & Training
          - Publications & Research
          - Professional Affiliations
        */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
                            Academic Background
                        </h2>

                        <div className="space-y-8">
                            {/* Timeline Item */}
                            <div className="flex gap-6 border-l-2 border-slate-200 pl-6">
                                <div className="flex-shrink-0 w-24 text-sm font-bold text-slate-500">
                                    2015 - Present
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Associate Professor of Psychiatry
                                    </h3>
                                    <p className="text-slate-600 mb-2">Stanford University School of Medicine</p>
                                    <p className="text-sm text-slate-500">
                                        Leading research on treatment-resistant depression and novel pharmacological interventions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 border-l-2 border-slate-200 pl-6">
                                <div className="flex-shrink-0 w-24 text-sm font-bold text-slate-500">
                                    2012 - 2015
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Clinical Fellowship
                                    </h3>
                                    <p className="text-slate-600 mb-2">McLean Hospital, Harvard Medical School</p>
                                    <p className="text-sm text-slate-500">
                                        Specialized training in mood disorders and psychopharmacology.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 border-l-2 border-slate-200 pl-6">
                                <div className="flex-shrink-0 w-24 text-sm font-bold text-slate-500">
                                    2008 - 2012
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Psychiatry Residency
                                    </h3>
                                    <p className="text-slate-600 mb-2">UCSF Medical Center</p>
                                    <p className="text-sm text-slate-500">
                                        Chief Resident, 4th year. Focus on neuropsychiatry and consultation-liaison.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
          RESEARCH HIGHLIGHTS
          - Featured Publications
          - Clinical Trials
          - Speaking Engagements
        */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            Recent Publications
                        </h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            Contributing to the advancement of psychiatric medicine through rigorous research.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Publication Card */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">
                                    Journal of Clinical Psychiatry • 2024
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3 leading-tight">
                                    Novel Approaches to Treatment-Resistant Depression: A Meta-Analysis
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Systematic review of emerging pharmacological and neuromodulation interventions.
                                </p>
                                <Link href="#" className="text-sm font-semibold text-slate-900 hover:underline">
                                    Read Full Paper →
                                </Link>
                            </div>

                            <div className="bg-white p-6 rounded-lg border border-slate-200">
                                <div className="text-xs font-bold text-slate-500 uppercase mb-2">
                                    American Journal of Psychiatry • 2023
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3 leading-tight">
                                    Pharmacogenomic Testing in Clinical Practice: Real-World Outcomes
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Multi-site study demonstrating improved response rates with genetic-guided prescribing.
                                </p>
                                <Link href="#" className="text-sm font-semibold text-slate-900 hover:underline">
                                    Read Full Paper →
                                </Link>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href="/publications"
                                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:underline"
                            >
                                View All Publications
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 
          CLINICAL APPROACH
          - Philosophy
          - Treatment Modalities
          - Patient-Centered Care
        */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                                    Clinical Philosophy
                                </h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        My approach integrates cutting-edge neuroscience with compassionate, individualized care.
                                        Every treatment plan is informed by the latest research while remaining deeply attuned to
                                        each patient's unique circumstances.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        I believe in transparent communication about treatment options, potential outcomes, and
                                        the scientific rationale behind clinical decisions. Patients are active partners in their care.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Evidence-Based</h3>
                                    <p className="text-sm text-slate-600">
                                        Treatment protocols grounded in peer-reviewed research and clinical guidelines.
                                    </p>
                                </div>
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Precision Medicine</h3>
                                    <p className="text-sm text-slate-600">
                                        Utilizing pharmacogenomic testing and biomarkers to optimize medication selection.
                                    </p>
                                </div>
                                <div className="border-l-4 border-slate-900 pl-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Collaborative Care</h3>
                                    <p className="text-sm text-slate-600">
                                        Coordinating with therapists, primary care, and specialists for comprehensive treatment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
          CTA: Professional & Direct
        */}
                <section className="py-20 bg-slate-900 text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold mb-6">
                            Accepting New Patients
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Initial consultations available for complex cases, second opinions, and ongoing psychiatric care.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-block px-10 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            Schedule Consultation
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
