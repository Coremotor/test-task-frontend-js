const btnSubmitElement = document.querySelector('#js-btn-submit');

//Ф-ия замены значения placeholder при фокусировке и расфокусировке input`a
export const changePlaceholder = (elem, firstPlaceholder, secondPlaceholder) => {
    elem.addEventListener('focus', () => {
        elem.setAttribute('placeholder', secondPlaceholder);
    })
    elem.addEventListener('blur', () => {
        elem.setAttribute('placeholder', firstPlaceholder);
    })
}

//Ф-ия вылидации длинный ИНН
export const validateINN = (length) => {
    let result = false;
    if (length === 10 || length === 12) {
        result = true;
    }
    return result;
}

// Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,
// но логика остается такой же)
export const validatePhone = (phoneNumber) => {
    let re = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
    return re.test(phoneNumber);
}

//Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,
// но логика остается такой же)
export const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//Ф-ия валидации адреса сайта (можно сделать более узкую валидацию расширя регулярное выражение,
// но логика остается такой же)
export const validateUrl = (url) => {
    let re = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return re.test(url);
}

//Ф-ия активации кнопки отправки формы
export const validateForm = (button, inn, phone, email, url) => {
    let result = false;
    if (validateINN(inn) && validatePhone(phone) && validateEmail(email) && validateUrl(url)) {
        result = true;
        btnSubmitElement.classList.remove('form__btn-submit-disabled');
        btnSubmitElement.classList.add('form__btn-submit');
        btnSubmitElement.removeAttribute('disabled');
    } else {
        btnSubmitElement.classList.add('form__btn-submit-disabled');
        btnSubmitElement.classList.remove('form__btn-submit');
        btnSubmitElement.setAttribute('disabled', 'true');
    }
    return result;
}
