import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPage } from "@/lib/pages-service";
import SanityPageBuilder from "@/components/home/SanityPageBuilder";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    // Safety check for common non-page requests
    if (slug?.includes('.') || slug === 'favicon.ico') return {};

    const page = await getPage(slug);

    if (!page) {
        return {
            title: "Page Not Found | Virtual Minds",
        };
    }

    return {
        title: page.seo?.metaTitle || `${page.title} | Virtual Minds`,
        description: page.seo?.metaDesc || "Specialized psychiatric practice management and operational intelligence.",
    };
}

export default async function DynamicSanityPage({ params }: PageProps) {
    const { slug } = await params;

    const page = await getPage(slug);

    // If the page doesn't exist in Sanity and it's not a hardcoded folder, we 404
    if (!page) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Render the CMS-built content via the premium Page Builder */}
                <SanityPageBuilder sections={page.sections} />
            </main>
            <Footer />
        </div>
    );
}
