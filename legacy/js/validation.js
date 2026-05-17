// ═══════════════════════════════════════════════════════
// Client-Side Validation Library
// ═══════════════════════════════════════════════════════

export const Rules = {
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

export const Messages = {
  required:    'This field is required.',
  minLen:      n => `Must be at least ${n} characters.`,
  maxLen:      n => `Must be no more than ${n} characters.`,
  email:       'Enter a valid email address.',
  bdPhone:     'Enter a valid Bangladeshi phone number (e.g. 01XXXXXXXXX).',
  noHtml:      'HTML tags are not allowed.',
};

export function validateField(value, rules) {
  for (const { rule, message } of rules) {
    if (!rule(value)) return { valid: false, error: message };
  }
  return { valid: true, error: null };
}

export function showFieldError(fieldId, error) {
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
}

export function clearFormErrors(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.querySelectorAll('.is-invalid,.is-valid').forEach(el =>
    el.classList.remove('is-invalid','is-valid'));
  form.querySelectorAll('.invalid-feedback').forEach(el => el.textContent = '');
}

export function attachLiveValidation(schema) {
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
}

export function validateForm(schema) {
  let ok = true;
  schema.forEach(({ fieldId, rules }) => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    const res = validateField(el.value, rules);
    showFieldError(fieldId, res.error);
    if (!res.valid) ok = false;
  });
  return ok;
}

export function sanitize(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
    .replace(/'/g,'&#x27;');
}
