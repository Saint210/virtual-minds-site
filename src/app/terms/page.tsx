import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

export const metadata = {
    title: "Terms of Service | Virtual Minds",
    description: "Terms of service for Virtual Minds virtual assistant services for psychiatric practices.",
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                <section className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="font-display text-4xl md:text-5xl font-black text-trust-navy mb-8">
                            Terms of Service
                        </h1>
                        
                        <div className="space-y-8 text-slate-600">
                            <p className="text-lg leading-relaxed">
                                <strong>Effective Date:</strong> January 16, 2026<br />
                                <strong>Last Updated:</strong> January 16, 2026
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing or using Virtual Minds services, you agree to be bound by these Terms of Service 
                                    and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">2. Services Description</h2>
                                <p>
                                    Virtual Minds provides specialized virtual assistant services for psychiatric practices, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Administrative and scheduling support</li>
                                    <li>Patient intake and follow-up coordination</li>
                                    <li>Billing assistance and superbills</li>
                                    <li>HIPAA compliance support</li>
                                    <li>Practice consulting services</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>Important:</strong> Our virtual assistants are administrative support staff and do not provide clinical services or medical advice.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">3. Client Responsibilities</h2>
                                <p>As a client, you agree to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Provide accurate and complete information for service delivery</li>
                                    <li>Maintain appropriate professional boundaries</li>
                                    <li>Ensure secure handling of patient information</li>
                                    <li>Provide timely feedback and communication</li>
                                    <li>Pay service fees as agreed</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">4. Payment Terms</h2>
                                <p>
                                    <strong>Fee Structure:</strong> Service fees are outlined in your service agreement and may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Monthly retainer fees</li>
                                    <li>Hourly rates for additional services</li>
                                    <li>Setup or onboarding fees</li>
                                    <li>Custom pricing for specialized projects</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>Payment Schedule:</strong> Fees are due monthly in advance unless otherwise specified in your service agreement.
                                </p>
                                <p className="mt-4">
                                    <strong>Late Payments:</strong> Late payments may incur interest at 1.5% per month.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">5. Confidentiality and HIPAA</h2>
                                <p>
                                    <strong>Business Associate Agreement:</strong> As required by HIPAA, we sign a BAA with all covered entities 
                                    and agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Implement appropriate safeguards for PHI</li>
                                    <li>Report any security breaches promptly</li>
                                    <li>Ensure workforce compliance with HIPAA requirements</li>
                                    <li>Provide access to PHI for audit purposes</li>
                                    <li>Return or destroy PHI upon termination</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>Permitted Uses and Disclosures:</strong> We only use or disclose PHI as authorized by you or as required by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">6. Intellectual Property</h2>
                                <p>
                                    <strong>Virtual Minds Property:</strong> All materials, processes, software, and methodologies developed by Virtual Minds 
                                    remain our exclusive property.
                                </p>
                                <p>
                                    <strong>Client Property:</strong> You retain all rights to your practice information, patient data, and proprietary systems. 
                                    We only access what is necessary for service delivery.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">7. Service Level Agreement</h2>
                                <p>
                                    <strong>Availability:</strong> Standard business hours are Monday-Friday, 9:00 AM - 5:00 PM Pacific Time, 
                                    excluding major holidays.
                                </p>
                                <p>
                                    <strong>Response Times:</strong> We respond to inquiries within 24 business hours.
                                </p>
                                <p>
                                    <strong>Uptime Guarantee:</strong> We strive for 99.5% service availability.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">8. Limitation of Liability</h2>
                                <p>
                                    <strong>Service Disclaimer:</strong> Our virtual assistants provide administrative support only and do not:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Provide medical diagnosis or treatment</li>
                                    <li>Make clinical decisions</li>
                                    <li>Practice medicine or therapy</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>Liability Cap:</strong> Our total liability shall not exceed the fees paid by you in the six months 
                                    preceding the claim.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">9. Termination</h2>
                                <p>
                                    <strong>By Either Party:</strong> Either party may terminate the service agreement with 30 days written notice.
                                </p>
                                <p>
                                    <strong>Immediate Termination:</strong> We may terminate immediately for material breach, non-payment, or illegal activities.
                                </p>
                                <p>
                                    <strong>Post-Termination Obligations:</strong> Upon termination, we will:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Return all client property and information</li>
                                    <li>Provide final deliverables and reports</li>
                                    <li>Delete or return all PHI per HIPAA requirements</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">10. Dispute Resolution</h2>
                                <p>
                                    <strong>Good Faith Negotiation:</strong> We will attempt to resolve disputes through good faith negotiation.
                                </p>
                                <p>
                                    <strong>Mediation:</strong> If negotiation fails, disputes will be resolved through binding mediation in California.
                                </p>
                                <p>
                                    <strong>Governing Law:</strong> These terms are governed by California law, excluding conflict of law principles.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">11. General Provisions</h2>
                                <p>
                                    <strong>Entire Agreement:</strong> These terms constitute the entire agreement between you and Virtual Minds.
                                </p>
                                <p>
                                    <strong>Severability:</strong> If any provision is found unenforceable, the remainder remains in full effect.
                                </p>
                                <p>
                                    <strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.
                                </p>
                                <p>
                                    <strong>Notices:</strong> All notices must be in writing and sent to the contact information in your service agreement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">12. Contact Information</h2>
                                <div className="bg-slate-50 p-6 rounded-lg">
                                    <p><strong>Virtual Minds</strong></p>
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        <ProtectedEmail
                                            localPart="Cheryl"
                                            domain="thevirtualminds.com"
                                            buttonClassName="rounded-md bg-slate-200/70 px-2 py-1 text-[11px] font-bold text-trust-navy hover:bg-slate-200 transition-colors"
                                            revealedClassName="underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                                            label="email"
                                        />
                                    </p>
                                    <p><strong>Phone:</strong> (310) 400-6266</p>
                                    <p><strong>Address:</strong> 123 Professional Way, Suite 100, San Francisco, CA 94105</p>
                                    <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM PT</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
