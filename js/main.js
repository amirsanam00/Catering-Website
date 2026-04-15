document.addEventListener("DOMContentLoaded", () => {
  renderSiteContent();
  setupMobileMenu();
  setupBackToTop();
});

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");

let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 4000);
}

function resetCarousel() {
  clearInterval(carouselInterval);
  startCarousel();
}

if (slides.length && dots.length) {
  prevSlideBtn?.addEventListener("click", () => {
    prevSlide();
    resetCarousel();
  });

  nextSlideBtn?.addEventListener("click", () => {
    nextSlide();
    resetCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slide);
      showSlide(index);
      resetCarousel();
    });
  });

  showSlide(0);
  startCarousel();
}