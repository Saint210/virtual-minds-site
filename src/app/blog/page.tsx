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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent animate-gradient-x">
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
      </main>
      <Footer />
    </div>
  );
}
