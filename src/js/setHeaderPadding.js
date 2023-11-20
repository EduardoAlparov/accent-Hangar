export default () => {
  const imageIntroSection = document.querySelector('.image-intro');
  const header = document.querySelector('.page-header');

  if(!imageIntroSection | !header) return;

  let setHeaderHeightVar = () => {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  }

  setHeaderHeightVar();

  window.addEventListener('resize', setHeaderHeightVar);
}