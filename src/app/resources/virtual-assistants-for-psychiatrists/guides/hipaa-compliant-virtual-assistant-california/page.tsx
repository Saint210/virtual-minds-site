import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "HIPAA Compliant Virtual Assistant California | Virtual Minds",
  description: "California's leading HIPAA-certified virtual assistants for psychiatric practices. Complete compliance, data security, and audit-ready documentation.",
  openGraph: {
    title: "HIPAA Compliant Virtual Assistants California - Virtual Minds",
    description: "California's leading HIPAA-certified virtual assistants for psychiatric practices. Complete compliance, data security, and audit-ready documentation.",
    url: "https://thevirtualminds.com/hipaa-compliant-virtual-assistant-california",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "HIPAA Compliant Virtual Assistant",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const hipaaFeatures = [
  {
    icon: "security",
    title: "HIPAA Certification",
    description: "All virtual assistants complete comprehensive HIPAA training and certification programs specifically for mental health practices"
  },
  {
    icon: "shield",
    title: "Data Encryption",
    description: "End-to-end encryption for all patient communications and electronic health records"
  },
  {
    icon: "verified_user",
    title: "Audit Ready",
    description: "Complete documentation and compliance monitoring for seamless HIPAA audits"
  },
  {
    icon: "lock",
    title: "Secure Workflows",
    description: "HIPAA-compliant processes for scheduling, billing, and patient coordination"
  },
  {
    icon: "privacy_tip",
    title: "Privacy Training",
    description: "Ongoing training on patient privacy and California-specific regulations"
  },
  {
    icon: "gpp_good",
    title: "Risk Management",
    description: "Proactive risk assessment and mitigation strategies for mental health practices"
  }
];

const californiaRequirements = [
  {
    title: "California Privacy",
    description: "California Medical Information Act compliance for mental health records and privacy"
  },
  {
    title: "Consumer Privacy Act",
    description: "CCPA/CPRA compliance for patient data rights and privacy protection"
  },
  {
    title: "Telehealth Regulations",
    description: "California-specific telehealth compliance and cross-state licensing requirements"
  },
  {
    title: "Mental Health Parity",
    description: "Compliance with California mental health parity laws and insurance requirements"
  }
];

const complianceChecklist = [
  "Business Associate Agreements (BAAs) in place",
  "Encrypted email and communication systems",
  "Secure patient data storage and transmission",
  "Regular HIPAA training and certification",
  "Audit trails and documentation",
  "California-specific privacy compliance",
  "Incident response procedures",
  "Risk assessment protocols"
];

export default function HIPAACompliantVACalifornia() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "HIPAA Compliant Virtual Assistants" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                HIPAA Compliant Virtual Assistants for California Therapy Offices
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                California's most trusted HIPAA-certified virtual assistants for psychiatric practices.
                Complete compliance, data security, and peace of mind for your mental health practice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">security</span>
                    Schedule HIPAA Consultation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HIPAA Features */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              Comprehensive HIPAA Compliance Features
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hipaaFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {feature.icon}
                    </span>
                    <h3 className="font-bold text-trust-navy text-lg">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* California Requirements */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              California-Specific Compliance Requirements
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {californiaRequirements.map((req, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-trust-navy mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    {req.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              HIPAA Compliance Checklist for Psychiatric Practices
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h3 className="font-bold text-trust-navy text-xl mb-6">Essential Requirements</h3>
                <ul className="space-y-4">
                  {complianceChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 rounded-xl p-8 border-2 border-primary">
                <h3 className="font-bold text-trust-navy text-xl mb-6">Why Virtual Minds?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">psychology</span>
                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">Psychiatric Specialization</h4>
                      <p className="text-slate-600">Mental health-specific training and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">California Expertise</h4>
                      <p className="text-slate-600">Deep knowledge of state regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">integration_instructions</span>
                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">EMR Integration</h4>
                      <p className="text-slate-600">Seamless system integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              Protect Your Practice from Compliance Risks
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-red-600 text-2xl">warning</span>
                </div>
                <h3 className="font-bold text-trust-navy text-lg mb-3">Non-Compliant VAs</h3>
                <p className="text-slate-600 text-sm mb-4">Risk: Data breaches, HIPAA violations, legal penalties</p>
                <p className="text-red-600 font-semibold">Up to $1.5M in fines</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-yellow-600 text-2xl">help</span>
                </div>
                <h3 className="font-bold text-trust-navy text-lg mb-3">General Admin VAs</h3>
                <p className="text-slate-600 text-sm mb-4">Risk: Limited mental health knowledge, basic training</p>
                <p className="text-yellow-600 font-semibold">Compliance gaps</p>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-2xl">verified</span>
                </div>
                <h3 className="font-bold text-trust-navy text-lg mb-3">Virtual Minds</h3>
                <p className="text-slate-600 text-sm mb-4">Solution: Full compliance, expert training, audit support</p>
                <p className="text-green-600 font-semibold">Peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
              Ensure Your Practice Compliance
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Join California psychiatric practices who trust Virtual Minds for complete HIPAA compliance and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">security</span>
                  Schedule Compliance Review
                </span>
              </Link>

              <Link
                href="/california-psychiatric-virtual-assistant-directory"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">list</span>
                  View Directory
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
