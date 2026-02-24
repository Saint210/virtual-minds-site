import { locations } from "@/data/locations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocationHero from "@/components/locations/LocationHero";
import LocationGrid from "@/components/locations/LocationGrid";
import MarketIntelligence from "@/components/locations/MarketIntelligence";

export const metadata = {
    title: "California Psychiatric Service Area | Virtual Minds Network",
    description: "Virtual Minds provides specialized administrative support to psychiatric practices across California. Viewing our coverage map and regional economic analysis.",
};

export default function LocationsIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3] font-sans">
            <Navbar />
            <main className="flex-grow">
                <LocationHero />
                <LocationGrid locations={locations} />
                <MarketIntelligence />
            </main>
            <Footer />
        </div>
    );
}
