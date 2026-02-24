// Data Source for Programmatic City Vectors
// Used to pre-fill the Practice Calculator with hyper-local data

export interface CityMetric {
    rent: number;       // Average monthly rent for small medical office (1000sqft)
    salary: number;     // Average Psychiatrist Salary in region
    label: string;      // Display Name
}

export const CITY_METRICS: Record<string, CityMetric> = {
    "los-angeles": { rent: 4500, salary: 325000, label: "Los Angeles" },
    "san-francisco": { rent: 6500, salary: 380000, label: "San Francisco" },
    "san-diego": { rent: 3800, salary: 310000, label: "San Diego" },
    "beverly-hills": { rent: 7200, salary: 450000, label: "Beverly Hills" },
    "palo-alto": { rent: 8000, salary: 420000, label: "Palo Alto" },
    "newport-beach": { rent: 5000, salary: 340000, label: "Newport Beach" },
    "sacramento": { rent: 2900, salary: 295000, label: "Sacramento" },
    "santa-monica": { rent: 6000, salary: 360000, label: "Santa Monica" },
    "pasadena": { rent: 3500, salary: 315000, label: "Pasadena" },
    "santa-barbara": { rent: 4800, salary: 330000, label: "Santa Barbara" },
    "san-jose": { rent: 5500, salary: 375000, label: "San Jose" },
    "fresno": { rent: 2200, salary: 280000, label: "Fresno" },
    "oakland": { rent: 3900, salary: 320000, label: "Oakland" },
    "irvine": { rent: 4800, salary: 335000, label: "Irvine" },
    "riverside": { rent: 2500, salary: 290000, label: "Riverside" },
    "long-beach": { rent: 3200, salary: 305000, label: "Long Beach" },
    "bakersfield": { rent: 1900, salary: 275000, label: "Bakersfield" },
    "anaheim": { rent: 3400, salary: 310000, label: "Anaheim" },
    "stockton": { rent: 2100, salary: 285000, label: "Stockton" },
    "chula-vista": { rent: 2800, salary: 295000, label: "Chula Vista" },
    "fremont": { rent: 4200, salary: 340000, label: "Fremont" },
    "san-bernardino": { rent: 2300, salary: 285000, label: "San Bernardino" },
    "modesto": { rent: 2000, salary: 280000, label: "Modesto" },
    "fontana": { rent: 2400, salary: 288000, label: "Fontana" },
    "oxnard": { rent: 2700, salary: 298000, label: "Oxnard" },
    "moreno-valley": { rent: 2250, salary: 282000, label: "Moreno Valley" },
    "huntington-beach": { rent: 4100, salary: 325000, label: "Huntington Beach" },
    "glendale": { rent: 3800, salary: 318000, label: "Glendale" },
    "santa-clarita": { rent: 3100, salary: 308000, label: "Santa Clarita" },
    "garden-grove": { rent: 2950, salary: 300000, label: "Garden Grove" },
    "oceanside": { rent: 3000, salary: 305000, label: "Oceanside" },
    "rancho-cucamonga": { rent: 3300, salary: 312000, label: "Rancho Cucamonga" },
    "santa-rosa": { rent: 3150, salary: 315000, label: "Santa Rosa" },
    "ontario": { rent: 2600, salary: 292000, label: "Ontario" },
    "lancaster": { rent: 1800, salary: 270000, label: "Lancaster" },
    "elk-grove": { rent: 2800, salary: 300000, label: "Elk Grove" },
    "corona": { rent: 2500, salary: 295000, label: "Corona" },
    "palmdale": { rent: 1850, salary: 272000, label: "Palmdale" },
    "salinas": { rent: 2400, salary: 290000, label: "Salinas" },
    "hayward": { rent: 3100, salary: 318000, label: "Hayward" },
    "sunnyvale": { rent: 5800, salary: 390000, label: "Sunnyvale" },
    "escondido": { rent: 2900, salary: 298000, label: "Escondido" },
    "pomona": { rent: 2350, salary: 288000, label: "Pomona" },
    "visalia": { rent: 1800, salary: 275000, label: "Visalia" },
    "fullerton": { rent: 3300, salary: 310000, label: "Fullerton" },
    "victorville": { rent: 1700, salary: 265000, label: "Victorville" },
    "orange": { rent: 3500, salary: 315000, label: "Orange" },
    "torrance": { rent: 3950, salary: 322000, label: "Torrance" },
    "carlsbad": { rent: 4150, salary: 330000, label: "Carlsbad" },
    "temecula": { rent: 2750, salary: 298000, label: "Temecula" },
    "la-jolla": { rent: 5500, salary: 365000, label: "La Jolla" },
    "del-mar": { rent: 6000, salary: 370000, label: "Del Mar" },
    "hermosa-beach": { rent: 4500, salary: 345000, label: "Hermosa Beach" },
    "redondo-beach": { rent: 4000, salary: 335000, label: "Redondo Beach" },
    "marina-del-rey": { rent: 5000, salary: 355000, label: "Marina Del Rey" },
    "echo-park": { rent: 3500, salary: 310000, label: "Echo Park" },
};

export const DEFAULT_METRICS: CityMetric = {
    rent: 2500,
    salary: 300000,
    label: "California"
};
