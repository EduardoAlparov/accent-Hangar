export function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

export function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const IS_MOBILE = window.matchMedia('(max-width: 640px)').matches;
export const IS_TABLET = window.matchMedia('(max-width: 1024px)').matches;
export const IS_LAPTOP = window.matchMedia('(max-width: 1200px)').matches;


export function disableScroll() {
    let pagePosition = window.scrollY;
    lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';

    function lockPadding() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        let fixBlocks = document.querySelectorAll('.fix-block');
        fixBlocks.forEach((el) => {
            el.style.paddingRight = paddingOffset;
        });
        document.body.style.paddingRight = paddingOffset;
      }
}

export function enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');

    function unlockPadding() {
        let fixBlocks = document.querySelectorAll('.fix-block');
        fixBlocks.forEach((el) => {
            el.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
    }
}