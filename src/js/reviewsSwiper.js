import Swiper, { Navigation } from 'swiper';

export default () => {
  const reviewsSliderCovers = document.querySelectorAll('.js-reviews-swiper');

  if( reviewsSliderCovers.length > 0 ) {
    Array.from(reviewsSliderCovers).forEach(item => {
      const reviewsSwiper = new Swiper( item.querySelector('.swiper'), {
        slidesPerView: 2,
        spaceBetween: 15,
  
        modules: [Navigation],
  
        navigation: {
          nextEl: item.querySelector('.reviews__slider-btn--next'),
          prevEl: item.querySelector('.reviews__slider-btn--prev'),
        },
      })
    })
  }
}