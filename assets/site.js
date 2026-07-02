const clock = document.querySelector("#clock");
const weatherTime = document.querySelector("#weather-time");
const links = [...document.querySelectorAll("[data-section-link]")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const form = document.querySelector("#command-form");
const input = document.querySelector("#command-input");
const output = document.querySelector("#command-output");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  clock.textContent = time;

  if (weatherTime) {
    weatherTime.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

function updateActiveLink() {
  const current = sections
    .map((section) => ({
      id: section.id,
      top: Math.abs(section.getBoundingClientRect().top - 120),
    }))
    .sort((a, b) => a.top - b.top)[0];

  if (!current) return;

  links.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
  });
}

function runCommand(command) {
  const normalized = command.trim().toLowerCase();

  if (!normalized) {
    return "No command entered. Terminal refuses to hallucinate intent.";
  }

  if (normalized.includes("release")) {
    return "No public packages staged. Framework builds remain quarantined.";
  }

  if (normalized.includes("armory") || normalized.includes("weapon")) {
    return "Armory index online: XCR-L, MP5K, AUG A3 records available.";
  }

  if (normalized.includes("simd")) {
    return "SIMD note: targeted import preserves one updated clip and keeps original entries intact.";
  }

  if (normalized.includes("tac")) {
    return "Tactical stance research online. Calibration pipeline marked prototype stable.";
  }

  return `Unknown command: ${command}. Access level GUEST has opinions, not miracles.`;
}

updateClock();
updateActiveLink();
setInterval(updateClock, 1000);
window.addEventListener("scroll", updateActiveLink, { passive: true });

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  output.textContent = runCommand(input.value);
});
