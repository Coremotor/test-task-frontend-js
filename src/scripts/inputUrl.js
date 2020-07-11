import {changePlaceholder, validateForm, validateUrl} from "./lib";
import {
    btnSubmitElement,
    inputEmailElement,
    verificationUrlIconElement,
    inputINNElement,
    inputPhoneElement,
    inputUrlElement
} from "./DOMElements";

//Замена значения placeholder при фокусировке и расфокусировке input`a
changePlaceholder(inputUrlElement, 'Сайт магазина', 'example.com');

//Отображение  картинки с галочкой при валидном значении URL и валидация всей формы целиком
inputUrlElement.addEventListener('input', () => {
    if (validateUrl(inputUrlElement.value)) {
        verificationUrlIconElement.classList.remove('display-none');
    } else {
        verificationUrlIconElement.classList.add('display-none');
    }
    validateForm (btnSubmitElement, inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputUrlElement.value);
});



