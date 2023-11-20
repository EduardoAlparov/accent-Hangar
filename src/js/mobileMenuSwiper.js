import Swiper, { Navigation, Pagination, Autoplay, Freemode } from 'swiper';

export default () => {
  const mobileMenuSwiperDiv = document.querySelector('.js-mobile-menu-swiper');

  if(!mobileMenuSwiperDiv) return;

  const mobileMenuSwiper = new Swiper(mobileMenuSwiperDiv, {
    allowTouchMove: false,
    followFinger: false,
    grabCursor: false,

    on: {
      init: function () {
        let prevBtns = document.querySelectorAll('.js-mobile-swiper-back');
        let nextBtns = document.querySelectorAll('.js-mobile-swiper-next');

        Array.from(prevBtns).forEach( btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();

            this.slideTo(0, 0, () => console.log('change error'))
          })
        })

        Array.from(nextBtns).forEach( btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            let routeToSlide = btn.dataset.route;
            if(routeToSlide) {
              this.slideTo(routeToSlide, 0, () => console.log('change error'))
            }
          })
        })
      },
    },
  })
}