export default () => {
  const expandButtons = document.querySelectorAll('.review-cart__review > .expand-button')
  const reviewWrappers = document.querySelectorAll('.review-cart__text-wrapper')

  if(expandButtons.length > 0) {   
    Array.from(expandButtons).forEach( btn => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.review-cart__review').classList.toggle('review-cart__review--expand');

        if(btn.dataset.text === "Читать полностью") {
          btn.dataset.text = "Cкрыть";
        } else if(btn.dataset.text === "Cкрыть") {
          btn.dataset.text = "Читать полностью";
        } else {
          return;
        }
      })
    })
  }

  if(reviewWrappers.length > 0) {
    Array.from(reviewWrappers).forEach( wrapper => {
      let lineClamp = window.getComputedStyle(wrapper, null).getPropertyValue('-webkit-line-clamp');
      let lineCount = 0;

      if(wrapper.querySelectorAll('p').length > 0) {
        wrapper.querySelectorAll('p').forEach( p => {
          lineCount += countLines(p);
        })
      }

      if((lineCount - 1) > lineClamp) {
        wrapper.parentElement.classList.add('review-cart__review--with-btn');
      }
    })
  }


  function countLines(el) {
    let lineHeight = parseInt(window.getComputedStyle(el, null).getPropertyValue('line-height'));
    return (el.offsetHeight / lineHeight);
  }
}