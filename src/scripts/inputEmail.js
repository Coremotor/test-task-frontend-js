import {validateEmail, validateForm, changePlaceholder} from './lib';
import {
    btnSubmitElement,
    inputEmailElement,
    verificationEmailIconElement,
    inputINNElement,
    inputPhoneElement,
    inputUrlElement
} from "./DOMElements";

//Замена значения placeholder при фокусировке и расфокусировке input`a
changePlaceholder(inputEmailElement, 'Электронная почта', 'example@mail.com')

//Отображение  картинки с галочкой при валидном значении адреса почты и валидация всей формы целиком
inputEmailElement.addEventListener('input', () => {
    if (validateEmail(inputEmailElement.value)) {
        verificationEmailIconElement.classList.remove('display-none');
    } else {
        verificationEmailIconElement.classList.add('display-none');
    }
    validateForm (btnSubmitElement, inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputUrlElement.value);
})

