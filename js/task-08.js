const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value && password.value) {
    const formFields = { email: email.value, password: password.value };
    event.currentTarget.reset();
    return toConsole(formFields);
  }
  return alert('All form fields must be completed');
}

function toConsole({ email, password }) {
  console.log('email:', email);
  console.log('password:', password);
}
