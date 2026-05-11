document.addEventListener("DOMContentLoaded", () => {

  console.log("CREW QUENCHERS™ initialized.");

  /*
  ==========================================
  SMOOTH SCROLLING
  ==========================================
  */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

  /*
  ==========================================
  NAVBAR SCROLL EFFECT
  ==========================================
  */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      navbar.style.background = "rgba(15,17,21,0.92)";
      navbar.style.backdropFilter = "blur(12px)";
      navbar.style.webkitBackdropFilter = "blur(12px)";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
      navbar.style.padding = "18px 8%";

    } else {

      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";
      navbar.style.padding = "24px 8%";

    }

  });

  /*
  ==========================================
  HERO FADE-IN
  ==========================================
  */

  const heroText = document.querySelector(".hero-text");
  const heroCard = document.querySelector(".hero-card");

  if (heroText) {

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";

    setTimeout(() => {

      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0px)";

    }, 200);

  }

  if (heroCard) {

    heroCard.style.opacity = "0";
    heroCard.style.transform = "translateY(40px)";

    setTimeout(() => {

      heroCard.style.transition = "all 1.1s ease";
      heroCard.style.opacity = "1";
      heroCard.style.transform = "translateY(0px)";

    }, 450);

  }

  /*
  ==========================================
  BUTTON MICRO INTERACTIONS
  ==========================================
  */

  const interactiveButtons = document.querySelectorAll(
    "button, .primary-btn, .secondary-btn, .nav-btn"
  );

  interactiveButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

      button.style.transform = "translateY(-3px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

      button.style.transform = "translateY(0px) scale(1)";

    });

  });

  /*
  ==========================================
  SCROLL REVEAL ANIMATION
  ==========================================
  */

  const revealItems = document.querySelectorAll(
    ".feature-card, .signup-box"
  );

  const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";

      }

    });

  }, {
    threshold: 0.15
  });

  revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.9s ease";

    revealObserver.observe(item);

  });

  /*
  ==========================================
  PARALLAX HERO EFFECT
  ==========================================
  */

  window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    const hero = document.querySelector(".hero");

    if (hero) {

      hero.style.backgroundPositionY = `${scrollY * 0.25}px`;

    }

  });

  /*
  ==========================================
  FORM UX ENHANCEMENT
  ==========================================
  */

  const form = document.querySelector(".form");

  if (form) {

    const submitButton = form.querySelector("button");

    form.addEventListener("submit", () => {

      submitButton.innerHTML = "Joining Crew...";
      submitButton.disabled = true;
      submitButton.style.opacity = "0.85";

    });

  }

  /*
  ==========================================
  INPUT FOCUS EFFECT
  ==========================================
  */

  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {

    input.addEventListener("focus", () => {

      input.style.transform = "scale(1.01)";

    });

    input.addEventListener("blur", () => {

      input.style.transform = "scale(1)";

    });

  });

  /*
  ==========================================
  PERFORMANCE OPTIMIZATION
  ==========================================
  */

  let resizeTimer;

  window.addEventListener("resize", () => {

    document.body.classList.add(
      "resize-animation-stopper"
    );

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

      document.body.classList.remove(
        "resize-animation-stopper"
      );

    }, 300);

  });

});