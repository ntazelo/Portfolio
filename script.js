document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.logo__title').classList.add('rotate');
  const modal = document.createElement('div');
  const body = document.querySelector('body');
  const contPrjctDet = document.createElement('section');
  const contDetailwrapper = document.createElement('div');
  const heading = document.createElement('h1');
  const contList = document.createElement('ul');
  const contListItem1 = document.createElement('li');
  const contListItem2 = document.createElement('li');
  const contListItem2I = document.createElement('i');
  const contListItem3 = document.createElement('li');
  const contListItem4 = document.createElement('li');
  const contListItem4I = document.createElement('i');
  const contListItem5 = document.createElement('li');
  const figure = document.createElement('figure');
  const imageCont = document.createElement('img');
  const contListLang = document.createElement('ul');
  const contListLang1 = document.createElement('li');
  const contListLang2 = document.createElement('li');
  const contListLang3 = document.createElement('li');
  const langText = document.createElement('button');
  const langText1 = document.createElement('button');
  const langText2 = document.createElement('button');
  const contButton = document.createElement('div');
  const buttonLive = document.createElement('a');
  const buttonSource = document.createElement('a');
  const iconButtonLive = document.createElement('i');
  const iconButtonSource = document.createElement('i');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const textLangButtonCont = document.createElement('div');
  const textCont = document.createElement('p');

  modal.classList.add('modal-pop-up');
  contPrjctDet.classList.add('pop-prjct-det');
  heading.classList.add('pop-heading-det');
  contList.classList.add('pop-proj-info');
  figure.classList.add('pop-img-cont');
  imageCont.classList.add('pop-img-proj');
  contDetailwrapper.classList.add('cont-prjct-wrapper');
  textLangButtonCont.classList.add('pop-info-cont');
  textCont.classList.add('pop-text');
  contListLang.classList.add('cont-list');
  contButton.classList.add('cont-button');
  contListItem1.classList.add('title-info');
  contListItem2.classList.add('icon-dot-cont');
  contListItem2I.classList.add('fas');
  contListItem2I.classList.add('color__circle');
  contListItem3.classList.add('job-info');
  contListItem4.classList.add('icon-dot-cont2');
  contListItem4I.classList.add('fas');
  contListItem4I.classList.add('color__circle');
  contListItem5.classList.add('year-info');
  langText.classList.add('lang-text');
  langText1.classList.add('lang-text');
  langText2.classList.add('lang-text');
  buttonLive.classList.add('btn-live');
  buttonSource.classList.add('btn-source');
  iconButtonLive.classList.add('fas');
  iconButtonSource.classList.add('fab');
  span1.classList.add('live-btn-text');
  span2.classList.add('source-btn-text');
  contListLang1.classList.add('list-lang-item');
  contListLang2.classList.add('list-lang-item');
  contListLang3.classList.add('list-lang-item');

  body.appendChild(modal);
  body.appendChild(contPrjctDet);
  contPrjctDet.appendChild(contDetailwrapper);
  contDetailwrapper.appendChild(heading);
  contDetailwrapper.appendChild(contList);
  contList.appendChild(contListItem1);
  contList.appendChild(contListItem2);
  contListItem2.appendChild(contListItem2I);
  contList.appendChild(contListItem3);
  contList.appendChild(contListItem4);
  contListItem4.appendChild(contListItem4I);
  contList.appendChild(contListItem5);
  contDetailwrapper.appendChild(figure);
  figure.appendChild(imageCont);
  contDetailwrapper.appendChild(textLangButtonCont);
  textLangButtonCont.appendChild(textCont);
  textLangButtonCont.appendChild(contListLang);
  textLangButtonCont.appendChild(contButton);
  contListLang.appendChild(contListLang1);
  contListLang.appendChild(contListLang2);
  contListLang.appendChild(contListLang3);
  contListLang1.appendChild(langText);
  contListLang2.appendChild(langText1);
  contListLang3.appendChild(langText2);
  contButton.appendChild(buttonLive);
  contButton.appendChild(buttonSource);
  buttonLive.appendChild(span1);
  buttonLive.appendChild(iconButtonLive);
  buttonSource.appendChild(span2);
  buttonSource.appendChild(iconButtonSource);

  const projectInfo = {
    project1: {
      title: 'Tonic',
      prj_info: {
        title: 'Canopy', class: 'fa-circle', job: 'Back End Dev', year: 2015,
      },
      url_img: './images/SnapshootPortfolio.png',
      text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      languages: ['html', 'css', 'javascript'],
      button_live: { url: '#', icon_class: 'fa-life-ring', btn_live: 'See live' },
      button_source: { url: '#', icon_class: 'fa-github-square', btn_source: 'See Source' },
    },
    project2: {
      title: 'Multi-Post Stories',
      prj_info: {
        title: 'Canopy', class: 'fa-circle', job: 'Back End Dev', year: 2015,
      },
      url_img: './images/SnapshootPortfolio1.png',
      text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      languages: ['html', 'css', 'javascript'],
      button_live: { url: '#', icon_class: 'fa-life-ring', btn_live: 'See live' },
      button_source: { url: '#', icon_class: 'fa-github-square', btn_source: 'See Source' },
    },
    project3: {
      title: 'Tonic',
      prj_info: {
        title: 'Canopy', class: 'fa-circle', job: 'Back End Dev', year: 2015,
      },
      url_img: './images/SnapshootPortfolio2.jpg',
      text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      languages: ['html', 'css', 'javascript'],
      button_live: { url: '#', icon_class: 'fa-life-ring', btn_live: 'See live' },
      button_source: { url: '#', icon_class: 'fa-github-square', btn_source: 'See Source' },
    },
    project4: {
      title: 'Multi-Post Stories',
      prj_info: {
        title: 'Canopy', class: 'fa-circle', job: 'Back End Dev', year: 2015,
      },
      url_img: './images/SnapshootPortfolio3.png',
      text_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      languages: ['html', 'css', 'javascript'],
      button_live: { url: '#', icon_class: 'fa-life-ring', btn_live: 'See live' },
      button_source: { url: '#', icon_class: 'fa-github-square', btn_source: 'See Source' },
    },
  };

  const projectButton = document.querySelectorAll('#project1, #project2, #project3, #project4');
  const headingTitle = document.querySelector('.pop-heading-det');
  const titleInfo = document.querySelector('.title-info');
  const contInfoDot = document.querySelector('.icon-dot-cont i');
  const contInfoDot2 = document.querySelector('.icon-dot-cont2 i');
  const jobInfo = document.querySelector('.job-info');
  const yearInfo = document.querySelector('.year-info');
  const imgPop = document.querySelector('.pop-img-proj');
  const prjText = document.querySelector('.pop-text');
  const langBtn = document.querySelectorAll('.lang-text');
  const btnLiveText = document.querySelector('.live-btn-text');
  const btnLiveIcon = document.querySelector('.live-btn-text + .fas');
  const btnSourceText = document.querySelector('.source-btn-text');
  const btnSourceIcon = document.querySelector('.source-btn-text + .fab');
  projectButton.forEach((btn) => {
    function popDetail() {
      headingTitle.textContent = projectInfo[btn.id].title;
      titleInfo.textContent = projectInfo[btn.id].prj_info.title;
      contInfoDot.classList.add(`${projectInfo[btn.id].prj_info.class}`);
      jobInfo.textContent = projectInfo[btn.id].prj_info.job;
      contInfoDot2.classList.add(`${projectInfo[btn.id].prj_info.class}`);
      yearInfo.textContent = projectInfo[btn.id].prj_info.year;
      imgPop.setAttribute('src', `${projectInfo[btn.id].url_img}`);
      prjText.textContent = projectInfo[btn.id].text_content;
      for (let i = 0; i < projectInfo[btn.id].languages.length; i += 1) {
        langBtn[i].textContent = projectInfo[btn.id].languages[i];
      }
      btnLiveText.textContent = projectInfo[btn.id].button_live.btn_live;
      btnSourceText.textContent = projectInfo[btn.id].button_source.btn_source;
      btnLiveIcon.classList.add(`${projectInfo[btn.id].button_live.icon_class}`);
      btnSourceIcon.classList.add(`${projectInfo[btn.id].button_source.icon_class}`);
    }
    btn.addEventListener('click', popDetail);
  });
});

const navMobileClose = document.querySelector('.icon-cont');
const mobileMenu = document.querySelector('.mobile-menu');
const humbMenu = document.querySelector('#open');
const section = document.querySelectorAll('.link-mobile-menu');
function closeMenu() { mobileMenu.style.display = 'none'; }
navMobileClose.addEventListener('click', closeMenu);
function OpenMenu() {
  mobileMenu.style.display = 'block';
}
humbMenu.addEventListener('click', OpenMenu);
section.forEach((item) => {
  item.addEventListener('click', closeMenu);
});