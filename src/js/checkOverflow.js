export default () => {
  const stickyElement = document.querySelector('.article-section__container > section > nav ');
  console.log(stickyElement);
  let parent = stickyElement.parentElement;
  while (parent) {
    var hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow != 'visible') {
      console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
  }
}