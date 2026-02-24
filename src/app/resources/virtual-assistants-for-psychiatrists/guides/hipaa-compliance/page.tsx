import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "HIPAA Compliant Virtual Assistants | Virtual Minds",
  description: "HIPAA compliant virtual assistant services for California psychiatric practices. Certified staff, secure workflows, and audit-ready documentation.",
  openGraph: {
    title: "HIPAA Compliant Virtual Assistants - Virtual Minds",
    description: "Certified HIPAA compliant virtual assistants specifically trained for California psychiatric practices and mental health workflows.",
    url: "https://thevirtualminds.com/hipaa-compliance",
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

export default function HIPAACompliance() {
  const complianceFeatures = [
    {
      icon: "security",
      title: "HIPAA Certification",
      description: "All virtual assistants complete comprehensive HIPAA training and certification programs"
    },
    {
      icon: "shield",
      title: "Data Encryption",
      description: "End-to-end encryption for all patient communications and record management"
    },
    {
      icon: "verified_user",
      title: "Audit Ready",
      description: "Complete documentation and compliance monitoring for seamless audits"
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
      description: "Proactive risk assessment and mitigation strategies"
    }
  ];

  const californiaRequirements = [
    {
      title: "California Privacy",
      description: "California Medical Information Act compliance for mental health records"
    },
    {
      title: "Consumer Privacy Act",
      description: "CCPA/CPRA compliance for patient data rights and privacy"
    },
    {
      title: "Telehealth Regulations",
      description: "California-specific telehealth compliance and cross-state licensing"
    },
    {
      title: "Mental Health Parity",
      description: "Compliance with California mental health parity laws"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "HIPAA Compliance" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-[#FAF8F3]">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
              <span className="material-symbols-outlined text-primary">security</span>
              <span>HIPAA Certified</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
              HIPAA Compliant Virtual Assistants
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
              California's most trusted HIPAA-certified virtual assistants for psychiatric practices.
              Complete compliance, data security, and peace of mind for your mental health practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Schedule Compliance Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                Comprehensive HIPAA Compliance
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our virtual assistants undergo rigorous training and continuous monitoring to ensure complete HIPAA compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
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
                  <div className="absolute -inset-1 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* California Specific Requirements */}
        <section className="relative py-20 overflow-hidden bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                California-Specific Compliance
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Beyond HIPAA: Understanding California's unique mental health privacy requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {californiaRequirements.map((req, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
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

        {/* Training Process */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                Our Compliance Training Process
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Rigorous training and ongoing monitoring ensure continuous compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">school</span>
                </div>
                <h3 className="font-bold text-trust-navy mb-2">Initial Training</h3>
                <p className="text-slate-600 text-sm">40+ hours of HIPAA and California compliance training</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">quiz</span>
                </div>
                <h3 className="font-bold text-trust-navy mb-2">Certification</h3>
                <p className="text-slate-600 text-sm">Comprehensive testing and certification process</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">monitoring</span>
                </div>
                <h3 className="font-bold text-trust-navy mb-2">Ongoing Monitoring</h3>
                <p className="text-slate-600 text-sm">Continuous compliance monitoring and audits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">update</span>
                </div>
                <h3 className="font-bold text-trust-navy mb-2">Regular Updates</h3>
                <p className="text-slate-600 text-sm">Monthly training on new regulations and best practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden bg-[#FAF8F3]">
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
                href="/book-consultation"
                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Schedule Compliance Review
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
              </Link>

              <Link
                href="/california-market-insights"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">insights</span>
                  Market Insights
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
