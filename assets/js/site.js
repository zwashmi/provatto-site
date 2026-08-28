const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    document.getElementById(button.getAttribute('aria-controls')).hidden = open;
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  sections.forEach((section) => section.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach((section) => observer.observe(section));
}
