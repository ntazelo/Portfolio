document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.logo__title').classList.add('rotate');
  const modal = document.createElement('section');
  const body = document.querySelector('body');
  const contPrjctDet = document.createElement('div');
  const heading = document.createElement('h1');
  const contList = document.createElement('ul');
  const contListItem = document.createElement('li')
  modal.classList.add('modal-pop-up');
  contPrjctDet.classList.add('cont-prjct-det');
  heading.classList.add('pop-heading-det');
  heading.textContent = 'Tonic';
  contList.classList.add('pop-proj-info');
  body.appendChild(modal);
  modal.appendChild(contPrjctDet);
  contPrjctDet.appendChild(heading);
  contPrjctDet.appendChild(contList);
  contList.appendChild(contListItem);
});
const navToggle = document.querySelector('.dis-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const humbMenu = document.querySelector('.menu--humb');
const section = document.querySelectorAll('.link-mobile-menu');
function closeMenu() { mobileMenu.style.display = 'none'; }
navToggle.addEventListener('click', closeMenu);
function OpenMenu() {
  mobileMenu.style.display = 'block';
}
humbMenu.addEventListener('click', OpenMenu);
section.forEach((item) => {
  item.addEventListener('click', closeMenu);
});