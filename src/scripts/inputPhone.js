import {validateForm, validatePhone, changePlaceholder} from './lib';
import {
    btnSubmitElement,
    inputEmailElement,
    verificationPhoneIconElement,
    inputINNElement,
    inputPhoneElement,
    inputUrlElement
} from "./DOMElements";

//Замена значения placeholder при фокусировке и расфокусировке input`a
changePlaceholder(inputPhoneElement, 'Номер телефона', '+7(123)456-78-90');

//Отображение  картинки с галочкой при валидном значении номера телефона и валидация всей формы целиком
inputPhoneElement.addEventListener('input', () => {
    if (validatePhone(inputPhoneElement.value)) {
        verificationPhoneIconElement.classList.remove('display-none');
    } else {
        verificationPhoneIconElement.classList.add('display-none');
    }
    validateForm (btnSubmitElement, inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputUrlElement.value);
})

