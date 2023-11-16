import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export default () => {
  const calcSwiperWrapper = document.querySelectorAll('.js-calc-swiper');
  if(calcSwiperWrapper.length > 0) {
    calcSwiperWrapper.forEach(item => {
      const calcSwiper  = new Swiper(item, {
        speed: 0,
        grabCursor: false,
        simulateTouch: false,

        on: {
          init: function () {
            const nextBtn = item.querySelector('.js-set-next-form');

            nextBtn.onclick = () => {
              this.slideNext(0);
            }
          },
        },
      })
    })
  }
}