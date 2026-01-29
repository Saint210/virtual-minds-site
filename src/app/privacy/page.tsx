import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

export const metadata = {
    title: "Privacy Policy | Virtual Minds",
    description: "Virtual Minds is committed to protecting your privacy and ensuring HIPAA compliance for all psychiatric virtual assistant services.",
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                <section className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="font-display text-4xl md:text-5xl font-black text-trust-navy mb-8">
                            Privacy Policy
                        </h1>
                        
                        <div className="space-y-8 text-slate-600">
                            <p className="text-lg leading-relaxed">
                                <strong>Effective Date:</strong> January 16, 2026<br />
                                <strong>Last Updated:</strong> January 16, 2026
                            </p>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">1. Information We Collect</h2>
                                <p>
                                    Virtual Minds collects only information necessary for providing virtual assistant services to psychiatric practices. This includes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Practice contact information and basic details</li>
                                    <li>Service requirements and preferences</li>
                                    <li>Professional credentials and qualifications</li>
                                    <li>Communication related to service delivery</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>We never collect patient Protected Health Information (PHI) without explicit authorization.</strong>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">2. How We Use Your Information</h2>
                                <p>We use collected information to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Provide virtual assistant services</li>
                                    <li>Coordinate scheduling and administrative tasks</li>
                                    <li>Improve service quality and delivery</li>
                                    <li>Communicate about service updates</li>
                                    <li>Ensure HIPAA compliance</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">3. Data Security & HIPAA Compliance</h2>
                                <p>
                                    <strong>Virtual Minds is a HIPAA Business Associate.</strong> We implement appropriate administrative, 
                                    physical, and technical safeguards to protect your information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Encryption of all electronic PHI</li>
                                    <li>Secure access controls and authentication</li>
                                    <li>Regular security audits and assessments</li>
                                    <li>Employee HIPAA training and certification</li>
                                    <li>Breach notification procedures</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">4. Information Sharing</h2>
                                <p>We do not sell, rent, or trade your personal information. We may share information only:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>With your explicit consent</li>
                                    <li>As required by law (e.g., HIPAA-mandated disclosures)</li>
                                    <li>With service providers necessary for delivery</li>
                                    <li>To protect our legal rights and prevent fraud</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">5. Data Retention</h2>
                                <p>
                                    We retain information only as long as necessary to provide services and comply with legal requirements. 
                                    When retention is no longer needed, we securely destroy or delete the information.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">6. Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Access and update your personal information</li>
                                    <li>Request deletion of your information (where legally permitted)</li>
                                    <li>Opt-out of non-essential communications</li>
                                    <li>Request a copy of our privacy practices</li>
                                    <li>File a complaint with our privacy officer</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">7. California Privacy Rights</h2>
                                <p>
                                    <strong>California Residents:</strong> Under the California Consumer Privacy Act (CCPA), 
                                    you have additional rights regarding your personal information.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Right to know what personal information is collected</li>
                                    <li>Right to delete personal information</li>
                                    <li>Right to opt-out of sale or sharing</li>
                                    <li>Right to non-discrimination for exercising privacy rights</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">8. Contact Us</h2>
                                <p>
                                    For privacy questions, concerns, or to exercise your rights, please contact our Privacy Officer:
                                </p>
                                <div className="bg-slate-50 p-6 rounded-lg mt-4">
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
                                    <p><strong>Response Time:</strong> Within 30 days</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-trust-navy mb-4">9. Policy Updates</h2>
                                <p>
                                    We may update this privacy policy periodically. We will notify you of significant changes by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Email notification</li>
                                    <li>Website posting</li>
                                    <li>Direct communication for major changes</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>Continued use of our services constitutes acceptance of any updated policy.</strong>
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
