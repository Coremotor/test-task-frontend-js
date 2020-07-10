import {validateEmail, validateForm} from './validateForm';
const inputINNElement = document.querySelector('.js-form__inn-field');
const inputPhoneElement = document.querySelector('.js-form__phone-field');
const inputEmailElement = document.querySelector('.js-form__email-field');
const inputSiteElement = document.querySelector('.js-form__site-field');
const verificationEmailIconElement = document.querySelector('.js-email-ok');

//Замена значения placeholder при фокусировке и расфокусировке input`a
inputEmailElement.addEventListener('focus', () => {
    inputEmailElement.setAttribute('placeholder', 'example@mail.com');
})
inputEmailElement.addEventListener('blur', () => {
    inputEmailElement.setAttribute('placeholder', 'Электронная почта');
})

//Отображение  картинки с галочкой при валидном значении адреса почты
inputEmailElement.addEventListener('input', () => {
    if (validateEmail(inputEmailElement.value)) {
        verificationEmailIconElement.classList.remove('display-none');
    } else {
        verificationEmailIconElement.classList.add('display-none');
    }
})

