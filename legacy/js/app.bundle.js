// ═══════════════════════════════════════════════════════
// MS SARKER - Central Data Store
// ═══════════════════════════════════════════════════════
window.CompanyData = {
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
      brands: ["Longi Solar", "Jinko Solar", "Growatt Inverter", "Huawei Inverter"],
      specs: [
        "On-Grid | Off-Grid | Hybrid Systems",
        "5KW to 70KW+ Capacity",
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
      name: "Solar Hybrid Inverter",
      description: "1000VA to 11KW Hybrid Solar Inverters with IPS+UPS mode supporting multiple battery types.",
      brands: ["GOOTU Inverter", "SARKER Inverter"],
      specs: [
        "800W & 1200W Models Available",
        "12V System Voltage",
        "IPS + UPS Mode",
        "Compatible: Lead Acid, Tall-Tubular, Lithium",
        "2 Year Warranty",
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

// ═══════════════════════════════════════════════════════
// Router + Storage services
// ═══════════════════════════════════════════════════════
class Router {
  constructor() { this.routes = {}; this.currentRoute = null; }
  register(path, handler) { this.routes[path] = handler; }
  navigate(path, params = {}) {
    this.currentRoute = path;
    history.pushState({ path, params }, '', '#' + path);
    const handler = this.routes[path];
    if (handler) handler(params); else this.navigate('/');
    document.querySelectorAll('[data-route]').forEach(el =>
      el.classList.toggle('active', el.dataset.route === path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  init() {
    window.addEventListener('popstate', e => { if (e.state?.path) this.navigate(e.state.path, e.state.params); });
    const hash = window.location.hash.replace('#', '') || '/';
    this.navigate(hash);
  }
}
window.router = new Router();
window.StorageService = {
  save(key, data) { localStorage.setItem('mssarker_' + key, JSON.stringify(data)); },
  load(key, fallback = null) {
    const s = localStorage.getItem('mssarker_' + key);
    return s ? JSON.parse(s) : fallback;
  },
  clear(key) { localStorage.removeItem('mssarker_' + key); },
};

// ═══════════════════════════════════════════════════════
// CSRF Token Service
// ═══════════════════════════════════════════════════════
const CSRF_KEY     = 'mssarker_csrf_token';
const CSRF_TS_KEY  = 'mssarker_csrf_ts';
const TOKEN_TTL_MS = 30 * 60 * 1000;
const TOKEN_LENGTH = 32;
function generateToken() {
  const arr = new Uint8Array(TOKEN_LENGTH);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}
window.CSRFService = {
  init() {
    const existing = sessionStorage.getItem(CSRF_KEY);
    const issuedAt = parseInt(sessionStorage.getItem(CSRF_TS_KEY) || '0', 10);
    const expired  = Date.now() - issuedAt > TOKEN_TTL_MS;
    if (!existing || expired) {
      const token = generateToken();
      sessionStorage.setItem(CSRF_KEY, token);
      sessionStorage.setItem(CSRF_TS_KEY, Date.now().toString());
      return token;
    }
    return existing;
  },
  get() { return sessionStorage.getItem(CSRF_KEY) || this.init(); },
  rotate() {
    const token = generateToken();
    sessionStorage.setItem(CSRF_KEY, token);
    sessionStorage.setItem(CSRF_TS_KEY, Date.now().toString());
    return token;
  },
  validate(submitted) {
    const stored   = sessionStorage.getItem(CSRF_KEY);
    const issuedAt = parseInt(sessionStorage.getItem(CSRF_TS_KEY) || '0', 10);
    if (!stored || !submitted) return false;
    if (Date.now() - issuedAt > TOKEN_TTL_MS) { this.init(); return false; }
    if (stored.length !== submitted.length) return false;
    let diff = 0;
    for (let i = 0; i < stored.length; i++) diff |= stored.charCodeAt(i) ^ submitted.charCodeAt(i);
    return diff === 0;
  },
  hiddenInput() { return `<input type="hidden" name="_csrf" id="csrfToken" value="${this.get()}">`; },
};
CSRFService.init();

// ═══════════════════════════════════════════════════════
// Client-Side Validation Library
// ═══════════════════════════════════════════════════════
window.Rules = {
  required:    v => v.trim().length > 0,
  minLen:      n => v => v.trim().length >= n,
  maxLen:      n => v => v.trim().length <= n,
  email:       v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone:       v => /^[0-9+\-\s()]{7,15}$/.test(v.trim()),
  bdPhone:     v => /^(?:\+?88)?01[3-9]\d{8}$/.test(v.replace(/\s/g,'')),
  noScript:    v => !/<script[\s\S]*?>[\s\S]*?<\/script>/gi.test(v),
  noHtml:      v => !/<[^>]+>/g.test(v),
  alphaSpace:  v => /^[a-zA-Z\s\u0980-\u09FF\-'.]+$/.test(v.trim()),
  positiveNum: v => /^\d+(\.\d+)?$/.test(v.trim()) && Number(v) > 0,
};
window.Messages = {
  required:    'This field is required.',
  minLen:      n => `Must be at least ${n} characters.`,
  maxLen:      n => `Must be no more than ${n} characters.`,
  email:       'Enter a valid email address.',
  bdPhone:     'Enter a valid Bangladeshi phone number (e.g. 01XXXXXXXXX).',
  noHtml:      'HTML tags are not allowed.',
};
window.validateField = function(value, rules) {
  for (const { rule, message } of rules) {
    if (!rule(value)) return { valid: false, error: message };
  }
  return { valid: true, error: null };
};
window.showFieldError = function(fieldId, error) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  const fb = el.parentElement.querySelector('.invalid-feedback')
          || el.closest('.mb-3')?.querySelector('.invalid-feedback');
  if (error) {
    el.classList.add('is-invalid'); el.classList.remove('is-valid');
    if (fb) fb.textContent = error;
  } else {
    el.classList.remove('is-invalid'); el.classList.add('is-valid');
    if (fb) fb.textContent = '';
  }
};
window.clearFormErrors = function(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.querySelectorAll('.is-invalid,.is-valid').forEach(el =>
    el.classList.remove('is-invalid','is-valid'));
  form.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
};
window.attachLiveValidation = function(schema) {
  schema.forEach(({ fieldId, rules }) => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    const run = () => {
      const res = validateField(el.value, rules);
      showFieldError(fieldId, res.error);
      return res.valid;
    };
    el.addEventListener('blur', run);
    el.addEventListener('input', () => {
      if (el.classList.contains('is-invalid') || el.classList.contains('is-valid')) run();
    });
  });
};
window.validateForm = function(schema) {
  let ok = true;
  schema.forEach(({ fieldId, rules }) => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    const res = validateField(el.value, rules);
    showFieldError(fieldId, res.error);
    if (!res.valid) ok = false;
  });
  return ok;
};

// ═══════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════
window.NavbarComponent = function(data) {
  const d = data || {};
  return `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-warning border-opacity-25 fixed-top shadow" id="mainNav">
    <div class="container-xl">
      <a class="navbar-brand d-flex flex-column lh-1 py-1" href="#" onclick="navigateTo('/')">
        <span class="fw-bold text-warning" style="font-size:1.5rem;letter-spacing:3px;font-family:'Oswald',sans-serif;">M/S SARKER</span>
        <small class="text-secondary" style="font-size:0.6rem;letter-spacing:2px;text-transform:uppercase;">Quality Supplier &amp; Contractor</small>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1">
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/" onclick="navigateTo('/')">Home</a></li>
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/about" onclick="navigateTo('/about')">About</a></li>
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/products" onclick="navigateTo('/products')">Products</a></li>
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/projects" onclick="navigateTo('/projects')">Projects</a></li>
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/clients" onclick="navigateTo('/clients')">Clients</a></li>
          <li class="nav-item"><a class="nav-link px-3 rounded" data-route="/contact" onclick="navigateTo('/contact')">Contact</a></li>
          <li class="nav-item ms-lg-2">
            <a class="nav-link btn btn-outline-warning btn-sm px-3 py-2 text-warning" data-route="/admin" onclick="navigateTo('/admin')">
              <i class="bi bi-gear-fill me-1"></i>Admin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};
window.initNavbar = function() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('shadow-lg');
      nav.style.backdropFilter = 'blur(12px)';
    } else {
      nav.classList.remove('shadow-lg');
    }
  });
};

window.HomePage = function(d) {
  return `
  <section class="hero-section d-flex align-items-center position-relative overflow-hidden" style="min-height:100vh;background:linear-gradient(135deg,#0d1117 0%,#161b22 60%,#1a1f2e 100%);">
    <div class="hero-grid-overlay position-absolute inset-0"></div>
    <div class="container-xl position-relative" style="z-index:2">
      <div class="row justify-content-center text-center">
        <div class="col-lg-9 animate__animated animate__fadeInUp">
          <span class="d-inline-block px-3 py-2 mb-4 rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:3px;">EST. ${d.company.founded} &nbsp;·&nbsp; DHAKA, BANGLADESH</span>
          <h1 class="display-1 fw-bold text-white mb-0" style="font-family:'Oswald',sans-serif;letter-spacing:6px;line-height:1;">M/S <span class="text-warning">SARKER</span></h1>
          <p class="lead text-secondary mt-3 mb-2" style="letter-spacing:2px;">${d.company.tagline}</p>
          <p class="text-warning mb-5" style="letter-spacing:3px;font-size:0.85rem;">${d.company.slogan}</p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <button class="btn btn-warning btn-lg px-5 fw-bold" onclick="navigateTo('/products')"><i class="bi bi-lightning-fill me-2"></i>Explore Products</button>
            <button class="btn btn-outline-light btn-lg px-5" onclick="navigateTo('/contact')"><i class="bi bi-envelope me-2"></i>Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-0 bg-warning">
    <div class="container-xl">
      <div class="row g-0 text-center">
        ${d.stats.map((s,i) => `<div class="col-6 col-md-3 py-4 ${i < d.stats.length-1 ? 'border-end border-dark border-opacity-25' : ''}"><div class="display-5 fw-bold text-dark" style="font-family:'Oswald',sans-serif;">${s.value}</div><div class="text-dark text-opacity-75 small fw-semibold" style="letter-spacing:2px;">${s.label.toUpperCase()}</div></div>`).join('')}
      </div>
    </div>
  </section>
  <section class="py-5 bg-dark text-white" style="padding:80px 0!important">
    <div class="container-xl">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">WHO WE ARE</span>
          <h2 class="display-5 fw-bold mb-4" style="font-family:'Oswald',sans-serif;">Total Safety &amp; <span class="text-warning">Energy Solutions</span></h2>
          <p class="text-secondary lh-lg mb-3">MS SARKER is a dynamic engineering and technology firm specializing in advanced electrical safety, lightning protection, and renewable energy solutions since ${d.company.founded}.</p>
          <button class="btn btn-warning fw-bold px-4" onclick="navigateTo('/about')">Learn More <i class="bi bi-arrow-right ms-2"></i></button>
        </div>
        <div class="col-lg-6">
          <div class="row g-3">
            ${[{icon:'bi-lightning-fill',label:'Lightning Protection',sub:'ESE Technology'},{icon:'bi-sun-fill',label:'Solar Energy',sub:'5KW – 70KW+'},{icon:'bi-shield-fill-check',label:'Surge Protection',sub:'SPD Systems'},{icon:'bi-wifi',label:'IoT Monitoring',sub:'Real-time Data'}].map(c => `<div class="col-6"><div class="card bg-dark border border-warning border-opacity-25 text-center p-4 h-100 card-hover"><i class="bi ${c.icon} text-warning mb-3" style="font-size:2rem;"></i><div class="fw-bold text-white mb-1">${c.label}</div><small class="text-warning">${c.sub}</small></div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`;
};

window.AboutPage = function(d) {
  return `
  <div class="page-hero-bs"><div class="container-xl py-5"><span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">EST. ${d.company.founded}</span><h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">About <span class="text-warning">M/S SARKER</span></h1><p class="text-secondary lead">Engineering safety and sustainable energy solutions since ${d.company.founded}</p></div></div>
  <section class="py-5 bg-dark text-white"><div class="container-xl"><div class="row g-5 align-items-start"><div class="col-lg-7"><h2 class="fw-bold mb-4" style="font-family:'Oswald',sans-serif;">Our Story</h2><p class="text-secondary lh-lg mb-3">Founded in ${d.company.founded} in Nawabgonj Upazila, Dinajpur District, MS SARKER has grown into a premier solution provider combining technical expertise with high-quality global sourcing.</p><p class="text-secondary lh-lg mb-3">Headquartered at Mirpur-11, Dhaka, we serve industrial, commercial, and residential sectors across Bangladesh — protecting critical infrastructure from high-rise buildings to telecommunication towers.</p><p class="text-secondary lh-lg">Our service philosophy: <strong class="text-warning">"Energetic, Trustable, Professional"</strong></p></div><div class="col-lg-5">${[['Founded','2018 · Nawabgonj, Dinajpur'],['CEO',d.company.ceo],['Headquarters',d.company.address],['Core Focus','Electrical Safety, Lightning Protection, Renewable Energy']].map(([k,v])=>`<div class="card bg-dark border border-secondary border-opacity-25 mb-3"><div class="card-body px-4 py-3"><div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${k.toUpperCase()}</div><div class="fw-semibold text-white">${v}</div></div></div>`).join('')}</div></div></div></section>`;
};

window.ProductsPage = function(d) {
  const cats = [...new Set(d.products.map(p=>p.category))];
  return `
  <div class="page-hero-bs"><div class="container-xl py-5"><span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">WHAT WE OFFER</span><h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Our <span class="text-warning">Products</span></h1><p class="text-secondary lead">Comprehensive safety and energy solutions meeting international standards</p></div></div>
  <section class="py-5 bg-dark text-white"><div class="container-xl"><div class="d-flex flex-wrap gap-2 mb-5"><button class="btn btn-warning btn-sm fw-semibold filter-btn" onclick="filterProd('all',this)">All Products</button>${cats.map(c=>`<button class="btn btn-outline-secondary btn-sm filter-btn" onclick="filterProd('${c}',this)">${c}</button>`).join('')}</div><div class="row g-4" id="prodList">${d.products.map(p=>`<div class="col-12 prod-item" data-cat="${p.category}"><div class="card bg-dark border border-secondary border-opacity-25 text-white"><div class="card-body p-4 p-lg-5"><div class="d-flex align-items-start gap-4 mb-3"><div class="fs-1 flex-shrink-0">${p.icon}</div><div><div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${p.category.toUpperCase()}</div><h3 class="fw-bold mb-0" style="font-family:'Oswald',sans-serif;">${p.name}</h3></div></div><p class="text-secondary lh-lg border-bottom border-secondary border-opacity-25 pb-4 mb-4">${p.description}</p><div class="row g-4"><div class="col-md-6"><h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Specifications</h6><ul class="list-unstyled mb-0">${p.specs.map(s=>`<li class="text-secondary small mb-2 d-flex gap-2"><i class="bi bi-dash text-warning flex-shrink-0 mt-1"></i><span>${s}</span></li>`).join('')}</ul></div><div class="col-md-6"><h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Brands / Sources</h6><ul class="list-unstyled mb-3">${p.brands.map(b=>`<li class="text-secondary small mb-2"><i class="bi bi-bookmark-fill text-warning me-2"></i>${b}</li>`).join('')}</ul><div class="d-flex flex-wrap gap-1">${p.tags.map(t=>`<span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25">${t}</span>`).join('')}</div></div></div></div></div></div>`).join('')}</div></div></section>`;
};

window.ProjectsPage = function(d) {
  const types=[...new Set(d.projects.map(p=>p.type))];
  return `
  <div class="page-hero-bs"><div class="container-xl py-5"><span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">OUR WORK</span><h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Project <span class="text-warning">Experience</span></h1><p class="text-secondary lead">${d.projects.length}+ completed projects across Bangladesh</p></div></div>
  <section class="py-5 bg-dark text-white"><div class="container-xl"><div class="d-flex flex-wrap gap-2 mb-5"><button class="btn btn-warning btn-sm fw-semibold filter-btn" onclick="filterProj('all',this)">All (${d.projects.length})</button>${types.map(t=>`<button class="btn btn-outline-secondary btn-sm filter-btn" onclick="filterProj('${t}',this)">${t} (${d.projects.filter(p=>p.type===t).length})</button>`).join('')}</div><div class="row g-4" id="projGrid">${d.projects.map(p=>`<div class="col-md-6 col-lg-4 proj-item" data-type="${p.type}"><div class="card bg-dark border border-secondary border-opacity-25 text-white h-100 card-hover"><div class="card-body p-4"><div class="d-flex justify-content-between align-items-center mb-3"><span class="fw-bold text-warning fs-4" style="font-family:'Oswald',sans-serif;">${p.year}</span>${p.iot?'<span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25"><i class="bi bi-wifi me-1"></i>IoT</span>':''}</div><h5 class="fw-bold mb-3 lh-sm">${p.title}</h5><ul class="list-unstyled text-secondary small mb-3"><li class="mb-2"><i class="bi bi-geo-alt text-warning me-2"></i>${p.location}</li><li class="mb-2"><i class="bi bi-tag text-warning me-2"></i>${p.brand}</li><li><i class="bi bi-rulers text-warning me-2"></i>Coverage: ${p.coverage}</li></ul><span class="badge bg-secondary bg-opacity-25 text-secondary border border-secondary border-opacity-25">${p.type}</span></div></div></div>`).join('')}</div></div></section>`;
};

window.ClientsPage = function(d) {
  return `
  <div class="page-hero-bs"><div class="container-xl py-5"><span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">OUR NETWORK</span><h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Our <span class="text-warning">Clients</span></h1><p class="text-secondary lead">Trusted by leading organizations across Bangladesh</p></div></div>
  <section class="py-5 bg-dark text-white"><div class="container-xl"><div class="row g-4">${d.clients.map((c,i)=>`<div class="col-md-6 col-lg-4"><div class="card bg-dark border border-secondary border-opacity-25 text-white p-4 h-100 card-hover"><div class="display-6 text-warning fw-bold opacity-25 mb-3" style="font-family:'Oswald',sans-serif;">0${i+1}</div><h4 class="fw-bold mb-3 lh-sm">${c}</h4><div class="border-top border-warning border-opacity-25 pt-3" style="width:40px;border-top-width:3px!important;"></div></div></div>`).join('')}</div></div></section>`;
};

window.ContactPage = function(d, csrfToken) {
  return `
  <div class="page-hero-bs"><div class="container-xl py-5"><span class="badge bg-warning bg-opacity-15 text-warning border border-warning border-opacity-25 mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">REACH US</span><h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Contact <span class="text-warning">Us</span></h1><p class="text-secondary lead">We're ready to assist with your safety and energy needs</p></div></div>
  <section class="py-5 bg-dark text-white"><div class="container-xl"><div class="row g-5 align-items-start"><div class="col-lg-5"><h2 class="fw-bold mb-3" style="font-family:'Oswald',sans-serif;">Get In Touch</h2><p class="text-secondary lh-lg mb-4">Feel free to reach out for product enquiries.</p>${[['bi-telephone-fill','Phone',d.company.phone1],['bi-envelope-fill','Email',d.company.email],['bi-geo-alt-fill','Office',d.company.address]].map(([icon,label,val])=>`<div class="card bg-dark border border-secondary border-opacity-25 mb-3"><div class="card-body p-3 d-flex gap-3 align-items-start"><div class="rounded-circle bg-warning bg-opacity-15 d-flex align-items-center justify-content-center flex-shrink-0" style="width:42px;height:42px;"><i class="bi ${icon} text-warning"></i></div><div><div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${label.toUpperCase()}</div><div class="fw-semibold text-white">${val}</div></div></div></div>`).join('')}</div>
  <div class="col-lg-7"><div class="card bg-dark border border-secondary border-opacity-25 p-4 p-lg-5"><h2 class="fw-bold text-white mb-4" style="font-family:'Oswald',sans-serif;">Send Enquiry</h2><form id="contactForm" onsubmit="submitEnquiry(event)"><input type="hidden" name="_csrf" id="csrfToken" value="${csrfToken}"><div class="mb-3"><label class="form-label text-secondary small fw-semibold">FULL NAME</label><input type="text" class="form-control bg-dark border-secondary text-white" id="cfName"></div><div class="mb-3"><label class="form-label text-secondary small fw-semibold">PHONE</label><input type="tel" class="form-control bg-dark border-secondary text-white" id="cfPhone"></div><div class="mb-3"><label class="form-label text-secondary small fw-semibold">MESSAGE</label><textarea class="form-control bg-dark border-secondary text-white" id="cfMessage" rows="4"></textarea></div><div class="mb-3"><label id="captchaQ" class="form-label text-warning"></label><input type="number" class="form-control bg-dark border-secondary text-white" id="cfCaptcha"></div><button type="submit" class="btn btn-warning w-100 fw-bold py-3" id="submitBtn">Send Enquiry</button></form></div></div></div></div></section>`;
};

window.filterProd = function(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.replace('btn-warning','btn-outline-secondary'));
  btn.classList.replace('btn-outline-secondary','btn-warning');
  document.querySelectorAll('.prod-item').forEach(el=>{ el.style.display = cat==='all'||el.dataset.cat===cat ? '' : 'none'; });
};
window.filterProj = function(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.replace('btn-warning','btn-outline-secondary'));
  btn.classList.replace('btn-outline-secondary','btn-warning');
  document.querySelectorAll('.proj-item').forEach(el=>{ el.style.display = type==='all'||el.dataset.type===type ? '' : 'none'; });
};

// ═══════════════════════════════════════════════════════
// ADMIN PANEL
// ═══════════════════════════════════════════════════════
const ADMIN_PW = 'mssarker@Admin2024';
window.AdminPage = function() {
  const ok = sessionStorage.getItem('mssarker_admin') === 'true';
  if (!ok) return renderLogin();
  return renderPanel(StorageService.load('company_data', CompanyData));
};
function renderLogin() {
  return `<div class="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white"><div class="card bg-dark border border-secondary p-5" style="max-width:400px;width:100%;"><h2 class="text-warning mb-4">Admin Login</h2><form onsubmit="doAdminLogin(event)"><div class="mb-3"><input type="password" id="adminPass" class="form-control bg-dark text-white border-secondary" placeholder="Password"></div><button class="btn btn-warning w-100">Login</button></form></div></div>`;
}
window.doAdminLogin = function(e) {
  e.preventDefault();
  const pw = document.getElementById('adminPass').value;
  if (pw === ADMIN_PW) { sessionStorage.setItem('mssarker_admin', 'true'); router.navigate('/admin'); }
  else { alert('Incorrect password'); }
};
function renderPanel(data) {
  return `<div class="p-5 text-white"><h2>Admin Panel</h2><p>Welcome to the admin panel. Currently in static mode.</p><button class="btn btn-outline-danger" onclick="sessionStorage.removeItem('mssarker_admin'); router.navigate('/')">Logout</button></div>`;
}

// ═══════════════════════════════════════════════════════
// APP BOOTSTRAP
// ═══════════════════════════════════════════════════════
function ld() { return StorageService.load('company_data', CompanyData); }
let _captchaAnswer = 0;
function newCaptcha() {
  const a = Math.floor(Math.random()*10)+1; const b = Math.floor(Math.random()*10)+1;
  _captchaAnswer = a + b;
  const el = document.getElementById('captchaQ'); if (el) el.textContent = `${a} + ${b} = ?`;
}
function Footer(d) {
  return `<footer class="bg-dark border-top border-secondary pt-5 pb-3"><div class="container-xl"><div class="row"><div class="col-lg-4"><div class="fw-bold text-warning mb-1" style="font-size:1.5rem;font-family:'Oswald',sans-serif;">M/S SARKER</div><div class="text-secondary small">${d.company.tagline}</div></div></div></div></footer>`;
}
function render(html, showFooter = true) {
  document.getElementById('view').innerHTML = html;
  document.getElementById('footer-slot').innerHTML = showFooter ? Footer(ld()) : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.submitEnquiry = async function(e) {
  e.preventDefault();
  const captchaVal = parseInt(document.getElementById('cfCaptcha')?.value || '', 10);
  if (captchaVal !== _captchaAnswer) { alert('Incorrect captcha'); newCaptcha(); return; }
  alert('Thank you! Your enquiry has been sent.');
  e.target.reset(); newCaptcha();
};

window.navigateTo = path => router.navigate(path);
router.register('/', () => render(HomePage(ld())));
router.register('/about', () => render(AboutPage(ld())));
router.register('/products', () => render(ProductsPage(ld())));
router.register('/projects', () => render(ProjectsPage(ld())));
router.register('/clients', () => render(ClientsPage(ld())));
router.register('/contact', () => { render(ContactPage(ld(), CSRFService.get())); newCaptcha(); });
router.register('/admin', () => render(AdminPage(), false));

document.getElementById('nav-slot').innerHTML = NavbarComponent();
initNavbar();
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 400); }
    router.init();
  }, 500);
});
