const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const animatedEls = document.querySelectorAll("[data-animate]");

function onScroll() {
  const scrollPos = window.scrollY;
  let activeId = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY - 120;

    if (scrollPos >= top) {
      activeId = section.id;
    }
  });

  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const id = href.slice(1);
    if (id === activeId) {
      anchor.classList.add("is-active");
    } else {
      anchor.classList.remove("is-active");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

if (animatedEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
}

