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

  // subtle hover lift
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateY(-2px)";
      el.style.transition = "0.2s";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translateY(0)";
    });
  });

});