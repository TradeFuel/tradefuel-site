document.addEventListener("DOMContentLoaded", () => {

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // simple hover lift (safe)
  document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateY(-2px)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translateY(0)";
    });
  });

});