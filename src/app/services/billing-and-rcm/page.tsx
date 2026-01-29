import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "California Psychiatric Billing Support Virtual Assistants | Virtual Minds",
    description: "California psychiatric billing support virtual assistants for insurance verification, prior authorizations, and revenue cycle admin coordination.",
};

export default function BillingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Billing & RCM" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Revenue Support</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    California Psychiatric <br />
                                    <span className="text-primary italic">Billing Support VAs</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    Our virtual assistants support California psychiatric practices with billing administration and revenue-cycle coordination. While we do not submit claims directly, we handle the critical admin work that helps keep billing accurate and paid on time.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">account_balance_wallet</span>
                                    Get a Billing Support Strategy
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbcsBIKTPBjAgTSlXWh9T2Vv0zE0xw_fTYSOFMjSfqAUYRGlFIGrliXZ2IHBRoHX2ftrYdXsPGn7CprajYH00PWCv3V92a0ZQTtkRD_SXUBRec4hjeevQfAgdeul-Lkf6PTm_hdT_lwmy6bxZUJ7NLWiUgyhOWJ3IN7E7AA_wnjy9_b2jd_Yv0hztJ2ITOhpdDA6mGatnjXH26qdsNT9_pS4VLpaGrQq8EgEyPGHuEwUGLI94DWgr4iPOoZhS80l00SvqJyyEx800"
                                    className="w-full h-full object-cover"
                                    alt="Billing Support Workflow"
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scope of Service Section */}
                <section className="bg-slate-50 border-y border-slate-100 py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                            <div className="max-w-3xl">
                                <h2 className="font-display text-4xl font-black text-trust-navy mb-8">Our Role in Your Billing</h2>
                                <p className="text-xl text-slate-600 mb-12 italic border-l-4 border-primary pl-6">
                                    &ldquo;Virtual Minds does not create claims or submit billing on behalf of a practice. We work together with your existing billing team or software to provide necessary administrative data.&rdquo;
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h3 className="font-bold text-2xl text-trust-navy">What We Handle</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'Insurance Verification & Eligibility Checks',
                                                'Obtaining Prior Authorizations',
                                                'Collecting Patient Copays & Balances',
                                                'Coordinating with External Billing Agencies',
                                                'Ensuring CPT Code Accuracy in EHR',
                                                'Resubmitting Missing Provider Documentation'
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start">
                                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                                    <span className="font-medium text-slate-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-trust-navy/5 p-8 rounded-3xl border border-trust-navy/10">
                                            <h3 className="font-bold text-xl text-trust-navy mb-4">Why This Model Works</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                By separating clinical data gathering from actual claim submission, we provide a layer of verification that significantly reduces denials. Your VA becomes &ldquo;bridge&rdquo; between provider and billing software.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Benefits */}
                <section className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: 'receipt_long', title: 'Superbill Generation', desc: 'Timely creation and distribution of superbills for your out-of-network patients.' },
                            { icon: 'schedule', title: 'Prior Auth Tracking', desc: 'Meticulous tracking of authorization windows to prevent unpaid sessions.' },
                            { icon: 'credit_card', title: 'Payment Processing', desc: 'Secure processing of credit card transactions and recurring payment setups.' }
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-trust-navy">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
