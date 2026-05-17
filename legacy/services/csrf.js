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

export const CSRFService = {
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
