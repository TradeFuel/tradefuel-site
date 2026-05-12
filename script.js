document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".reveal");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });

  });

});