import { disableScroll, enableScroll } from './utils';

export default function dropMenuControl() {
  const body = document.body;
  const header = document.querySelector('.page-header');
  const openBtn = document.getElementById('js-open-dropmenu');

  if(!openBtn) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('dropmenu-is-open');

    setTimeout(() => {
      if(body.classList.contains('dropmenu-is-open')) {
        disableScroll();
      } else {
        enableScroll();
      }
    }, 200);
  })
}