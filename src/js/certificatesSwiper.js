import Swiper, { Navigation } from 'swiper';

export default () => {
  const certificatesContainer = document.querySelector('.js-certificates-swiper');

  if(!certificatesContainer) return;
  
  const certificatesSwiper = new Swiper( certificatesContainer.querySelector('.swiper'), {
    spaceBetween: 15,
    width: '221',
    updateOnWindowResize: true,

    modules: [Navigation],

    navigation: {
      nextEl: certificatesContainer.querySelector('.certificates__slider-btn--next'),
      prevEl: certificatesContainer.querySelector('.certificates__slider-btn--prev'),
    },

    breakpoints: {
      640: {
        width: '442',
        updateOnWindowResize: true,
      },
      992: {
        width: null,
        updateOnWindowResize: true,
        slidesPerView: 6,
        spaceBetween: 15,
      },
    }
  })
}