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
        url: "https://thevirtualminds.com/images/hero-new.png",
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
    image: post.mainImage ? urlFor(post.mainImage).url() : "/images/hero-new.png",
    slug: post.slug?.current || "",
    featured: false // You can add logic to set this from Sanity if desired
  }));

  // Combine static and live posts (Live posts first)
  const allPosts = [...livePosts, ...staticPosts];

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
        <section className="relative pt-4 md:pt-6 pb-16 overflow-hidden">
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
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="bg-gradient-to-br from-trust-navy to-slate-800 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Need Support?</span>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">
                  Our <span className="text-primary italic">Services</span>
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Specialized psychiatric virtual assistant services for California practices
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Link href="/services/virtual-assistant" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
                    <h3 className="font-serif text-lg font-bold">Virtual Assistant</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Dedicated psychiatric assistants for your practice</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Learn More <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>

                <Link href="/services/practice-consulting" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
                    <h3 className="font-serif text-lg font-bold">Practice Consulting</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Strategic operational review and optimization</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Learn More <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>

                <Link href="/services/billing-and-rcm" className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                    <h3 className="font-serif text-lg font-bold">Billing & RCM</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">Revenue stabilization and billing coordination</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Learn More <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <Link href="/services" className="inline-flex items-center gap-2 bg-primary hover:bg-[#B8860B] text-white px-8 py-3 rounded-xl font-bold shadow-xl transition-all hover:scale-[1.02]">
                  View All Services <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CALIFORNIA COVERAGE */}
        <section className="py-16 bg-[#FAF8F3]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Serving California</span>
              <h2 className="font-serif text-3xl md:text-4xl text-trust-navy mb-4">
                Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 italic">Statewide</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Specialized psychiatric virtual assistant services across California's major metropolitan areas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/locations/los-angeles" className="group bg-white rounded-xl p-4 border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                <span className="material-symbols-outlined text-primary text-xl mb-2 block">location_city</span>
                <h3 className="font-serif text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">Los Angeles</h3>
              </Link>

              <Link href="/locations/san-francisco" className="group bg-white rounded-xl p-4 border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                <span className="material-symbols-outlined text-accent text-xl mb-2 block">location_city</span>
                <h3 className="font-serif text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">San Francisco</h3>
              </Link>

              <Link href="/locations/san-diego" className="group bg-white rounded-xl p-4 border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                <span className="material-symbols-outlined text-trust-navy text-xl mb-2 block">location_city</span>
                <h3 className="font-serif text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">San Diego</h3>
              </Link>

              <Link href="/locations/sacramento" className="group bg-white rounded-xl p-4 border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-lg transition-all text-center">
                <span className="material-symbols-outlined text-primary text-xl mb-2 block">location_city</span>
                <h3 className="font-serif text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">Sacramento</h3>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link href="/locations" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-6 py-3 rounded-xl font-bold shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                View All Locations <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
