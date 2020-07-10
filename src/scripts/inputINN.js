import { validateINN, validateForm } from './validateForm';

const inputINNElement = document.querySelector('.js-form__inn-field');
const inputPhoneElement = document.querySelector('.js-form__phone-field');
const inputEmailElement = document.querySelector('.js-form__email-field');
const inputSiteElement = document.querySelector('.js-form__site-field');
const INNVerificationResultBlockElement = document.querySelector('.js-inn-verification-result-block');
const verificationINNIconElement = document.querySelector('.js-inn-ok');


//Замена значения placeholder при фокусировке и расфокусировке input`a
inputINNElement.addEventListener('focus', () => {
    inputINNElement.setAttribute('placeholder', 'Введите 10 или 12 цифр');
})
inputINNElement.addEventListener('blur', () => {
    inputINNElement.setAttribute('placeholder', 'ИНН организации или ИП');
})

//Отображение количества введенных цифр и отображение картинки с галочкой при 10 и 12 введенный цифрах
inputINNElement.addEventListener('input', () => {

    INNVerificationResultBlockElement.textContent = inputINNElement.value.length;
    if (inputINNElement.value.length === 0) {
        INNVerificationResultBlockElement.textContent = "";
    }

    if (validateINN(inputINNElement.value.length)) {
        verificationINNIconElement.classList.remove('display-none');
        INNVerificationResultBlockElement.classList.add('display-none');
    } else {
        verificationINNIconElement.classList.add('display-none');
        INNVerificationResultBlockElement.classList.remove('display-none');
    }
    validateForm (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);
});



