import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LazyMapEmbed from "@/components/marketing/LazyMapEmbed";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

export const metadata = {
    title: "Contact Los Angeles Psychiatric VA Team | Virtual Minds",
    description: "Contact our Los Angeles-based virtual assistant team for California psychiatric practices. Schedule a consultation with local experts.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Contact" }
                ]}
            />
            <main className="flex-grow">
                <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-32">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Content Side */}
                        <div className="flex flex-col gap-10">
                            <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                                <Image
                                    src="/images/contact-hero.png"
                                    fill
                                    className="object-cover"
                                    alt="Clinical Roadmap Strategy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/40 to-transparent"></div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Direct Access</span>
                                <h1 className="font-display text-5xl md:text-7xl font-black text-trust-navy leading-[1.1] tracking-tight">
                                    Let's Architect Your <br />
                                    <span className="text-primary italic">Perfect Practice</span>
                                </h1>
                                <p className="text-slate-500 text-xl leading-relaxed max-w-xl">
                                    Scheduling a strategy call is the first step toward reducing your administrative load by 40%. We'll discuss your EHR, practice size, and specific clinical needs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-1">mail</span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</p>
                                    <p className="font-bold text-trust-navy">
                                        <ProtectedEmail
                                            localPart="Cheryl"
                                            domain="thevirtualminds.com"
                                            buttonClassName="rounded-md bg-slate-200/70 px-2 py-1 text-[11px] font-bold text-trust-navy hover:bg-slate-200 transition-colors"
                                            revealedClassName="underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                                            label="email"
                                        />
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-1">call</span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Directly</p>
                                    <p className="font-bold text-trust-navy">(310) 400-6266</p>
                                </div>
                                <div className="flex flex-col gap-3 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-1">location_on</span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Business Location</p>
                                    <p className="font-bold text-trust-navy">Los Angeles, California</p>
                                </div>
                                <div className="flex flex-col gap-3 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-1">verified_user</span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">HIPAA Desk</p>
                                    <p className="font-bold text-trust-navy">Security Team 24/7</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                                    <h3 className="font-bold text-trust-navy text-xl">Business Hours</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { day: 'Monday', hours: '09:00 am – 05:00 pm' },
                                        { day: 'Tuesday', hours: '09:00 am – 05:00 pm' },
                                        { day: 'Wednesday', hours: '09:00 am – 05:00 pm' },
                                        { day: 'Thursday', hours: '09:00 am – 05:00 pm' },
                                        { day: 'Friday', hours: '09:00 am – 05:00 pm' },
                                        { day: 'Saturday', hours: 'Closed' },
                                        { day: 'Sunday', hours: 'Closed' }
                                    ].map((schedule, i) => (
                                        <div key={i} className="flex justify-between items-center py-2">
                                            <span className="font-medium text-trust-navy">{schedule.day}</span>
                                            <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-red-600' : 'text-slate-600'}`}>
                                                {schedule.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-trust-navy text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-10 -mt-10"></div>
                                <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Our Promise</h3>
                                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                                    "We don't just 'send a person'. We integrate a HIPAA-trained specialist who understands the difference between a 90791 and a 99214 on day one."
                                </p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] blur-3xl"></div>
                            <div className="relative bg-white border border-slate-100 rounded-[3rem] p-10 md:p-16 shadow-2xl">
                                <h2 className="text-3xl font-black text-trust-navy font-display mb-10">Book Strategy Call</h2>
                                <form className="space-y-8" action="#" method="POST">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                                            <input type="text" placeholder="Dr. Jane Doe" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                                            <input type="email" placeholder="jane@practice.com" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Number of Clinicians</label>
                                            <select className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-all font-bold text-trust-navy appearance-none">
                                                <option>Solo Practice (1)</option>
                                                <option>Small Group (2-5)</option>
                                                <option>Mid-Size (6-15)</option>
                                                <option>Enterprise (15+)</option>
                                            </select>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">EHR System Used</label>
                                            <input type="text" placeholder="e.g. Luminello, Charm" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">How can we help?</label>
                                        <textarea rows={4} placeholder="Tell us about your current administrative bottlenecks..." className="w-full p-8 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300 resize-none"></textarea>
                                    </div>

                                    <button type="submit" className="w-full h-20 rounded-2xl bg-primary text-white font-black text-xl shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-4">
                                        Request Your Audit
                                        <span className="material-symbols-outlined">analytics</span>
                                    </button>

                                    <p className="text-center text-xs text-slate-400 font-medium">
                                        One of our Clinical Onboarding Specialists will contact you within 24 hours.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Maps Section */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                                Serving California Psychiatric Practices from Los Angeles
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Virtual Minds provides specialized virtual assistant services to psychiatric practices throughout California,
                                operated from our Los Angeles headquarters with local expertise and support.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                            <div className="aspect-video relative">
                                <LazyMapEmbed
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383751.5955934543!2d-119.00754000000002!3d34.08374100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f462550a12ec479%3A0x82ef737d2ad2d6d9!2sVirtual%20Minds%2C%20LLC!5e0!3m2!1sen!2sus!4v1768762142031!5m2!1sen!2sus"
                                    height={450}
                                    title="Virtual Minds, LLC Location"
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-3">location_on</span>
                                        <h3 className="font-bold text-trust-navy text-lg mb-2">Service Area</h3>
                                        <p className="text-slate-600 text-sm">
                                            All California counties, with specialized expertise in major metropolitan areas
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-3">schedule</span>
                                        <h3 className="font-bold text-trust-navy text-lg mb-2">Response Time</h3>
                                        <p className="text-slate-600 text-sm">
                                            Same-day consultation scheduling for California psychiatric practices
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-3">verified_user</span>
                                        <h3 className="font-bold text-trust-navy text-lg mb-2">California Compliance</h3>
                                        <p className="text-slate-600 text-sm">
                                            Full CMIA compliance and Medi-Cal billing expertise
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
