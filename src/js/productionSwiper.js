import Swiper, { Navigation } from 'swiper';

export default () => {
  const productionImageWrapper = document.querySelector('.production__images-wrapper');

  if(!productionImageWrapper) return;
  
  tabletDetect()

  window.addEventListener('resize', tabletDetect);

  function tabletDetect() {
    let isTablet = window.matchMedia('(max-width: 1024px)').matches;
    
    if(isTablet) {
      productionImageWrapper.classList.add('swiper');
      productionImageWrapper.querySelector('.production__images').classList.add('swiper-wrapper');
      Array.from(productionImageWrapper.querySelectorAll('.production__image')).forEach( item => {
        item.classList.add('swiper-slide');
      });

      const prodSwiper = new Swiper(productionImageWrapper, {
        loop: false,
        spaceBetween: 10,
        width: '215',

        slideVisibleClass: 'swiper-slide-active'
      });

    } else {
      productionImageWrapper.classList.remove('swiper');
      productionImageWrapper.querySelector('.production__images').classList.remove('swiper-wrapper');
      Array.from(productionImageWrapper.querySelectorAll('.production__image')).forEach( item => {
        item.classList.remove('swiper-slide');
      })
    }
  }
}