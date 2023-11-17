export default () => {
  const fileInputs = document.querySelectorAll('.js-file-upload');

  if(fileInputs.length > 0) {
    Array.from(fileInputs).forEach( input => {
      input.querySelector('input[type="file"]').addEventListener('change', (e) => {
        if(e.target.files[0]) {
          input.classList.add('main-button--upload-active');
        }
      })
    })
  }
}