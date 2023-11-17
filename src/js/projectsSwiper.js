import Swiper, { Navigation } from 'swiper';

export default () => {
  const projectsSliderCovers = document.querySelectorAll('.js-projects-swiper');

  if( projectsSliderCovers.length > 0 ) {
    Array.from(projectsSliderCovers).forEach( item => {
      const projectsSwiper = new Swiper( item.querySelector('.swiper'), {
        slidesPerView: 3,
        spaceBetween: 30,

        modules: [Navigation],

        navigation: {
          nextEl: item.querySelector('.projects-slider__slider-btn--next'),
          prevEl: item.querySelector('.projects-slider__slider-btn--prev'),
        },
      })
    })
  }
}