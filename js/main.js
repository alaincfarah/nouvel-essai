const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const floatingCta = document.querySelector('.floating-cta');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

document.addEventListener('click', (event) => {
  if (!nav || !navToggle) return;
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

if (floatingCta) {
  const toggleFloatingCta = () => {
    const show = window.scrollY > 480;
    floatingCta.classList.toggle('is-visible', show);
  };

  window.addEventListener('scroll', toggleFloatingCta);
  toggleFloatingCta();
}

const yearPlaceholder = document.querySelector('[data-current-year]');
if (yearPlaceholder) {
  yearPlaceholder.textContent = String(new Date().getFullYear());
}

const forms = document.querySelectorAll('.needs-validation');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.classList.add('is-invalid');
    } else {
      form.classList.remove('is-invalid');
    }
  });
});

const observerTargets = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observerTargets.forEach((target) => observer.observe(target));
}
