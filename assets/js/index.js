// ****************************************
//  *
//  * Mobile nav toggle
//  ****************************************

const mobileToggle = document.getElementById("mobileToggle");
const nav = document.querySelector(".main-nav ul");
const navLinks = document.querySelectorAll(".main-nav ul li a");

const isMobile = () => window.innerWidth <= 900;

mobileToggle.addEventListener("click", (e) => {
  if (!isMobile()) return;

  e.stopPropagation();
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!isMobile()) return;

    nav.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!isMobile()) return;

  if (!nav.contains(e.target) && e.target !== mobileToggle) {
    nav.style.display = "none";
  }
});
