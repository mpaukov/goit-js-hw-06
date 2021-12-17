const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtb: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtb.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  changeValueEl(counterValue);
}

function increment() {
  counterValue += 1;
  changeValueEl(counterValue);
}

function changeValueEl(value) {
  refs.valueEl.textContent = value;
}
