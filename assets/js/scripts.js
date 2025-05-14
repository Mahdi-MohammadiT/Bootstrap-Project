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

// Section 10

// document.querySelectorAll('.project-items').forEach(item => {
//   item.addEventListener('mouseenter', function() {
//     // 'this' به آیتمی اشاره دارد که ماوس روی آن قرار گرفته است
//     const overlay = this.querySelector('.sec9-overlay-item');
//     if (overlay) {
//       overlay.style.transform = 'translateY(0%)';
//     }
//   });

//   item.addEventListener('mouseleave', function() {
//     // 'this' به آیتمی اشاره دارد که ماوس از روی آن کنار رفته است
//     const overlay = this.querySelector('.sec9-overlay-item');
//     if (overlay) {
//       overlay.style.transform = 'translateY(-100%)'; // یا به حالت اولیه برگردانید
//     }
//   });
// });

function getHoverDirection(event, element) {
  const rect = element.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  const x = (offsetX - width / 2) * (width > height ? height / width : 1);
  const y = (offsetY - height / 2) * (height > width ? width / height : 1);

  const degrees = Math.atan2(y, x) * (180 / Math.PI);

  const directionIndex = Math.round((degrees + 180) / 90 + 3) % 4;

  switch (directionIndex) {
    case 0:
      return "top";
    case 1:
      return "right";
    case 2:
      return "bottom";
    case 3:
      return "left";
  }
}

document.querySelectorAll(".project-items").forEach((item) => {
  const overlay = item.querySelector(".sec9-overlay-item");

  item.addEventListener("mouseenter", function (e) {
    const direction = getHoverDirection(e, this);

    overlay.style.transition = "none";

    overlay.style.opacity = ".85";
    if (direction === "top") {
      overlay.style.transform = "translateY(-100%) translateX(0)";
    } else if (direction === "right") {
      overlay.style.transform = "translateX(100%) translateY(0)";
    } else if (direction === "bottom") {
      overlay.style.transform = "translateY(100%) translateX(0)";
    } else if (direction === "left") {
      overlay.style.transform = "translateX(-100%) translateY(0)";
    }

    void overlay.offsetWidth;

    overlay.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
    overlay.style.opacity = ".85";
    overlay.style.transform = "translateY(0) translateX(0)";
  });

  item.addEventListener("mouseleave", function (e) {
    const direction = getHoverDirection(e, this);

    overlay.style.opacity = ".85";
    if (direction === "top") {
      overlay.style.transform = "translateY(-100%) translateX(0)";
    } else if (direction === "right") {
      overlay.style.transform = "translateX(100%) translateY(0)";
    } else if (direction === "bottom") {
      overlay.style.transform = "translateY(100%) translateX(0)";
    } else if (direction === "left") {
      overlay.style.transform = "translateX(-100%) translateY(0)";
    }
  });
});


// Section 1 Animation

window.addEventListener('load', () => {
  const title = document.querySelector('.sec1-title');
  const text = document.querySelector('.sec1-text');
  const button = document.querySelector('.section-1-btn');

  setTimeout(() => {
    title.classList.add('reveal');
    text.classList.add('reveal');
    button.classList.add('reveal');
  }, 100);
});

// Section 2 Animation 

document.addEventListener('DOMContentLoaded', () => {
  const titleSection = document.querySelector('.section-2-title');
  const title = document.querySelector('.section-2-title h1');
  const subtitle = document.querySelector('.section-2-title span');

  // ایجاد IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // وقتی سکشن در ویوپورت قرار گرفت
          setTimeout(() => {
            titleSection.classList.add('reveal');
            title.classList.add('reveal');
            subtitle.classList.add('reveal');
          }, 100);
          // متوقف کردن مشاهده پس از اجرای انیمیشن
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2 // اجرا وقتی 10٪ از سکشن قابل مشاهده باشد
    }
  );
  
  observer.observe(document.querySelector('#section-2'));
});


// Section 3 Animation 

document.addEventListener('DOMContentLoaded', () => {
  const watchOurVideo = document.querySelectorAll('.watch-our-video');
  const playBtn = document.querySelector('.play-btn');
  const paragraph = document.querySelector('#section-3 p');

  // ایجاد IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // وقتی سکشن در ویوپورت قرار گرفت
          setTimeout(() => {
            watchOurVideo.forEach(span => span.classList.add('reveal-left'));
            playBtn.classList.add('reveal');
            paragraph.classList.add('reveal-right');
          }, 100);
          // متوقف کردن مشاهده پس از اجرای انیمیشن
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2 // اجرا وقتی 10٪ از سکشن قابل مشاهده باشد
    }
  );

  // مشاهده سکشن
  observer.observe(document.querySelector('#section-3'));
});