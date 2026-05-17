// Router + Storage services

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

export const router = new Router();

export const StorageService = {
  save(key, data) { localStorage.setItem('mssarker_' + key, JSON.stringify(data)); },
  load(key, fallback = null) {
    const s = localStorage.getItem('mssarker_' + key);
    return s ? JSON.parse(s) : fallback;
  },
  clear(key) { localStorage.removeItem('mssarker_' + key); },
};
