"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TOCItem {
    id: string;
    title: string;
}

interface RelatedArticle {
    title: string;
    slug: string;
    category: string;
}

interface BlogSidebarProps {
    tableOfContents: TOCItem[];
    relatedArticles?: RelatedArticle[];
    currentUrl?: string;
    articleTitle?: string;
}

export default function BlogSidebar({
    tableOfContents,
    relatedArticles = [],
    currentUrl = "",
    articleTitle = ""
}: BlogSidebarProps) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -80% 0px" }
        );

        tableOfContents.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [tableOfContents]);

    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareOnTwitter = () => {
        const text = encodeURIComponent(articleTitle);
        const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
    };

    const shareViaEmail = () => {
        const subject = encodeURIComponent(articleTitle);
        const body = encodeURIComponent(`I thought you might find this article interesting: ${currentUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    return (
        <aside className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">

                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <h3 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
                        Table of Contents
                    </h3>
                    <nav className="space-y-2">
                        {tableOfContents.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`block text-sm py-2 px-3 rounded-lg transition-all ${activeSection === item.id
                                    ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-trust-navy'
                                    }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* CTA Card - Practice Intelligence Design */}
                <div className="bg-gradient-to-br from-[#D2691E] to-[#b05515] rounded-2xl shadow-xl shadow-[#D2691E]/20 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-[40px]"></div>

                    <div className="p-8 relative z-10">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="text-[10px] font-black text-white uppercase tracking-widest opacity-90">Growth Engine</span>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                            Build Your <br />
                            <span className="text-white/90 italic border-b-2 border-white/30">Practice Intelligence</span>
                        </h3>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                <span className="text-white/90 text-xs font-medium leading-relaxed">Automate intake workflows</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                <span className="text-white/90 text-xs font-medium leading-relaxed">Optimize 90833/99214 coding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-white text-sm mt-0.5">check_circle</span>
                                <span className="text-white/90 text-xs font-medium leading-relaxed">Eliminate scheduling leaks</span>
                            </li>
                        </ul>

                        <Link
                            href="/book-consultation"
                            className="block w-full py-4 bg-[#0B1C3E] hover:bg-[#15284d] text-white font-bold text-sm text-center rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-black/20"
                        >
                            Schedule Strategy Call
                        </Link>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        <h3 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">article</span>
                            Related Articles
                        </h3>
                        <div className="space-y-4">
                            {relatedArticles.map((article, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${article.slug}`}
                                    className="block group"
                                >
                                    <div className="text-xs text-primary font-medium mb-1">{article.category}</div>
                                    <div className="text-sm font-medium text-trust-navy group-hover:text-primary transition-colors">
                                        {article.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Social Share */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                    <h3 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">share</span>
                        Share This Article
                    </h3>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={shareOnLinkedIn}
                            className="flex items-center gap-3 px-4 py-3 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="text-sm font-medium">Share on LinkedIn</span>
                        </button>
                        <button
                            onClick={shareOnTwitter}
                            className="flex items-center gap-3 px-4 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                            <span className="text-sm font-medium">Share on Twitter</span>
                        </button>
                        <button
                            onClick={shareViaEmail}
                            className="flex items-center gap-3 px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">mail</span>
                            <span className="text-sm font-medium">Share via Email</span>
                        </button>
                    </div>
                </div>

            </div>
        </aside>
    );
}
