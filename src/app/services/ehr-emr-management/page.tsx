import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
  title: "California EHR/EMR Management Virtual Assistants | Virtual Minds",
  description: "California EHR/EMR management virtual assistants for DrChrono, CharmHealth, SimplePractice, and accurate psychiatric documentation.",
  openGraph: {
    title: "EHR/EMR Management for Psychiatric Practices - Virtual Minds",
    description: "California psychiatric virtual assistant services with full EHR/EMR management. Expert support for DrChrono, CharmHealth, SimplePractice, and other top systems.",
    url: "https://thevirtualminds.com/services/ehr-emr-management",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "EHR/EMR Management for Psychiatric Practices",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const emrSystems = [
  {
    name: "DrChrono",
    category: "iPad-Based",
    specialty: "Psychiatry Friendly",
    integrationLevel: "Full",
    features: ["iPad Check-ins", "Custom Templates", "OnPatient Portal", "Billing Profiles"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "CharmHealth",
    category: "Cloud-Based",
    specialty: "Mental Health Focus",
    integrationLevel: "Full",
    features: ["Telehealth", "E-Prescribing", "Patient Portal", "Analytics"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "Luminello",
    category: "Psychiatry-Specific",
    specialty: "Mental Health Only",
    integrationLevel: "Full",
    features: ["Outcome Tracking", "Rating Scales", "Treatment Plans", "Collaboration"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "SimplePractice",
    category: "User-Friendly",
    specialty: "Therapy Focus",
    integrationLevel: "Advanced",
    features: ["Telehealth", "Client Portal", "Billing", "Scheduling"],
    californiaSupport: true,
    recommended: false
  },
  {
    name: "Epic",
    category: "Enterprise",
    specialty: "Hospital System",
    integrationLevel: "Advanced",
    features: ["Comprehensive", "Hospital Integration", "Research Tools"],
    californiaSupport: true,
    recommended: false
  },
  {
    name: "Kareo",
    category: "Billing-Focused",
    specialty: "Practice Management",
    integrationLevel: "Intermediate",
    features: ["Medical Billing", "Practice Management", "Reporting"],
    californiaSupport: false,
    recommended: false
  }
];

const integrationCapabilities = [
  {
    icon: "integration_instructions",
    title: "System Integration",
    description: "Seamless connection with your existing EMR/EHR systems"
  },
  {
    icon: "description",
    title: "Template Management",
    description: "Custom psychiatric assessment and treatment plan templates"
  },
  {
    icon: "calendar_today",
    title: "Scheduling Workflow",
    description: "Integrated appointment scheduling and patient management"
  },
  {
    icon: "payments",
    title: "Billing Support",
    description: "Superbill generation and insurance correspondence"
  },
  {
    icon: "chat",
    title: "Patient Communication",
    description: "Portal management and secure patient messaging"
  },
  {
    icon: "analytics",
    title: "Reporting Analytics",
    description: "Practice performance and patient outcome tracking"
  }
];

export default function EHRManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "EHR/EMR Management" }
        ]}
      />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8 text-left">
              <div className="flex flex-col gap-6">
                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">EHR Excellence</span>
                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  California EHR/<br />
                  <span className="text-primary italic">EMR Management</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                  Precision management of your practice&apos;s digital nervous system. We integrate with <strong>DrChrono, CharmHealth, and Luminello</strong> to ensure every click serves your clinical outcomes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/book-consultation"
                  className="bg-primary hover:bg-[#C19F30] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center gap-3 hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined">integration_instructions</span>
                  Integrate My System
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
              <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group transition-all duration-500">
                <Image
                  src="/images/hero-new.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="EHR/EMR Management System Visualization"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <div className="bg-white border-y border-slate-100 py-24 md:py-32">
          <section className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-trust-navy mb-6">
                  California psychiatric virtual assistant services with EMR Integration
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-slate-500 max-w-sm mb-2 font-medium">
                Seamless management of assessments, templates, and reporting within your clinical environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationCapabilities.map((capability, index) => (
                <div key={index} className="bg-[#FAF8F3] rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
                  <div className="size-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">
                      {capability.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-trust-navy text-2xl mb-4 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* EMR Systems Comparison */}
        <section className="py-24 md:py-32 bg-[#FAF8F3]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Selection Support</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-trust-navy mb-6">
                Psychiatric EMR <span className="text-primary italic">Compatibility Matrix</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Choosing the right platform is critical. We support and recommend systems that align with California psychiatric clinical standards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {emrSystems.map((emr, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[2.5rem] p-10 border-2 transition-all duration-300 hover:shadow-2xl ${emr.recommended
                    ? 'border-primary/40 shadow-xl relative'
                    : 'border-slate-100'
                    }`}
                >
                  {emr.recommended && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                      PLATINUM PARTNER
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="size-16 bg-[#FAF8F3] rounded-2xl flex items-center justify-center text-primary shadow-inner">
                          <span className="material-symbols-outlined text-3xl">computer</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-trust-navy text-2xl tracking-tight">{emr.name}</h3>
                          <p className="text-xs font-black uppercase tracking-widest text-[#D2691E] mt-1">{emr.category}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block border-l border-slate-100 h-16"></div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Target Specialty</p>
                        <p className="text-trust-navy font-bold leading-tight">{emr.specialty}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">CA Compliance</p>
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full ${emr.californiaSupport ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                          <span className="text-trust-navy font-bold">{emr.californiaSupport ? 'Verified' : 'Reviewing'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Native VA Support</p>
                      <div className="flex flex-wrap gap-2">
                        {emr.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-500 flex items-center gap-2">
                            <span className="material-symbols-outlined text-xs text-primary">check</span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceNavigationTray />
      </main>
      <Footer />
    </div>
  );
}
