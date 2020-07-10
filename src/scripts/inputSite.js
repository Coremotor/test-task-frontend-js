import {validateForm, validateUrl} from './validateForm';
const inputINNElement = document.querySelector('.js-form__inn-field');
const inputPhoneElement = document.querySelector('.js-form__phone-field');
const inputEmailElement = document.querySelector('.js-form__email-field');
const inputSiteElement = document.querySelector('.js-form__site-field');
const verificationSiteIconElement = document.querySelector('.js-site-ok');

//Замена значения placeholder при фокусировке и расфокусировке input`a
inputSiteElement.addEventListener('focus', () => {
    inputSiteElement.setAttribute('placeholder', 'www.example.com');
})
inputSiteElement.addEventListener('blur', () => {
    inputSiteElement.setAttribute('placeholder', 'Сайт магазина');
})

//Отображение  картинки с галочкой при валидном значении адреса почты
inputSiteElement.addEventListener('input', () => {
    if (validateUrl(inputSiteElement.value)) {
        verificationSiteIconElement.classList.remove('display-none');
    } else {
        verificationSiteIconElement.classList.add('display-none');
    }
    validateForm (inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputSiteElement.value);
});



