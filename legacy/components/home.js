// Home Page Component
export function HomePage(d) {
    return `
  <!-- HERO -->
  <section class="hero-section d-flex align-items-center position-relative overflow-hidden"
           style="min-height:100vh;background:linear-gradient(135deg,#0d1117 0%,#161b22 60%,#1a1f2e 100%);">
    <div class="hero-grid-overlay position-absolute" style="inset:0;"></div>

    <!-- Glow orbs -->
    <div class="position-absolute rounded-circle"
         style="width:500px;height:500px;top:0;right:0;background:radial-gradient(circle,#f5a623,transparent);filter:blur(100px);opacity:0.08;transform:translate(30%,-30%);pointer-events:none;"></div>
    <div class="position-absolute rounded-circle"
         style="width:350px;height:350px;bottom:0;left:0;background:radial-gradient(circle,#e8303a,transparent);filter:blur(80px);opacity:0.07;transform:translate(-30%,30%);pointer-events:none;"></div>

    <div class="container-xl position-relative py-5" style="z-index:2;">
      <div class="row align-items-center g-5">

        <!-- LEFT: Text content -->
        <div class="col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft">

          <!-- ✅ FIXED BADGE — inline style instead of bg-opacity-15 -->
          <span class="d-inline-block px-3 py-2 mb-4 rounded-pill fw-semibold"
                style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);font-size:0.72rem;letter-spacing:3px;">
            ⚡ EST. ${d.company.founded} &nbsp;·&nbsp; DHAKA, BANGLADESH
          </span>

          <h1 class="display-1 fw-bold text-white mb-0"
              style="font-family:'Oswald',sans-serif;letter-spacing:6px;line-height:0.95;">
            M/S <span style="color:#f5a623;">SARKER</span>
          </h1>

          <p class="lead text-secondary mt-3 mb-2" style="letter-spacing:2px;">${d.company.tagline}</p>
          <p class="mb-5" style="color:#f5a623;letter-spacing:3px;font-size:0.85rem;">${d.company.slogan}</p>

          <div class="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
            <button class="btn btn-warning btn-lg px-5 fw-bold" onclick="navigateTo('/products')">
              <i class="bi bi-lightning-fill me-2"></i>Explore Products
            </button>
            <button class="btn btn-outline-light btn-lg px-5" onclick="navigateTo('/contact')">
              <i class="bi bi-envelope me-2"></i>Get In Touch
            </button>
          </div>

          <!-- Quick contact strip -->
          <div class="d-flex gap-4 mt-4 justify-content-center justify-content-lg-start flex-wrap">
            <a href="tel:${d.company.phone1}" class="text-decoration-none d-flex align-items-center gap-2"
               style="color:rgba(255,255,255,0.5);font-size:0.85rem;">
              <i class="bi bi-telephone-fill" style="color:#f5a623;"></i>${d.company.phone1}
            </a>
            <a href="mailto:${d.company.email}" class="text-decoration-none d-flex align-items-center gap-2"
               style="color:rgba(255,255,255,0.5);font-size:0.85rem;">
              <i class="bi bi-envelope-fill" style="color:#f5a623;"></i>${d.company.email}
            </a>
          </div>
        </div>

        <!-- RIGHT: Visual info panel -->
        <div class="col-lg-6 animate__animated animate__fadeInRight">
          <div class="position-relative">

            <!-- Main feature panel -->
            <div class="rounded-4 p-4 p-lg-5"
                 style="background:rgba(255,255,255,0.04);border:1px solid rgba(245,166,35,0.2);backdrop-filter:blur(10px);">

              <div class="d-flex align-items-center gap-3 mb-4">
                <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                     style="width:48px;height:48px;background:rgba(245,166,35,0.15);border:1px solid rgba(245,166,35,0.3);">
                  <i class="bi bi-lightning-charge-fill" style="color:#f5a623;font-size:1.3rem;"></i>
                </div>
                <div>
                  <div class="fw-bold text-white" style="font-family:'Oswald',sans-serif;font-size:1.1rem;letter-spacing:1px;">TOTAL SAFETY &amp; ENERGY</div>
                  <div style="color:rgba(255,255,255,0.4);font-size:0.78rem;letter-spacing:1px;">SINCE ${d.company.founded} · BANGLADESH</div>
                </div>
              </div>

              <!-- 4 service tiles -->
              <div class="row g-3 mb-4">
                ${[
        {icon:'bi-lightning-fill',     label:'Lightning Protection', sub:'ESE · 107m Radius',   color:'#f5a623'},
        {icon:'bi-sun-fill',           label:'Solar Energy',         sub:'5KW – 70KW+ Systems', color:'#f5a623'},
        {icon:'bi-shield-fill-check',  label:'Surge Protection',     sub:'SPD · AC &amp; DC',       color:'#f5a623'},
        {icon:'bi-wifi',               label:'IoT Monitoring',       sub:'Real-time · GPS',     color:'#25d366'},
    ].map(c => `
                <div class="col-6">
                  <div class="rounded-3 p-3 text-center h-100"
                       style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);transition:all .25s;"
                       onmouseover="this.style.borderColor='rgba(245,166,35,0.4)';this.style.background='rgba(245,166,35,0.07)'"
                       onmouseout="this.style.borderColor='rgba(255,255,255,0.08)';this.style.background='rgba(255,255,255,0.04)'">
                    <i class="bi ${c.icon} mb-2 d-block" style="font-size:1.6rem;color:${c.color};"></i>
                    <div class="fw-bold text-white mb-1" style="font-size:0.85rem;">${c.label}</div>
                    <div style="color:rgba(255,255,255,0.4);font-size:0.72rem;">${c.sub}</div>
                  </div>
                </div>`).join('')}
              </div>

              <!-- Certifications row -->
              <div class="border-top pt-3" style="border-color:rgba(255,255,255,0.08)!important;">
                <div style="color:rgba(255,255,255,0.35);font-size:0.68rem;letter-spacing:2px;margin-bottom:10px;">CERTIFIED &amp; AUTHORIZED</div>
                <div class="d-flex flex-wrap gap-2">
                  ${['LPS France','IEC 62305','NFC-17-102','BNBC','NFPA'].map(c=>`
                  <span class="px-2 py-1 rounded" style="background:rgba(245,166,35,0.1);color:#f5a623;font-size:0.7rem;font-weight:600;border:1px solid rgba(245,166,35,0.2);">${c}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Floating stat badges -->
            <div class="position-absolute d-none d-xl-flex flex-column align-items-center justify-content-center rounded-3 shadow-lg"
                 style="top:-20px;right:-20px;width:90px;height:90px;background:#f5a623;z-index:3;">
              <div style="font-family:'Oswald',sans-serif;font-size:1.8rem;color:#0d1117;font-weight:700;line-height:1;">50+</div>
              <div style="font-size:0.6rem;color:rgba(13,17,23,0.7);letter-spacing:1px;text-align:center;">PROJECTS</div>
            </div>
            <div class="position-absolute d-none d-xl-flex flex-column align-items-center justify-content-center rounded-3 shadow-lg"
                 style="bottom:-20px;left:-20px;width:90px;height:90px;background:#1a1f2e;border:1px solid rgba(245,166,35,0.4);z-index:3;">
              <div style="font-family:'Oswald',sans-serif;font-size:1.8rem;color:#f5a623;font-weight:700;line-height:1;">15yr</div>
              <div style="font-size:0.6rem;color:rgba(255,255,255,0.5);letter-spacing:1px;text-align:center;">WARRANTY</div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
      <div class="scroll-bounce" style="color:rgba(255,255,255,0.3);font-size:0.7rem;letter-spacing:2px;">
        <i class="bi bi-chevron-double-down d-block fs-5 mb-1" style="color:#f5a623;"></i>SCROLL
      </div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <section class="py-0 bg-warning">
    <div class="container-xl">
      <div class="row g-0 text-center">
        ${d.stats.map((s,i) => `
        <div class="col-6 col-md-3 py-4 ${i < d.stats.length-1 ? 'border-end border-dark border-opacity-25' : ''}">
          <div class="display-5 fw-bold text-dark" style="font-family:'Oswald',sans-serif;">${s.value}</div>
          <div class="text-dark text-opacity-75 small fw-semibold" style="letter-spacing:2px;">${s.label.toUpperCase()}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ABOUT PREVIEW -->
  <section class="py-6 bg-dark text-white" style="padding:96px 0">
    <div class="container-xl">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">WHO WE ARE</span>
          <h2 class="display-5 fw-bold mb-4" style="font-family:'Oswald',sans-serif;">
            Total Safety &amp; <span class="text-warning">Energy Solutions</span>
          </h2>
          <p class="text-secondary lh-lg mb-3">MS SARKER is a dynamic engineering and technology firm specializing in advanced electrical safety, lightning protection, and renewable energy solutions since ${d.company.founded}.</p>
          <p class="text-secondary lh-lg mb-4">We protect critical infrastructure across Bangladesh — from industrial zones to telecommunications towers — using globally-sourced, internationally-certified products.</p>
          <div class="d-flex flex-wrap gap-2 mb-4">
            <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); px-3 py-2"><i class="bi bi-check-circle-fill me-1"></i>LPS France Authorized</span>
            <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); px-3 py-2"><i class="bi bi-check-circle-fill me-1"></i>IEC 62305 Compliant</span>
            <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); px-3 py-2"><i class="bi bi-check-circle-fill me-1"></i>BNBC Standard</span>
          </div>
          <button class="btn btn-warning fw-bold px-4" onclick="navigateTo('/about')">Learn More <i class="bi bi-arrow-right ms-2"></i></button>
        </div>
        <div class="col-lg-6">
          <div class="row g-3">
            ${[
        {icon:'bi-lightning-fill',label:'Lightning Protection',sub:'ESE Technology',col:'text-warning'},
        {icon:'bi-sun-fill',label:'Solar Energy',sub:'5KW – 70KW+',col:'text-warning'},
        {icon:'bi-shield-fill-check',label:'Surge Protection',sub:'SPD Systems',col:'text-warning'},
        {icon:'bi-wifi',label:'IoT Monitoring',sub:'Real-time Data',col:'text-warning'},
    ].map(c => `
            <div class="col-6">
              <div class="card bg-dark border border-warning border-opacity-25 text-center p-4 h-100 card-hover">
                <i class="bi ${c.icon} ${c.col} mb-3" style="font-size:2rem;"></i>
                <div class="fw-bold text-white mb-1">${c.label}</div>
                <small class="text-warning">${c.sub}</small>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCTS PREVIEW -->
  <section style="padding:96px 0;background:#111318;">
    <div class="container-xl">
      <div class="text-center mb-5">
        <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">WHAT WE OFFER</span>
        <h2 class="display-5 fw-bold text-white" style="font-family:'Oswald',sans-serif;">Our Product <span class="text-warning">Categories</span></h2>
        <p class="text-secondary mt-2">Comprehensive protection and energy solutions meeting NFPA, IEC, and BNBC standards</p>
      </div>
      <div class="row g-4">
        ${d.products.slice(0,6).map((p,i) => `
        <div class="col-md-6 col-lg-4">
          <div class="card bg-dark border border-secondary border-opacity-25 h-100 card-hover text-white" onclick="navigateTo('/products')" style="cursor:pointer;">
            <div class="card-body p-4">
              <div class="fs-2 mb-3">${p.icon}</div>
              <div class="text-warning small mb-2" style="letter-spacing:2px;font-size:0.7rem;">${p.category.toUpperCase()}</div>
              <h5 class="fw-bold mb-3">${p.name}</h5>
              <p class="text-secondary small lh-lg mb-3">${p.description.substring(0,110)}…</p>
              <div class="d-flex flex-wrap gap-1 mt-auto">
                ${p.tags.slice(0,3).map(t=>`<span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3);">${t}</span>`).join('')}
              </div>
            </div>
            <div class="card-footer bg-transparent border-top border-warning border-opacity-10 px-4 py-3">
              <small class="text-warning fw-semibold">View Details <i class="bi bi-arrow-right ms-1"></i></small>
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div class="text-center mt-5">
        <button class="btn btn-outline-warning btn-lg px-5 fw-bold" onclick="navigateTo('/products')">
          View All Products <i class="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- ADVANTAGES -->
  <section class="py-5 bg-dark" style="padding:96px 0!important">
    <div class="container-xl">
      <div class="text-center mb-5">
        <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">WHY CHOOSE US</span>
        <h2 class="display-5 fw-bold text-white" style="font-family:'Oswald',sans-serif;">Competitive <span class="text-warning">Advantages</span></h2>
      </div>
      <div class="row g-4">
        ${d.advantages.map(a=>`
        <div class="col-md-6 col-lg-3">
          <div class="card bg-dark border border-secondary border-opacity-25 text-center p-4 h-100 card-hover text-white">
            <div class="fs-1 mb-3">${a.icon}</div>
            <h5 class="fw-bold mb-3">${a.title}</h5>
            <p class="text-secondary small lh-lg mb-0">${a.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- RECENT PROJECTS TICKER -->
  <section style="padding:80px 0;background:#111318;">
    <div class="container-xl">
      <div class="text-center mb-5">
        <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); mb-3 px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">OUR WORK</span>
        <h2 class="display-5 fw-bold text-white" style="font-family:'Oswald',sans-serif;">Recent <span class="text-warning">Projects</span></h2>
      </div>
      <div class="ticker-wrap overflow-hidden position-relative">
        <div class="ticker-inner d-flex gap-3">
          ${[...d.projects,...d.projects].map(p=>`
          <div class="card bg-dark border border-secondary border-opacity-25 text-white flex-shrink-0" style="min-width:270px;">
            <div class="card-body p-3">
              <div class="text-warning fw-bold mb-1" style="font-size:0.75rem;letter-spacing:2px;">${p.year}</div>
              <div class="fw-semibold mb-1" style="font-size:0.9rem;">${p.title}</div>
              <div class="text-secondary small"><i class="bi bi-geo-alt me-1"></i>${p.location}</div>
              ${p.iot?'<span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); mt-2" style="font-size:0.65rem;">IoT Enabled</span>':''}
            </div>
          </div>`).join('')}
        </div>
        <div class="ticker-fade-l position-absolute top-0 start-0 bottom-0" style="width:60px;background:linear-gradient(90deg,#111318,transparent);z-index:2;"></div>
        <div class="ticker-fade-r position-absolute top-0 end-0 bottom-0" style="width:60px;background:linear-gradient(-90deg,#111318,transparent);z-index:2;"></div>
      </div>
      <div class="text-center mt-5">
        <button class="btn btn-warning btn-lg px-5 fw-bold" onclick="navigateTo('/projects')">
          All Projects <i class="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- CLIENTS -->
  <section class="py-5 bg-dark" style="padding:64px 0!important">
    <div class="container-xl">
      <div class="text-center mb-4">
        <span class="d-inline-block rounded-pill fw-semibold" style="background:rgba(245,166,35,0.12);color:#f5a623;border:1px solid rgba(245,166,35,0.3); px-3 py-2" style="letter-spacing:2px;font-size:0.7rem;">TRUSTED BY</span>
      </div>
      <div class="marquee-wrap overflow-hidden position-relative">
        <div class="marquee-inner d-flex gap-3">
          ${[...d.clients,...d.clients].map(c=>`
          <div class="badge bg-dark border border-secondary border-opacity-50 text-secondary px-4 py-3 rounded-pill flex-shrink-0 fw-semibold" style="font-size:0.8rem;white-space:nowrap;">${c}</div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section style="padding:96px 0;background:linear-gradient(135deg,#1a1200,#2a1d00,#1a1200);border-top:1px solid rgba(245,166,35,0.2);border-bottom:1px solid rgba(245,166,35,0.2);">
    <div class="container-xl text-center">
      <h2 class="display-5 fw-bold text-white mb-3" style="font-family:'Oswald',sans-serif;">Ready to Protect Your <span class="text-warning">Infrastructure?</span></h2>
      <p class="text-secondary lead mb-5">Contact us today for a free consultation on lightning protection and solar energy solutions.</p>
      <div class="d-flex gap-3 justify-content-center flex-wrap mb-4">
        <a href="tel:${d.company.phone1}" class="btn btn-warning btn-lg px-5 fw-bold">
          <i class="bi bi-telephone-fill me-2"></i>Call Now
        </a>
        <button class="btn btn-outline-light btn-lg px-5" onclick="navigateTo('/contact')">
          <i class="bi bi-send me-2"></i>Send Enquiry
        </button>
      </div>
      <p class="text-secondary small"><i class="bi bi-telephone me-2"></i>${d.company.phone1} &nbsp;|&nbsp; <i class="bi bi-envelope me-2"></i>${d.company.email}</p>
    </div>
  </section>`;
}
