import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SiloPage({ title }: { title: string }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex items-center justify-center bg-medical-gray py-24">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-trust-navy mb-4">{title}</h1>
                    <p className="text-calm-sage text-lg">
                        This silo is part of the Phase 1 architecture and will be populated with authority content in Phase 2.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export function generateSiloPage(title: string) {
    return function Page() {
        return <SiloPage title={title} />;
    };
}
