// ═══════════════════════════════════════════════════════
// APP BOOTSTRAP
// ═══════════════════════════════════════════════════════
import CompanyData      from './data/company-data.js';
import { router, StorageService } from './services/router.js';
import { CSRFService }  from './services/csrf.js';
import { NavbarComponent, initNavbar } from './components/navbar.js';
import { HomePage }     from './components/home.js';
import { AboutPage, ProductsPage, ProjectsPage, ClientsPage, ContactPage } from './components/pages.js';
import { AdminPage }    from './admin/admin.js';
import { validateForm, attachLiveValidation, clearFormErrors, Rules, Messages } from './js/validation.js';

// Live data (admin overrides default)
function ld() { return StorageService.load('company_data', CompanyData); }

// ── CAPTCHA helpers ─────────────────────────────────────
let _captchaAnswer = 0;
function newCaptcha() {
  const a = Math.floor(Math.random()*10)+1;
  const b = Math.floor(Math.random()*10)+1;
  _captchaAnswer = a + b;
  const el = document.getElementById('captchaQ');
  if (el) el.textContent = `${a} + ${b} = ?`;
}

// ── FOOTER ──────────────────────────────────────────────
function Footer(d) {
  return `
  <footer class="bg-dark border-top border-secondary border-opacity-25 pt-5 pb-3">
    <div class="container-xl">
      <div class="row g-4 mb-4">
        <div class="col-lg-4">
          <div class="fw-bold text-warning mb-1" style="font-size:1.5rem;font-family:'Oswald',sans-serif;letter-spacing:3px;">M/S SARKER</div>
          <div class="text-secondary small mb-3" style="letter-spacing:1px;">${d.company.tagline}</div>
          <div class="d-flex flex-column gap-2">
            <a href="tel:${d.company.phone1}" class="text-secondary small text-decoration-none"><i class="bi bi-telephone me-2 text-warning"></i>${d.company.phone1}</a>
            <a href="tel:${d.company.phone2}" class="text-secondary small text-decoration-none"><i class="bi bi-telephone me-2 text-warning"></i>${d.company.phone2}</a>
            <a href="mailto:${d.company.email}" class="text-secondary small text-decoration-none"><i class="bi bi-envelope me-2 text-warning"></i>${d.company.email}</a>
            <span class="text-secondary small"><i class="bi bi-geo-alt me-2 text-warning"></i>${d.company.address}</span>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Navigation</h6>
          <div class="d-flex flex-column gap-2">
            ${['Home /','About /about','Products /products','Projects /projects','Clients /clients','Contact /contact']
              .map(x=>{const[l,r]=x.split(' ');return`<a class="text-secondary small text-decoration-none" onclick="navigateTo('${r}')">${l}</a>`;}).join('')}
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Products</h6>
          <div class="d-flex flex-column gap-2">
            ${['ESE Lightning Protection','IoT Smart Monitoring','Chemical Earthing','Solar PV Systems','Surge Protection (SPD)','Aviation Lights']
              .map(n=>`<a class="text-secondary small text-decoration-none" onclick="navigateTo('/products')">${n}</a>`).join('')}
          </div>
        </div>
        <div class="col-lg-3">
          <h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Certifications</h6>
          <div class="d-flex flex-column gap-2">
            ${['LPS France Authorized','IEC 62305 Compliant','NFC-17-102 Standard','BNBC Compliant','NFPA Standard','ICAO Compliant']
              .map(c=>`<span class="text-secondary small"><i class="bi bi-patch-check-fill text-warning me-2"></i>${c}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="border-top border-secondary border-opacity-25 pt-3 d-flex justify-content-between flex-wrap gap-2">
        <span class="text-secondary small">© ${new Date().getFullYear()} M/S SARKER. All rights reserved. Quality Supplier &amp; Contractor since ${d.company.founded}.</span>
        <span class="text-warning small"><i class="bi bi-lightning-fill me-1"></i>Authorized LPS France Installer · Bangladesh</span>
      </div>
    </div>
  </footer>`;
}

// ── RENDER ───────────────────────────────────────────────
function render(html, showFooter = true) {
  document.getElementById('view').innerHTML = html;
  document.getElementById('footer-slot').innerHTML = showFooter ? Footer(ld()) : '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CONTACT FORM VALIDATION + CSRF ──────────────────────
const contactSchema = [
  { fieldId:'cfName',    rules:[{rule:v=>v.trim().length>0,  message:'Full name is required.'},
                                {rule:v=>v.trim().length>=2, message:'Name must be at least 2 characters.'},
                                {rule:v=>v.trim().length<=80, message:'Name must not exceed 80 characters.'},
                                {rule:v=>!/<[^>]+>/g.test(v), message:'HTML tags are not allowed.'}] },
  { fieldId:'cfPhone',   rules:[{rule:v=>v.trim().length>0,  message:'Phone number is required.'},
                                {rule:v=>/^(?:\+?88)?01[3-9]\d{8}$/.test(v.replace(/\s/g,'')), message:'Enter a valid Bangladeshi phone (e.g. 01XXXXXXXXX).'}] },
  { fieldId:'cfEmail',   rules:[{rule:v=>v.trim()===''||/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), message:'Enter a valid email address.'},
                                {rule:v=>!/<[^>]+>/g.test(v), message:'HTML tags are not allowed.'}] },
  { fieldId:'cfCompany', rules:[{rule:v=>v.trim().length<=100, message:'Must not exceed 100 characters.'},
                                {rule:v=>!/<[^>]+>/g.test(v), message:'HTML tags are not allowed.'}] },
  { fieldId:'cfService', rules:[{rule:v=>v!=='', message:'Please select a service.'}] },
  { fieldId:'cfMessage', rules:[{rule:v=>v.trim().length>0,  message:'Message is required.'},
                                {rule:v=>v.trim().length>=10, message:'Message must be at least 10 characters.'},
                                {rule:v=>v.trim().length<=1000, message:'Message must not exceed 1000 characters.'},
                                {rule:v=>!/<script[\s\S]*?>[\s\S]*?<\/script>/gi.test(v), message:'Message contains invalid content.'}] },
];

window.submitEnquiry = async function(e) {
  e.preventDefault();

  // 1. CSRF validation
  const submitted = document.getElementById('csrfToken')?.value || '';
  if (!CSRFService.validate(submitted)) {
    Swal.fire({ icon:'error', title:'Security Error',
      text:'Your session token has expired. Please refresh and try again.',
      background:'#1a1f2e', color:'#e8ebf0', iconColor:'#e8303a', confirmButtonColor:'#f5a623' });
    CSRFService.rotate();
    const inp = document.getElementById('csrfToken');
    if (inp) inp.value = CSRFService.get();
    return;
  }

  // 2. Captcha validation
  const captchaVal = parseInt(document.getElementById('cfCaptcha')?.value || '', 10);
  const captchaEl  = document.getElementById('cfCaptcha');
  if (isNaN(captchaVal) || captchaVal !== _captchaAnswer) {
    if (captchaEl) {
      captchaEl.classList.add('is-invalid');
      captchaEl.classList.remove('is-valid');
      const fb = captchaEl.parentElement.querySelector('.invalid-feedback');
      if (fb) fb.textContent = 'Incorrect answer. Please solve the math question.';
    }
    newCaptcha(); // refresh question
    document.getElementById('cfCaptcha').value = '';
    return;
  } else {
    if (captchaEl) { captchaEl.classList.remove('is-invalid'); captchaEl.classList.add('is-valid'); }
  }

  // 3. Full field validation
  if (!validateForm(contactSchema)) {
    Swal.fire({ icon:'warning', title:'Please fix the errors',
      text:'Check all highlighted fields before submitting.',
      background:'#1a1f2e', color:'#e8ebf0', iconColor:'#f5a623', confirmButtonColor:'#f5a623' });
    return;
  }

  // 4. Submit simulation
  const btn  = document.getElementById('submitBtn');
  const txt  = document.getElementById('submitText');
  const spin = document.getElementById('submitSpinner');
  btn.disabled = true; txt.classList.add('d-none'); spin.classList.remove('d-none');

  await new Promise(r => setTimeout(r, 1500)); // simulate network

  // 5. Success: rotate CSRF token, reset form
  CSRFService.rotate();
  const inp = document.getElementById('csrfToken');
  if (inp) inp.value = CSRFService.get();

  btn.disabled = false; txt.classList.remove('d-none'); spin.classList.add('d-none');
  e.target.reset();
  clearFormErrors('contactForm');
  newCaptcha();

  Swal.fire({
    icon: 'success',
    title: 'Enquiry Sent! 🎉',
    html: `<p class="text-secondary">Thank you for reaching out to <strong class="text-warning">M/S SARKER</strong>.</p>
           <p class="text-secondary small">We will contact you on <strong>${document.getElementById('cfPhone').value || 'your number'}</strong> within <strong>24 hours</strong>.</p>`,
    confirmButtonText: 'OK, Thank You!',
    confirmButtonColor: '#f5a623',
    background: '#1a1f2e', color: '#e8ebf0', iconColor: '#25d366',
  });
};

// ── GLOBAL NAV ───────────────────────────────────────────
window.navigateTo = path => router.navigate(path);

// ── ROUTES ───────────────────────────────────────────────
router.register('/', () => { render(HomePage(ld())); });
router.register('/about',    () => render(AboutPage(ld())));
router.register('/products', () => render(ProductsPage(ld())));
router.register('/projects', () => render(ProjectsPage(ld())));
router.register('/clients',  () => render(ClientsPage(ld())));
router.register('/contact',  () => {
  render(ContactPage(ld(), CSRFService.get()));
  requestAnimationFrame(() => {
    // Attach live validation after DOM ready
    attachLiveValidation(contactSchema);
    // Character counter for message
    const msg = document.getElementById('cfMessage');
    const cnt = document.getElementById('charCount');
    if (msg && cnt) {
      msg.addEventListener('input', () => {
        cnt.textContent = msg.value.length;
        cnt.style.color = msg.value.length > 900 ? '#e8303a' : '';
      });
    }
    newCaptcha();
    // Captcha live feedback
    const cap = document.getElementById('cfCaptcha');
    if (cap) {
      cap.addEventListener('input', () => {
        const v = parseInt(cap.value, 10);
        if (!isNaN(v)) {
          if (v === _captchaAnswer) { cap.classList.add('is-valid'); cap.classList.remove('is-invalid'); }
          else { cap.classList.remove('is-valid'); }
        }
      });
    }
  });
});
router.register('/admin', () => render(AdminPage(), false));

// ── INIT ─────────────────────────────────────────────────
document.getElementById('nav-slot').innerHTML = NavbarComponent();
initNavbar();

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 400); }
    router.init();
  }, 500);
});
