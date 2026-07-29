import { Injectable } from '@angular/core';
import { CompanyData } from '../models/company-data.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  private storageKey = 'mssarker_company_data';

  private defaultData: CompanyData = {
    company: {
      name: 'M/S SARKER',
      tagline: 'All Types of Quality Supplier & Contractor',
      slogan: 'Energetic · Trustable · Professional',
      founded: '2018',
      location: 'Dhaka, Bangladesh',
      phone1: '01922-981504',
      phone2: '01842-701246',
      email: 'ms.sarker26@gmail.com',
      address: 'House #23-24, Road #01, Block #A, Mirpur-11, Dhaka-1216',
      facebook: 'https://web.facebook.com/mssarkerbd',
      youtube: 'https://www.youtube.com/@mssaker',
      ceo: 'Md. Sultan Sala Uddin Sarker',
      mission:
        'To deliver world-class lightning protection and electrical safety solutions that protect assets and lives, while promoting sustainable energy through innovative solar and lighting technologies.',
      vision:
        'To be the most trusted name in electrical engineering safety, recognized for integrating IoT technology with traditional protection systems to create smarter, safer environments.',
    },

    stats: [
      { value: '2018', label: 'Founded' },
      { value: '50+', label: 'Projects Completed' },
      { value: '7+', label: 'Major Clients' },
      { value: '15yr', label: 'Product Warranty' },
    ],

    products: [
      {
        id: 'ips-power',
        category: 'Power Backup Solutions',
        icon: 'bi-battery-charging',
        imageUrl:
          'https://shop.rangs.com.bd/_next/image?q=75&url=https%3A%2F%2Fecom.rangs.com.bd%2Fstorage%2F11054%2F860X740-01.jpg&w=3840',
        imageSourceUrl:
          'https://shop.rangs.com.bd/products/rangs-ips-600va-rangs-power-battery-100ah-2-fan-2-light',
        name: 'Instant Power Supply (IPS)',
        description:
          'Reliable DSP Sine wave and Square wave IPS systems for continuous power supply during outages.',
        brands: ['Authorized IPS Brands'],
        specs: ['400VA to 3KV (IPS)', 'DSP Sine wave', 'Square wave'],
        tags: ['IPS', 'Power Backup', 'Inverter'],
      },
      {
        id: 'portable-power-station',
        category: 'Power Backup Solutions',
        icon: 'bi-box-seam',
        imageUrl:
          'https://i5.walmartimages.com/seo/Portable-Power-Station-300W-299-5Wh-Battery-Bank-with-120V-Pure-Sine-Wave-AC-Outlet-for-Outdoor-Camping-Hunting-Emergency-Backup-and-CPAP-Machine_b96e2f87-eb14-493d-b2cd-61cdbb2a5c80.0a7e0be3e13b302028adf2992cc759e0.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576',
        imageSourceUrl: 'https://www.walmart.com/c/kp/best-portable-power-station-for-tv',
        name: 'Portable Power Station',
        description:
          'Versatile and portable power solutions for outdoor, emergency, and off-grid use.',
        brands: ['LiFePO4 System'],
        specs: ['Power Range: 300watt to 1200watt', 'LiFePO4 Battery', '12volt System'],
        tags: ['Portable Power', 'LiFePO4', 'Battery'],
      },
      {
        id: 'ese-lps',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-lightning-charge',
        imageUrl:
          'https://static.ticimax.cloud/11643/uploads/urunresimleri/buyuk/tesla-st-e.s.e.-paratoner-5770-0.jpg',
        imageSourceUrl: 'https://www.ampermarket.com.tr/tesla-st--e.s.e.-air-terminal',
        name: 'ESE Lightning Protection System',
        description:
          'Advanced Early Streamer Emission (ESE) air terminals offering a larger radius of protection compared to traditional rods, ideal for large campuses and factories.',
        brands: ['LPS France (Made in France)', 'FOREND (Made in Turkey)'],
        specs: [
          'Protection Radius: 79–107 Meters',
          'Triggering Advance: 60 μs',
          'Standard: NFC-17-102, IEC 62305',
          'Installation Height: 5–6 Meters',
          'Warranty: 2 Years (Lifetime: 25 Years)',
        ],
        tags: ['ESE', 'Lightning Rod', 'Non-IoT', 'IoT Available'],
      },
      {
        id: 'iot-devices',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-broadcast-pin',
        imageUrl: 'https://indelec.com/wp-content/uploads/S60_A_IMGP7498.jpg',
        imageSourceUrl:
          'https://indelec.com/en/product/prevectron-3-s60-connect/',
        name: 'IoT Smart Monitoring Devices',
        description:
          'Smart monitoring systems tracking lightning strikes and protection system health in real-time via the LPS Manager mobile application.',
        brands: ['LPS France Contact@ir MD'],
        specs: [
          'GSM e-SIM, GPS System',
          'Real-time Lightning Intensity Level',
          'System Temperature & Data History',
          'Solar Cell Built-in Power',
          'LPS France App (Android/iOS)',
          'Weight: 0.204 kg',
        ],
        tags: ['IoT', 'Real-time', 'GPS', 'Solar Powered'],
      },
      {
        id: 'chemical-earthing',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-plug',
        imageUrl:
          'https://cpimg.tistatic.com/07925796/b/4/Galvanized-Iron-Chemical-Earthing-Electrode.jpg',
        imageSourceUrl:
          'https://www.tradeindia.com/products/galvanized-iron-chemical-earthing-electrode-c7925796.html',
        name: 'Chemical Earthing System',
        description:
          'Maintenance-free chemical earthing electrodes providing low-resistance grounding essential for sensitive electrical equipment stability.',
        brands: ['Wallis (Origin: UK)'],
        specs: [
          'Chemical Earth Electrode',
          'Earth Enhancement Compound',
          'GI / Copper Earth Rod',
          'Earth Resistance Testing',
          'Low Resistance | Long Life | Maintenance Free',
        ],
        tags: ['Earthing', 'Maintenance-Free', 'Low Resistance'],
      },
      {
        id: 'solar-systems',
        category: 'Renewable Energy & Lighting',
        icon: 'bi-sun',
        imageUrl: 'https://pvdirect.co.za/cdn/shop/products/tileroofquad.jpg?v=1660685847',
        imageSourceUrl: 'https://pvdirect.co.za/products/selfpv-tile-roof-quad',
        name: 'Solar PV Systems',
        description:
          'Complete solar PV solutions for residential and industrial applications, reducing carbon footprints and energy costs.',
        brands: [
          'JA Solar ',
          'Jinko Solar',
          'Longi Solar',
          'Omera Solar',
          'Canadan Solar ',
          'RAC Solar ',
        ],
        specs: ['100Watt -200watt Panel 12volt System', '250watt-720watt Panel 24volt System'],
        tags: ['Solar', 'On-Grid', 'Off-Grid', 'Hybrid'],
      },
      {
        id: 'solar-inverter',
        category: 'Renewable Energy & Lighting',
        icon: 'bi-arrow-left-right',
        imageUrl:
          'https://image.made-in-china.com/202f0j00WRqoBEvdEAuH/Growatt-Inverter-3kw-5kw-10kw-15kw-Solar-on-Grid-Inverter-3-Phase.webp',
        imageSourceUrl:
          'https://sailsolarpv.en.made-in-china.com/product/HmBYcjDlsfpG/China-Growatt-Inverter-3kw-5kw-10kw-15kw-Solar-on-Grid-Inverter-3-Phase.html',
        name: 'Solar Hybrid Inverters',
        description: 'Solar Inverters with UPS mode supporting multiple battery types.',
        brands: [
          'GOOTU Inverter',
          'Growatt Inverter',
          'GOODWE Inverter',
          'Solis Inverter',
          'Huawei Inverter',
        ],
        specs: [
          'On-Grid | Off-Grid | Hybrid Systems',
          '4KW to 100KW+ Capacity',
          'Solar Panel + Inverter + Battery',
          'Lithium & Lead-Acid Battery Options',
          'Charge Controller Included',
          'Compatible: Lead Acid, Tall-Tubular, Lithium',
          '5 Year Warranty',
        ],
        tags: ['Inverter', 'Hybrid', 'UPS', 'IPS'],
      },
      {
        id: 'solar-street-lights',
        category: 'AC Street Light & Solar Street Light & Philips Motion Sensor',
        icon: 'bi-lightbulb',
        imageUrl:
          'https://mobileprokenya.odoo.com/web/image/product.product/732/image_1024/Solar%20Street%20Light?unique=c09e05f',
        imageSourceUrl: 'https://mobileprokenya.odoo.com/shop/solar-street-light-732',
        name: 'Street Lights',
        description:
          'Energy-efficient standalone street lighting for municipalities, private compounds, refugee camps, farms, and areas prone to power outages.',
        brands: ['AMECON', 'FORTUNE', 'PHILIPS'],
        specs: [
          'AC & Solar-Powered Options',
          'Motion Sensor Available',
          'Suitable for Outdoor/Perimeter',
          'Refugee Camp & Farm Applications',
          'Cargo Terminal & Warehouse Use',
        ],
        tags: ['Street Light', 'Solar', 'Motion Sensor', 'AC'],
      },
      {
        id: 'spd',
        category: 'Circuit Protection & Safety',
        icon: 'bi-shield-check',
        imageUrl:
          'https://www.leydenindia.com/image/cache/catalog/A%20SPD/AC%20SPD/leyden%20spd%20ac%20surge%20protector-550x550w.png',
        imageSourceUrl:
          'https://www.leydenindia.com/leyden-spdac-2p-ac-surge-protective-device-spd-320vac-20ka-in-40ka-imax-up-%E2%89%A4-1-5kv-din-rail-lightning-surge-protector-for-distribution-boards',
        name: 'Surge Protection Devices (SPD)',
        description:
          'Both AC and DC SPDs protecting sensitive electronics from voltage spikes and surges across industrial and commercial installations.',
        brands: [
          'Phoenix 50KA (Germany)',
          'Chint 40KA',
          'Corseener 40KA',
          'ABB 20KA/50KA/80KA (France)',
        ],
        specs: [
          'AC & DC SPD Available',
          '20KA to 80KA Rating',
          'International Brand Quality',
          'Authorized Supplier for Corseener',
          'German, French & Chinese Origins',
        ],
        tags: ['SPD', 'Surge Protection', 'AC', 'DC'],
      },
      {
        id: 'circuit-breakers',
        category: 'Circuit Protection & Safety',
        icon: 'bi-sliders',
        imageUrl:
          'https://image.made-in-china.com/202f0j00BQtMFykICfbl/OEM-50A-Fixed-Type-Circuit-Breaker-Cm1-Moulded-Case-Circuit-Breaker-MCCB.webp',
        imageSourceUrl:
          'https://dadaele.en.made-in-china.com/product/mfRpWLubRlVA/China-OEM-50A-Fixed-Type-Circuit-Breaker-Cm1-Moulded-Case-Circuit-Breaker-MCCB.html',
        name: 'Circuit Breakers & Industrial Solutions',
        description:
          'High-performance AC & DC Circuit Breakers (MCB, MCCB) for reliable fault protection, power distribution, UPS, VFD sales and service.',
        brands: ['Multiple International Brands'],
        specs: [
          'MCB & MCCB Types',
          'AC & DC Versions',
          'Online UPS Available',
          'VFD Sales, Service & Support',
          'ICAO-Compliant Aviation Lights',
        ],
        tags: ['MCB', 'MCCB', 'UPS', 'VFD', 'Aviation Light'],
      },
    ],

    projects: [
      {
        id: 1,
        title: 'ESE LPS – Saidpur Cantonment School',
        type: 'Lightning Protection',
        location: 'Nilphamari, Rangpur Division',
        year: '2025',
        brand: 'LPS France',
        qty: '2 Sets',
        coverage: '107m',
        iot: false,
      },
      {
        id: 2,
        title: 'ESE LPS – Mymensingh Bypass',
        type: 'Lightning Protection',
        location: 'Mymensingh District',
        year: '2024',
        brand: 'LPS France',
        qty: '1 Set',
        coverage: '107m',
        iot: false,
        extra: '60ft GI Pole Tower, RCC Base',
      },
      {
        id: 3,
        title: 'ESE LPS – Shalla Upazila',
        type: 'Lightning Protection',
        location: 'Sunamgonj District',
        year: '2023',
        brand: 'LPS France + FOREND',
        qty: '3 Sets',
        coverage: '107m',
        iot: false,
      },
      {
        id: 4,
        title: 'ESE IoT LPS – Jagonathpur',
        type: 'Lightning Protection',
        location: 'Sunamgonj District',
        year: '2023',
        brand: 'LPS France RF IoT',
        qty: '2 Sets',
        coverage: '107m',
        iot: true,
      },
      {
        id: 5,
        title: 'ESE IoT LPS – Shantigonj',
        type: 'Lightning Protection',
        location: 'Sunamgonj District',
        year: '2022',
        brand: 'LPS France RF IoT',
        qty: '2 Sets',
        coverage: '107m',
        iot: true,
      },
      {
        id: 6,
        title: 'FOREND LPS – Multi-District',
        type: 'Lightning Protection',
        location: 'Hobigonj, Netrokona, Jamalpur, Mymensingh, Narail',
        year: '2022–2023',
        brand: 'FOREND Turkey',
        qty: '27 Sets',
        coverage: '107m',
        iot: false,
      },
      {
        id: 7,
        title: 'ESE LPS – Saidabad Water Treatment Plant',
        type: 'Lightning Protection',
        location: 'Saidabad, Dhaka',
        year: '2026',
        brand: 'FOREND Turkey',
        qty: '1 Set + Aviation Light',
        coverage: '107m',
        iot: false,
      },
      {
        id: 8,
        title: 'Bangladesh Diesel Power Plant',
        type: 'Lightning Protection + IoT',
        location: 'Shimultoli, Gazipur',
        year: '2023',
        brand: 'LPS France IoT',
        qty: '1 Set',
        coverage: '60ft Tower',
        iot: true,
      },
      {
        id: 9,
        title: '25KW On-Grid Rooftop Solar',
        type: 'Solar System',
        location: 'Uttara, Dhaka',
        year: '2025',
        brand: 'Longi + Growatt',
        qty: '1 Set',
        coverage: '25KW',
        iot: false,
      },
      {
        id: 10,
        title: '15KW On-Grid Rooftop Solar – IBM',
        type: 'Solar System',
        location: 'Dhaka District',
        year: '2025',
        brand: 'Longi Solar',
        qty: '1 Set',
        coverage: '15KW',
        iot: false,
      },
      {
        id: 11,
        title: '10KW On-Grid Rooftop Solar',
        type: 'Solar System',
        location: 'Uttara, Dhaka',
        year: '2024',
        brand: 'Solar PV',
        qty: '1 Set',
        coverage: '10KW',
        iot: false,
      },
      {
        id: 12,
        title: '8KW Hybrid Solar System',
        type: 'Solar System',
        location: 'Pequa, Chittagong',
        year: '2025',
        brand: 'Hybrid Solar',
        qty: '1 Set',
        coverage: '8KW',
        iot: false,
      },
      {
        id: 13,
        title: '70KW On-Grid Solar Repair',
        type: 'Solar System',
        location: 'Karanigonj, Dhaka',
        year: '2024',
        brand: 'Jinko Solar + Huawei',
        qty: 'Repair',
        coverage: '70KW',
        iot: false,
      },
      {
        id: 14,
        title: 'Street Lights – Rohingya Camp',
        type: 'Solar Street Light',
        location: "Ukhiya, Cox's Bazar",
        year: '2023',
        brand: 'Solar Street Light',
        qty: 'Multiple',
        coverage: 'Community',
        iot: false,
      },
      {
        id: 15,
        title: '5KW Hybrid Solar System',
        type: 'Solar System',
        location: 'Savar, Dhaka',
        year: '2026',
        brand: 'Kungf Solar + GOOTU',
        qty: '1 Set',
        coverage: '5KW',
        iot: false,
      },
    ],

    clients: [
      {
        name: 'National Power Pac',
        website: 'https://nationalpowerpac.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=nationalpowerpac.com&sz=128',
      },
      {
        name: 'Creative Solar & Technology',
        website: 'https://creativesolarbd.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=creativesolarbd.com&sz=128',
      },
      {
        name: 'MRS Group',
        website: 'https://www.mrsgroupbd.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=mrsgroupbd.com&sz=128',
      },
      {
        name: 'Tamishna Group',
        website: 'https://www.tamishna.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=tamishna.com&sz=128',
      },
      {
        name: 'Losung Power Engineering',
        website: 'https://www.losungpower.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=losungpower.com&sz=128',
      },
      {
        name: 'Thai Foils & Polymer Industries Ltd (Al-Mostafa Group)',
        website: 'https://thaifoilsandpolymers.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=thaifoilsandpolymers.com&sz=128',
      },
      {
        name: 'Earthmoving Solution Ltd.',
        website: 'https://earthmoving.com.bd/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=earthmoving.com.bd&sz=128',
      },
    ],

    targetMarkets: [
      {
        icon: 'bi-buildings',
        name: 'Industrial Sector',
        desc: 'Textile, RMG factories, chemical plants requiring electrical safety compliance',
      },
      {
        icon: 'bi-broadcast-pin',
        name: 'Telecommunications',
        desc: 'Tower companies needing aviation lights and lightning protection',
      },
      {
        icon: 'bi-building',
        name: 'Real Estate',
        desc: 'High-rise residential and commercial complex developers',
      },
      {
        icon: 'bi-bank',
        name: 'Government & Utilities',
        desc: 'Municipalities for street lighting and power distribution projects',
      },
    ],

    certifications: [
      'Authorized Local Supplier & Installer – LPS France (Certificate No: ES/LPS/LSI/0012/2025)',
      'Valid until 31 December 2026',
      'Competent to supply, install, test & commission per IEC 62305, NFC 17-102',
      'Issued by Earthmoving Solution Ltd. – Authorized Distributor of LPS France, Bangladesh',
    ],

    advantages: [
      {
        icon: 'bi-cpu',
        title: 'Tech-Integrated Safety',
        desc: 'IoT capabilities integrated into lightning protection systems offering real-time data',
      },
      {
        icon: 'bi-diagram-3',
        title: 'One-Stop Solution',
        desc: 'From grounding (earthing) to rooftop protection (ESE) and surge suppression (SPD)',
      },
      {
        icon: 'bi-headset',
        title: 'Energetic Support',
        desc: 'Responsive technical team for rapid installation, testing and maintenance',
      },
      {
        icon: 'bi-globe2',
        title: 'Global Brands',
        desc: 'Sourcing from France, Turkey, Germany, UK ensuring international quality standards',
      },
    ],
  };

  constructor() {}

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
