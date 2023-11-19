import Swiper, { Navigation } from 'swiper';

export default () => {
  const reviewsSliderCovers = document.querySelectorAll('.js-reviews-swiper');

  if( reviewsSliderCovers.length > 0 ) {
    Array.from(reviewsSliderCovers).forEach(item => {
      const reviewsSwiper = new Swiper( item.querySelector('.swiper'), {
        spaceBetween: 15,
        width: '310',
        updateOnWindowResize: true,
  
        modules: [Navigation],
  
        navigation: {
          nextEl: item.querySelector('.reviews__slider-btn--next'),
          prevEl: item.querySelector('.reviews__slider-btn--prev'),
        },

        breakpoints: {
          640: {
            width: '510',
          },
          992: {
            width: null,
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }
      })
    })
  }
}