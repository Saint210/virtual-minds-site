import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import LazyPracticeLeaksCalculator from "@/components/tools/LazyPracticeLeaksCalculator";

export const metadata = {
    title: "How to Start a Private Psychiatric Practice in California | Cash-Pay Guide",
    description: "The 2026 blueprint for starting a concierge or cash-pay psychiatric practice in California. Legal structure, opting out of Medicare, and operational setup.",
    keywords: ["how to start a private psychiatric practice in California", "concierge psychiatry business model", "cash-pay psychiatry practice", "psychiatric professional corporation california", "opting out of medicare psychiatry"],
    openGraph: {
        title: "How to Start a Private Psychiatric Practice in California: The Cash-Pay Guide",
        description: "Don't build a replica of the insurance anxiety you just left. Build a compliant, high-margin concierge practice.",
        url: "https://thevirtualminds.com/blog/how-to-start-private-psychiatric-practice-california-guide",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/private-practice-launch-guide.jpg",
                width: 1200,
                height: 900,
                alt: "Starting a Private Psychiatric Practice California",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const takeaways = [
    {
        point: "The Legal Moat",
        detail: "You cannot form an LLC. You must establish a California Professional Medical Corporation (Prof Corp) to operate legally."
    },
    {
        point: "The Cash-Pay Math",
        detail: "One concierge patient at $450/hour nets more revenue than three insurance patients at $120, with 90% less administrative overhead."
    },
    {
        point: "Medicare Strategy",
        detail: "You cannot simply 'not accept' Medicare. To charge cash to seniors, you must formally 'Opt-Out' via affidavit every two years."
    },
    {
        point: "The Phone Problem",
        detail: "A concierge practice cannot have voicemail. If you answer the phone yourself, you devalue your clinical authority immediately."
    }
];

const tableOfContents = [
    { id: "mindset", title: "The Insurance Trap vs. Concierge Freedom" },
    { id: "legal", title: "Step 1: Legal Structure (Prof Corp)" },
    { id: "financial", title: "Step 2: The Cash-Pay Financial Model" },
    { id: "medicare", title: "Step 3: The Medicare 'Opt-Out' Mandate" },
    { id: "tech", title: "Step 4: The Lean Tech Stack" },
    { id: "operations", title: "Step 5: Operational Infrastructure" },
    { id: "launch", title: "The 30-Day Launch Timeline" }
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
        category: "Scaling"
    },
    {
        title: "Revenue Cycle Management vs. Billing",
        slug: "revenue-cycle-management-vs-billing",
        category: "Billing"
    }
];

export default function StartPrivatePracticeGuide() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* EXECUTIVE HERO */}
                <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <Link href="/blog" className="hover:text-primary transition-colors">Intelligence</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Practice Launch</span>
                            </nav>

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">rocket_launch</span>
                                Founder's Guide 2026
                            </div>

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-bold text-trust-navy mb-8 leading-[1] tracking-tight">
                                How to Start a Private <br />
                                Psychiatric Practice: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                    The Cash-Pay Guide.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                                Don't trade hospital bureaucracy for insurance paperwork. Here is the blueprint for building a high-margin, autonomy-first practice in California.
                            </p>

                            {/* METRICS BAR */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Business Model</p>
                                    <p className="text-xl font-bold text-trust-navy">Concierge / Direct Pay</p>
                                </div>
                                <div className="hidden md:block h-12 w-px bg-slate-200" />
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Legal Structure</p>
                                    <p className="text-xl font-bold text-trust-navy">Professional Corp (PC)</p>
                                </div>
                                <div className="hidden md:block h-12 w-px bg-slate-200" />
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Launch Timeline</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-xl font-bold text-trust-navy italic">30-60 Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex gap-12">
                            <div className="flex-1 min-w-0">
                                <article className="prose prose-lg prose-slate max-w-none">
                                    <KeyTakeaways takeaways={takeaways} />

                                    {/* INTRO SPLIT */}
                                    <div className="flex flex-col lg:flex-row gap-12 my-16 items-start">
                                        <div className="lg:w-[60%] order-2 lg:order-1">
                                            <h2 id="mindset" className="text-3xl font-bold text-trust-navy mt-0 mb-6">The "Insurance Trap" vs. Concierge Freedom</h2>
                                            <p className="text-xl text-slate-600 font-display leading-relaxed mb-6">
                                                Most psychiatrists opening a private practice in California make a critical error on Day 1: they try to recreate the hospital workflow in a private setting.
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-0">
                                                They sign up for every insurance panel, rent a generic office, and hire a biller to chase $140 reimbursements. Within six months, they are drowning in prior authorizations, denied claims, and a 40-hour clinical week that yields less net income than their employed salary.
                                            </p>
                                        </div>
                                        <div className="lg:w-[40%] order-1 lg:order-2 group w-full">
                                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5] bg-slate-50">
                                                <Image
                                                    src="/images/visual-intel-startup.png"
                                                    alt="Starting a Concierge Practice"
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mb-8">
                                        The <strong>Cash-Pay (or Concierge) Model</strong> is different. It is built on the premise that your clinical time is the most valuable asset in the mental health ecosystem. By removing the administrative friction of insurance, you can see fewer patients, deliver higher quality care, and generate significantly higher revenue.
                                    </p>

                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
                                        <h3 className="text-xl font-bold text-trust-navy mb-4">In This Guide</h3>
                                        <ul className="space-y-2">
                                            {tableOfContents.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`#${item.id}`} className="text-primary hover:underline font-medium">
                                                        {item.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* STEP 1: LEGAL */}
                                    <h2 id="legal" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Step 1: Legal Structure (The Prof Corp Moat)</h2>
                                    <p className="mb-6">
                                        California law prohibits medical professionals (including psychiatrists) from forming a standard Annual LLC. This is due to the "Corporate Practice of Medicine" doctrine, intended to prevent laypeople from owning medical decisions.
                                    </p>
                                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl mb-8">
                                        <h4 className="text-red-800 font-bold mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined">warning</span>
                                            Crucial Warning
                                        </h4>
                                        <p className="text-red-700 m-0 text-sm">
                                            Do not try to form an LLC online using generic legal services. If you do, the Medical Board can invalidate your business structure later. You must form a <strong>Professional Medical Corporation (Professional Corp)</strong>.
                                        </p>
                                    </div>
                                    <p className="mb-6">
                                        <strong>The Legal Checklist:</strong>
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>Articles of Incorporation:</strong> Must contain specific language required by the Moscone-Knox Professional Corporation Act.</li>
                                        <li><strong>Fictitious Business Name (FBN):</strong> If you name your practice "Bay Area Psychiatry" instead of "Jane Doe, M.D. A Professional Corp," you must file an FBN with your county.</li>
                                        <li><strong>EIN (Tax ID):</strong> Never use your Social Security Number for business banking. It exposes you to identity theft and creates tax chaos.</li>
                                    </ul>

                                    {/* STEP 2: FINANCIAL */}
                                    <h2 id="financial" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Step 2: The Cash-Pay Financial Model</h2>
                                    <p className="mb-6">
                                        Why go cash-pay? It's simple math and patient privacy.
                                    </p>
                                    <p className="mb-6">
                                        In an insurance model, you might be reimbursed $130-$160 for a 99214 + 90833 (Med Management + Therapy add-on). You spend 15 minutes documenting to meet payer requirements, 10 minutes debating prior authorizations for the medication you prescribed, and wait 30 days for payment.
                                    </p>
                                    <p className="mb-6">
                                        In a cash-pay model, your rate reflects your expertise—often $350-$600 for follow-ups in major California metros. Payment is collected automatically at the time of service via credit card. Documentation is focused on <em>clinical</em> value, not billing codes.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 my-8">
                                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                            <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-2">Insurance Model</h4>
                                            <p className="text-3xl font-bold text-slate-800 mb-1">$150 <span className="text-sm font-normal text-slate-500">/ visit</span></p>
                                            <p className="text-sm text-slate-500">Requires 30+ patients/week to cover overhead. High burnout risk.</p>
                                        </div>
                                        <div className="bg-trust-navy p-6 rounded-xl shadow-lg transform md:-translate-y-2">
                                            <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-2">Concierge Model</h4>
                                            <p className="text-3xl font-bold text-white mb-1">$450 <span className="text-sm font-normal text-slate-300">/ visit</span></p>
                                            <p className="text-sm text-slate-300">Requires 10-12 patients/week for same revenue. High autonomy.</p>
                                        </div>
                                    </div>

                                    <div className="my-16">
                                        <h3 className="text-2xl font-bold text-trust-navy mb-6 text-center">Simulate Your Overhead & Revenue</h3>
                                        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                                            Use this calculator to estimate the "Opportunity Cost" of administrative tasks and overhead in your new practice.
                                        </p>
                                        <LazyPracticeLeaksCalculator initialRent={1500} cityName="California" />
                                    </div>

                                    {/* STEP 3: MEDICARE */}
                                    <h2 id="medicare" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Step 3: The Medicare "Opt-Out" Mandate</h2>
                                    <p className="mb-6">
                                        This is the most common legal mistake for new private practices.
                                    </p>
                                    <p className="mb-6">
                                        As a physician, you cannot simply "not accept" Medicare. If you treat a Medicare-eligible patient and charge them cash without having officially <strong>Opted Out</strong>, you are violating federal law.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>Participating:</strong> You accept Medicare rates/assignment.</li>
                                        <li><strong>Non-Participating:</strong> You accept Medicare but do not accept assignment (limited billing rights).</li>
                                        <li><strong>Opted-Out (Concierge Standard):</strong> You sign a private contract with the patient. Medicare pays nothing. You charge your full private fee.</li>
                                    </ul>
                                    <p className="mb-6">
                                        <strong>Action Item:</strong> You must file an Opt-Out Affidavit with your Medicare Administrative Contractor (MAC) for California (Noridian Healthcare Solutions). This must be renewed every two years.
                                    </p>

                                    {/* STEP 4: TECH STACK */}
                                    <h2 id="tech" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Step 4: The Lean Tech Stack</h2>
                                    <p className="mb-6">
                                        You do not need a $50,000 server room. You need a "Digital Practice in a Box."
                                    </p>
                                    <h3 className="text-xl font-bold text-trust-navy mt-6 mb-3">1. The EHR (Electronic Health Record)</h3>
                                    <p className="mb-4">
                                        Avoid hospital-grade behemoths like Epic for a solo practice. Use lean, psychiatry-friendly platforms like <strong>SimplePractice, Kareo, or Luminello</strong>.
                                    </p>
                                    <p className="mb-6">
                                        These platforms handle scheduling, credit card processing (Stripe integration), telehealth links, and secure messaging in one dashboard. Cost: ~$100-$300/month.
                                    </p>

                                    <h3 className="text-xl font-bold text-trust-navy mt-6 mb-3">2. Telehealth Compliance</h3>
                                    <p className="mb-6">
                                        FaceTime is not HIPAA compliant. Neither is standard Zoom. You must execute a <strong>Business Associate Agreement (BAA)</strong> with your video vendor. Most lean EHRs include this.
                                    </p>
                                    <p className="text-sm bg-blue-50 p-4 rounded-lg text-blue-800 border border-blue-100">
                                        <strong className="block mb-1">Need help setting up HIPAA-compliant video?</strong>
                                        <Link href="/services/patient-intake-and-followup/telehealth-setup" className="underline hover:text-blue-600">Check out our Telehealth Setup Service.</Link>
                                    </p>

                                    {/* STEP 5: OPERATIONS */}
                                    <h2 id="operations" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Step 5: Operational Infrastructure (The Phone Problem)</h2>
                                    <p className="mb-6">
                                        Here is the paradox of the luxury concierge practice:
                                    </p>
                                    <p className="mb-6">
                                        <em>"If I charge $500/hour, my patients expect exceptional service. But if I'm in session earning that $500, I can't answer the phone."</em>
                                    </p>
                                    <p className="mb-6">
                                        Nothing kills a premium reputation faster than a voicemail box that says, "Hi, I'm with a patient, leave a message." It signals that you are overwhelmed and understaffed.
                                    </p>
                                    <p className="mb-6">
                                        <strong>The Solution: Asynchronous & Delegated Intake.</strong>
                                    </p>
                                    <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-700">
                                        <li><strong>The Virtual Assistant (VA):</strong> A specialized psychiatric VA handles the phones, screens the leads ("Do you accept insurance? No, we are specialty care."), and books the intake.</li>
                                        <li><strong>The Patient Portal:</strong> New patients complete their history, consents, and credit card authorization <em>before</em> the first call.</li>
                                    </ul>

                                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                                        <div className="flex gap-4 items-start">
                                            <div className="rounded-full bg-primary/10 p-3 shrink-0">
                                                <span className="material-symbols-outlined text-primary">support_agent</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-trust-navy mb-2">Don't hire a generic answering service.</h4>
                                                <p className="text-sm text-slate-600 mb-3">
                                                    Concierge patients need empathy, not a call center. Our <strong>Psychiatric Virtual Assistants</strong> are trained to handle high-acuity intake calls with professional grace.
                                                </p>
                                                <Link href="/services/virtual-assistant" className="text-primary font-bold text-sm tracking-wide uppercase hover:underline">
                                                    Explore Virtual Assistant Services &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* LAUNCH TIMELINE */}
                                    <h2 id="launch" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The 30-Day Launch Timeline</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="font-black text-slate-300 text-3xl">01</div>
                                            <div>
                                                <strong className="block text-trust-navy text-lg">Weeks 1-2: Entity & Banking</strong>
                                                <p className="text-slate-600">File Articles of Incorporation. Get EIN. Open Business Checking. Apply for Malpractice.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="font-black text-primary text-3xl">02</div>
                                            <div>
                                                <strong className="block text-trust-navy text-lg">Weeks 3-4: Tech & Workflow</strong>
                                                <p className="text-slate-600">Select EHR. Build Forms. Sign BAAs. Setup Phone/Fax.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="font-black text-slate-300 text-3xl">03</div>
                                            <div>
                                                <strong className="block text-trust-navy text-lg">Week 5+: Launch</strong>
                                                <p className="text-slate-600">Website live. Google My Business profile verified. First patient scheduled.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                        <h3 className="text-2xl font-bold text-trust-navy mb-4">You Don't Have to Build It Alone.</h3>
                                        <p className="text-slate-600 mb-6">
                                            Starting a practice involves 50+ decisions, from legal structure to intake workflow. Getting one wrong can delay your launch by months.
                                        </p>
                                        <p className="text-slate-600 mb-6">
                                            At Virtual Minds, we specialize in <strong>Practice Start-Up Consulting</strong>. We don't just give you a checklist; we log in and configure your systems, script your intake, and ensure you are compliant from Day 1.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <Link href="/services/practice-consulting/practice-start-up" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold text-center">
                                                View Practice Launchpad
                                            </Link>
                                            <Link href="/book-consultation" className="bg-white border-2 border-slate-200 hover:border-primary/50 text-trust-navy px-6 py-3 rounded-lg font-bold text-center transition-colors">
                                                Book a Launch Strategy Call
                                            </Link>
                                        </div>
                                    </div>

                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/how-to-start-private-psychiatric-practice-california-guide"
                                articleTitle="High-Margin Private Practice Launch Guide"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-primary/5">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Ready to Own Your Schedule?</h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            Stop splitting your revenue with insurance companies. Start the practice you actually wanted when you applied to medical school.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Start Your Practice Today
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
