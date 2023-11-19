import Swiper, { Navigation } from 'swiper';

export default () => {
  const stagesListWrapper = document.querySelector('.stages__list-wrapper');

  if(!stagesListWrapper) return;

  laptopDetect();

  window.addEventListener('resize', laptopDetect);

  function laptopDetect() {
    let isLaptop = window.matchMedia('(max-width: 1200px)').matches;
    let stagesSwiper;

    if(isLaptop) {
      stagesListWrapper.classList.add('swiper');
      stagesListWrapper.classList.add('js-stages-swiper');

      stagesSwiper = new Swiper('.js-stages-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        width: 320,
        slideClass: 'stages__item',
        wrapperClass: 'stages__list',
      });

    } else {
      stagesListWrapper.classList.remove('swiper');
      stagesListWrapper.classList.remove('js-stages-swiper');
      return;
    }
  }
}