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
const overlayFinalTargetOpacityAt60vh = 1;

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

// Section 1 Animation

window.addEventListener("load", () => {
  const title = document.querySelector(".sec1-title");
  const text = document.querySelector(".sec1-text");
  const button = document.querySelector(".section-1-btn");

  setTimeout(() => {
    title.classList.add("reveal");
    text.classList.add("reveal");
    button.classList.add("reveal");
  }, 100);
});

// Section 2 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector(".section-2-title");
  const title = document.querySelector(".section-2-title h1");
  const subtitle = document.querySelector(".section-2-title span");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(document.querySelector("#section-2"));
});

// Section 3 Animation

document.addEventListener("DOMContentLoaded", () => {
  const watchOurVideo = document.querySelectorAll(".watch-our-video");
  const playBtn = document.querySelector(".play-btn");
  const paragraph = document.querySelector("#section-3 p");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            watchOurVideo.forEach((span) => span.classList.add("reveal-left"));
            playBtn.classList.add("reveal");
            paragraph.classList.add("reveal-right");
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(document.querySelector("#section-3"));
});

// Section 4 Animation
const titleSection = document.querySelector("#section-4 .section-2-title");
const title = document.querySelector("#section-4 .section-2-title h1");
const subtitle = document.querySelector("#section-4 .section-2-title span");
const items = document.querySelectorAll("#section-4 .section-4-items");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          titleSection.classList.add("reveal");
          title.classList.add("reveal");
          subtitle.classList.add("reveal");
        }, 100);

        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("reveal");
          }, 300 + index * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

observer.observe(document.querySelector("#section-4"));

// Section 5 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-5 .section-5-title");
  const title = document.querySelector("#section-5 .section-5-title h1");
  const subtitle = document.querySelector("#section-5 .section-5-title span");
  const numberElements = document.querySelectorAll(
    "#section-5 .section-5-items p"
  );

  const animateNumbers = (element, target, duration) => {
    let start = 0;
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);

      element.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    requestAnimationFrame(updateNumber);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          numberElements.forEach((element) => {
            const target = parseInt(element.textContent.replace(/,/g, ""));
            animateNumbers(element, target, 5000);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(document.querySelector("#section-5"));
});

// Section 6 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-6 .section-2-title");
  const title = document.querySelector("#section-6 .section-2-title h1");
  const subtitle = document.querySelector("#section-6 .section-2-title span");
  const items = document.querySelectorAll("#section-6 .section-6-items");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("reveal-item");
            }, 300 + index * 150);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(document.querySelector("#section-6"));
});

// Section 7 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-7 .section-7-title");
  const title = document.querySelector("#section-7 .section-7-title h1");
  const subtitle = document.querySelector("#section-7 .section-7-title span");
  const percentageItems = document.querySelectorAll(
    "#section-7 .section-7-items .d-flex.justify-content-between"
  );

  const animatePercentage = (
    percentageElement,
    barElement,
    target,
    duration
  ) => {
    let start = 0;
    const startTime = performance.now();

    const updatePercentage = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);

      percentageElement.textContent = `${currentValue}%`;
      barElement.style.width = `${currentValue}%`;

      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      } else {
        percentageElement.textContent = `${target}%`;
        barElement.style.width = `${target}%`;
      }
    };
    requestAnimationFrame(updatePercentage);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          percentageItems.forEach((item) => {
            const percentageElement = item.querySelector(
              ".fw-light:last-child"
            );
            const barElement =
              item.nextElementSibling.querySelector(".progress-fill");
            const target = parseInt(
              percentageElement.textContent.replace("%", "")
            );
            if (!isNaN(target)) {
              animatePercentage(percentageElement, barElement, target, 2500);
            }
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(document.querySelector("#section-7"));
});

// Section 8 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-8 .section-2-title");
  const title = document.querySelector("#section-8 .section-2-title h1");
  const subtitle = document.querySelector("#section-8 .section-2-title span");
  const items = document.querySelectorAll("#section-8 .sec8-item-title");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          items.forEach((item, index) => {
            setTimeout(() => {
              item.querySelector("p").classList.add("reveal");
            }, 300 + index * 200);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(document.querySelector("#section-8"));
});

// Section 9 Animation
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#section-9 h3");
  const button = document.querySelector("#section-9 .our-latest-work button");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            title.classList.add("reveal");
          }, 100);

          setTimeout(() => {
            button.classList.add("reveal");
          }, 300);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(document.querySelector("#section-9"));
});

// Section 10 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-10 .section-2-title");
  const title = document.querySelector("#section-10 .section-2-title h1");
  const subtitle = document.querySelector("#section-10 .section-2-title span");
  const filterButtons = document.querySelectorAll(
    "#section-10 .recent-projects-btn button"
  );
  const projectItems = document.querySelectorAll("#section-10 .project-items");

  const filterProjects = (category) => {
    projectItems.forEach((item) => {
      const itemCategory = item.dataset.category;
      if (category === "all" || itemCategory === category) {
        item.style.display = "block";
        item.classList.remove("reveal");
      } else {
        item.style.display = "none";
      }
    });

    const visibleItems = document.querySelectorAll(
      '#section-10 .project-items[style="display: block;"]'
    );
    visibleItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("reveal");
      }, 100 + index * 200);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("sec9-btn-active"));
      button.classList.add("sec9-btn-active");
      const category = button.textContent.toLowerCase().trim();
      filterProjects(category);
    });
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          filterButtons.forEach((button, index) => {
            setTimeout(() => {
              button.classList.add("reveal");
            }, 300 + index * 100);
          });

          filterProjects("all");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  observer.observe(document.querySelector("#section-10"));

  projectItems.forEach((item) => {
    item.classList.remove("reveal");
    item.style.display = "none";
  });
});

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

// Section 11 Animation
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#section-11 .sec11-text h4");
  const paragraph = document.querySelector("#section-11 .sec11-text p");
  const button = document.querySelector("#section-11 .more-works button");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            title.classList.add("reveal");
          }, 100);

          setTimeout(() => {
            paragraph.classList.add("reveal");
          }, 300);

          setTimeout(() => {
            button.classList.add("reveal");
          }, 500);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  observer.observe(document.querySelector("#section-11"));
});

// Section 12 Animation
document.addEventListener("DOMContentLoaded", () => {
  const titleSection = document.querySelector("#section-12 .section-2-title");
  const title = document.querySelector("#section-12 .section-2-title h1");
  const subtitle = document.querySelector("#section-12 .section-2-title span");
  const teamMembers = document.querySelectorAll("#section-12 .col-6.col-md-3");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            titleSection.classList.add("reveal");
            title.classList.add("reveal");
            subtitle.classList.add("reveal");
          }, 100);

          teamMembers.forEach((member, index) => {
            setTimeout(() => {
              member.classList.add("reveal");
            }, 300 + index * 150);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  observer.observe(document.querySelector("#section-12"));

  teamMembers.forEach((member) => {
    member.classList.remove("reveal");
  });
});