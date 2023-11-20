import { disableScroll, enableScroll } from './utils';

export default () => {
  const body = document.body;
  const mobileMenu = document.getElementById('js-open-mobile-menu');

  if(!mobileMenu) return;
  

  mobileMenu.addEventListener('click', () => {
    body.classList.toggle('mobile-menu-is-open');
  })
}