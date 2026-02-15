"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
    featured?: boolean;
}

interface BlogFeedProps {
    posts: BlogPost[];
    categories: string[];
    upgradedSlugs: string[];
}

export default function BlogFeed({ posts, categories, upgradedSlugs }: BlogFeedProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory);

    return (
        <>
            {/* Sticky Filter Bar */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 mb-12">
                <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex gap-3">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
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

                    {/* VIEW: ALL CATEGORIES */}
                    {activeCategory === "All" && (
                        <>
                            {/* Featured Bento Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 animate-in fade-in duration-500">
                                {/* Main Feature - Takes up 8 cols */}
                                <div className="lg:col-span-8 group cursor-pointer">
                                    <div className="relative h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50">
                                        <img
                                            src={posts[0].image}
                                            alt={posts[0].title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3E] via-[#0B1C3E]/60 to-transparent z-10 opacity-90" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                                            <div className="flex items-center gap-3 mb-4 text-white/90">
                                                <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                                    {posts[0].category}
                                                </span>
                                                <span className="text-sm border-l border-white/20 pl-3">{posts[0].readTime}</span>
                                            </div>
                                            <Link href={`/blog/${posts[0].slug}`}>
                                                <h2 className="font-display text-3xl md:text-5xl font-bold !text-white mb-6 leading-tight drop-shadow-md group-hover:underline decoration-primary decoration-2 underline-offset-8">
                                                    {posts[0].title}
                                                </h2>
                                            </Link>
                                            <p className="text-white/80 text-lg md:text-xl max-w-2xl line-clamp-2 mb-8">
                                                {posts[0].excerpt}
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
                                    {posts.slice(1, 3).map((post, idx) => (
                                        <article key={idx} className="flex-1 group cursor-pointer bg-white rounded-[2rem] p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                                                            <span className="text-slate-300">•</span>
                                                            <span className="text-xs text-slate-500">{post.readTime}</span>
                                                        </div>

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

                            <div className="mb-24 relative rounded-[2.5rem] overflow-hidden bg-[#2A2A2A] shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] z-0"></div>
                                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 lg:px-20 lg:py-16 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-3 py-1 mb-6">
                                            <span className="w-2 h-2 rounded-full bg-[#D2691E] animate-pulse"></span>
                                            <span className="text-[#D2691E] text-[10px] font-black uppercase tracking-widest">Free Resource</span>
                                        </div>
                                        <h2 className="font-serif text-4xl md:text-5xl font-bold !text-white mb-6 leading-tight">
                                            The Private Practice <br />
                                            <span className="text-[#D2691E]">Growth Kit</span>
                                        </h2>
                                        <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light opacity-90 max-w-md">
                                            Stop moonlighting as an office manager. Get the blueprints for a scalable, high-revenue practice.
                                        </p>

                                        {/* CSS DOCUMENT MOCKUP */}
                                        <div className="flex -space-x-12 mb-8 perspective-[1000px]">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-24 h-32 bg-white rounded-lg shadow-2xl border border-slate-200 transform -rotate-6 hover:-translate-y-2 transition-transform duration-500 origin-bottom-left flex flex-col p-3 relative" style={{ zIndex: i }}>
                                                    <div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
                                                    <div className="space-y-1">
                                                        <div className="h-1 w-full bg-slate-100 rounded"></div>
                                                        <div className="h-1 w-full bg-slate-100 rounded"></div>
                                                        <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                                                    </div>
                                                    <div className="mt-auto flex justify-end">
                                                        <div className="size-4 rounded-full bg-[#D2691E]/20"></div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="ml-8 self-center">
                                                <div className="text-white font-bold text-sm">+ scaling templates</div>
                                                <div className="text-slate-400 text-xs">PDF & Excel included</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col gap-5">
                                            <div>
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Work Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="doctor@practice.com"
                                                    className="w-full px-6 py-4 rounded-xl bg-[#1A1A1A]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#D2691E] focus:ring-1 focus:ring-[#D2691E] transition-all"
                                                />
                                            </div>
                                            <button className="w-full bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-[#D2691E]/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group">
                                                <span>Send Me The Kit</span>
                                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                            </button>
                                            <p className="text-slate-500 text-xs text-center mt-2 italic flex items-center justify-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                                Secure Direct Delivery
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )}

                    {/* Grid Layout (Used for both Remaining Articles AND Filtered View) */}
                    <div className="mb-12">

                        {activeCategory !== "All" && (
                            <div className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="font-display text-3xl font-bold text-trust-navy">
                                    {activeCategory} Articles
                                    <span className="text-slate-400 text-lg font-normal ml-3">({filteredPosts.length})</span>
                                </h2>
                                <div className="h-px bg-slate-200 flex-1 ml-8"></div>
                            </div>
                        )}

                        {activeCategory === "All" && (
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="font-display text-3xl font-bold text-trust-navy">Latest Insights</h2>
                                <div className="h-px bg-slate-200 flex-1 ml-8"></div>
                            </div>
                        )}

                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* For 'All', we slice(3). For Filtered, we show all. */}
                                {(activeCategory === "All" ? filteredPosts.slice(3) : filteredPosts).map((post, index) => (
                                    <Link
                                        key={index}
                                        href={`/blog/${post.slug}`}
                                        className="group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5 animate-in fade-in zoom-in-50 duration-500"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Technical Grid Background */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* ID Tag & Icon */}
                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div className="size-12 rounded-xl flex items-center justify-center transition-colors duration-300 bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white">
                                                <span className="material-symbols-outlined text-2xl">article</span>
                                            </div>
                                            <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                SYS_INTEL_{String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="mb-6 relative z-10 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{post.readTime}</span>
                                            </div>

                                            <h3 className="font-serif text-xl font-bold text-trust-navy mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                                <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                                                    Clinical Verified
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between w-full">
                                                <p className="text-[10px] text-slate-400 font-mono">
                                                    {post.date}
                                                </p>
                                                <span className="material-symbols-outlined text-slate-300 text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                            </div>
                                        </div>

                                        {/* Active State Indicator */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
                                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-2">No articles found</h3>
                                <p className="text-slate-500">We couldn't find any articles in the <span className="font-bold text-primary">"{activeCategory}"</span> category.</p>
                                <button
                                    onClick={() => setActiveCategory("All")}
                                    className="mt-6 text-sm font-bold text-trust-navy uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors"
                                >
                                    Clear Filter
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA (Always Visible) */}
                    {activeCategory === "All" && (
                        <div className="text-center py-12">
                            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-trust-navy hover:text-trust-navy transition-all">
                                Load More Articles
                                <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </div>
                    )}
                </div>
            </section >
        </>
    );
}
