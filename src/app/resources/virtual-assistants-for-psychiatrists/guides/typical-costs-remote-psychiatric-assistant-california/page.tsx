import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "What Are Typical Costs for Remote Psychiatric Assistants in California? | Virtual Minds",
  description: "Compare affordable virtual assistant solutions for psychiatric offices in California. Transparent pricing, ROI analysis, and cost breakdown.",
  openGraph: {
    title: "California Psychiatric Virtual Assistant Costs - Virtual Minds",
    description: "Complete cost analysis for remote psychiatric assistants in California. Compare pricing, ROI, and value for mental health practices.",
    url: "https://thevirtualminds.com/typical-costs-remote-psychiatric-assistant-california",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "Virtual Assistant Cost Analysis",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const costOptions = [
  {
    type: "Freelance Virtual Assistants",
    hourlyRate: "$20-50/hour",
    monthlyCost: "$3,200-8,000",
    setupFee: "$0",
    training: "None",
    hipaaCompliance: "Variable",
    support: "Self-managed",
    pros: ["Flexible hours", "No long-term commitment", "Direct control"],
    cons: ["Inconsistent quality", "No special training", "HIPAA risk", "Management overhead"],
    riskLevel: "High",
    valueScore: 2.8
  },
  {
    type: "General VA Companies",
    hourlyRate: "$15-25/hour",
    monthlyCost: "$2,400-4,000",
    setupFee: "$500-1,000",
    training: "Basic admin",
    hipaaCompliance: "Sometimes",
    support: "Limited",
    pros: ["Dedicated support", "Basic processes", "Some infrastructure"],
    cons: ["No psychiatric expertise", "Generic training", "Limited EMR knowledge"],
    riskLevel: "Medium",
    valueScore: 3.2
  },
  {
    type: "Specialized Psychiatric Support (Virtual Minds)",
    hourlyRate: "Fixed Monthly",
    monthlyCost: "$5,000-8,500",
    setupFee: "$0",
    training: "Psychiatric Administration",
    hipaaCompliance: "100% Certified",
    support: "Dedicated Psychiatric Assistant",
    pros: ["Focused Revenue Recovery", "HIPAA Certified", "Full EHR Management", "California Billing Expertise"],
    cons: ["High-level investment", "Selective deployment"],
    riskLevel: "Zero",
    valueScore: 4.9,
    highlighted: true
  }
];

const roiCalculations = [
  {
    metric: "Time Savings",
    calculation: "20 hours/week × $150/hour × 50 weeks",
    monthlyValue: "$15,000",
    annualValue: "$150,000",
    description: "Clinical hours reclaimed for patient care"
  },
  {
    metric: "Increased Patient Capacity",
    calculation: "3 additional patients/week × $200/visit × 50 weeks",
    monthlyValue: "$6,000",
    annualValue: "$30,000",
    description: "Revenue from additional patient appointments"
  },
  {
    metric: "Billing Accuracy Improvement",
    calculation: "Exceptional accuracy vs industry standard × high-volume billing",
    monthlyValue: "$5,000",
    annualValue: "$60,000",
    description: "Reduced claim denials and rework"
  },
  {
    metric: "Compliance Protection",
    calculation: "Avoided fines + audit costs",
    monthlyValue: "$2,000",
    annualValue: "$24,000",
    description: "HIPAA violation prevention value"
  }
];

const hiddenCosts = [
  {
    cost: "HIPAA Violation Fines",
    amount: "$1.5M maximum",
    description: "Federal penalties for non-compliance"
  },
  {
    cost: "Patient Data Breach",
    amount: "$250-500/record",
    description: "Cost per compromised patient record"
  },
  {
    cost: "Lost Revenue",
    amount: "$10,000-50,000/month",
    description: "Revenue lost to administrative inefficiency"
  },
  {
    cost: "Training Turnover",
    amount: "$5,000-15,000",
    description: "Cost of training new generalist VAs"
  }
];

export default function TypicalCostsRemotePsychiatricAssistantCalifornia() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Virtual Assistant Costs" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FAF8F3] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6">
                What Are Typical Costs for Remote Psychiatric Assistants in California?
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Compare affordable virtual assistant solutions for psychiatric offices in California.
                Transparent pricing, ROI analysis, and comprehensive cost breakdown.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">calculate</span>
                    Get Custom ROI Analysis
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              Compare Virtual Assistant Pricing Options
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="space-y-6">
              {costOptions.map((option, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 ${option.highlighted
                    ? 'border-primary shadow-xl'
                    : 'border-slate-200'
                    } relative overflow-hidden`}
                >
                  {option.highlighted && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                      BEST VALUE
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-trust-navy text-2xl mb-4">{option.type}</h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Hourly Rate:</span>
                          <span className="font-semibold text-trust-navy">{option.hourlyRate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Monthly Cost:</span>
                          <span className="font-semibold text-trust-navy">{option.monthlyCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Setup Fee:</span>
                          <span className="font-semibold text-trust-navy">{option.setupFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Training:</span>
                          <span className="text-slate-900">{option.training}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-slate-600">Risk Level:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${option.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                          option.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                          {option.riskLevel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-trust-navy mb-3 text-green-600">Advantages</h4>
                          <ul className="space-y-2">
                            {option.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">add_circle</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-trust-navy mb-3 text-red-600">Disadvantages</h4>
                          <ul className="space-y-2">
                            {option.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">remove_circle</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              Return on Investment Analysis
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="font-bold text-trust-navy text-xl mb-6">Monthly Value Creation</h3>
                <div className="space-y-4">
                  {roiCalculations.map((roi, index) => (
                    <div key={index} className="border-b border-slate-100 pb-4 last:border-0">
                      <h4 className="font-semibold text-trust-navy mb-2">{roi.metric}</h4>
                      <p className="text-sm text-slate-600 mb-2">{roi.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Monthly Value:</span>
                        <span className="font-bold text-green-600 text-lg">{roi.monthlyValue}</span>
                      </div>
                      <div className="text-xs text-slate-500">{roi.calculation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-8 border-2 border-primary">
                <h3 className="font-bold text-trust-navy text-xl mb-6">Annual ROI Summary</h3>
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-sm text-slate-600 mb-2">Total Annual Value Created:</p>
                    <p className="text-4xl font-bold text-primary">$440,000</p>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-sm text-slate-600 mb-2">Average Annual Investment:</p>
                    <p className="text-2xl font-bold text-trust-navy">$60,000</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-slate-600 mb-2">Operational Performance:</p>
                    <p className="text-4xl font-bold text-green-600">Exceptional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Costs */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6 text-center">
              Hidden Costs of Non-Compliant Solutions
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <h3 className="font-bold text-red-700 text-xl mb-6">Risks of Cheap Options</h3>
                <div className="space-y-4">
                  {hiddenCosts.map((cost, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 mt-1">warning</span>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">{cost.cost}</h4>
                        <p className="text-red-600 font-bold mb-1">{cost.amount}</p>
                        <p className="text-sm text-slate-600">{cost.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <h3 className="font-bold text-green-700 text-xl mb-6">Virtual Minds Protection</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">shield</span>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">HIPAA Compliance</h4>
                      <p className="text-sm text-slate-600">100% certified staff with regular training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">security</span>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">Data Protection</h4>
                      <p className="text-sm text-slate-600">Encrypted systems and secure workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">psychology</span>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">Expert Knowledge</h4>
                      <p className="text-sm text-slate-600">Psychiatric specialization and California expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600 mt-1">support_agent</span>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-1">Dedicated Support</h4>
                      <p className="text-sm text-slate-600">24/7 assistance and problem resolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
              Get Your Custom Cost Analysis
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Schedule a free consultation to analyze your practice needs and calculate your specific ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Schedule ROI Analysis
                </span>
              </Link>

              <Link
                href="/california-psychiatric-virtual-assistant-directory"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">compare</span>
                  Compare All Options
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
