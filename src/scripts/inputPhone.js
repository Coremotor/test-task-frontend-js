import {validateForm, validatePhone} from './validateForm';
const inputINNElement = document.querySelector('.js-form__inn-field');
const inputPhoneElement = document.querySelector('.js-form__phone-field');
const inputEmailElement = document.querySelector('.js-form__email-field');
const inputSiteElement = document.querySelector('.js-form__site-field');
const verificationPhoneIconElement = document.querySelector('.js-phone-ok');

//Замена значения placeholder при фокусировке и расфокусировке input`a
inputPhoneElement.addEventListener('focus', () => {
    inputPhoneElement.setAttribute('placeholder', 'X(XXX)XXX-XX-XX');
})
inputPhoneElement.addEventListener('blur', () => {
    inputPhoneElement.setAttribute('placeholder', 'Номер телефона');
})

//Отображение  картинки с галочкой при валидном значении адреса почты
inputPhoneElement.addEventListener('input', () => {
    if (validatePhone(inputPhoneElement.value)) {
        verificationPhoneIconElement.classList.remove('display-none');
    } else {
        verificationPhoneIconElement.classList.add('display-none');
    }
    validateForm (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);
})

