const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  titleEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
});
