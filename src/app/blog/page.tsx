import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

import { blogPosts, categories } from "@/lib/blog-data";

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



export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights" }
        ]}
      />

      <main className="flex-grow">
        {/* Immersive Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-[#FAF8F3]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 tracking-wide uppercase">
                Executive Intelligence
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                Insights for the <br />
                <span className="text-primary italic">Modern Practice</span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl max-w-2xl leading-relaxed">
                Expert strategies on scaling, efficiency, and compliance for California's forward-thinking psychiatric leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Filter Bar */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 mb-12">
          <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar">
            <div className="flex gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${category === "All"
                    ? "bg-trust-navy text-white shadow-lg shadow-trust-navy/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50 hover:text-primary hover:bg-slate-50"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Magazine Layout Grid */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6">

            {/* Featured Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              {/* Main Feature - Takes up 8 cols */}
              <div className="lg:col-span-8 group cursor-pointer">
                <div className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3E] via-[#0B1C3E]/60 to-transparent z-10 opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                    <div className="flex items-center gap-3 mb-4 text-white/90">
                      <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-sm border-l border-white/20 pl-3">{blogPosts[0].readTime}</span>
                    </div>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <h2 className="font-display text-3xl md:text-5xl font-bold !text-white mb-6 leading-tight drop-shadow-md group-hover:underline decoration-primary decoration-2 underline-offset-8">
                        {blogPosts[0].title}
                      </h2>
                    </Link>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl line-clamp-2 mb-8">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold group/btn">
                      Read Article
                      <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Stack - Takes up 4 cols */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                {blogPosts.slice(1, 3).map((post, idx) => (
                  <article key={idx} className="flex-1 group cursor-pointer bg-white rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-500">{post.readTime}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="font-display text-xl font-bold text-trust-navy mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="mt-6 flex items-center text-sm font-bold text-trust-navy group-hover:text-primary transition-colors">
                        Read Now <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Breakout */}
            <div className="mb-24 relative rounded-[2.5rem] overflow-hidden bg-trust-navy">
              <div className="absolute inset-0 bg-[url('/images/pattern-grid.png')] opacity-5"></div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold !text-white mb-6">
                    The Private Practice <br />
                    <span className="text-primary">Growth Kit</span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Stop moonlighting as an office manager. Get the exact blueprints used to build a scalable, high-revenue practice—without the burnout.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Scaling Roadmap PDF', 'Hiring Checklist', 'ROI Calculator Template'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <button className="w-full bg-primary hover:bg-[#C19F30] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-primary/25">
                      Send Me The Kit
                    </button>
                    <p className="text-white/40 text-xs text-center mt-2">No spam, unsubscribe anytime.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining Articles Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-3xl font-bold text-trust-navy">Latest Insights</h2>
                <div className="h-px bg-slate-200 flex-1 ml-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(3).map((post, index) => (
                  <article key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-trust-navy/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-300">
                        {/* Placeholder for images if not strictly defined */}
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-trust-navy shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4 flex items-center text-xs text-slate-500 font-medium">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-display text-xl font-bold text-trust-navy mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-trust-navy">VM</div>
                          <span className="text-xs text-slate-500 font-medium">Virtual Minds Team</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-12">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-trust-navy hover:text-trust-navy transition-all">
                Load More Articles
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
