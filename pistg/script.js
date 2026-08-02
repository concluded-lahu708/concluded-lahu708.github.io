// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress bar
const progress = document.getElementById("scrollProgress");
const navbar = document.getElementById("navbar");

function onScroll() {
  const top = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (top / height) * 100 + "%";
  navbar.classList.toggle("scrolled", top > 24);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Dashboard metric counters + bar fill
const dashObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      // animate metric numbers
      entry.target.querySelectorAll(".metric-value").forEach((el) => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        let current = 0;
        const step = Math.max(1, Math.round(target / 36));
        const tick = () => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      // animate bar fills
      entry.target.querySelectorAll(".bar-fill").forEach((el) => {
        el.style.width = el.dataset.width + "%";
      });
      dashObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.3 }
);
const dashCard = document.querySelector(".dash-card");
if (dashCard) dashObserver.observe(dashCard);

// Network chart bars
const chartBars = document.getElementById("chartBars");
if (chartBars) {
  const count = 28;
  for (let i = 0; i < count; i++) {
    const bar = document.createElement("div");
    bar.className = "cb";
    chartBars.appendChild(bar);
  }
  const chartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        chartBars.querySelectorAll(".cb").forEach((bar, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.7)) * 56;
          setTimeout(() => {
            bar.style.height = h + "%";
          }, 40 * i);
        });
        chartObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );
  chartObserver.observe(chartBars);
}
