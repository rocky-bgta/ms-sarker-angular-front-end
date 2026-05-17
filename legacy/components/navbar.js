// Navbar Component
export function NavbarComponent(data) {
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
}

export function initNavbar() {
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
}
