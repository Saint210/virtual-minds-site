import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import LocationalAuthority from "@/components/contact/LocationalAuthority";

export const metadata = {
    title: "Request Your Recovery Plan | Virtual Minds Psychiatric Ops",
    description: "Connect with California's specialized psychiatric operational firm. Audit your EHR workflows, billing systems, and compliance guardrails.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Contact Terminal" }
                ]}
            />

            <main className="flex-grow">
                <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
                        <ContactHero />
                        <ContactForm />
                    </div>
                </section>

                <LocationalAuthority />
            </main>

            <Footer />
        </div>
    );
}
