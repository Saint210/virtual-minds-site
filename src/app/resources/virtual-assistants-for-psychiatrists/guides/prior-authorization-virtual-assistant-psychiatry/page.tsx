import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Prior Authorization Virtual Assistant for Psychiatry | California Medication Approval",
    description: "Specialized prior authorization virtual assistants for California psychiatric practices. Fast medication approvals, reduced delays, and improved patient outcomes.",
};

export default function PriorAuthPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-red-50 border-l-4 border-red-500 p-8 mb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-red-500 text-2xl">warning</span>
                            <span className="text-red-700 font-bold">CRITICAL PAIN POINT</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                            Prior Authorization Virtual Assistants
                            <br />
                            <span className="text-red-600">Stop Losing Patients to Delays</span>
                        </h1>
                        California's leading psychiatric practices save significant weekly hours with specialized prior authorization virtual assistants.
                        Get medications approved faster, reduce dropout rates, and improve patient outcomes.
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                                <span className="material-symbols-outlined">speed</span>
                                Start Reducing Delays Today
                            </Link>
                            <Link href="#roi-calculator" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-lg font-black hover:scale-105 transition-all">
                                <span className="material-symbols-outlined">calculate</span>
                                Calculate Your Savings
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="bg-slate-50 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-navy mb-6">The Prior Authorization Crisis</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">High</div>
                                <p className="text-slate-600 text-sm">Psychiatrists report prior auth delays affect patient care</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">Excessive</div>
                                <p className="text-slate-600 text-sm">Average approval time for psychiatric medications</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-600 mb-2">Significant</div>
                                <p className="text-slate-600 text-sm">Patient dropout rate during approval process</p>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-red-700 mb-4">Real Impact on Your Practice</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-navy mb-3">Without Prior Auth Support</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>• 20+ hours/week spent on paperwork</li>
                                        <li>• Patients wait weeks for medication</li>
                                        <li>• High patient frustration and dropout</li>
                                        <li>• Lost revenue from delayed treatment</li>
                                        <li>• Staff burnout from administrative burden</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-700 mb-3">With Virtual Minds Prior Auth VA</h4>
                                    <ul className="space-y-2 text-green-700 text-sm">
                                        <li>• Minimal oversight required</li>
                                        <li>• Faster approval times</li>
                                        <li>• Significant reduction in patient dropout</li>
                                        <li>• Increase in treatment starts</li>
                                        <li>• Happier, more productive staff</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">Comprehensive Prior Authorization Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">medication</span>
                            <h3 className="font-bold text-navy mb-3">Medication Prior Authorizations</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Antidepressants (SSRIs, SNRIs, MAOIs)</li>
                                <li>• Antipsychotics (atypical and typical)</li>
                                <li>• ADHD stimulants and non-stimulants</li>
                                <li>• Anti-anxiety medications and benzodiazepines</li>
                                <li>• Mood stabilizers and anticonvulsants</li>
                                <li>• Prior authorization for brand vs. generic</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">medical_services</span>
                            <h3 className="font-bold text-navy mb-3">Treatment Authorizations</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• TMS (Transcranial Magnetic Stimulation)</li>
                                <li>• Ketamine and esketamine treatments</li>
                                <li>• Intensive outpatient programs (IOP)</li>
                                <li>• Partial hospitalization programs (PHP)</li>
                                <li>• Psychological testing and assessments</li>
                                <li>• Specialty psychiatric procedures</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">description</span>
                            <h3 className="font-bold text-navy mb-3">Documentation & Forms</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Clinical justification letters</li>
                                <li>• Treatment history documentation</li>
                                <li>• Failed medication trials summary</li>
                                <li>• Symptom severity assessments</li>
                                <li>• Functional impairment documentation</li>
                                <li>• Peer-to-peer request preparation</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">phone_in_talk</span>
                            <h3 className="font-bold text-navy mb-3">Insurance Communication</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Direct contact with insurance companies</li>
                                <li>• Status check and follow-up calls</li>
                                <li>• Peer-to-peer review coordination</li>
                                <li>• Denial appeal preparation</li>
                                <li>• Expedited request processing</li>
                                <li>• Claims department liaison</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">Our Streamlined Process</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">1</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Intake & Assessment</h3>
                                <p className="text-slate-600">Patient information collection, insurance verification, and initial requirements assessment.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">2</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Documentation Preparation</h3>
                                <p className="text-slate-600">Clinical justification, treatment history, and all required forms completion.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">3</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Submission & Tracking</h3>
                                <p className="text-slate-600">Electronic submission, daily status checks, and proactive follow-up.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">4</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Approval & Coordination</h3>
                                <p className="text-slate-600">Approval notification, patient coordination, and pharmacy communication.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
                    <p className="text-green-800 font-bold">
                        Maximum operational performance through specialized administrative coordination.
                    </p>
                </div>

                {/* Insurance Expertise */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-8">Insurance Company Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Aetna", "Blue Cross", "Cigna", "UnitedHealth",
                            "Kaiser Permanente", "Health Net", "Blue Shield", "Anthem"
                        ].map((insurer) => (
                            <div key={insurer} className="bg-slate-50 rounded-lg p-4 text-center">
                                <span className="font-bold text-navy">{insurer}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-800 mb-4">California-Specific Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-blue-700 mb-3">Medi-Cal Mastery</h4>
                                <ul className="space-y-2 text-blue-700 text-sm">
                                    <li>• Medi-Cal prior authorization requirements</li>
                                    <li>• California-specific formularies</li>
                                    <li>• County mental health plan coordination</li>
                                    <li>• CalOptima and LA Care expertise</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-700 mb-3">Private Insurance</h4>
                                <ul className="space-y-2 text-blue-700 text-sm">
                                    <li>• PPO vs. HMO authorization differences</li>
                                    <li>• California mental health parity laws</li>
                                    <li>• Workers' comp psychiatric authorizations</li>
                                    <li>• California department of insurance guidelines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="bg-gradient-to-r from-red-600 to-terracotta rounded-2xl p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Stop Letting Prior Authorizations Destroy Your Practice
                        </h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join California psychiatric practices that have significantly reduced prior authorization time and improved patient outcomes.
                            Let our specialized VAs handle the paperwork while you focus on patient care.
                        </p>
                        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule Free Prior Auth Assessment
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
