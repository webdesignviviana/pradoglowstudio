document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("nav-open");
    });
  }
});
