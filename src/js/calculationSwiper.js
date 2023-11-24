import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export default () => {
  const calcSwiperWrapper = document.querySelectorAll('.js-calc-swiper');

  if(calcSwiperWrapper.length > 0) {
    calcSwiperWrapper.forEach(item => {
      const calcSwiper  = new Swiper(item, {
        speed: 0,
        grabCursor: false,
        simulateTouch: false,
        autoHeight: true,

        breakpoints: {
          1024: {
            autoHeight: true,
          }
        },

        on: {
          init: function () {
            const nextBtn = item.querySelector('.js-set-next-form');
            const prevBtn = item.querySelector('.js-set-prev-form');
            const sizeInputs = item.querySelectorAll('.js-input-size');

            nextBtn.onclick = () => {
              let validationBoolean = true;

              Array.from(sizeInputs).forEach( input => {
                if(!input.value) {
                  validationBoolean = false;
                  setInputError(input);
                }
              })

              if(validationBoolean) {
                this.slideNext(0);
              } else {
                return;
              }
            }

            prevBtn.onclick = () => {
              this.slidePrev(0);
            }
          },
        },
      })
    })
  }

  let setInputError = (el) => {
    if(el.closest('.input-box')) {
      el.closest('.input-box').classList.add('input-box--with-error');

      setTimeout(() => {
        el.closest('.input-box').classList.remove('input-box--with-error');
      }, 5000);
    }
   }
}