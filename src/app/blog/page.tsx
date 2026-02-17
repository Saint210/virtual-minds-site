import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogFeed from "@/components/blog/BlogFeed";

import { blogPosts as staticPosts, categories as staticCategories } from "@/lib/blog-data";
import { getPosts } from "@/lib/blog-service";
import { urlFor } from "@/lib/sanity";

export const metadata = {
  title: "California Psychiatric Virtual Assistant Blog | Virtual Minds",
  description: "Expert insights on California psychiatric virtual assistants, HIPAA compliance, EMR integration, and practice management. Latest trends and best practices.",
  openGraph: {
    title: "California Psychiatric VA Blog - Virtual Minds",
    description: "Expert insights on virtual assistants for California psychiatric practices. HIPAA compliance, EMR integration, and practice optimization tips.",
    url: "https://thevirtualminds.com/blog",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "California Psychiatric VA Blog",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const upgradedSlugs = [
  "how-to-choose-california-psychiatric-virtual-assistant",
  "revenue-cycle-management-vs-billing",
  "psychiatrist-salary-california-private-practice",
  "how-to-scale-private-psychiatry-practice",
  "implementing-efficiency-models-mental-health",
  "operational-process-review-mental-health-practices",
  "optimizing-patient-workflow-psychiatry"
];

function calculateReadTime(text: any[]): string {
  const wordsPerMinute = 200;
  let wordCount = 0;

  if (!text) return "5 min read";

  text.forEach((block: any) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length;
        }
      });
    }
  });

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes > 0 ? minutes : 5} min read`;
}

export default async function BlogPage() {
  // Fetch live posts from Sanity
  const sanityPosts = await getPosts();

  // Transform Sanity posts to match the internal BlogPost interface
  const livePosts = sanityPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    category: post.categories?.[0] || "Practice Growth",
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : "Coming Soon",
    readTime: calculateReadTime(post.body),
    image: post.mainImage ? urlFor(post.mainImage).url() : "/images/hero-new.webp",
    slug: post.slug?.current || "",
    authorName: post.author?.name,
    featured: false // You can add logic to set this from Sanity if desired
  }));

  // Combine static and live posts (Live posts first, deduplicated by slug)
  const liveSlugs = new Set(livePosts.map(p => p.slug));
  const filteredStatic = staticPosts.filter(p => !liveSlugs.has(p.slug));
  const allPosts = [...livePosts, ...filteredStatic];

  // Logic to ensure all categories are represented
  const liveCategories = [...new Set(livePosts.map(p => p.category))];
  const allCategories = [...new Set(["All", ...liveCategories, ...staticCategories])];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Practice Intelligence" }
        ]}
      />

      <main className="flex-grow">
        {/* EXECUTIVE INTELLIGENCE HERO */}
        <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl">

              {/* Strategic Briefing Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                Practice Growth insights
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                Practice <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Intelligence.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                A repository of clinical frameworks and operational logic for board-certified specialists scaling in California.
              </p>
            </div>
          </div>
        </section>

        <BlogFeed
          posts={allPosts}
          categories={allCategories as string[]}
          upgradedSlugs={upgradedSlugs}
        />

        {/* OUR SERVICES - Sidebar Style */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Operational Support</span>
                <h2 className="font-serif text-4xl text-trust-navy leading-tight">Practice <span className="italic text-slate-400">Services</span></h2>
              </div>
              <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
                Deploy specialized psychiatric support systems to your practice.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-20">
              {[
                {
                  id: "SYS_CLINICAL_01",
                  title: "Virtual Assistant",
                  subtitle: "Clinical Operations",
                  desc: "Dedicated psychiatric assistants for intake, patient communication, and administrative support.",
                  impact: "Recover 25k/yr overhead.",
                  icon: "support_agent",
                  link: "/services/virtual-assistant"
                },
                {
                  id: "SYS_AUDIT_02",
                  title: "Practice Consulting",
                  subtitle: "Operational Diagnostics",
                  desc: "Strategic operational review and practice optimization for established psychiatrists.",
                  impact: "Achieve firm-wide clarity.",
                  icon: "analytics",
                  link: "/services/practice-consulting"
                },
                {
                  id: "SYS_RCM_03",
                  title: "Billing & RCM",
                  subtitle: "Revenue Stabilization",
                  desc: "Revenue stabilization through verification, prior auths, and billing coordination.",
                  impact: "Recover 4-7% lost revenue.",
                  icon: "payments",
                  link: "/services/billing-and-rcm"
                }
              ].map((service, idx) => (
                <Link
                  key={idx}
                  href={service.link}
                  className="group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                >
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ID Tag */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="size-12 rounded-xl flex items-center justify-center transition-colors duration-300 bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6 relative z-10">
                    <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-sm">verified</span>
                      <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                        Impact
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {service.impact}
                    </p>
                  </div>

                  {/* Active State Indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              ))}
            </div>


            {/* CALIFORNIA COVERAGE - System Module Style */}
            <div className="border-t border-slate-200/60 pt-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Network Coverage</span>
                  <h2 className="font-serif text-3xl text-trust-navy leading-tight">Serving <span className="italic text-slate-400">California</span></h2>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Los Angeles", slug: "los-angeles", id: "SYS_LOC_01", savings: "$51,300/yr" },
                  { name: "San Francisco", slug: "san-francisco", id: "SYS_LOC_02", savings: "$73,400/yr" },
                  { name: "San Diego", slug: "san-diego", id: "SYS_LOC_03", savings: "$48,200/yr" },
                  { name: "Sacramento", slug: "sacramento", id: "SYS_LOC_04", savings: "$45,900/yr" }
                ].map((loc, idx) => (
                  <Link
                    key={idx}
                    href={`/locations/${loc.slug}`}
                    className="group relative flex flex-col bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 hover:border-trust-navy hover:shadow-lg"
                  >
                    {/* Technical Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-trust-navy group-hover:text-primary transition-colors">location_city</span>
                        <span className="text-[8px] font-mono font-bold text-slate-300 uppercase tracking-widest">{loc.id}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-trust-navy mb-2 group-hover:text-primary transition-colors">{loc.name}</h3>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Savings:</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {loc.savings}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/locations" className="inline-flex items-center gap-2 text-sm font-bold text-trust-navy uppercase tracking-widest hover:text-primary transition-colors">
                  View Network Map <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
