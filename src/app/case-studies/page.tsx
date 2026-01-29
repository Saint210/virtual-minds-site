import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Practice Rescue Stories | Virtual Minds - Emergency VA Recovery",
  description: "Real crisis recovery stories when business transitions create administrative gaps. Emergency practice rescue, compliance recovery, and operational stabilization for California psychiatric practices.",
  openGraph: {
    title: "Practice Rescue Stories - Virtual Minds",
    description: "When administrative support undergoes unexpected transitions, Virtual Minds provides emergency rescue and recovery services for California psychiatric practices.",
    url: "https://thevirtualminds.com/case-studies",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "Psychiatric Practice Rescue Stories",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const caseStudies = [
  {
    title: "San Francisco Practice - VA Shutdown Rescue",
    category: "Crisis Recovery",
    location: "San Francisco, CA",
    image: "/images/case-crisis-recovery.png",
    results: {
      timeSaved: "40 hours/week crisis management",
      downtimeAvoided: "0 days without admin support",
      complianceRestored: "100% HIPAA/CMIA compliant",
      annualROI: "$85,000"
    },
    challenge: "When our previous VA company underwent an unexpected business transition, we were left without administrative support. Patient appointments were at risk, prior authorizations were pending, and our entire practice was in crisis mode.",
    solution: "Virtual Minds deployed an emergency response team within 24 hours, auditing our EHR, fixing HIPAA-compliant workflows, and implementing a more robust administrative system. They didn't just replace our old support; they improved our entire foundation.",
    quote: "When our VA company underwent an unexpected transition, it was terrifying - I thought I'd have to close the practice temporarily. Virtual Minds saved us overnight. They had us running better than before within a week.",
    author: "Private Practice Psychiatrist",
    specialty: "Adult Psychiatry",
    featured: true
  },
  {
    title: "Downtown LA Practice - Operational Recovery",
    category: "Administrative Crisis",
    location: "Los Angeles, CA",
    image: "/images/case-administrative-crisis.png",
    results: {
      timeSaved: "35 hours/week on manual fixes",
      priorAuthRecovery: "95% approval rate restored",
      billingStabilized: "$12,000/month recovered",
      annualROI: "$144,000"
    },
    challenge: "When our previous administrative support underwent an unexpected business transition, our practice was suddenly without coverage. Insurance roadblocks were mounting, and cash flow was severely impacted.",
    solution: "Virtual Minds implemented a dedicated coordination system, resolved all pending prior authorizations, and established bulletproof billing workflows. They brought precision we never had with our previous provider.",
    quote: "We went from crisis to consistency in days. Virtual Minds didn't just fix the problems - they built systems that prevent them from happening again.",
    author: "Private Practice Owner",
    specialty: "Adult Psychiatry",
    featured: false
  },
  {
    title: "Beverly Hills Group - Compliance Rescue",
    category: "Compliance Emergency",
    location: "Beverly Hills, CA",
    image: "/images/case-compliance-emergency.png",
    results: {
      auditPreparation: "100% audit-ready",
      violationsFixed: "0 compliance findings",
      documentationRestored: "Complete patient records",
      annualROI: "$67,000"
    },
    challenge: "After a colleague's audit nightmare, we discovered our own compliance was severely lacking. Previous VA had left gaps in HIPAA and CMIA documentation that could have resulted in massive penalties.",
    solution: "Virtual Minds conducted a full compliance audit, implemented CMIA-compliant documentation systems, and established ongoing monitoring. They created bulletproof processes that withstand any audit.",
    quote: "The peace of mind is priceless. Virtual Minds turned our compliance anxiety into confidence. We're actually ready for any audit now.",
    author: "Practice Manager",
    specialty: "Multi-Specialty Group",
    featured: false
  },
  {
    title: "Newport Beach Startup - Launch Rescue",
    category: "Launch Crisis",
    location: "Newport Beach, CA",
    image: "/images/case-launch-crisis.png",
    results: {
      launchTime: "6 weeks instead of 6 months",
      setupComplete: "100% operational from day 1",
      complianceAssured: "Full HIPAA/CMIA setup",
      annualROI: "$112,000"
    },
    challenge: "Our original VA partner underwent an unexpected business transition just weeks before practice launch, leaving us with signed lease, hired staff, but no administrative foundation. The entire launch was at risk of collapse.",
    solution: "Virtual Minds provided emergency practice launch services, implementing complete EHR setup, HIPAA compliance, staff training, and operational workflows in record time.",
    quote: "I thought my practice dream was dead. Virtual Minds resurrected it and got me launched faster than originally planned. They're practice miracle workers.",
    author: "New Practice Owner",
    specialty: "Child & Adolescent Psychiatry",
    featured: false
  }
];

const categories = ["All", "Crisis Recovery", "Administrative Crisis", "Compliance Emergency", "Launch Crisis"];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FAF8F3] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                Practice Rescue Stories: When Business Transitions Create Gaps
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Real crisis recovery stories from California psychiatric practices.
                When administrative support undergoes unexpected transitions, Virtual Minds provides emergency rescue and recovery services.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "All"
                      ? "bg-primary text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">emergency</span>
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">Featured Rescue Story</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                  San Francisco Practice - VA Shutdown Rescue
                </h2>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">Crisis Recovery</span>
                  <span>San Francisco, CA</span>
                </div>
                <p className="text-slate-600 text-lg mb-6">
                  When our previous VA agency unexpectedly closed its doors overnight, we were left without administrative support. Patient appointments were at risk, prior authorizations were pending, and our entire practice was in crisis mode.
                </p>
                <blockquote className="border-l-4 border-red-500 pl-6 text-xl italic text-trust-navy mb-6">
                  "Losing our VA firm was terrifying - I thought I'd have to close the practice temporarily. Virtual Minds saved us overnight. They had us running better than before within a week."
                </blockquote>
                <p className="font-bold text-trust-navy mb-6">— Private Practice Psychiatrist, San Francisco</p>
                <Link
                  href="/case-studies/dr-sarah-chen-los-angeles-psychiatry"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-[#C19F30] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                >
                  Read Full Case Study
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              <div>
                <div className="bg-gradient-to-br from-red-50 to-red-10 rounded-3xl p-8">
                  <h3 className="font-bold text-trust-navy text-xl mb-6">Crisis Recovery Results</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Crisis Management Time</span>
                      <span className="font-bold text-2xl text-red-600">40 hours/week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Downtime Avoided</span>
                      <span className="font-bold text-2xl text-red-600">0 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Compliance Restored</span>
                      <span className="font-bold text-2xl text-red-600">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Annual ROI</span>
                      <span className="font-bold text-2xl text-red-600">$85,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-12 text-center">
              More Rescue Stories
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(1).map((study, index) => (
                <article key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:scale-105">
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5">
                    <Image
                      src={
                        study.category === "Crisis Recovery"
                          ? "/images/case-crisis-recovery.png"
                          : study.category === "Administrative Crisis"
                            ? "/images/case-administrative-crisis.png"
                            : study.category === "Compliance Emergency"
                              ? "/images/case-compliance-emergency.png"
                              : study.category === "Launch Crisis"
                                ? "/images/case-launch-crisis.png"
                                : study.image
                      }
                      alt={`${study.category} - ${study.location}`}
                      className="w-full h-full object-cover"
                      width={800}
                      height={450}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {study.category}
                      </span>
                      <span className="text-slate-500 text-sm">{study.location}</span>
                    </div>
                    <h3 className="font-bold text-trust-navy text-lg mb-3 line-clamp-2">
                      {study.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                        <span>{study.results.timeSaved}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                        <span>{study.results.annualROI}</span>
                      </div>
                    </div>
                    <Link
                      href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                    >
                      View Full Study
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Summary */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-slate-50 rounded-3xl p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-8 text-center">
                Average Results Across All Practices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">23 hours/week</div>
                  <div className="text-slate-600">Average Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">7.5 patients/week</div>
                  <div className="text-slate-600">Additional Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95.5%</div>
                  <div className="text-slate-600">Billing Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$98,667</div>
                  <div className="text-slate-600">Average Annual ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
              Ready to Write Your Success Story?
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Join California psychiatric practices achieving remarkable results with Virtual Minds virtual assistants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Start Your Success Story
                </span>
              </Link>
              <Link
                href="/typical-costs-remote-psychiatric-assistant-california"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Calculate Your ROI
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
