function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  changeSpanText(newColor);
}

function changeSpanText(color) {
  spanEl.textContent = color;
}
