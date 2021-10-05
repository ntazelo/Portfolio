document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".logo__title").classList.add("rotate");
});

const navToggle = document.querySelector(".dis-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const humbMenu = document.querySelector(".menu--humb");
const section = document.querySelectorAll(".link-mobile-menu");
navToggle.addEventListener("click", closeMenu);
function closeMenu() {
  mobileMenu.style.display = "none";
}

humbMenu.addEventListener("click", OpenMenu);
function OpenMenu() {
  mobileMenu.style.display = "block";
}

section.forEach((item) => {
  item.addEventListener("click", closeMenu);
});
