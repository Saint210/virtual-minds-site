import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";
import NewsletterBreakout from "@/components/blog/NewsletterBreakout";
import { getPostBySlug, getPosts } from "@/lib/blog-service";
import { urlFor } from "@/lib/sanity";
import PortableText from "@/components/blog/PortableText";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Virtual Minds Intelligence`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get some related posts (simple approach: just get latest posts)
    const allPosts = await getPosts();
    const relatedArticles = allPosts
        .filter((p) => p.slug.current !== slug)
        .slice(0, 3)
        .map((p) => ({
            title: p.title,
            slug: p.slug.current,
            category: p.categories?.[0] || "Practice Growth",
        }));

    // Create a simple Table of Contents from h2 headers in body
    const tableOfContents = post.body
        ? post.body
            .filter((block: any) => block._type === "block" && block.style === "h2")
            .map((block: any) => {
                const title = block.children.map((c: any) => c.text).join("");
                const id = title.toLowerCase().replace(/\s+/g, "-");
                return { id, title };
            })
        : [];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <main className="flex-grow">
                {/* EXECUTIVE STRATEGY HERO */}
                <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <Link href="/blog" className="hover:text-primary transition-colors">Intelligence</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">{post.categories?.[0] || "Insight"}</span>
                            </nav>

                            <div className="inline-flex items-center gap-3 bg-trust-navy/[0.03] border border-trust-navy/10 rounded-lg px-4 py-2 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D2691E] animate-pulse" />
                                Live Intelligence Briefing
                            </div>

                            <h1 className="font-serif text-5xl md:text-8xl font-bold text-trust-navy mb-8 leading-[0.9] tracking-tight text-balance">
                                {post.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                                {post.excerpt}
                            </p>

                            {/* PUB DATA */}
                            <div className="flex items-center gap-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black !text-[#D2691E] uppercase tracking-widest">Published</p>
                                    <p className="text-xl font-bold text-trust-navy">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : "Recently"}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black !text-[#D2691E] uppercase tracking-widest">Category</p>
                                    <p className="text-xl font-bold text-trust-navy">{post.categories?.[0] || "General"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-24">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* CONTENT AREA */}
                            <div className="flex-1 min-w-0">
                                {post.mainImage && (
                                    <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16">
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                <div className="prose prose-lg max-w-none">
                                    <PortableText value={post.body} />
                                </div>

                                <div className="mt-24 pt-24 border-t border-slate-200">
                                    <NewsletterBreakout />
                                </div>
                            </div>

                            {/* SIDEBAR AREA */}
                            <div className="lg:w-80 shrink-0">
                                <div className="sticky top-32">
                                    <BlogSidebar
                                        tableOfContents={tableOfContents}
                                        relatedArticles={relatedArticles}
                                        currentUrl={`https://thevirtualminds.com/blog/${slug}`}
                                        articleTitle={post.title}
                                    />

                                    {/* SIDEBAR CTA CARD */}
                                    <div className="mt-12 p-8 bg-gradient-to-br from-[#D2691E] to-[#b05515] rounded-[2rem] text-white shadow-xl shadow-[#D2691E]/20 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                                        <h3 className="font-serif text-2xl font-bold mb-4 relative z-10 transition-transform group-hover:-translate-y-1 text-white">Unlock Practice Intelligence.</h3>
                                        <p className="text-white/90 text-sm mb-8 relative z-10 font-medium leading-relaxed">
                                            Transform your clinical operations with a strategic intelligence assessment for private psychiatry.
                                        </p>
                                        <Link href="/book-consultation" className="block text-center py-4 bg-[#0B1C3E] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-[#15284d] transition-all hover:scale-[1.02] relative z-10 shadow-lg shadow-black/20">
                                            Schedule Assessment
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* STICKY MOBILE CONVERSION BAR (Hidden on Desktop) */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200 lg:hidden z-50">
                <Link
                    href="/book-consultation"
                    className="flex items-center justify-center gap-3 w-full bg-[#D2691E] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#D2691E]/20 active:scale-[0.98] transition-transform"
                >
                    <span className="material-symbols-outlined">calendar_add_on</span>
                    Schedule Free Strategy Call
                </Link>
            </div>
            <Footer />
        </div>
    );
}
