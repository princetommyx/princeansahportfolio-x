document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Initialize AOS animation
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Initialize particles.js
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
      },
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);

      // Here you would typically send the data to a server
      // For this example, we'll just show a success message
      alert("Thank you for your message! I will get back to you soon.");
      this.reset();

      // Example of how you might send the data:
      /*
          fetch('your-endpoint', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              alert('Message sent successfully!');
              contactForm.reset();
          })
          .catch(error => {
              console.error('Error:', error);
              alert('There was an error sending your message.');
          });
          */
    });
  }

  // Animate skills when scrolled into view
  const skillsSection = document.querySelector(".skills-section");
  const skillBars = document.querySelectorAll(".progress-bar");

  function animateSkillBars() {
    if (isElementInViewport(skillsSection)) {
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      window.removeEventListener("scroll", animateSkillBars);
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  window.addEventListener("scroll", animateSkillBars);
  animateSkillBars(); // Run once on page load
});
