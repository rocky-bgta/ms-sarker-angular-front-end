// AdminComponent Panel
import CompanyData from '../data/company-data.js';
import { StorageService } from '../services/router.js';
import { CSRFService } from '../services/csrf.js';
import { validateField, showFieldError, attachLiveValidation, Rules, Messages } from '../js/validation.js';

const ADMIN_PW = 'mssarker@Admin2024';

export function AdminPage() {
    const ok = sessionStorage.getItem('mssarker_admin') === 'true';
    if (!ok) return renderLogin();
    return renderPanel(StorageService.load('company_data', CompanyData));
}

function renderLogin() {
    return `
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white" style="background:#0d1117!important;">
    <div class="card bg-dark border border-secondary border-opacity-25 p-5 text-center" style="max-width:420px;width:100%;">
      <div class="fw-bold text-warning mb-2" style="font-size:2rem;font-family:'Oswald',sans-serif;letter-spacing:3px;">⚡ ADMIN</div>
      <h2 class="fw-bold mb-1 text-white">Panel Login</h2>
      <p class="text-secondary mb-4">Enter your password to manage content</p>
      <form id="loginForm" novalidate onsubmit="doAdminLogin(event)">
        <input type="hidden" name="_csrf" value="${CSRFService.get()}">
        <div class="mb-3 text-start">
          <label class="form-label text-secondary small fw-semibold" style="letter-spacing:1px;">PASSWORD</label>
          <input type="password" class="form-control bg-dark border-secondary text-white" id="adminPass" placeholder="Admin password" autocomplete="current-password">
          <div class="invalid-feedback"></div>
        </div>
        <div id="loginErr" class="alert alert-danger py-2 px-3 small d-none">Incorrect password. Please try again.</div>
        <button type="submit" class="btn btn-warning w-100 fw-bold py-3">Login <i class="bi bi-arrow-right ms-2"></i></button>
      </form>
    </div>
  </div>`;
}

function renderPanel(data) {
    return `
  <div class="admin-layout d-flex min-vh-100 text-white" style="background:#0d1117;">
    <!-- Sidebar -->
    <div class="admin-sidebar bg-dark border-end border-secondary border-opacity-25 d-flex flex-column" style="width:260px;flex-shrink:0;position:sticky;top:72px;height:calc(100vh - 72px);overflow-y:auto;">
      <div class="p-4 border-bottom border-secondary border-opacity-25">
        <div class="fw-bold text-warning" style="font-family:'Oswald',sans-serif;letter-spacing:2px;font-size:1.1rem;">⚡ Content Manager</div>
        <small class="text-secondary">M/S SARKER Admin</small>
      </div>
      <nav class="p-3 flex-grow-1">
        ${[['company','bi-building','Company Info'],
        ['stats','bi-bar-chart-fill','Statistics'],
        ['products','bi-box-seam','Products'],
        ['projects','bi-diagram-3','Projects'],
        ['clients','bi-people-fill','Clients'],
        ['advantages','bi-stars','Advantages'],
    ].map(([id,icon,label],i)=>`
        <button class="btn btn-sm w-100 text-start mb-1 fw-semibold admin-tab-btn ${i===0?'btn-warning':'btn-outline-secondary text-secondary'}"
          onclick="showTab('${id}',this)">
          <i class="bi ${icon} me-2"></i>${label}
        </button>`).join('')}
      </nav>
      <div class="p-3 border-top border-secondary border-opacity-25 d-flex flex-column gap-2">
        <button class="btn btn-success btn-sm fw-bold" onclick="applyAndPreview()"><i class="bi bi-check-circle me-2"></i>Save &amp; Preview</button>
        <button class="btn btn-outline-warning btn-sm fw-bold" onclick="saveAdmin()"><i class="bi bi-floppy me-2"></i>Save Only</button>
        <button class="btn btn-outline-danger btn-sm" onclick="resetAdmin()"><i class="bi bi-arrow-counterclockwise me-2"></i>Reset Defaults</button>
        <button class="btn btn-outline-secondary btn-sm" onclick="doAdminLogout()"><i class="bi bi-box-arrow-right me-2"></i>Logout</button>
      </div>
    </div>

    <!-- Main -->
    <div class="flex-grow-1 p-4" style="overflow-y:auto;">
      <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h4 class="fw-bold text-white mb-0" style="font-family:'Oswald',sans-serif;">Website Content Manager</h4>
        <div id="adminToast" class="alert alert-success py-2 px-4 mb-0 small d-none">
          <i class="bi bi-check-circle me-2"></i>Changes saved successfully!
        </div>
      </div>

      <!-- Company Tab -->
      <div class="admin-tab" id="tab-company">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4 mb-4">
          <h5 class="fw-bold mb-4 text-warning"><i class="bi bi-building me-2"></i>Company Information</h5>
          <div class="row g-3">
            ${[['Company Name','company.name',data.company.name,'text'],
        ['Tagline','company.tagline',data.company.tagline,'text'],
        ['Slogan','company.slogan',data.company.slogan,'text'],
        ['Founded Year','company.founded',data.company.founded,'text'],
        ['CEO Name','company.ceo',data.company.ceo,'text'],
        ['Phone 1','company.phone1',data.company.phone1,'text'],
        ['Phone 2','company.phone2',data.company.phone2,'text'],
        ['Email','company.email',data.company.email,'email'],
    ].map(([label,key,val,type])=>`
            <div class="col-md-6">
              <label class="form-label text-secondary small" style="letter-spacing:1px;">${label.toUpperCase()}</label>
              <input type="${type}" class="form-control bg-dark border-secondary text-white admin-field" data-key="${key}" value="${val}">
            </div>`).join('')}
            ${[['Address','company.address',data.company.address],
        ['Mission','company.mission',data.company.mission],
        ['Vision','company.vision',data.company.vision],
    ].map(([label,key,val])=>`
            <div class="col-12">
              <label class="form-label text-secondary small" style="letter-spacing:1px;">${label.toUpperCase()}</label>
              <textarea class="form-control bg-dark border-secondary text-white admin-field" data-key="${key}" rows="3">${val}</textarea>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Stats Tab -->
      <div class="admin-tab d-none" id="tab-stats">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4">
          <h5 class="fw-bold mb-4 text-warning"><i class="bi bi-bar-chart-fill me-2"></i>Homepage Statistics</h5>
          <div class="row g-3">
            ${data.stats.map((s,i)=>`
            <div class="col-md-6 col-lg-3">
              <div class="card bg-dark border border-secondary border-opacity-50 p-3">
                <div class="text-warning small mb-2" style="letter-spacing:1px;">STAT ${i+1}</div>
                <div class="mb-2">
                  <label class="form-label text-secondary small">Value</label>
                  <input class="form-control bg-dark border-secondary text-white admin-field" data-key="stats[${i}].value" value="${s.value}">
                </div>
                <div>
                  <label class="form-label text-secondary small">Label</label>
                  <input class="form-control bg-dark border-secondary text-white admin-field" data-key="stats[${i}].label" value="${s.label}">
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Products Tab -->
      <div class="admin-tab d-none" id="tab-products">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4">
          <h5 class="fw-bold mb-4 text-warning"><i class="bi bi-box-seam me-2"></i>Products</h5>
          <div class="accordion accordion-flush" id="prodAccordion">
            ${data.products.map((p,i)=>`
            <div class="accordion-item bg-dark border border-secondary border-opacity-25 mb-2 rounded">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-dark text-white fw-semibold" type="button"
                  data-bs-toggle="collapse" data-bs-target="#prod-${i}">
                  ${p.icon} &nbsp; ${p.name}
                </button>
              </h2>
              <div id="prod-${i}" class="accordion-collapse collapse">
                <div class="accordion-body bg-dark">
                  <div class="row g-3">
                    <div class="col-md-2">
                      <label class="form-label text-secondary small">ICON</label>
                      <input class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].icon" value="${p.icon}">
                    </div>
                    <div class="col-md-4">
                      <label class="form-label text-secondary small">NAME</label>
                      <input class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].name" value="${p.name}">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label text-secondary small">CATEGORY</label>
                      <input class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].category" value="${p.category}">
                    </div>
                    <div class="col-12">
                      <label class="form-label text-secondary small">DESCRIPTION</label>
                      <textarea class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].description" rows="3">${p.description}</textarea>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label text-secondary small">TAGS (comma separated)</label>
                      <input class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].tags_str" value="${p.tags.join(', ')}">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label text-secondary small">BRANDS (one per line)</label>
                      <textarea class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].brands_str" rows="3">${p.brands.join('\n')}</textarea>
                    </div>
                    <div class="col-12">
                      <label class="form-label text-secondary small">SPECIFICATIONS (one per line)</label>
                      <textarea class="form-control bg-dark border-secondary text-white admin-field" data-key="products[${i}].specs_str" rows="5">${p.specs.join('\n')}</textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Projects Tab -->
      <div class="admin-tab d-none" id="tab-projects">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="fw-bold text-warning mb-0"><i class="bi bi-diagram-3 me-2"></i>Projects</h5>
            <button class="btn btn-warning btn-sm fw-bold" onclick="addProject()"><i class="bi bi-plus-circle me-2"></i>Add Project</button>
          </div>
          <div id="projEditList">
            ${data.projects.map((p,i)=>buildProjRow(p,i)).join('')}
          </div>
        </div>
      </div>

      <!-- Clients Tab -->
      <div class="admin-tab d-none" id="tab-clients">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4">
          <h5 class="fw-bold mb-4 text-warning"><i class="bi bi-people-fill me-2"></i>Clients</h5>
          <p class="text-secondary small">One client name per line</p>
          <textarea class="form-control bg-dark border-secondary text-white" id="clientsTA" rows="12" style="font-size:0.9rem;">${data.clients.join('\n')}</textarea>
        </div>
      </div>

      <!-- Advantages Tab -->
      <div class="admin-tab d-none" id="tab-advantages">
        <div class="card bg-dark border border-secondary border-opacity-25 p-4">
          <h5 class="fw-bold mb-4 text-warning"><i class="bi bi-stars me-2"></i>Competitive Advantages</h5>
          <div class="row g-4">
            ${data.advantages.map((a,i)=>`
            <div class="col-md-6">
              <div class="card bg-dark border border-secondary border-opacity-50 p-3">
                <div class="row g-2">
                  <div class="col-2">
                    <label class="form-label text-secondary small">ICON</label>
                    <input class="form-control bg-dark border-secondary text-white admin-field" data-key="advantages[${i}].icon" value="${a.icon}">
                  </div>
                  <div class="col-10">
                    <label class="form-label text-secondary small">TITLE</label>
                    <input class="form-control bg-dark border-secondary text-white admin-field" data-key="advantages[${i}].title" value="${a.title}">
                  </div>
                  <div class="col-12">
                    <label class="form-label text-secondary small">DESCRIPTION</label>
                    <textarea class="form-control bg-dark border-secondary text-white admin-field" data-key="advantages[${i}].desc" rows="3">${a.desc}</textarea>
                  </div>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildProjRow(p, i) {
    return `
  <div class="card bg-dark border border-secondary border-opacity-25 mb-3" id="prj-${i}">
    <div class="card-header bg-transparent border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
      <span class="fw-semibold text-white"><span class="text-warning me-2">${p.year}</span>${p.title}</span>
      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="collapse" data-bs-target="#prj-body-${i}">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-outline-danger btn-sm" onclick="removeProject(${i})">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div id="prj-body-${i}" class="collapse">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-8"><label class="form-label text-secondary small">TITLE</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].title" value="${p.title}"></div>
          <div class="col-md-4"><label class="form-label text-secondary small">YEAR</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].year" value="${p.year}"></div>
          <div class="col-md-6"><label class="form-label text-secondary small">TYPE</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].type" value="${p.type}"></div>
          <div class="col-md-6"><label class="form-label text-secondary small">LOCATION</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].location" value="${p.location}"></div>
          <div class="col-md-6"><label class="form-label text-secondary small">BRAND</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].brand" value="${p.brand}"></div>
          <div class="col-md-3"><label class="form-label text-secondary small">QTY</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].qty" value="${p.qty}"></div>
          <div class="col-md-3"><label class="form-label text-secondary small">COVERAGE</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].coverage" value="${p.coverage}"></div>
          <div class="col-md-9"><label class="form-label text-secondary small">EXTRA INFO</label>
            <input class="form-control bg-dark border-secondary text-white admin-field" data-key="projects[${i}].extra" value="${p.extra||''}"></div>
          <div class="col-md-3"><label class="form-label text-secondary small">IOT?</label>
            <select class="form-select bg-dark border-secondary text-white admin-field" data-key="projects[${i}].iot">
              <option value="false" ${!p.iot?'selected':''}>No</option>
              <option value="true" ${p.iot?'selected':''}>Yes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── AdminComponent Global Functions ─────────────────────────────
window.doAdminLogin = function(e) {
    e.preventDefault();
    const pass = document.getElementById('adminPass')?.value || '';
    if (!pass.trim()) {
        showFieldError('adminPass', 'Password is required.');
        return;
    }
    // Constant-time compare (same as CSRF)
    const target = ADMIN_PW;
    let diff = pass.length !== target.length ? 1 : 0;
    for (let i=0; i<Math.min(pass.length,target.length); i++) diff |= pass.charCodeAt(i)^target.charCodeAt(i);
    if (diff !== 0) {
        document.getElementById('loginErr')?.classList.remove('d-none');
        showFieldError('adminPass', 'Incorrect password.');
        return;
    }
    sessionStorage.setItem('mssarker_admin', 'true');
    CSRFService.rotate();
    window.navigateTo('/admin');
};

window.doAdminLogout = function() {
    sessionStorage.removeItem('mssarker_admin');
    window.navigateTo('/');
};

window.showTab = function(id, btn) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.add('d-none'));
    document.querySelectorAll('.admin-tab-btn').forEach(b => {
        b.classList.remove('btn-warning'); b.classList.add('btn-outline-secondary','text-secondary');
    });
    document.getElementById('tab-'+id)?.classList.remove('d-none');
    btn.classList.add('btn-warning'); btn.classList.remove('btn-outline-secondary','text-secondary');
};

window.collectData = function() {
    const data = JSON.parse(JSON.stringify(StorageService.load('company_data', CompanyData)));
    document.querySelectorAll('.admin-field[data-key]').forEach(el => {
        setNested(data, el.dataset.key, el.value);
    });
    data.products.forEach((p,i) => {
        const t = document.querySelector(`[data-key="products[${i}].tags_str"]`);
        const b = document.querySelector(`[data-key="products[${i}].brands_str"]`);
        const s = document.querySelector(`[data-key="products[${i}].specs_str"]`);
        if (t) p.tags   = t.value.split(',').map(x=>x.trim()).filter(Boolean);
        if (b) p.brands = b.value.split('\n').map(x=>x.trim()).filter(Boolean);
        if (s) p.specs  = s.value.split('\n').map(x=>x.trim()).filter(Boolean);
    });
    const ct = document.getElementById('clientsTA');
    if (ct) data.clients = ct.value.split('\n').map(x=>x.trim()).filter(Boolean);
    data.projects.forEach(p => { p.iot = p.iot==='true'||p.iot===true; });
    return data;
};

window.saveAdmin = function() {
    const data = collectData();
    StorageService.save('company_data', data);
    const t = document.getElementById('adminToast');
    if (t) { t.classList.remove('d-none'); setTimeout(()=>t.classList.add('d-none'),3000); }
    Swal.fire({ icon:'success', title:'Saved!', text:'All changes have been saved.', timer:2000, showConfirmButton:false, background:'#1a1f2e', color:'#e8ebf0', iconColor:'#f5a623' });
};

window.applyAndPreview = function() { saveAdmin(); setTimeout(()=>window.navigateTo('/'), 500); };

window.resetAdmin = function() {
    Swal.fire({
        title: 'Reset to Defaults?', text: 'This will erase all your edits permanently.',
        icon: 'warning', showCancelButton: true,
        confirmButtonColor: '#e8303a', cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, Reset', background:'#1a1f2e', color:'#e8ebf0'
    }).then(r => { if (r.isConfirmed) { StorageService.clear('company_data'); window.navigateTo('/admin'); }});
};

window.addProject = function() {
    const data = StorageService.load('company_data', CompanyData);
    data.projects.push({ id:Date.now(), title:'New Project', type:'Lightning Protection', location:'Location', year:new Date().getFullYear().toString(), brand:'Brand', qty:'1 Set', coverage:'107m', iot:false, extra:'' });
    StorageService.save('company_data', data);
    window.navigateTo('/admin');
    setTimeout(()=>{ const btn=document.querySelector('[onclick*="projects"]'); if(btn)showTab('projects',btn); },150);
};

window.removeProject = function(i) {
    Swal.fire({
        title:'Remove Project?', text:'This cannot be undone.',
        icon:'warning', showCancelButton:true,
        confirmButtonColor:'#e8303a', cancelButtonColor:'#6c757d',
        confirmButtonText:'Remove', background:'#1a1f2e', color:'#e8ebf0'
    }).then(r => {
        if (!r.isConfirmed) return;
        const data = StorageService.load('company_data', CompanyData);
        data.projects.splice(i,1);
        StorageService.save('company_data', data);
        window.navigateTo('/admin');
        setTimeout(()=>{ const btn=document.querySelector('[onclick*="projects"]'); if(btn)showTab('projects',btn); },150);
    });
};

function setNested(obj, key, val) {
    const m = key.match(/^(\w+)\[(\d+)\]\.(\w+)$/);
    if (m) { const [,arr,idx,prop]=m; if(obj[arr]?.[idx]) obj[arr][idx][prop]=val; }
    else if (key.includes('.')) { const [p,c]=key.split('.'); if(obj[p]!==undefined) obj[p][c]=val; }
}
