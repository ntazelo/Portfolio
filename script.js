

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".logo__title").classList.add("rotate");
});

const navToggle = document.querySelector('.dis-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu')

navToggle.addEventListener('click', closeMenu)
function closeMenu() {
  mobileMenu.style.display='none'
}
