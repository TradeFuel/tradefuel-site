document.addEventListener("DOMContentLoaded", () => {

  console.log("TRADEFUEL LIVE");

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // hover lift
  document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateY(-2px)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translateY(0)";
    });
  });

  // scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

});