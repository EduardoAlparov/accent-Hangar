import Swiper, { Navigation } from 'swiper';

export default () => {
  const articleSwiperContainer = document.querySelectorAll('.js-article-swiper');

  if(articleSwiperContainer.length > 0) {
    Array.from(articleSwiperContainer).forEach( articleSwiperItem => {
      const articleSwiper = new Swiper(articleSwiperItem.querySelector('.swiper'), {
        spaceBetween: 15,
        width: '310',

        modules: [Navigation],

        navigation: {
          nextEl: articleSwiperItem.querySelector('._slider-btn--next'),
          prevEl: articleSwiperItem.querySelector('._slider-btn--prev'),
        },

        breakpoints: {
          992: {
            width: null,
            slidesPerView: 2,
            spaceBetween: 30,
          }
        }
      })
    })
  } else {
    return;
  }
}