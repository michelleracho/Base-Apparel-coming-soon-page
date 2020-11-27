const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#btn-submit');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');
const form = document.querySelector('.coming-soon__form');

const validateEmail = email => {
  // abc@email.com
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
};

const checkInput = e => {
  e.preventDefault();

  const isValid = validateEmail(emailInput.value);

  if (!isValid || emailInput.value === '') {
    emailInput.classList.add('error-input');
    errorMsg.classList.add('show');
    errorIcon.classList.add('show');
  } else {
    // emailInput.value === '';
    form.reset();
    emailInput.classList.remove('error-input');
    errorMsg.classList.remove('show');
    errorIcon.classList.remove('show');
  }
};

submitBtn.addEventListener('click', checkInput);
