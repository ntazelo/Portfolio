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
const projectInfo = {
  project1: {
    title: 'Tonic',
    prj_info: ['Canopy', 'fas fa-circle color__circle', 'Baack End Dev', 'fas fa-circle color__circle', 2015],
    url_img: './images/SnapshootPortfolio.png',
    text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    button_live: { url: '#', icon_class: 'fas fa-life-ring' },
    button_source: { url: '#', icon_class: 'fab fa-github-square' },
  },
  project2: {
    title: 'Tonic',
    prj_info: ['Canopy', 'fas fa-circle color__circle', 'Baack End Dev', 'fas fa-circle color__circle', 2015],
    url_img: './images/SnapshootPortfolio1.png',
    text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    button_live: { url: '#', icon_class: 'fas fa-life-ring' },
    button_source: { url: '#', icon_class: 'fab fa-github-square' },
  },
  project3: {
    title: 'Tonic',
    prj_info: ['Canopy', 'fas fa-circle color__circle', 'Baack End Dev', 'fas fa-circle color__circle', 2015],
    url_img: './images/SnapshootPortfolio2.png',
    text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    button_live: { url: '#', icon_class: 'fas fa-life-ring' },
    button_source: { url: '#', icon_class: 'fab fa-github-square' },
  },
  project4: {
    title: 'Tonic',
    prj_info: ['Canopy', 'fas fa-circle color__circle', 'Baack End Dev', 'fas fa-circle color__circle', 2015],
    url_img: './images/SnapshootPortfolio3.png',
    text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    button_live: { url: '#', icon_class: 'fas fa-life-ring' },
    button_source: { url: '#', icon_class: 'fab fa-github-square' },
  },
};

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