// ── THEME ──
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('dispatch-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('dispatch-theme', next);
});

// ── DATE ──
const dateEl = document.getElementById('header-date');
if (dateEl) {
  dateEl.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
}

// ── SEARCH OVERLAY ──
const searchToggle = document.getElementById('search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');

searchToggle?.addEventListener('click', () => {
  searchOverlay?.classList.toggle('open');
  if (searchOverlay?.classList.contains('open')) searchInput?.focus();
});
searchClose?.addEventListener('click', () => {
  searchOverlay?.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchOverlay?.classList.remove('open');
});

// ── FADE-IN OBSERVER ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── STICKY HEADER SHADOW ──
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}, { passive: true });
