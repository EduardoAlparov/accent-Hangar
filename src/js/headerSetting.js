import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default () => {
  const header = document.querySelector('.page-header');

  if(!header) return;

  let str = ScrollTrigger.create({
    start: 0,

    onUpdate: (self) => {
      if( (self.direction < 0) ) {
        document.body.classList.add('page-header-is-fixed');
      } else {
        document.body.classList.remove('page-header-is-fixed');
      }

      if(self.progress.toFixed(3) == 0) {
        document.body.classList.remove('page-header-is-fixed');
      }
    }
  });
}