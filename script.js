// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// PRODUCT FLOAT EFFECT
const stack = document.getElementById("stack");

window.addEventListener("mousemove", (e) => {

  if (!stack) return;

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  stack.style.transform =
    `translate(${x}px, ${y}px)`;
});