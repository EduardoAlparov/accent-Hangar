export default () => {
  const tabs = document.querySelectorAll('.js-prices-tab');
  const prices = document.querySelectorAll('.js-filtered-item');

  if(tabs.length > 0) {
    tabs[0].classList.add('tab--active');
    
    Array.from(tabs).forEach( tab => {
      tab.addEventListener('click', () => {
        let findedId = tab.dataset.btn;
        let els = document.querySelectorAll(`[data-id=${findedId}]`);


        if(els.length > 0) {
          Array.from(prices).forEach( price => {
            price.classList.add('visually-hidden');
          });

          Array.from(tabs).forEach( tab => {
            tab.classList.remove('tab--active');
          })
          
          Array.from(els).forEach( el => {
            el.classList.remove('visually-hidden');
          })

          tab.classList.add('tab--active');
        }

        if(tab.dataset.btn === 'all') {
          Array.from(prices).forEach( price => {
            price.classList.remove('visually-hidden');

            Array.from(tabs).forEach( tab => {
              tab.classList.remove('tab--active');
            })

            tab.classList.add('tab--active');
          });
        }

        if(tab.classList.contains('js-mobile-tab')) {
          document.querySelector('.js-price-type-value').textContent = '';
          document.querySelector('.js-price-type-value').textContent = tab.textContent;
          document.querySelector('.modal--tabs').querySelector('.modal-close').click();
        }
      })
    })
  }
}