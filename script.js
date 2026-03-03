const overlay = document.getElementById("overlay");
const openButtons = document.querySelectorAll("[data-open]");
const closeButtons = document.querySelectorAll("[data-close]");
const modals = document.querySelectorAll(".modal");

let lastFocused = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  lastFocused = document.activeElement;

  overlay.hidden = false;
  modal.hidden = false;

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    modal.classList.add("show");
  });

  modal.querySelector("[data-close]")?.focus();
}

function closeAll() {
  overlay.classList.remove("show");
  modals.forEach((m) => m.classList.remove("show"));

  setTimeout(() => {
    overlay.hidden = true;
    modals.forEach((m) => (m.hidden = true));
    lastFocused?.focus?.();
  }, 140);
}

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.open));
});

closeButtons.forEach((btn) => btn.addEventListener("click", closeAll));
overlay.addEventListener("click", closeAll);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAll();
});

// year
document.getElementById("year").textContent = new Date().getFullYear();