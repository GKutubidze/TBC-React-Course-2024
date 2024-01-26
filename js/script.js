const SLIDE_INTERVAL = 3000;
const ANIMATION_DURATION = 3000;
let currentSlide = 0; // Declare currentSlide here

// Mobile Navbar
const openMobileNavbar = () => {
  document.body.classList.add("overflow-hidden");
  document.getElementById("mobileNavbar").classList.add("open");
};

const closeMobileNavbar = () => {
  document.body.classList.remove("overflow-hidden");
  document.getElementById("mobileNavbar").classList.remove("open");
};

// Slider functions
function showSlide(index) {
  const slider = document.getElementById("slider");
  const slideWidth = document.querySelector(".slide").offsetWidth;
  const newPosition = -index * slideWidth;

  slider.style.transform = `translateX(${newPosition}px)`;
  currentSlide = index;

  updateDots();
}

function nextSlide() {
  const totalSlides = document.querySelectorAll(".slide").length;
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll(".slide").length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  showSlide(index);
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    index === currentSlide
      ? dot.classList.add("active")
      : dot.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let slideInterval;

  // Initialize currentSlide before setup
  showSlide(currentSlide);

  slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);

  // Stop automatic sliding when the user interacts with the slider
  document
    .getElementById("slider-container")
    .addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

  document
    .getElementById("slider-container")
    .addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, ANIMATION_DURATION);
    });

  // Initial setup
  showSlide(currentSlide);
});

// Dropdown List
function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  const arrow = content.previousElementSibling.querySelector(".dropdown-arrow");
  const containers = document.getElementsByClassName("course-header");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
    content.style.border = "none";
  } else {
    content.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
    content.style.border = "1px solid #363131";
  }
}

// Terms And Conditons Pop-up
function openTermsPopup() {
  document.body.classList.add("overflow-hidden"); // Prevent scrolling
  document.getElementById("termsPopup").classList.add("open");
}

function closeTermsPopup() {
  document.body.classList.remove("overflow-hidden"); // Allow scrolling
  document.getElementById("termsPopup").classList.remove("open");
}
