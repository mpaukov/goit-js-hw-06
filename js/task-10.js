function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesParent: document.querySelector('#boxes'),
  inputEl: document.querySelector('#controls').firstElementChild,
};
refs.createBtn.addEventListener('click', createBtnListener);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBtnListener() {
  const amountOfBoxes = createBoxes(refs.inputEl.value);
  refs.boxesParent.append(...amountOfBoxes);
}

function createBoxes(amount) {
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = 'block';
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = boxEl.style.width;
    boxElements.push(boxEl);
  }
  return boxElements;
}

function destroyBoxes() {
  refs.boxesParent.innerHTML = '';
}
