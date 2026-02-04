import Image from "next/image";
import Link from "next/link";
import RevenueDashboardGraphic from "@/components/home/RevenueDashboardGraphic";
import { Service } from "@/lib/services-service";

interface SectionProps {
    section: any;
    services?: Service[];
}

const SectionDivider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50"></div>
);

const HeroSection = ({ section }: SectionProps) => {
    const isEconomics = section.layout === 'economics';

    return (
        <section className="relative min-h-[auto] lg:min-h-[calc(100vh-80px)] xl:min-h-[900px] flex items-center overflow-hidden bg-gradient-to-br from-[#FAF8F3] via-white to-[#F5F1E8]">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1A2332_1.5px,transparent_1.5px)] [background-size:40px_40px] animate-[pulse_12s_ease-in-out_infinite]" />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">

                        {/* Premium Badge with Urgency */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8 lg:mb-14">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-emerald-500/10 border-2 border-primary/20 rounded-full px-5 py-2.5 w-fit">
                                <span className="size-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50 shrink-0" />
                                <span className="text-primary text-[10px] sm:text-[11px] font-black uppercase tracking-widest md:tracking-[0.2em] text-center">{section.badge || "Accepting New Clients"}</span>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
                                    <span className="material-symbols-outlined text-green-600 text-sm">verified_user</span>
                                    <span className="text-[10px] font-bold text-slate-700">HIPAA</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-sm">
                                    <span className="material-symbols-outlined text-blue-600 text-sm">workspace_premium</span>
                                    <span className="text-[10px] font-bold text-slate-700">Licensed</span>
                                </div>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-trust-navy leading-[0.95] tracking-tight text-balance">
                            {parseHeadline(section.title)}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {section.subtitle}
                        </p>

                        {/* Quantified Value Props - Premium Cards */}
                        <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0 py-4">
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#B8860B] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-5 hover:border-primary transition-all shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1">$300K+</div>
                                    <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">Revenue Goal</div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-emerald-500/20 rounded-2xl p-5 hover:border-emerald-500 transition-all shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-600 mb-1">20hrs</div>
                                    <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">Back to You</div>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-blue-500/20 rounded-2xl p-5 hover:border-blue-500 transition-all shadow-lg group-hover:shadow-xl group-hover:-translate-y-1">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1">10+</div>
                                    <div className="text-trust-navy text-[10px] font-bold uppercase tracking-wider">Years Exp.</div>
                                </div>
                            </div>
                        </div>

                        {/* Dual CTA Strategy - Moved Above Fold */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 pb-2">
                            <Link
                                href={section.cta?.link || "/book-consultation"}
                                className="group relative bg-gradient-to-r from-primary to-[#B8860B] hover:from-[#B8860B] hover:to-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                <span className="relative z-10">{section.cta?.text || "Let's Talk Revenue"}</span>
                                <span className="relative z-10 material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>

                            <a
                                href="tel:+13104006266"
                                className="px-10 py-5 border-2 border-trust-navy/20 bg-white/60 backdrop-blur-sm text-trust-navy font-black text-lg rounded-2xl hover:bg-trust-navy hover:text-white hover:border-trust-navy transition-all flex items-center justify-center gap-3 shadow-lg group"
                            >
                                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">call</span>
                                <span>(310) 400-6266</span>
                            </a>
                        </div>

                        {/* Real Credibility - No Fake Social Proof */}
                        <div className="flex flex-col gap-3 py-4">
                            <div className="flex items-start gap-3 max-w-2xl mx-auto lg:mx-0">
                                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-base font-bold text-trust-navy mb-1">
                                        10+ Years Managing High-Net-Worth Psychiatric Practices
                                    </p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        We've handled everything from celebrity clients to professional athletes. We know what it takes to run a practice that serves demanding, high-profile patients while maximizing your revenue.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Risk Reversal - Honest */}
                        <p className="text-sm text-slate-500 font-semibold text-center lg:text-left">
                            <span className="material-symbols-outlined text-green-600 text-base align-middle mr-1">verified</span>
                            Month-to-month • HIPAA compliant • We only win if you win
                        </p>
                    </div>

                    {/* Right Column - Visual Proof */}
                    <div className="lg:col-span-5 relative pt-8 lg:pt-0">
                        {/* Main Dashboard Image */}
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-[3rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                            <div className="relative aspect-[4/3] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white/10 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700">
                                {section.imageUrl ? (
                                    <Image src={section.imageUrl} alt={section.title} fill className="object-cover" />
                                ) : (
                                    <RevenueDashboardGraphic />
                                )}
                            </div>
                        </div>

                        {/* Floating Stat Card - Top Right */}
                        <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-2xl border-2 border-primary/20 hidden xl:block animate-[float_6s_ease-in-out_infinite]">
                            <div className="flex items-center gap-4">
                                <div className="size-12 bg-gradient-to-br from-primary to-[#B8860B] rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">trending_up</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-primary">10+ Yrs</div>
                                    <div className="text-xs font-bold text-slate-600">Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Value Card - Bottom Left */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border-2 border-emerald-500/20 max-w-xs hidden lg:block animate-[float_8s_ease-in-out_infinite_reverse]">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-emerald-600 text-2xl">psychology</span>
                                <div className="text-xs font-black text-slate-500 uppercase tracking-wider">High-Net-Worth</div>
                            </div>
                            <p className="text-sm font-bold text-slate-700 mb-1">
                                Celebrities • Athletes • Executives
                            </p>
                            <p className="text-xs text-slate-600">
                                We've managed practices serving the most demanding clientele in California.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatsSection = ({ section }: SectionProps) => (
    <section className="py-16 bg-trust-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#FAF8F3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {section.stats?.map((metric: any, i: number) => (
                    <div key={i} className="group p-2 pt-8 lg:pt-2">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight group-hover:text-primary transition-colors">{metric.value}</div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{metric.label}</div>
                        <div className="text-xs text-slate-400 font-medium">{metric.subtext}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Helper function to parse and colorize headlines with professional copywriting principles
const parseHeadline = (text: string) => {
    // Premium color strategy (NO GRAY - looks cheap):
    // - GOLD (primary): Financial benefits, value propositions, transformations
    // - EMERALD: Positive outcomes, success indicators, freedom/relief
    // - DEFAULT (navy): Everything else maintains premium base color

    const patterns = [
        // TIER 1: Financial Benefits (GOLD - highest priority)
        // Use word boundaries to match complete words only
        {
            regex: /\b(\$[\d,]+K?\+?|\d+%\+?|Revenue|Profit|ROI|Savings|Income|Money|Business|Practice|Billing)\b/gi,
            color: 'text-primary',
            priority: 1
        },

        // TIER 2: Positive Outcomes & Freedom (EMERALD)
        // Match complete phrases or words only
        {
            regex: /\b(Clinical\s+Focus|Clinical\s+Care|Patient\s+Care|Patients|Clinical|Care|Focus|Freedom|Growth|Success|Excellence|Premium|Elite)\b/gi,
            color: 'text-secondary',
            priority: 2
        },

        // TIER 3: Transformation & Action (GOLD)
        {
            regex: /\b(Transform|Optimize|Eliminate|Automate|Streamline|Accelerate|Maximize|Reclaim|Stop|Start|Get|Make)\b/gi,
            color: 'text-primary',
            priority: 3
        },

        // TIER 4: Location & Specificity (GOLD)
        {
            regex: /\b(California|Los\s+Angeles|San\s+Francisco|Psychiatrists?|Psychiatry)\b/gi,
            color: 'text-primary',
            priority: 4
        },
    ];

    // Sort patterns by priority
    const sortedPatterns = patterns.sort((a, b) => a.priority - b.priority);

    let parts: Array<{ text: string; colored?: string; priority?: number }> = [{ text }];

    sortedPatterns.forEach(({ regex, color, priority }) => {
        const newParts: Array<{ text: string; colored?: string; priority?: number }> = [];

        parts.forEach(part => {
            // Don't re-color if already colored with higher priority
            if (part.colored && part.priority && part.priority < priority) {
                newParts.push(part);
                return;
            }

            const matches = part.text.split(regex);
            matches.forEach((match, i) => {
                if (match) {
                    if (i % 2 === 1) {
                        // This is a matched pattern
                        newParts.push({ text: match, colored: color, priority });
                    } else {
                        // This is regular text
                        if (part.colored && !match.match(regex)) {
                            // Keep the original color if it was already colored
                            newParts.push({ text: match, colored: part.colored, priority: part.priority });
                        } else {
                            newParts.push({ text: match });
                        }
                    }
                }
            });
        });

        parts = newParts;
    });

    return parts.map((part, i) =>
        part.colored ? (
            <span key={i} className={`${part.colored} font-bold`}>{part.text}</span>
        ) : (
            <span key={i}>{part.text}</span>
        )
    );
};

const SplitContentSection = ({ section }: SectionProps) => (
    <section className={`py-24 relative overflow-hidden ${section.reverse ? 'bg-gradient-to-br from-slate-50 via-white to-slate-50' : 'bg-gradient-to-br from-[#EDE8E0] via-[#F5F1E8] to-[#EDE8E0]'}`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#1A2332_1.5px,transparent_1.5px)] [background-size:32px_32px] animate-[pulse_8s_ease-in-out_infinite]" />
        </div>

        {/* Decorative Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-trust-navy/5 rounded-full blur-[120px] animate-[float_25s_ease-in-out_infinite_reverse]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className={`grid md:grid-cols-2 gap-16 items-center ${section.reverse ? 'flex-row-reverse' : ''}`}>
                {/* Text Column */}
                <div className={section.reverse ? 'md:order-2' : ''}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                        <span className="size-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                        <span className="text-primary font-black uppercase tracking-widest text-[10px]">{section.badge}</span>
                        <span className="w-8 h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                    </div>

                    {/* Headline with Smart Colorization */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-trust-navy mb-6 leading-[1.05] tracking-tight">
                        {parseHeadline(section.title)}
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-slate-600 italic font-serif leading-relaxed mb-8 relative">
                        <span className="absolute -left-4 top-0 text-6xl text-primary/10 font-black">"</span>
                        {section.description}
                    </p>

                    {/* Optional CTA */}
                    <div className="flex gap-4 pt-4">
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                            <span className="size-10 rounded-xl bg-green-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-green-600 text-xl">verified_user</span>
                            </span>
                            <span>HIPAA Secured</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                            <span className="size-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-blue-600 text-xl">workspace_premium</span>
                            </span>
                            <span>California Licensed</span>
                        </div>
                    </div>
                </div>

                {/* Card Column */}
                <div className={section.reverse ? 'md:order-1' : ''}>
                    <div className="relative group">
                        {/* Glow Effect on Hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-trust-navy/20 to-primary/20 rounded-[3.5rem] opacity-40 group-hover:opacity-100 blur-xl transition-all duration-700" />

                        {/* Main Card */}
                        <div className="relative bg-white/90 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] border border-white/60 ring-1 ring-black/5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden group-hover:shadow-primary/20 transition-all duration-700 group-hover:-translate-y-2">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-32 -mt-32 " />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-trust-navy/5 to-transparent rounded-full -ml-24 -mb-24" />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                            {/* Header */}
                            <div className="relative z-10 mb-10 pb-6 border-b border-primary/20">
                                <h3 className="text-sm font-black text-trust-navy uppercase tracking-[0.25em] flex items-center gap-3">
                                    <span className="size-2 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                                    Core Highlights
                                    <span className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
                                </h3>
                            </div>

                            {/* Checklist Items */}
                            <div className="relative z-10 space-y-6">
                                {section.checklist?.map((item: any, i: number) => (
                                    <div key={i} className="flex gap-5 group/item">
                                        {/* Numbered Badge with Gradient */}
                                        <div className="relative shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#B8860B] rounded-xl opacity-0 group-hover/item:opacity-100 blur transition-all duration-300" />
                                            <div className="relative size-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center font-black text-lg border-2 border-primary/20 group-hover/item:border-primary group-hover/item:bg-gradient-to-br group-hover/item:from-primary group-hover/item:to-[#B8860B] group-hover/item:text-white group-hover/item:scale-110 transition-all duration-300 shadow-lg group-hover/item:shadow-primary/50">
                                                {i + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-1">
                                            <h4 className="font-black text-trust-navy mb-2 text-lg font-sans tracking-tight group-hover/item:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 leading-relaxed font-medium font-sans text-sm">
                                                {item.detail}
                                            </p>
                                        </div>

                                        {/* Hover Arrow */}
                                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-primary text-xl">arrow_forward</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Accent */}
                            <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-green-500 text-base">auto_awesome</span>
                                    Automated Excellence
                                </div>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map((dot) => (
                                        <span key={dot} className="size-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" style={{ transitionDelay: `${dot * 100}ms` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const RecoveryMatrixSection = ({ section }: SectionProps) => (
    <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[10px]">{section.badge || "Operational Value"}</span>
                    <span className="w-10 h-[1px] bg-[#D2691E]/30"></span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-trust-navy mb-6 leading-tight tracking-tight">
                    {parseHeadline(section.title)}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed font-serif italic">
                    {section.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-[#FAF8F3] p-8 rounded-[2.5rem] border-2 border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1 group">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                            <span className="material-symbols-outlined text-2xl">{item.icon || 'trending_up'}</span>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-trust-navy mb-3 tracking-tight">{item.label}</h3>
                        {item.stats && (
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`${item.statsColor === 'red' ? 'text-red-600' : 'text-primary'} font-black text-xl tracking-tighter`}>{item.stats}</span>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">{item.statsLabel}</span>
                            </div>
                        )}
                        <p className="text-sm text-slate-500 mb-6 italic leading-relaxed font-serif">
                            {item.description}
                        </p>
                        <div className="pt-6 border-t border-slate-200 flex items-center gap-2">
                            <span className="material-symbols-outlined text-green-600 text-[16px]">auto_awesome</span>
                            <span className="text-[10px] font-black text-trust-navy uppercase tracking-widest">{item.impact}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ServicesGridSection = ({ section, services }: SectionProps) => (
    <section className="py-20 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-2">
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Solutions</span>
                    <span className="w-12 h-[1px] bg-primary/30"></span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mt-2 mb-4 tracking-tight">
                    {section.title || "Psychiatric Practice Management"}
                </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {services?.slice(0, 3).map((service, index) => (
                    <div key={service._id} className={`group relative p-10 ${index === 0 ? 'bg-trust-navy text-white shadow-2xl shadow-trust-navy/30' : 'bg-[#FAF8F3] text-trust-navy shadow-sm'} rounded-[3rem] border border-slate-100 flex flex-col hover:-translate-y-2 transition-all duration-500 min-h-[580px]`}>
                        {index === 0 && (
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none group-hover:bg-primary/30 transition-colors"></div>
                        )}
                        <div className="relative z-10 mb-6">
                            {index === 0 && (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                                    <span className="material-symbols-outlined text-xs">star</span>
                                    Most Popular
                                </div>
                            )}
                            <span className="material-symbols-outlined text-5xl text-primary block mb-6">{service.icon || 'star'}</span>
                            <h3 className={`text-3xl font-serif font-bold mb-4 tracking-tight ${index === 0 ? '!text-white' : 'text-trust-navy'}`}>{service.name}</h3>
                            <p className={`${index === 0 ? 'text-slate-300' : 'text-slate-600'} font-medium leading-relaxed font-sans text-base opacity-90`}>
                                <strong className={index === 0 ? 'text-white font-bold' : 'text-trust-navy'}>{service.tagline}</strong>—
                                {service.description.slice(0, 100)}...
                            </p>
                        </div>
                        <div className="mt-auto relative z-10 pt-8 border-t border-slate-200/40">
                            <ul className="space-y-4 mb-10">
                                {service.tags?.slice(0, 2).map(tag => (
                                    <li key={tag} className={`flex items-center gap-3 text-sm font-bold ${index === 0 ? 'text-slate-100/90' : 'text-slate-700'}`}>
                                        <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/services/${service.slug?.current}`} className={`w-full py-5 ${index === 0 ? 'bg-primary hover:bg-[#B8860B] text-white shadow-lg' : 'bg-white border-2 border-slate-200 text-trust-navy hover:border-primary hover:text-primary'} rounded-[1.5rem] font-black text-sm transition-all flex items-center justify-center gap-3 group/btn`}>
                                View Details <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialSection = ({ section }: SectionProps) => (
    <section className="py-20 bg-[#EDE8E0] border-t border-primary/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-4 tracking-tight">{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                {section.testimonials?.map((t: any, i: number) => (
                    <div key={i} className="bg-white/90 backdrop-blur-md p-10 md:p-12 rounded-[3rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col justify-between group hover:-translate-y-1">
                        <div className="mb-10">
                            <span className="text-6xl text-primary/10 font-serif leading-none absolute -top-4 -left-2 font-black italic">“</span>
                            <p className="text-xl md:text-2xl text-trust-navy italic leading-[1.4] font-serif relative z-10 tracking-tight">
                                {t.quote}
                            </p>
                        </div>
                        <div className="flex items-center gap-6 border-t border-slate-100 pt-8">
                            {t.imageUrl && (
                                <div className="size-14 rounded-full overflow-hidden bg-slate-200 ring-[4px] ring-white shadow-lg group-hover:ring-primary/10 transition-all duration-700">
                                    <Image src={t.imageUrl} alt={t.author || "Client"} width={56} height={56} className="grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover" />
                                </div>
                            )}
                            <div>
                                <p className="font-black text-trust-navy text-lg font-sans mb-0.5 tracking-tighter">{t.author}</p>
                                <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em] font-sans opacity-80">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const LogoCloudSection = ({ section }: SectionProps) => (
    <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">{section.title}</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {section.logos?.map((platform: any) => (
                        <div key={platform.name} className="group bg-[#FAF8F3] px-8 py-4 rounded-[1.5rem] border-2 border-slate-100 hover:border-primary/30 font-bold text-slate-500 text-sm shadow-sm hover:shadow-xl transition-all duration-700 flex items-center gap-4 hover:-translate-y-1">
                            <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-12 transition-transform">{platform.icon}</span>
                            <span className="font-black tracking-tight group-hover:text-trust-navy transition-colors">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const CTASection = ({ section }: SectionProps) => (
    <section className="bg-trust-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#D2691E25,transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-16 md:p-20 text-center shadow-2xl relative overflow-hidden group">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 !text-white leading-[1.1] tracking-tighter">
                    {section.title} <br className="hidden md:block" />
                    <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">{section.highlightText}</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed font-sans opacity-95 group-hover:opacity-100 transition-opacity">
                    {section.description}
                </p>
                <Link
                    href={section.buttonLink || "/book-consultation"}
                    className="relative group/btn inline-flex items-center gap-4 px-10 py-6 bg-primary text-white font-black text-xl rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-700 shadow-primary/30 active:scale-95"
                >
                    <span className="relative z-10">{section.buttonText}</span>
                    <span className="relative z-10 material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-3xl">arrow_forward</span>
                </Link>
            </div>
        </div>
    </section>
);

// Elite Credibility Section - Targets UCLA/UCSF/Stanford-trained psychiatrists (Condensed for above-the-fold)
const EliteCredibilitySection = () => (
    <section className="py-16 bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#EDE8E0] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#1A2332_1.5px,transparent_1.5px)] [background-size:40px_40px] animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] animate-[float_25s_ease-in-out_infinite_reverse]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header - Compact */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary/20 rounded-full px-4 py-1.5 mb-4">
                    <span className="material-symbols-outlined text-primary text-xs">workspace_premium</span>
                    <span className="text-primary text-[9px] font-black uppercase tracking-[0.2em]">Elite Expertise</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-4 leading-tight">
                    <span className="text-primary">UCLA, UCSF, Stanford-Trained?</span><br />
                    We Speak Your Language.
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                    10+ years supporting board-certified specialists with complex medication management and high-net-worth clientele.
                </p>
            </div>

            {/* Single Row - Compact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Multi-Provider Groups */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                    <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-2xl p-6 hover:border-primary/50 transition-all group-hover:-translate-y-1 duration-500 shadow-lg">
                        <div className="size-12 bg-gradient-to-br from-primary to-[#B8860B] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-2xl">groups</span>
                        </div>
                        <h3 className="text-xl font-black text-trust-navy mb-2">Multi-Provider Groups</h3>
                        <p className="text-sm text-slate-600">5-15 psychiatrists • Multiple locations • Complex scheduling</p>
                    </div>
                </div>

                {/* Board-Certified Specialists */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                    <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group-hover:-translate-y-1 duration-500 shadow-lg">
                        <div className="size-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                            <span className="material-symbols-outlined text-white text-2xl">verified</span>
                        </div>
                        <h3 className="text-xl font-black text-trust-navy mb-2">Board-Certified Specialists</h3>
                        <p className="text-sm text-slate-600">Child/Adolescent • Neuropsychiatry • Integrative • Women's Health</p>
                    </div>
                </div>

                {/* Premium Practices */}
                <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                    <div className="relative bg-white/80 backdrop-blur-sm border-2 border-slate-200/60 rounded-2xl p-6 hover:border-blue-500/50 transition-all group-hover:-translate-y-1 duration-500 shadow-lg">
                        <div className="size-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                            <span className="material-symbols-outlined text-white text-2xl">diamond</span>
                        </div>
                        <h3 className="text-xl font-black text-trust-navy mb-2">Premium Practices</h3>
                        <p className="text-sm text-slate-600">High-net-worth • Tech, entertainment, executives • Discretion paramount</p>
                    </div>
                </div>
            </div>

            {/* Compact Geographic + Specialization Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/locations/san-francisco" className="flex items-center gap-2 px-4 py-2 bg-white/60 border-2 border-slate-200/60 rounded-full shadow-sm hover:bg-white hover:border-primary/50 transition-all group">
                    <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">location_city</span>
                    <span className="text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">San Francisco</span>
                </Link>
                <Link href="/locations/sunnyvale" className="flex items-center gap-2 px-4 py-2 bg-white/60 border-2 border-slate-200/60 rounded-full shadow-sm hover:bg-white hover:border-primary/50 transition-all group">
                    <span className="material-symbols-outlined text-emerald-600 text-lg group-hover:scale-110 transition-transform">computer</span>
                    <span className="text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">Silicon Valley</span>
                </Link>
                <Link href="/locations/los-angeles" className="flex items-center gap-2 px-4 py-2 bg-white/60 border-2 border-slate-200/60 rounded-full shadow-sm hover:bg-white hover:border-primary/50 transition-all group">
                    <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">movie</span>
                    <span className="text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">Los Angeles</span>
                </Link>
                <Link href="/locations/san-diego" className="flex items-center gap-2 px-4 py-2 bg-white/60 border-2 border-slate-200/60 rounded-full shadow-sm hover:bg-white hover:border-primary/50 transition-all group">
                    <span className="material-symbols-outlined text-blue-600 text-lg group-hover:scale-110 transition-transform">beach_access</span>
                    <span className="text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">San Diego</span>
                </Link>
                <div className="h-6 w-px bg-slate-300"></div>
                {['ADHD', 'Integrative', 'Child/Adolescent', 'Women\'s Health'].map((spec, i) => (
                    <div key={i} className="px-3 py-1.5 bg-white/60 border border-slate-200/60 rounded-full text-trust-navy text-xs font-semibold hover:bg-white hover:border-primary/50 hover:text-primary transition-all">
                        {spec}
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// Featured Resources Section
const FeaturedResourcesSection = () => (
    <section className="py-20 bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#FAF8F3] border-t border-slate-200/60 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#1A2332_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                    <span className="material-symbols-outlined text-primary text-sm">auto_stories</span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Expert Resources</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4 leading-tight">
                    Free Resources for <span className="text-primary">California Psychiatrists</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                    Proven frameworks and insights to optimize your practice operations
                </p>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Resource 1: Revenue Architecture Blueprint */}
                <Link href="/resources/blueprints/revenue-architecture" className="group bg-white rounded-2xl p-8 border-2 border-slate-200/60 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded">Blueprint</span>
                                <span className="text-xs text-slate-400 font-semibold">8 min read</span>
                            </div>
                            <h3 className="font-bold text-lg text-trust-navy group-hover:text-primary transition-colors mb-2">
                                Revenue Architecture Blueprint
                            </h3>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        Strategic framework for maximizing practice revenue through optimized billing workflows and administrative efficiency.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        <span>Read Blueprint</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                </Link>

                {/* Resource 2: Start-Up Roadmap */}
                <Link href="/resources/blueprints/start-up-roadmap" className="group bg-white rounded-2xl p-8 border-2 border-slate-200/60 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="size-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                            <span className="material-symbols-outlined text-emerald-600 text-2xl">rocket_launch</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider rounded">Blueprint</span>
                                <span className="text-xs text-slate-400 font-semibold">12 min read</span>
                            </div>
                            <h3 className="font-bold text-lg text-trust-navy group-hover:text-primary transition-colors mb-2">
                                Practice Start-Up Roadmap
                            </h3>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        Complete guide to launching a California psychiatric practice with compliance, billing setup, and operational systems.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        <span>Read Blueprint</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                </Link>

                {/* Resource 3: How to Choose CA Psychiatric VA */}
                <Link href="/blog/how-to-choose-california-psychiatric-virtual-assistant" className="group bg-white rounded-2xl p-8 border-2 border-slate-200/60 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="size-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                            <span className="material-symbols-outlined text-blue-600 text-2xl">checklist</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-wider rounded">Guide</span>
                                <span className="text-xs text-slate-400 font-semibold">10 min read</span>
                            </div>
                            <h3 className="font-bold text-lg text-trust-navy group-hover:text-primary transition-colors mb-2">
                                How to Choose a CA Psychiatric VA
                            </h3>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
                        Decision framework for evaluating virtual assistant providers with HIPAA compliance and psychiatric expertise.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        <span>Read Guide</span>
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </div>
                </Link>
            </div>

            {/* View All CTA */}
            <div className="text-center mt-10">
                <Link href="/resources" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 rounded-xl text-trust-navy font-bold hover:border-primary hover:text-primary transition-all hover:shadow-lg">
                    <span>View All Resources</span>
                    <span className="material-symbols-outlined text-lg">library_books</span>
                </Link>
            </div>
        </div>
    </section>
);

export default function SanityPageBuilder({ sections, services }: { sections: any[], services?: Service[] }) {
    if (!sections) return null;

    return (
        <div className="bg-white">
            {sections.map((section, index) => {
                const component = (() => {
                    switch (section._type) {
                        case "heroSection": return <HeroSection section={section} />;
                        case "statsSection": return <StatsSection section={section} />;
                        case "splitContentSection": return <SplitContentSection section={section} />;
                        case "testimonialSection": return <TestimonialSection section={section} />;
                        case "logoCloudSection": return <LogoCloudSection section={section} />;
                        case "ctaSection": return <CTASection section={section} />;
                        case "servicesGridSection": return <ServicesGridSection section={section} services={services} />;
                        case "recoveryMatrixSection": return <RecoveryMatrixSection section={section} />;
                        default: return <div key={index} className="py-20 text-center bg-slate-50 border-t border-slate-200"><p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Section Developer mode: {section._type}</p></div>;
                    }
                })();

                // Inject Elite Credibility Section after hero
                const showEliteSection = section._type === 'heroSection' && index === 0;

                return (
                    <div key={section._key || index}>
                        {component}
                        {showEliteSection && <EliteCredibilitySection />}
                        {index < sections.length - 1 && section._type !== 'heroSection' && section._type !== 'statsSection' && <SectionDivider />}
                    </div>
                );
            })}
            <FeaturedResourcesSection />
        </div>
    );
}
