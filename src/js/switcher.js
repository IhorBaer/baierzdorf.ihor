const checkboxBtn = document.querySelector('#theme-switch-toggle');
console.log(checkboxBtn);
const body = document.querySelector('body');
const modal = document.querySelector('.modal-container');
const aside = document.querySelector('.aside');
const mob = document.querySelector('.mob-contact');
const section = document.querySelector('.section');
const mobSummary = document.querySelector('.mob-summary');
const close = document.querySelector('.btn-modal-close');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

checkboxBtn.addEventListener('change', changeTheme);

function changeTheme(e) {
  const theme = e.target.checked;
  if (theme) {
    body.classList.add(DARK);
    modal.classList.add(DARK);
    aside.classList.add(DARK);
    mob.classList.add(DARK);
    section.classList.add(DARK);
    mobSummary.classList.add(DARK);
    close.classList.add(DARK);

    body.classList.remove(LIGHT);
    modal.classList.remove(LIGHT);
    aside.classList.remove(LIGHT);
    mob.classList.remove(LIGHT);
    section.classList.remove(LIGHT);
    mobSummary.classList.remove(LIGHT);
    close.classList.remove(LIGHT);

    localStorage.setItem('theme', DARK);
  } else {
    body.classList.add(LIGHT);
    modal.classList.add(LIGHT);
    aside.classList.add(LIGHT);
    mob.classList.add(LIGHT);
    section.classList.add(LIGHT);
    mobSummary.classList.add(LIGHT);
    close.classList.add(LIGHT);

    body.classList.remove(DARK);
    modal.classList.remove(DARK);
    aside.classList.remove(DARK);
    mob.classList.remove(DARK);
    section.classList.remove(DARK);
    mobSummary.classList.remove(DARK);
    close.classList.remove(DARK);

    localStorage.setItem('theme', LIGHT);
  }
}

let theme = localStorage.getItem('theme');

if (!theme) {
  theme = LIGHT;
  localStorage.setItem('theme', theme);
}
body.classList.add(theme);
modal.classList.add(theme);
aside.classList.add(theme);
mob.classList.add(theme);
section.classList.add(theme);
mobSummary.classList.add(theme);
close.classList.add(theme);
checkboxBtn.checked = theme === LIGHT ? false : true;
