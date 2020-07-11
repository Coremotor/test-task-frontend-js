import {validateINN, validateForm, changePlaceholder} from './lib';
import {
    btnSubmitElement,
    inputEmailElement,
    verificationINNIconElement,
    inputINNElement,
    inputPhoneElement,
    inputUrlElement,
    INNVerificationResultBlockElement
} from "./DOMElements";

//Замена значения placeholder при фокусировке и расфокусировке input`a
changePlaceholder(inputINNElement, 'ИНН организации или ИП', 'Введите 10 или 12 цифр')

//Отображение количества введенных цифр и отображение картинки с галочкой при 10 и 12 введенный цифрах и валидация всей формы целиком
inputINNElement.addEventListener('input', () => {

    //отображение кол-ва чисел введенных в поле ИНН
    INNVerificationResultBlockElement.textContent = inputINNElement.value.length;
    if (inputINNElement.value.length === 0) {
        INNVerificationResultBlockElement.textContent = "";
    }

// Здесь можно еще дополнительно проверить на ввод только чисел,
// но так как в разметке тип инпута стоит "number",
// дополнительно проверок я не стал делать
    if (validateINN(inputINNElement.value.length)) {
        verificationINNIconElement.classList.remove('display-none');
        INNVerificationResultBlockElement.classList.add('display-none');
    } else {
        verificationINNIconElement.classList.add('display-none');
        INNVerificationResultBlockElement.classList.remove('display-none');
    }
    validateForm(btnSubmitElement, inputINNElement.value.length, inputPhoneElement.value, inputEmailElement.value, inputUrlElement.value);

});