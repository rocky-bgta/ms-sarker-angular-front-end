// About, Products, Projects, Clients, Contact pages

export function AboutPage(d) {
    return `
  <div class="page-hero-bs">
    <div class="container-xl py-5">
      <span class="d-inline-block rounded-pill fw-semibold px-3 py-2 mb-3" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:2px;" style="letter-spacing:2px;font-size:0.7rem;">EST. ${d.company.founded}</span>
      <h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">About <span class="text-warning">M/S SARKER</span></h1>
      <p class="text-secondary lead">Engineering safety and sustainable energy solutions since ${d.company.founded}</p>
    </div>
  </div>
  <section class="py-5 bg-dark text-white" style="padding:80px 0!important">
    <div class="container-xl">
      <div class="row g-5 align-items-start">
        <div class="col-lg-7">
          <h2 class="fw-bold mb-4" style="font-family:'Oswald',sans-serif;">Our Story</h2>
          <p class="text-secondary lh-lg mb-3">Founded in ${d.company.founded} in Nawabgonj Upazila, Dinajpur District, MS SARKER has grown into a premier solution provider combining technical expertise with high-quality global sourcing.</p>
          <p class="text-secondary lh-lg mb-3">Headquartered at Mirpur-11, Dhaka, we serve industrial, commercial, and residential sectors across Bangladesh — protecting critical infrastructure from high-rise buildings to telecommunication towers.</p>
          <p class="text-secondary lh-lg">Our service philosophy: <strong class="text-warning">"Energetic, Trustable, Professional"</strong></p>
        </div>
        <div class="col-lg-5">
          ${[
        ['Founded','2018 · Nawabgonj, Dinajpur'],
        ['CEO',d.company.ceo],
        ['Headquarters',d.company.address],
        ['Core Focus','Electrical Safety, Lightning Protection, Renewable Energy'],
    ].map(([k,v])=>`
          <div class="card bg-dark border border-secondary border-opacity-25 mb-3">
            <div class="card-body px-4 py-3">
              <div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${k.toUpperCase()}</div>
              <div class="fw-semibold text-white">${v}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section style="padding:80px 0;background:#111318;">
    <div class="container-xl">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card bg-dark border-start border-warning border-4 border-top-0 border-end-0 border-bottom-0 text-white h-100 p-4">
            <div class="fs-1 mb-3">🎯</div>
            <h3 class="fw-bold mb-3" style="font-family:'Oswald',sans-serif;">Our Mission</h3>
            <p class="text-secondary lh-lg mb-0">${d.company.mission}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card bg-dark border-start border-danger border-4 border-top-0 border-end-0 border-bottom-0 text-white h-100 p-4">
            <div class="fs-1 mb-3">🔭</div>
            <h3 class="fw-bold mb-3" style="font-family:'Oswald',sans-serif;">Our Vision</h3>
            <p class="text-secondary lh-lg mb-0">${d.company.vision}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 bg-dark" style="padding:80px 0!important">
    <div class="container-xl">
      <h2 class="fw-bold text-white mb-5 text-center" style="font-family:'Oswald',sans-serif;">Target <span class="text-warning">Markets</span></h2>
      <div class="row g-4">
        ${d.targetMarkets.map(m=>`
        <div class="col-md-6 col-lg-3">
          <div class="card bg-dark border border-secondary border-opacity-25 text-center p-4 h-100 card-hover text-white">
            <div class="fs-1 mb-3">${m.icon}</div>
            <h5 class="fw-bold mb-2">${m.name}</h5>
            <p class="text-secondary small lh-lg mb-0">${m.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section style="padding:80px 0;background:#111318;">
    <div class="container-xl">
      <h2 class="fw-bold text-white mb-5 text-center" style="font-family:'Oswald',sans-serif;">Certifications &amp; <span class="text-warning">Authorizations</span></h2>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          ${d.certifications.map(c=>`
          <div class="d-flex align-items-start gap-3 mb-3 card bg-dark border border-secondary border-opacity-25 p-3 text-white">
            <i class="bi bi-patch-check-fill text-warning fs-5 flex-shrink-0 mt-1"></i>
            <span class="text-secondary">${c}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 bg-dark" style="padding:80px 0!important">
    <div class="container-xl">
      <h2 class="fw-bold text-white mb-5 text-center" style="font-family:'Oswald',sans-serif;">Key <span class="text-warning">Achievements</span></h2>
      ${['Successfully implemented lightning protection systems for major industrial zones across Bangladesh',
        'Deployed energy-efficient solar street lighting in developing urban areas and refugee camps',
        'Introduced smart-monitored earthing solutions reducing maintenance downtime for clients',
        'Authorized Local Supplier & Installer for LPS France Lightning Protection Systems in Bangladesh',
        'Completed 50+ projects across residential, industrial, government, and telecommunications sectors',
    ].map((a,i)=>`
      <div class="d-flex gap-4 align-items-start mb-4 p-4 card bg-dark border border-secondary border-opacity-25 text-white">
        <span class="text-warning fw-bold display-6 flex-shrink-0 lh-1 opacity-50" style="font-family:'Oswald',sans-serif;">0${i+1}</span>
        <span class="text-secondary lh-lg mt-1">${a}</span>
      </div>`).join('')}
    </div>
  </section>`;
}

export function ProductsPage(d) {
    const cats = [...new Set(d.products.map(p=>p.category))];
    return `
  <div class="page-hero-bs">
    <div class="container-xl py-5">
      <span class="d-inline-block rounded-pill fw-semibold px-3 py-2 mb-3" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:2px;" style="letter-spacing:2px;font-size:0.7rem;">WHAT WE OFFER</span>
      <h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Our <span class="text-warning">Products</span></h1>
      <p class="text-secondary lead">Comprehensive safety and energy solutions meeting international standards</p>
    </div>
  </div>
  <section class="py-5 bg-dark text-white" style="padding:64px 0!important">
    <div class="container-xl">
      <div class="d-flex flex-wrap gap-2 mb-5">
        <button class="btn btn-warning btn-sm fw-semibold filter-btn" onclick="filterProd('all',this)">All Products</button>
        ${cats.map(c=>`<button class="btn btn-outline-secondary btn-sm filter-btn" onclick="filterProd('${c}',this)">${c}</button>`).join('')}
      </div>
      <div class="row g-4" id="prodList">
        ${d.products.map((p,i)=>`
        <div class="col-12 prod-item" data-cat="${p.category}">
          <div class="card bg-dark border border-secondary border-opacity-25 text-white">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex align-items-start gap-4 mb-3">
                <div class="fs-1 flex-shrink-0">${p.icon}</div>
                <div>
                  <div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${p.category.toUpperCase()}</div>
                  <h3 class="fw-bold mb-0" style="font-family:'Oswald',sans-serif;">${p.name}</h3>
                </div>
              </div>
              <p class="text-secondary lh-lg border-bottom border-secondary border-opacity-25 pb-4 mb-4">${p.description}</p>
              <div class="row g-4">
                <div class="col-md-6">
                  <h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Specifications</h6>
                  <ul class="list-unstyled mb-0">
                    ${p.specs.map(s=>`<li class="text-secondary small mb-2 d-flex gap-2"><i class="bi bi-dash text-warning flex-shrink-0 mt-1"></i><span>${s}</span></li>`).join('')}
                  </ul>
                </div>
                <div class="col-md-6">
                  <h6 class="text-secondary text-uppercase mb-3" style="letter-spacing:2px;font-size:0.7rem;">Brands / Sources</h6>
                  <ul class="list-unstyled mb-3">
                    ${p.brands.map(b=>`<li class="text-secondary small mb-2"><i class="bi bi-bookmark-fill text-warning me-2"></i>${b}</li>`).join('')}
                  </ul>
                  <div class="d-flex flex-wrap gap-1">
                    ${p.tags.map(t=>`<span class="d-inline-block rounded fw-semibold px-2 py-1" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.7rem;">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>
  <section style="padding:64px 0;background:#111318;">
    <div class="container-xl">
      <h2 class="fw-bold text-white text-center mb-5" style="font-family:'Oswald',sans-serif;">Standards &amp; <span class="text-warning">Compliance</span></h2>
      <div class="row g-4 justify-content-center">
        ${[['NFC-17-102','French Standard for ESE Lightning Protection'],
        ['IEC 62305','International Lightning Protection Standard'],
        ['IEC 62561','Components for Lightning Protection Systems'],
        ['NFPA','National Fire Protection Association Standards'],
        ['BNBC','Bangladesh National Building Code'],
        ['ICAO','Aviation Light Compliance Standard'],
    ].map(([n,d])=>`
        <div class="col-6 col-md-4 col-lg-2">
          <div class="card bg-dark border border-secondary border-opacity-25 text-center p-3 h-100 card-hover text-white">
            <div class="fw-bold text-warning fs-5 mb-2" style="font-family:'Oswald',sans-serif;">${n}</div>
            <div class="text-secondary" style="font-size:0.75rem;">${d}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function ProjectsPage(d) {
    const types=[...new Set(d.projects.map(p=>p.type))];
    return `
  <div class="page-hero-bs">
    <div class="container-xl py-5">
      <span class="d-inline-block rounded-pill fw-semibold px-3 py-2 mb-3" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:2px;" style="letter-spacing:2px;font-size:0.7rem;">OUR WORK</span>
      <h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Project <span class="text-warning">Experience</span></h1>
      <p class="text-secondary lead">${d.projects.length}+ completed projects across Bangladesh</p>
    </div>
  </div>
  <section class="py-5 bg-dark text-white" style="padding:64px 0!important">
    <div class="container-xl">
      <div class="d-flex flex-wrap gap-2 mb-5">
        <button class="btn btn-warning btn-sm fw-semibold filter-btn" onclick="filterProj('all',this)">All (${d.projects.length})</button>
        ${types.map(t=>`<button class="btn btn-outline-secondary btn-sm filter-btn" onclick="filterProj('${t}',this)">${t} (${d.projects.filter(p=>p.type===t).length})</button>`).join('')}
      </div>
      <div class="row g-4" id="projGrid">
        ${d.projects.map((p,i)=>`
        <div class="col-md-6 col-lg-4 proj-item" data-type="${p.type}">
          <div class="card bg-dark border border-secondary border-opacity-25 text-white h-100 card-hover">
            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="fw-bold text-warning fs-4" style="font-family:'Oswald',sans-serif;">${p.year}</span>
                ${p.iot?'<span class="d-inline-block rounded fw-semibold px-2 py-1" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.7rem;"><i class="bi bi-wifi me-1"></i>IoT</span>':''}
              </div>
              <h5 class="fw-bold mb-3 lh-sm">${p.title}</h5>
              <ul class="list-unstyled text-secondary small mb-3">
                <li class="mb-2"><i class="bi bi-geo-alt text-warning me-2"></i>${p.location}</li>
                <li class="mb-2"><i class="bi bi-tag text-warning me-2"></i>${p.brand}</li>
                <li class="mb-2"><i class="bi bi-box text-warning me-2"></i>Qty: ${p.qty}</li>
                <li><i class="bi bi-rulers text-warning me-2"></i>Coverage: ${p.coverage}</li>
              </ul>
              ${p.extra?`<div class="alert alert-warning alert-sm py-2 px-3 mb-3 small bg-warning bg-opacity-10 border border-warning border-opacity-25 text-warning">${p.extra}</div>`:''}
              <span class="badge bg-secondary bg-opacity-25 text-secondary border border-secondary border-opacity-25">${p.type}</span>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function ClientsPage(d) {
    return `
  <div class="page-hero-bs">
    <div class="container-xl py-5">
      <span class="d-inline-block rounded-pill fw-semibold px-3 py-2 mb-3" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:2px;" style="letter-spacing:2px;font-size:0.7rem;">OUR NETWORK</span>
      <h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Our <span class="text-warning">Clients</span></h1>
      <p class="text-secondary lead">Trusted by leading organizations across Bangladesh</p>
    </div>
  </div>
  <section class="py-5 bg-dark text-white" style="padding:80px 0!important">
    <div class="container-xl">
      <div class="row g-4">
        ${d.clients.map((c,i)=>`
        <div class="col-md-6 col-lg-4">
          <div class="card bg-dark border border-secondary border-opacity-25 text-white p-4 h-100 card-hover">
            <div class="display-6 text-warning fw-bold opacity-25 mb-3" style="font-family:'Oswald',sans-serif;">0${i+1}</div>
            <h4 class="fw-bold mb-3 lh-sm">${c}</h4>
            <div class="border-top border-warning border-opacity-25 pt-3" style="width:40px;border-top-width:3px!important;"></div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>
  <section style="padding:80px 0;background:#111318;">
    <div class="container-xl">
      <h2 class="fw-bold text-white text-center mb-5" style="font-family:'Oswald',sans-serif;">Who We <span class="text-warning">Serve</span></h2>
      <div class="row g-4">
        ${d.targetMarkets.map(m=>`
        <div class="col-md-6 col-lg-3">
          <div class="card bg-dark border border-secondary border-opacity-25 text-center p-4 h-100 card-hover text-white">
            <div class="fs-1 mb-3">${m.icon}</div>
            <h5 class="fw-bold mb-2">${m.name}</h5>
            <p class="text-secondary small lh-lg mb-0">${m.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function ContactPage(d, csrfToken) {
    return `
  <div class="page-hero-bs">
    <div class="container-xl py-5">
      <span class="d-inline-block rounded-pill fw-semibold px-3 py-2 mb-3" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:2px;" style="letter-spacing:2px;font-size:0.7rem;">REACH US</span>
      <h1 class="display-4 fw-bold text-white mb-2" style="font-family:'Oswald',sans-serif;">Contact <span class="text-warning">Us</span></h1>
      <p class="text-secondary lead">We're ready to assist with your safety and energy needs</p>
    </div>
  </div>
  <section class="py-5 bg-dark text-white" style="padding:80px 0!important">
    <div class="container-xl">
      <div class="row g-5 align-items-start">

        <!-- Contact Info -->
        <div class="col-lg-5">
          <h2 class="fw-bold mb-3" style="font-family:'Oswald',sans-serif;">Get In Touch</h2>
          <p class="text-secondary lh-lg mb-4">Feel free to reach out for product enquiries, project consultations, or support services.</p>
          ${[
        ['bi-person-fill','Contact Person',d.company.ceo,'CEO, M/S SARKER',null],
        ['bi-telephone-fill','Phone / WhatsApp',d.company.phone1,d.company.phone2,'tel:'+d.company.phone1],
        ['bi-envelope-fill','Email',d.company.email,'','mailto:'+d.company.email],
        ['bi-geo-alt-fill','Corporate Office',d.company.address,'',null],
    ].map(([icon,label,val,sub,href])=>`
          <div class="card bg-dark border border-secondary border-opacity-25 mb-3">
            <div class="card-body p-3 d-flex gap-3 align-items-start">
              <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width:42px;height:42px;background:rgba(245,166,35,0.15);border:1px solid rgba(245,166,35,0.25);">
                <i class="bi ${icon} text-warning"></i>
              </div>
              <div>
                <div class="text-warning small mb-1" style="letter-spacing:2px;font-size:0.7rem;">${label.toUpperCase()}</div>
                ${href?`<a href="${href}" class="d-block fw-semibold text-white text-decoration-none">${val}</a>`:`<div class="fw-semibold text-white">${val}</div>`}
                ${sub?`<div class="text-secondary small">${sub}</div>`:''}
              </div>
            </div>
          </div>`).join('')}
          <div class="d-flex gap-3 mt-4 flex-wrap">
            <a href="tel:${d.company.phone1}" class="btn btn-warning fw-bold px-4">
              <i class="bi bi-telephone-fill me-2"></i>Call Now
            </a>
            <a href="https://wa.me/88${d.company.phone1.replace(/\D/g,'')}" target="_blank" class="btn btn-success fw-bold px-4">
              <i class="bi bi-whatsapp me-2"></i>WhatsApp
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-lg-7">
          <div class="card bg-dark border border-secondary border-opacity-25 p-4 p-lg-5">
            <h2 class="fw-bold text-white mb-4" style="font-family:'Oswald',sans-serif;">Send an Enquiry</h2>
            <form id="contactForm" novalidate onsubmit="submitEnquiry(event)">
              <input type="hidden" name="_csrf" id="csrfToken" value="${csrfToken}">

              <div class="row g-3">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">FULL NAME <span class="text-danger">*</span></label>
                    <input type="text" class="form-control bg-dark border-secondary text-white" id="cfName"
                           placeholder="Your full name" autocomplete="name">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">PHONE NUMBER <span class="text-danger">*</span></label>
                    <input type="tel" class="form-control bg-dark border-secondary text-white" id="cfPhone"
                           placeholder="01XXXXXXXXX" autocomplete="tel">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">EMAIL ADDRESS</label>
                    <input type="email" class="form-control bg-dark border-secondary text-white" id="cfEmail"
                           placeholder="your@email.com" autocomplete="email">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">COMPANY / ORGANISATION</label>
                    <input type="text" class="form-control bg-dark border-secondary text-white" id="cfCompany"
                           placeholder="Your company name" autocomplete="organization">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">SERVICE OF INTEREST <span class="text-danger">*</span></label>
                    <select class="form-select bg-dark border-secondary text-white" id="cfService">
                      <option value="">Select a service…</option>
                      <option>ESE Lightning Protection System</option>
                      <option>IoT Smart Monitoring</option>
                      <option>Chemical Earthing</option>
                      <option>Solar PV System</option>
                      <option>Solar Street Light</option>
                      <option>Surge Protection (SPD)</option>
                      <option>Circuit Breakers</option>
                      <option>Aviation Lights</option>
                      <option>Other / General Enquiry</option>
                    </select>
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-4">
                    <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">MESSAGE <span class="text-danger">*</span></label>
                    <textarea class="form-control bg-dark border-secondary text-white" id="cfMessage"
                              rows="5" placeholder="Describe your project or requirements in detail…"></textarea>
                    <div class="invalid-feedback"></div>
                    <div class="form-text text-secondary mt-1">
                      <span id="charCount">0</span> / 1000 characters
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="flex-grow-1">
                  <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">SPAM CHECK <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary text-warning fw-bold" id="captchaQ"></span>
                    <input type="number" class="form-control bg-dark border-secondary text-white" id="cfCaptcha"
                           placeholder="Answer">
                    <div class="invalid-feedback"></div>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-warning w-100 fw-bold py-3" id="submitBtn">
                <span id="submitText"><i class="bi bi-send me-2"></i>Send Enquiry</span>
                <span id="submitSpinner" class="d-none">
                  <span class="spinner-border spinner-border-sm me-2"></span>Sending…
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// Filter helpers
window.filterProd = function(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.replace('btn-warning','btn-outline-secondary'));
    btn.classList.replace('btn-outline-secondary','btn-warning');
    document.querySelectorAll('.prod-item').forEach(el=>{
        el.style.display = cat==='all'||el.dataset.cat===cat ? '' : 'none';
    });
};
window.filterProj = function(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.replace('btn-warning','btn-outline-secondary'));
    btn.classList.replace('btn-outline-secondary','btn-warning');
    document.querySelectorAll('.proj-item').forEach(el=>{
        el.style.display = type==='all'||el.dataset.type===type ? '' : 'none';
    });
};
