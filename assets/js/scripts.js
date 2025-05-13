"use strict";

// Hamburger Menu

const hamburgerMenu = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
const hamburgerMenuContent = document.querySelector("#hamburger-menu-content");
const mobileMenu = document.querySelector("#mobile-menu");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-hamburger-active");
  hamburgerMenuContent.classList.toggle("hamburger-menu-content-active");

  setTimeout(() => {
    mobileMenu.classList.toggle("mobile-menu-active");
  }, 600);
});

// Scroll Trigger Section 1

const navbar = document.querySelector("nav");
const overlay = document.querySelector(".section1-overlay");

const endTransitionScrollY = window.innerHeight * 0.6; // 60vh

const navTargetRed = 0;
const navTargetGreen = 0;
const navTargetBlue = 0;
const navTargetAlpha = 1;

const overlayInitialOpacityAt0vh = 0.4;
const overlayFinalTargetOpacityAt60vh = 1; // overlay به شفافیت 0.8 می‌رسد

window.addEventListener("scroll", function () {
  const currentScrollY = window.pageYOffset;
  let scrollProgress = 0;

  if (currentScrollY <= 0) {
    scrollProgress = 0;
  } else if (currentScrollY < endTransitionScrollY) {
    scrollProgress = currentScrollY / endTransitionScrollY;
  } else {
    scrollProgress = 1;
  }

  // Navbar background
  let navNewAlpha = scrollProgress * navTargetAlpha;
  navNewAlpha = Math.min(navNewAlpha, navTargetAlpha);
  navbar.style.backgroundColor = `rgba(${navTargetRed}, ${navTargetGreen}, ${navTargetBlue}, ${navNewAlpha})`;

  // Overlay opacity
  let overlayNewOpacity;
  if (scrollProgress <= 0) {
    overlayNewOpacity = overlayInitialOpacityAt0vh;
  } else if (scrollProgress >= 1) {
    overlayNewOpacity = overlayFinalTargetOpacityAt60vh;
  } else {
    overlayNewOpacity =
      overlayInitialOpacityAt0vh +
      scrollProgress *
        (overlayFinalTargetOpacityAt60vh - overlayInitialOpacityAt0vh);
  }
  overlayNewOpacity = Math.max(0, Math.min(1, overlayNewOpacity));
  overlay.style.opacity = overlayNewOpacity.toFixed(2);
});

const chevronButton = document.querySelector(".section-1-chevron");

chevronButton.addEventListener("click", function () {
  const targetScrollY = window.innerHeight * 0.95; // 95vh

  window.scrollTo({
    top: targetScrollY,
    behavior: "smooth",
  });
});
