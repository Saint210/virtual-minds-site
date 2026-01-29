import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
  title: "How to Choose a California Psychiatric Virtual Assistant Service | Complete 2026 Guide",
  description: "Ultimate guide to selecting California psychiatric virtual assistant services. HIPAA compliance, EMR integration, cost analysis, and expert selection framework.",
  openGraph: {
    title: "How to Choose California Psychiatric VA - Complete Guide",
    description: "Expert guide to selecting California psychiatric virtual assistant services. HIPAA compliance, EMR integration, and selection criteria.",
    url: "https://thevirtualminds.com/blog/how-to-choose-california-psychiatric-virtual-assistant",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "California Psychiatric VA Selection Guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const selectionCriteria = [
  {
    title: "Psychiatric Specialization",
    description: "Deep understanding of mental health workflows, crisis protocols, and psychiatric terminology",
    icon: "psychology",
    critical: true,
    details: [
      "Mental health assessment protocols",
      "Crisis intervention procedures",
      "Medication management workflows",
      "Psychiatric documentation standards",
      "Insurance navigation expertise"
    ]
  },
  {
    title: "California Compliance",
    description: "Expert knowledge of CMIA, Medi-Cal billing, and state-specific regulations",
    icon: "location_on",
    critical: true,
    details: [
      "California Medical Information Act (CMIA)",
      "Medi-Cal billing requirements",
      "Telehealth regulations",
      "Scope of practice laws",
      "State documentation standards"
    ]
  },
  {
    title: "HIPAA Certification",
    description: "Verifiable HIPAA training, BAAs, and compliance protocols",
    icon: "shield_lock",
    critical: true,
    details: [
      "Business Associate Agreements",
      "Risk assessment procedures",
      "Data encryption standards",
      "Audit preparation processes",
      "Ongoing compliance training"
    ]
  },
  {
    title: "EMR Integration",
    description: "Proficiency with psychiatric EMR systems and workflow integration",
    icon: "integration_instructions",
    critical: true,
    details: [
      "DrChrono expertise",
      "CharmHealth integration",
      "Luminello proficiency",
      "Template customization",
      "Workflow optimization"
    ]
  },
  {
    title: "Technical Capabilities",
    description: "Comprehensive technical skills for modern psychiatric practices",
    icon: "computer",
    critical: false,
    details: [
      "Telehealth platform management",
      "Billing system integration",
      "Scheduling software proficiency",
      "Document management systems",
      "Communication protocols"
    ]
  },
  {
    title: "ROI and Value",
    description: "Measurable impact on practice efficiency and revenue",
    icon: "trending_up",
    critical: false,
    details: [
      "Time savings quantification",
      "Revenue increase projections",
      "Cost reduction analysis",
      "Quality improvement metrics",
      "Scalability considerations"
    ]
  }
];

const redFlags = [
  {
    title: "No Psychiatric Specialization",
    description: "Generic administrative experience without mental health expertise",
    risk: "High"
  },
  {
    title: "Lack of California Compliance",
    description: "No knowledge of CMIA, Medi-Cal, or state regulations",
    risk: "High"
  },
  {
    title: "Missing HIPAA Certification",
    description: "No verifiable HIPAA training or compliance protocols",
    risk: "Critical"
  },
  {
    title: "Vague Service Descriptions",
    description: "Unclear deliverables and undefined scope of work",
    risk: "Medium"
  },
  {
    title: "Hidden Fee Structures",
    description: "Unclear pricing with potential hidden costs",
    risk: "High"
  },
  {
    title: "No EMR Experience",
    description: "Limited technical integration capabilities",
    risk: "Medium"
  }
];

const comparisonTable = [
  {
    factor: "Psychiatric Expertise",
    virtualMinds: "Specialized psychiatric training and workflows",
    generalVA: "Basic administrative experience",
    freelancer: "Variable mental health knowledge"
  },
  {
    factor: "California Compliance",
    virtualMinds: "CMIA and Medi-Cal expertise",
    generalVA: "Generic compliance knowledge",
    freelancer: "Limited state-specific knowledge"
  },
  {
    factor: "HIPAA Compliance",
    virtualMinds: "Certified staff with BAAs",
    generalVA: "Self-reported compliance",
    freelancer: "Inconsistent verification"
  },
  {
    factor: "EMR Integration",
    virtualMinds: "DrChrono, CharmHealth, Luminello experts",
    generalVA: "Basic software skills",
    freelancer: "Limited technical knowledge"
  },
  {
    factor: "Support Quality",
    virtualMinds: "24/7 dedicated support team",
    generalVA: "Business hours support",
    freelancer: "Variable availability"
  },
  {
    factor: "Pricing Transparency",
    virtualMinds: "Clear pricing with no hidden fees",
    generalVA: "Complex pricing structures",
    freelancer: "Hourly rates with unknown totals"
  }
];

const tableOfContents = [
  { id: "why-specialized", title: "Why Specialized VAs?" },
  { id: "criteria", title: "Selection Criteria" },
  { id: "comparison", title: "Comparison Matrix" },
  { id: "process", title: "Selection Process" }
];

const relatedArticles = [
  {
    title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
    slug: "psychiatrist-salary-california-private-practice",
    category: "Practice Growth"
  },
  {
    title: "How to Scale a Private Psychiatry Practice",
    slug: "how-to-scale-private-psychiatry-practice",
    category: "Practice Growth"
  },
  {
    title: "Optimizing Patient Workflow in Psychiatry",
    slug: "optimizing-patient-workflow-psychiatry",
    category: "Workflow"
  }
];

export default function HowToChoosePsychiatricVABlog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Choose Guide" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FAF8F3] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                <span className="material-symbols-outlined text-primary">checklist</span>
                <span>Ultimate Selection Guide</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                How to Choose a California Psychiatric Virtual Assistant Service
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Complete 2026 guide for selecting the right virtual assistant service for your California psychiatric practice.
                HIPAA compliance, EMR integration, and expert selection framework.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-consultation"
                  className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">calendar_today</span>
                    Get Expert Consultation
                  </span>
                </Link>
                <Link
                  href="/pricing"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">calculate</span>
                    Compare Pricing
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction & Selection Criteria with Sidebar */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex gap-12">
              <div className="flex-1 min-w-0">

                {/* Introduction Content */}
                <div className="mb-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h2 id="why-specialized" className="font-display text-3xl font-bold text-trust-navy mb-6">
                        Why California Psychiatric Practices Need Specialized VAs
                      </h2>
                      <p className="text-slate-600 text-lg mb-6">
                        California psychiatric practices face unique challenges that general virtual assistants cannot address.
                        From complex Medi-Cal billing to HIPAA compliance requirements, specialized expertise is essential.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary mt-1">psychology</span>
                          <div>
                            <h3 className="font-bold text-trust-navy mb-2">Mental Health Complexity</h3>
                            <p className="text-slate-600">Psychiatric workflows require understanding of crisis protocols, medication management, and sensitive patient communications.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary mt-1">shield_lock</span>
                          <div>
                            <h3 className="font-bold text-trust-navy mb-2">California Compliance</h3>
                            <p className="text-slate-600">CMIA, Medi-Cal, and state-specific regulations create compliance challenges that general VAs cannot navigate.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary mt-1">integration_instructions</span>
                          <div>
                            <h3 className="font-bold text-trust-navy mb-2">Technical Integration</h3>
                            <p className="text-slate-600">Modern psychiatric practices rely on EMR systems that require specialized technical knowledge.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-8">
                      <h3 className="font-bold text-trust-navy text-xl mb-4">Market Reality</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">California Psychiatrists:</span>
                          <span className="font-bold text-primary">7,797</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Market Growth:</span>
                          <span className="font-bold text-primary">28.1% CAGR</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Compliance Complexity:</span>
                          <span className="font-bold text-primary">High</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">Specialized VAs:</span>
                          <span className="font-bold text-primary">&lt;5%</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mt-4">
                        Source: California Medical Board 2025, Market Research Reports
                      </p>
                    </div>
                  </div>
                </div>

                {/* Selection Criteria Content */}
                <div className="pt-12 border-t border-slate-100">
                  <h2 id="criteria" className="font-display text-3xl font-bold text-trust-navy mb-12 text-center">
                    6 Critical Selection Criteria
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectionCriteria.map((criteria, index) => (
                      <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${criteria.critical ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary'}`}>
                            <span className="material-symbols-outlined">{criteria.icon}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-trust-navy text-xl">{criteria.title}</h3>
                            {criteria.critical && (
                              <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold mt-1">CRITICAL</span>
                            )}
                          </div>
                        </div>
                        <p className="text-slate-600 mb-6">{criteria.description}</p>
                        <h4 className="font-bold text-sm text-trust-navy mb-3 uppercase tracking-wider">What to Look For:</h4>
                        <ul className="space-y-2">
                          {criteria.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <BlogSidebar
                tableOfContents={tableOfContents}
                relatedArticles={relatedArticles}
                currentUrl="https://thevirtualminds.com/blog/how-to-choose-california-psychiatric-virtual-assistant"
                articleTitle="How to Choose a California Psychiatric Virtual Assistant Service"
              />
            </div>
          </div>
        </section>

        {/* Full Width Comparison Matrix */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 id="comparison" className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-12 text-center">
              Comparison Matrix: Specialized vs. General VAs
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-4 text-left font-bold">Selection Factor</th>
                      <th className="px-6 py-4 text-left font-bold">Virtual Minds</th>
                      <th className="px-6 py-4 text-left font-bold">General VA</th>
                      <th className="px-6 py-4 text-left font-bold">Freelancer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-trust-navy border-t border-slate-200">
                          {row.factor}
                        </td>
                        <td className="px-6 py-4 text-green-600 border-t border-slate-200">
                          {row.virtualMinds}
                        </td>
                        <td className="px-6 py-4 text-slate-600 border-t border-slate-200">
                          {row.generalVA}
                        </td>
                        <td className="px-6 py-4 text-slate-600 border-t border-slate-200">
                          {row.freelancer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-12 text-center">
              Red Flags to Avoid
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {redFlags.map((flag, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-red-600">warning</span>
                    <h3 className="font-bold text-red-700 text-lg">{flag.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-3">{flag.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Risk Level:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${flag.risk === 'Critical' ? 'bg-red-600 text-white' :
                      flag.risk === 'High' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                      {flag.risk}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-12 text-center">
              Provider Comparison Framework
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-4 text-left font-bold">Selection Factor</th>
                      <th className="px-6 py-4 text-left font-bold">Virtual Minds</th>
                      <th className="px-6 py-4 text-left font-bold">General VA</th>
                      <th className="px-6 py-4 text-left font-bold">Freelancer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-trust-navy border-t border-slate-200">
                          {row.factor}
                        </td>
                        <td className="px-6 py-4 text-green-600 border-t border-slate-200">
                          {row.virtualMinds}
                        </td>
                        <td className="px-6 py-4 text-slate-600 border-t border-slate-200">
                          {row.generalVA}
                        </td>
                        <td className="px-6 py-4 text-slate-600 border-t border-slate-200">
                          {row.freelancer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 id="process" className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-12 text-center">
              5-Step Selection Process
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Assess Your Needs", description: "Evaluate practice size, current admin burden, EMR systems, and growth plans" },
                { step: "2", title: "Verify Expertise", description: "Confirm psychiatric specialization, California compliance, and HIPAA certification" },
                { step: "3", title: "Compare Solutions", description: "Use our framework to evaluate providers against your specific requirements" },
                { step: "4", title: "Request Demos", description: "Test workflows, communication, and technical capabilities before committing" },
                { step: "5", title: "Start with Trial", description: "Begin with limited scope to ensure fit before scaling" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-trust-navy text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
              Ready to Choose the Right Virtual Assistant?
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Use our expert framework and guidance to select the perfect California psychiatric virtual assistant service for your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Schedule Expert Consultation
                </span>
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Compare Pricing Plans
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
