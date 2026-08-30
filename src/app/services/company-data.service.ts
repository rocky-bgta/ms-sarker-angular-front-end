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
      phone2: '01717-701246',
      email: 'ms.sarker246@gmail.com',
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
        imageUrl: '/images/products/portable-power-station.png',
        imageSourceUrl: '',
        name: 'Portable Power Station',
        description:
          'Versatile and portable power solutions for outdoor, emergency, and off-grid use. UPS function, auto backup, and solar-ready with quiet indoor operation.',
        brands: ['LiFePO4 System'],
        specs: [
          'Power Range: 300W to 1200W',
          'LiFePO4 Battery (~1KWh)',
          '300W MPPT Solar Input',
          'UPS Function & Auto Backup',
          'Quiet Indoor Use (<55dB)',
          'Compact & Portable: 11kg',
        ],
        tags: ['Portable Power', 'LiFePO4', 'Battery', 'UPS'],
      },
      {
        id: 'ese-lps',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-lightning-charge',
        imageUrl: '/images/products/ese-lps-paraton60.png',
        images: [
          '/images/products/ese-lps-paraton60.png',
          '/images/products/ese-lps-paraton60-radius.png',
        ],
        imageSourceUrl: '',
        name: 'ESE Lightning Protection System',
        description:
          'Early Streamer Emitter Lightning Rod Paraton@ir® 60 – ESE lightning rod with 60μs triggering advance. Optional communication system: Contact@ir System. Available in two body variants.',
        brands: ['LPS France – Paraton@ir® 60 (Made in France)', 'FOREND – PETEX-L (Made in Turkey)'],
        specs: [
          'Ref. 10004/P60NL',
          'Triggering Advance: 60 μs',
          'Body Variant 1: Aluminum alloy and patented polymer materials',
          'Body Variant 2: Stainless steel and patented polymer materials',
          'Dimensions: 200×100 mm',
          'Weight: 1.873 kg / 3.90 kg (stainless steel)',
          'Axis: M 20 | Color: Natural',
          'Option: Contact@ir System (IoT communication)',
          'Standard: NFC 17-102, IEC 62305',
        ],
        tags: ['ESE', 'Lightning Rod', 'Non-IoT', 'IoT Available'],
      },
      {
        id: 'petex-l',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-lightning-charge',
        imageUrl: '/images/products/ese-lps-petex-l.png',
        images: [
          '/images/products/ese-lps-petex-l.png',
          '/images/products/ese-lps-petex-l-tech-info.png',
          '/images/products/ese-lps-petex-l-radius.png',
        ],
        imageSourceUrl: '',
        name: 'PETEX-L ESE Lightning Rod',
        description:
          'FOREND PETEX-L – Early Streamer Emission lightning rod made of 316L stainless steel with 60μs emission time and 107m protection radius at Level IV. Complies with NFC 17.102:2011 and UNE 21.186:2011 standards.',
        brands: ['FOREND (Made in Turkey)'],
        specs: [
          '— EFFICIENCY —',
          'Emission Time: 60 μs',
          'Protection Radius (5m elevation): 107 m (Level 4)',
          'Test Point: Suitable with IoT and wired tester',
          'Lightning Current Withstanding: 150 kA (10/350μs)',
          '— MECHANICAL STRUCTURE —',
          'Material: 316L grade stainless steel | Protection Standard: IP67',
          'Weight: 2.50 Kg',
          'Conductive Rod: Solid 30mm with 700mm² section',
          'Temperature Range: -40°C ~ +80°C',
          'Mounting Size: 2\'\' threaded adaptor',
          'Flat Conductor Range: 30×2 mm to 40×5 mm',
          'Round Conductor Range: 2×50 mm² to 2×120 mm²',
          'Wind Speed: Up to 150mph (240kph)',
        ],
        tags: ['ESE', 'PETEX-L', 'FOREND', 'Turkey', 'IP67'],
      },
      {
        id: 'iot-devices',
        category: 'Lightning Protection & Earthing',
        icon: 'bi-broadcast-pin',
        imageUrl: '/images/products/iot-contact-air-md-device.png',
        images: [
          '/images/products/iot-contact-air-md-device.png',
          '/images/products/iot-contact-air-md.png',
          '/images/products/iot-contact-air-system.png',
        ],
        imageSourceUrl: '',
        name: 'IoT Smart Monitoring Devices',
        description:
          'Contact@ir® MD (Ref. 50011/ECAMD) – Transmitter using the local mobile network (IoT) for remote monitoring of lightning protection systems. Compatible with products in the Contact@ir Ready range.',
        brands: ['LPS France – Contact@ir® MD'],
        specs: [
          'Ref. 50011/ECAMD',
          'Transmitter using the local mobile network (IoT)',
          'Checking the product\'s operating status',
          'Real-time lightning alert',
          'Lightning strike intensity level',
          'System temperature',
          'Historical data',
          'Receiving data on the LPS Manager application',
          'Compatible with products in the Contact@ir Ready range',
          'Case dimensions: 109×65×43 mm',
          'Antenna dimensions: 16×200 mm',
          'Weight: 0.204 kg',
          'Compliance with NFC 17-102:2011 and IEC 62305 standards and equivalent country standards',
        ],
        tags: ['IoT', 'Real-time', '4G eSIM', 'Solar Powered', 'LPS France'],
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
        imageUrl: '/images/products/solar-panel-ja-630w.jpeg',
        images: [
          '/images/products/solar-panel-ja-630w.jpeg',
          '/images/products/solar-panel-ja-datasheet1.jpeg',
          '/images/products/solar-panel-jinko-720w.png',
          '/images/products/solar-panel-jinko-datasheet.png',
          '/images/products/solar-panel-jinko-specs.png',
        ],
        imageSourceUrl: '',
        name: 'Solar PV Systems',
        description:
          'Complete solar PV solutions for residential and industrial applications. Supply and installation of on-grid, off-grid, and hybrid systems using high-efficiency bifacial panels.',
        brands: [
          'Jinko Solar – 66HL5-BDV 710–735W N-Type Bifacial',
          'JA Solar',
          'Longi Solar',
          'Omera Solar',
          'Canadian Solar',
          'RAC Solar',
        ],
        specs: [
          '100W–200W Panel (12V System)',
          '250W–720W Panel (24V System)',
          'N-Type Bifacial Dual Glass Technology',
          'On-Grid, Off-Grid & Hybrid Configurations',
          '5–10KW Energy Storage Systems Available',
          '12-Year Product Warranty | 30-Year Performance',
        ],
        tags: ['Solar', 'On-Grid', 'Off-Grid', 'Hybrid', 'Bifacial'],
      },
      {
        id: 'solar-inverter',
        category: 'Renewable Energy & Lighting',
        icon: 'bi-arrow-left-right',
        imageUrl: '/images/products/solar-inverter-gootu.png',
        images: [
          '/images/products/solar-inverter-gootu.png',
          '/images/products/solar-system-complete.png',
          '/images/products/solar-inverter-solis.png',
          '/images/products/solar-inverter-goodwe-red.png',
          '/images/products/solar-inverter-growatt.png',
          '/images/products/solar-inverter-goodwe.png',
          '/images/products/solar-battery-life.png',
        ],
        imageSourceUrl: '',
        name: 'Solar Hybrid Inverters',
        description:
          'Solar Hybrid Inverters with UPS mode supporting multiple battery types. Complete system packages including panels, inverter, and LiFePO4 / Lithium battery storage.',
        brands: [
          'GOODWE Inverter',
          'Solis Inverter',
          'GOOTU Inverter (24V 5KW)',
          'Growatt Inverter',
          'Huawei Inverter',
        ],
        specs: [
          'On-Grid | Off-Grid | Hybrid Systems',
          '4KW to 100KW+ Capacity',
          'LiFePO4 & Lithium Battery Compatible',
          'Compatible: Lead Acid, Tall-Tubular, Lithium',
          'Charge Controller Included',
          '5 Year Warranty',
        ],
        tags: ['Inverter', 'Hybrid', 'UPS', 'LiFePO4'],
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
        id: 'solar-irrigation',
        category: 'Renewable Energy & Water',
        icon: 'bi-droplet-half',
        imageUrl: '/images/products/solar-irrigation-system.png',
        images: ['/images/products/solar-irrigation-system.png'],
        imageSourceUrl: '',
        name: 'Solar Irrigation System',
        description:
          'A solar irrigation system uses photovoltaic panels to generate electricity that powers water pumps, delivering water from wells, rivers, or reservoirs to crops without diesel or grid electricity. It typically includes solar panels, a pump (surface or submersible), a controller, optional batteries, and an irrigation network such as drip or sprinklers.',
        brands: ['Willo (Germany)', 'LEO (China)', 'Sterling (India)'],
        specs: [
          'Solar panels – Generate DC electricity',
          'Pump (DC or AC) – Surface or submersible pump',
          'Irrigation network – Drip lines, sprinklers, or pivots',
          'Storage tank/reservoir – Stores water pumped during sunny hours',
          'Submersible Pump, VPD',
        ],
        sectionOrder: ['description', 'brands', 'specs'] as (
          | 'description'
          | 'brands'
          | 'specs'
        )[],
        tags: ['Solar', 'Irrigation', 'Water Pump', 'Agriculture'],
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
