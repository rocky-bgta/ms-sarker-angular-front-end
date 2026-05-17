import { Injectable } from '@angular/core';
import { CompanyData } from '../models/company-data.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {
  private storageKey = 'mssarker_company_data';

  private defaultData: CompanyData = {
    company: {
      name: "M/S SARKER",
      tagline: "All Types of Quality Supplier & Contractor",
      slogan: "Energetic · Trustable · Professional",
      founded: "2018",
      location: "Dhaka, Bangladesh",
      phone1: "01922-981504",
      phone2: "01842-701246",
      email: "ms.sarker26@gmail.com",
      address: "House #23-24, Road #01, Block #A, Mirpur-11, Dhaka-1216",
      facebook: "https://web.facebook.com/mssarkerbd",
      youtube: "https://www.youtube.com/@mssaker",
      ceo: "Md. Sultan Sala Uddin Sarker",
      mission: "To deliver world-class lightning protection and electrical safety solutions that protect assets and lives, while promoting sustainable energy through innovative solar and lighting technologies.",
      vision: "To be the most trusted name in electrical engineering safety, recognized for integrating IoT technology with traditional protection systems to create smarter, safer environments.",
    },

    stats: [
      { value: "2018", label: "Founded" },
      { value: "50+", label: "Projects Completed" },
      { value: "7+", label: "Major Clients" },
      { value: "15yr", label: "Product Warranty" },
    ],

    products: [
      {
        id: "ese-lps",
        category: "Lightning Protection & Earthing",
        icon: "⚡",
        name: "ESE Lightning Protection System",
        description: "Advanced Early Streamer Emission (ESE) air terminals offering a larger radius of protection compared to traditional rods, ideal for large campuses and factories.",
        brands: ["LPS France (Made in France)", "FOREND (Made in Turkey)"],
        specs: [
          "Protection Radius: 79–107 Meters",
          "Triggering Advance: 60 μs",
          "Standard: NFC-17-102, IEC 62305",
          "Installation Height: 5–6 Meters",
          "Warranty: 2 Years (Lifetime: 25 Years)",
        ],
        tags: ["ESE", "Lightning Rod", "Non-IoT", "IoT Available"],
      },
      {
        id: "iot-devices",
        category: "Lightning Protection & Earthing",
        icon: "📡",
        name: "IoT Smart Monitoring Devices",
        description: "Smart monitoring systems tracking lightning strikes and protection system health in real-time via the LPS Manager mobile application.",
        brands: ["LPS France Contact@ir MD"],
        specs: [
          "GSM e-SIM, GPS System",
          "Real-time Lightning Intensity Level",
          "System Temperature & Data History",
          "Solar Cell Built-in Power",
          "LPS France App (Android/iOS)",
          "Weight: 0.204 kg",
        ],
        tags: ["IoT", "Real-time", "GPS", "Solar Powered"],
      },
      {
        id: "chemical-earthing",
        category: "Lightning Protection & Earthing",
        icon: "🔌",
        name: "Chemical Earthing System",
        description: "Maintenance-free chemical earthing electrodes providing low-resistance grounding essential for sensitive electrical equipment stability.",
        brands: ["Wallis (Origin: UK)"],
        specs: [
          "Chemical Earth Electrode",
          "Earth Enhancement Compound",
          "GI / Copper Earth Rod",
          "Earth Resistance Testing",
          "Low Resistance | Long Life | Maintenance Free",
        ],
        tags: ["Earthing", "Maintenance-Free", "Low Resistance"],
      },
      {
        id: "solar-systems",
        category: "Renewable Energy & Lighting",
        icon: "☀️",
        name: "Solar PV Systems",
        description: "Complete solar PV solutions for residential and industrial applications, reducing carbon footprints and energy costs.",
        brands: ["Longi Solar", "Jinko Solar", "Growatt Inverter", "Huawei Inverter", "GOODWE Inverter", "Solis Inverter"],
        specs: [
          "On-Grid | Off-Grid | Hybrid Systems",
          "4KW to 100KW+ Capacity",
          "Solar Panel + Inverter + Battery",
          "Lithium & Lead-Acid Battery Options",
          "Charge Controller Included",
        ],
        tags: ["Solar", "On-Grid", "Off-Grid", "Hybrid"],
      },
      {
        id: "solar-inverter",
        category: "Renewable Energy & Lighting",
        icon: "🔋",
        name: "Solar Inverters with UPS mode",
        description: "Solar Inverters with UPS mode supporting multiple battery types.",
        brands: ["GOOTU Inverter", "Growatt Inverter", "GOODWE Inverter", "Solis Inverter", "Huawei Inverter"],
        specs: [
          "On-Grid | Off-Grid | Hybrid Systems",
          "4KW to 100KW+ Capacity",
          "Solar Panel + Inverter + Battery",
          "Lithium & Lead-Acid Battery Options",
          "Charge Controller Included",
          "Compatible: Lead Acid, Tall-Tubular, Lithium",
          "5 Year Warranty",
        ],
        tags: ["Inverter", "Hybrid", "UPS", "IPS"],
      },
      {
        id: "solar-street-lights",
        category: "Renewable Energy & Lighting",
        icon: "💡",
        name: "Solar Street Lights",
        description: "Energy-efficient standalone street lighting for municipalities, private compounds, refugee camps, farms, and areas prone to power outages.",
        brands: ["AC Street Light", "Solar Street Light", "Philips Motion Sensor"],
        specs: [
          "AC & Solar-Powered Options",
          "Motion Sensor Available",
          "Suitable for Outdoor/Perimeter",
          "Refugee Camp & Farm Applications",
          "Cargo Terminal & Warehouse Use",
        ],
        tags: ["Street Light", "Solar", "Motion Sensor", "AC"],
      },
      {
        id: "spd",
        category: "Circuit Protection & Safety",
        icon: "🛡️",
        name: "Surge Protection Devices (SPD)",
        description: "Both AC and DC SPDs protecting sensitive electronics from voltage spikes and surges across industrial and commercial installations.",
        brands: ["Phoenix 50KA (Germany)", "Chint 40KA", "Corseener 40KA", "ABB 20KA/50KA/80KA (France)"],
        specs: [
          "AC & DC SPD Available",
          "20KA to 80KA Rating",
          "International Brand Quality",
          "Authorized Supplier for Corseener",
          "German, French & Chinese Origins",
        ],
        tags: ["SPD", "Surge Protection", "AC", "DC"],
      },
      {
        id: "circuit-breakers",
        category: "Circuit Protection & Safety",
        icon: "⚙️",
        name: "Circuit Breakers & Industrial Solutions",
        description: "High-performance AC & DC Circuit Breakers (MCB, MCCB) for reliable fault protection, power distribution, UPS, VFD sales and service.",
        brands: ["Multiple International Brands"],
        specs: [
          "MCB & MCCB Types",
          "AC & DC Versions",
          "Online UPS Available",
          "VFD Sales, Service & Support",
          "ICAO-Compliant Aviation Lights",
        ],
        tags: ["MCB", "MCCB", "UPS", "VFD", "Aviation Light"],
      },
    ],

    projects: [
      { id: 1, title: "ESE LPS – Saidpur Cantonment School", type: "Lightning Protection", location: "Nilphamari, Rangpur Division", year: "2025", brand: "LPS France", qty: "2 Sets", coverage: "107m", iot: false },
      { id: 2, title: "ESE LPS – Mymensingh Bypass", type: "Lightning Protection", location: "Mymensingh District", year: "2024", brand: "LPS France", qty: "1 Set", coverage: "107m", iot: false, extra: "60ft GI Pole Tower, RCC Base" },
      { id: 3, title: "ESE LPS – Shalla Upazila", type: "Lightning Protection", location: "Sunamgonj District", year: "2023", brand: "LPS France + FOREND", qty: "3 Sets", coverage: "107m", iot: false },
      { id: 4, title: "ESE IoT LPS – Jagonathpur", type: "Lightning Protection", location: "Sunamgonj District", year: "2023", brand: "LPS France RF IoT", qty: "2 Sets", coverage: "107m", iot: true },
      { id: 5, title: "ESE IoT LPS – Shantigonj", type: "Lightning Protection", location: "Sunamgonj District", year: "2022", brand: "LPS France RF IoT", qty: "2 Sets", coverage: "107m", iot: true },
      { id: 6, title: "FOREND LPS – Multi-District", type: "Lightning Protection", location: "Hobigonj, Netrokona, Jamalpur, Mymensingh, Narail", year: "2022–2023", brand: "FOREND Turkey", qty: "27 Sets", coverage: "107m", iot: false },
      { id: 7, title: "ESE LPS – Saidabad Water Treatment Plant", type: "Lightning Protection", location: "Saidabad, Dhaka", year: "2026", brand: "FOREND Turkey", qty: "1 Set + Aviation Light", coverage: "107m", iot: false },
      { id: 8, title: "Bangladesh Diesel Power Plant", type: "Lightning Protection + IoT", location: "Shimultoli, Gazipur", year: "2023", brand: "LPS France IoT", qty: "1 Set", coverage: "60ft Tower", iot: true },
      { id: 9, title: "25KW On-Grid Rooftop Solar", type: "Solar System", location: "Uttara, Dhaka", year: "2025", brand: "Longi + Growatt", qty: "1 Set", coverage: "25KW", iot: false },
      { id: 10, title: "15KW On-Grid Rooftop Solar – IBM", type: "Solar System", location: "Dhaka District", year: "2025", brand: "Longi Solar", qty: "1 Set", coverage: "15KW", iot: false },
      { id: 11, title: "10KW On-Grid Rooftop Solar", type: "Solar System", location: "Uttara, Dhaka", year: "2024", brand: "Solar PV", qty: "1 Set", coverage: "10KW", iot: false },
      { id: 12, title: "8KW Hybrid Solar System", type: "Solar System", location: "Pequa, Chittagong", year: "2025", brand: "Hybrid Solar", qty: "1 Set", coverage: "8KW", iot: false },
      { id: 13, title: "70KW On-Grid Solar Repair", type: "Solar System", location: "Karanigonj, Dhaka", year: "2024", brand: "Jinko Solar + Huawei", qty: "Repair", coverage: "70KW", iot: false },
      { id: 14, title: "Solar Street Lights – Rohingya Camp", type: "Solar Street Light", location: "Ukhiya, Cox's Bazar", year: "2023", brand: "Solar Street Light", qty: "Multiple", coverage: "Community", iot: false },
      { id: 15, title: "5KW Hybrid Solar System", type: "Solar System", location: "Savar, Dhaka", year: "2026", brand: "Kungf Solar + GOOTU", qty: "1 Set", coverage: "5KW", iot: false },
    ],

    clients: [
      "National Power Pac", "Creative Solar & Technology", "MRS Group", "Tamisna Group",
      "Losung Power Engineering", "Thai Foile & Polymer Industries Ltd (Al-Mostafa Group)", "Earth Moving Solution Ltd."
    ],

    targetMarkets: [
      { icon: "🏭", name: "Industrial Sector", desc: "Textile, RMG factories, chemical plants requiring electrical safety compliance" },
      { icon: "📡", name: "Telecommunications", desc: "Tower companies needing aviation lights and lightning protection" },
      { icon: "🏗️", name: "Real Estate", desc: "High-rise residential and commercial complex developers" },
      { icon: "🏛️", name: "Government & Utilities", desc: "Municipalities for street lighting and power distribution projects" },
    ],

    certifications: [
      "Authorized Local Supplier & Installer – LPS France (Certificate No: ES/LPS/LSI/0012/2025)",
      "Valid until 31 December 2026",
      "Competent to supply, install, test & commission per IEC 62305, NFC 17-102",
      "Issued by Earthmoving Solution Ltd. – Authorized Distributor of LPS France, Bangladesh",
    ],

    advantages: [
      { icon: "🔬", title: "Tech-Integrated Safety", desc: "IoT capabilities integrated into lightning protection systems offering real-time data" },
      { icon: "🔗", title: "One-Stop Solution", desc: "From grounding (earthing) to rooftop protection (ESE) and surge suppression (SPD)" },
      { icon: "⚡", title: "Energetic Support", desc: "Responsive technical team for rapid installation, testing and maintenance" },
      { icon: "🌍", title: "Global Brands", desc: "Sourcing from France, Turkey, Germany, UK ensuring international quality standards" },
    ],
  };

  constructor() { }

  getData(): CompanyData {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : this.defaultData;
  }

  saveData(data: CompanyData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  resetData(): void {
    localStorage.removeItem(this.storageKey);
  }
}
