import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Ultimate Guide to Psychiatric Virtual Assistants 2026 | Virtual Minds",
    description: "Complete guide to virtual assistants for psychiatrists. Learn costs, services, compliance, and how to choose the right VA for your California psychiatric practice.",
};

export default function UltimateGuidePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-cream to-sage/20 p-8 mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-terracotta/10 border border-terracotta/20 rounded-full px-4 py-2 text-terracotta text-sm font-medium mb-6">
                            <span className="material-symbols-outlined">auto_awesome</span>
                            <span>2026 Complete Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                            Ultimate Guide to Psychiatric Virtual Assistants
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            Everything California psychiatrists need to know about hiring, managing, and maximizing virtual assistants. From HIPAA compliance to ROI calculations, we've got you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white rounded-lg font-black hover:scale-105 transition-all">
                                <span className="material-symbols-outlined">calendar_today</span>
                                Free Strategy Call
                            </Link>
                            <Link href="#cost-analysis" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy border-2 border-navy rounded-lg font-black hover:scale-105 transition-all">
                                <span className="material-symbols-outlined">calculate</span>
                                Calculate ROI
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Navigation */}
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <div className="bg-slate-50 rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-navy mb-4">Quick Navigation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="#what-is" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">help</span>
                                <span className="font-medium">What is a Psychiatric VA?</span>
                            </Link>
                            <Link href="#services" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">services</span>
                                <span className="font-medium">Services Offered</span>
                            </Link>
                            <Link href="#costs" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">payments</span>
                                <span className="font-medium">Cost Analysis</span>
                            </Link>
                            <Link href="#compliance" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">verified</span>
                                <span className="font-medium">Compliance Requirements</span>
                            </Link>
                            <Link href="#choosing" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">how_to_choose</span>
                                <span className="font-medium">How to Choose</span>
                            </Link>
                            <Link href="#implementation" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-terracotta">rocket_launch</span>
                                <span className="font-medium">Implementation</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* What is a Psychiatric VA */}
                <section id="what-is" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">What is a Psychiatric Virtual Assistant?</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-slate-600 mb-6">
                            A psychiatric virtual assistant is a remote professional specifically trained to handle the administrative, clinical support, and operational tasks unique to mental health practices. Unlike general virtual assistants, psychiatric VAs understand:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-cream/50 rounded-lg p-6">
                                <h3 className="font-bold text-navy mb-3">Clinical Knowledge</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Psychiatric terminology and DSM-5 criteria</li>
                                    <li>• Medication management protocols</li>
                                    <li>• Mental health billing codes (90791, 90834, etc.)</li>
                                    <li>• Crisis intervention procedures</li>
                                </ul>
                            </div>
                            <div className="bg-cream/50 rounded-lg p-6">
                                <h3 className="font-bold text-navy mb-3">Administrative Expertise</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• HIPAA and California privacy compliance</li>
                                    <li>• EHR/EMR management</li>
                                    <li>• Insurance prior authorizations</li>
                                    <li>• Patient coordination and scheduling</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Offered */}
                <section id="services" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">Services Offered by Psychiatric VAs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">calendar_month</span>
                            <h3 className="font-bold text-navy mb-3">Scheduling & Intake</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Patient appointment scheduling</li>
                                <li>• New patient intake coordination</li>
                                <li>• Insurance verification</li>
                                <li>• Appointment reminders</li>
                                <li>• Waitlist management</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">receipt_long</span>
                            <h3 className="font-bold text-navy mb-3">Billing & Insurance</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Insurance claim submission</li>
                                <li>• Prior authorization management</li>
                                <li>• Denial appeals</li>
                                <li>• Superbill preparation</li>
                                <li>• Payment posting</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <span className="material-symbols-outlined text-terracotta text-3xl mb-4">description</span>
                            <h3 className="font-bold text-navy mb-3">Clinical Support</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Chart preparation</li>
                                <li>• Progress note documentation</li>
                                <li>• Prescription coordination</li>
                                <li>• Lab result tracking</li>
                                <li>• Referral management</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Cost Analysis */}
                <section id="costs" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">Psychiatric Virtual Assistant Costs</h2>
                    <div className="bg-slate-50 rounded-xl p-8 mb-8">
                        <h3 className="text-xl font-bold text-navy mb-6">2026 Pricing Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-terracotta mb-4">By Experience Level</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Entry-Level (0-2 years)</span>
                                        <span className="font-bold">$18-28/hour</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Experienced (2-5 years)</span>
                                        <span className="font-bold">$28-40/hour</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Specialized (5+ years)</span>
                                        <span className="font-bold">$35-50/hour</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-terracotta mb-4">By Service Model</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Hourly</span>
                                        <span className="font-bold">$25-50/hour</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Part-Time (20 hrs/week)</span>
                                        <span className="font-bold">$1,800-3,200/month</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span>Full-Time (40 hrs/week)</span>
                                        <span className="font-bold">$3,200-6,400/month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-navy mb-4">ROI Calculator</h3>
                        <p className="text-slate-600 mb-4">
                            Most psychiatric practices see ROI within 2-3 months through:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-terracotta mb-3">Revenue Increases</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li>• Increase patient capacity</li>
                                    <li>• Precise billing support</li>
                                    <li>• Significant reduction in no-shows</li>
                                    <li>• Faster claim processing</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-terracotta mb-3">Cost Savings</h4>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li>• Reduced admin time for psychiatrist</li>
                                    <li>• Lowered operational costs</li>
                                    <li>• Fewer billing errors</li>
                                    <li>• Lower compliance risk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Requirements */}
                <section id="compliance" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">Compliance Requirements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-terracotta">shield</span>
                                HIPAA Compliance
                            </h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• Business Associate Agreement (BAA)</li>
                                <li>• Encrypted communication systems</li>
                                <li>• Secure data storage protocols</li>
                                <li>• Annual compliance training</li>
                                <li>• Audit trail documentation</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-terracotta">gavel</span>
                                California-Specific Privacy
                            </h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li>• California Medical Information Act</li>
                                <li>• Stricter privacy than HIPAA</li>
                                <li>• Medi-Cal billing requirements</li>
                                <li>• State telehealth regulations</li>
                                <li>• California-specific documentation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How to Choose */}
                <section id="choosing" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">How to Choose the Right Psychiatric VA</h2>
                    <div className="space-y-8">
                        <div className="bg-cream/50 rounded-xl p-6">
                            <h3 className="font-bold text-navy mb-4">Key Selection Criteria</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-terracotta mb-3">Must-Have Qualifications</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>✓ Psychiatric experience (minimum 1 year)</li>
                                        <li>✓ HIPAA certification</li>
                                        <li>✓ EHR proficiency (your system)</li>
                                        <li>✓ Medical terminology knowledge</li>
                                        <li>✓ California compliance training</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-terracotta mb-3">Red Flags to Avoid</h4>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li>✗ No psychiatric experience</li>
                                        <li>✗ Cannot provide BAA</li>
                                        <li>✗ Unfamiliar with your EHR</li>
                                        <li>✗ No compliance training</li>
                                        <li>✗ Poor communication skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-cream rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy mb-4">Interview Questions to Ask</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <p className="font-medium text-navy mb-2">Experience & Training</p>
                                    <p className="text-slate-600 text-sm italic">
                                        "Describe your experience with psychiatric practices and the specific EHR systems you've used."
                                    </p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <p className="font-medium text-navy mb-2">Compliance Knowledge</p>
                                    <p className="text-slate-600 text-sm italic">
                                        "How do you ensure HIPAA and California privacy compliance when handling patient information?"
                                    </p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <p className="font-medium text-navy mb-2">Problem-Solving</p>
                                    <p className="text-slate-600 text-sm italic">
                                        "Describe a time you handled a difficult prior authorization or billing denial."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="max-w-4xl mx-auto px-6 mb-16">
                    <h2 className="text-3xl font-bold text-navy mb-6">Implementation Guide</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">1</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Assessment & Planning (Week 1)</h3>
                                <p className="text-slate-600">Identify tasks to delegate, create workflows, establish communication protocols.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">2</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Onboarding & Training (Week 2)</h3>
                                <p className="text-slate-600">System access, workflow training, compliance documentation, practice protocols.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">3</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Gradual Integration (Weeks 3-4)</h3>
                                <p className="text-slate-600">Start with basic tasks, gradually increase complexity, regular check-ins.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center font-bold">4</div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-navy mb-2">Full Integration (Week 5+)</h3>
                                <p className="text-slate-600">Full task delegation, performance optimization, ongoing support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="bg-gradient-to-r from-terracotta to-sage rounded-2xl p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Transform Your Psychiatric Practice?
                        </h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Join California's leading psychiatrists who trust Virtual Minds for specialized virtual assistant services.
                            Serving industry leaders, public figures, and families who rely on exceptional care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-terracotta rounded-lg font-black hover:scale-105 transition-all">
                                <span className="material-symbols-outlined">calendar_today</span>
                                Schedule Free Consultation
                            </Link>
                            <Link href="/california-psychiatric-compliance-virtual-assistant" className="flex items-center justify-center gap-2 px-8 py-4 bg-terracotta/20 text-white border-2 border-white rounded-lg font-black hover:scale-105 transition-all">
                                <span className="material-symbols-outlined">verified</span>
                                Learn About Compliance
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
