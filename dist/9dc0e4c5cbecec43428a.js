/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/all.scss */ \"./styles/all.scss\");\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_all_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_inputINN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/inputINN */ \"./scripts/inputINN.js\");\n/* harmony import */ var _scripts_inputUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/inputUrl */ \"./scripts/inputUrl.js\");\n/* harmony import */ var _scripts_inputEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/inputEmail */ \"./scripts/inputEmail.js\");\n/* harmony import */ var _scripts_inputPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/inputPhone */ \"./scripts/inputPhone.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/DOMElements.js":
/*!********************************!*\
  !*** ./scripts/DOMElements.js ***!
  \********************************/
/*! exports provided: inputINNElement, inputPhoneElement, inputEmailElement, inputUrlElement, INNVerificationResultBlockElement, btnSubmitElement, verificationINNIconElement, verificationEmailIconElement, verificationUrlIconElement, verificationPhoneIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputINNElement\", function() { return inputINNElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputPhoneElement\", function() { return inputPhoneElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputEmailElement\", function() { return inputEmailElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inputUrlElement\", function() { return inputUrlElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INNVerificationResultBlockElement\", function() { return INNVerificationResultBlockElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnSubmitElement\", function() { return btnSubmitElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verificationINNIconElement\", function() { return verificationINNIconElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verificationEmailIconElement\", function() { return verificationEmailIconElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verificationUrlIconElement\", function() { return verificationUrlIconElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verificationPhoneIconElement\", function() { return verificationPhoneIconElement; });\nconst inputINNElement = document.querySelector('.js-form__inn-field');\r\nconst inputPhoneElement = document.querySelector('.js-form__phone-field');\r\nconst inputEmailElement = document.querySelector('.js-form__email-field');\r\nconst inputUrlElement = document.querySelector('.js-form__site-field');\r\nconst INNVerificationResultBlockElement = document.querySelector('.js-inn-verification-result-block');\r\nconst btnSubmitElement = document.querySelector('#js-btn-submit');\r\nconst verificationINNIconElement = document.querySelector('.js-inn-ok');\r\nconst verificationEmailIconElement = document.querySelector('.js-email-ok');\r\nconst verificationUrlIconElement = document.querySelector('.js-site-ok');\r\nconst verificationPhoneIconElement = document.querySelector('.js-phone-ok');\r\n\n\n//# sourceURL=webpack:///./scripts/DOMElements.js?");

/***/ }),

/***/ "./scripts/inputEmail.js":
/*!*******************************!*\
  !*** ./scripts/inputEmail.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./scripts/lib.js\");\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMElements */ \"./scripts/DOMElements.js\");\n\r\n\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\nObject(_lib__WEBPACK_IMPORTED_MODULE_0__[\"changePlaceholder\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"], 'Электронная почта', 'example@mail.com')\r\n\r\n//Отображение  картинки с галочкой при валидном значении адреса почты и валидация всей формы целиком\r\n_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].addEventListener('input', () => {\r\n    if (Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateEmail\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].value)) {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationEmailIconElement\"].classList.remove('display-none');\r\n    } else {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationEmailIconElement\"].classList.add('display-none');\r\n    }\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"btnSubmitElement\"], _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].value);\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputEmail.js?");

/***/ }),

/***/ "./scripts/inputINN.js":
/*!*****************************!*\
  !*** ./scripts/inputINN.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./scripts/lib.js\");\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMElements */ \"./scripts/DOMElements.js\");\n\r\n\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\nObject(_lib__WEBPACK_IMPORTED_MODULE_0__[\"changePlaceholder\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"], 'ИНН организации или ИП', 'Введите 10 или 12 цифр')\r\n\r\n//Отображение количества введенных цифр и отображение картинки с галочкой при 10 и 12 введенный цифрах и валидация всей формы целиком\r\n_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].addEventListener('input', () => {\r\n\r\n    //отображение кол-ва чисел введенных в поле ИНН\r\n    _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"INNVerificationResultBlockElement\"].textContent = _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length;\r\n    if (_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length === 0) {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"INNVerificationResultBlockElement\"].textContent = \"\";\r\n    }\r\n\r\n// Здесь можно еще дополнительно проверить на ввод только чисел,\r\n// но так как в разметке тип инпута стоит \"number\",\r\n// дополнительно проверок я не стал делать\r\n    if (Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateINN\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length)) {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationINNIconElement\"].classList.remove('display-none');\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"INNVerificationResultBlockElement\"].classList.add('display-none');\r\n    } else {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationINNIconElement\"].classList.add('display-none');\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"INNVerificationResultBlockElement\"].classList.remove('display-none');\r\n    }\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"btnSubmitElement\"], _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].value);\r\n\r\n});\n\n//# sourceURL=webpack:///./scripts/inputINN.js?");

/***/ }),

/***/ "./scripts/inputPhone.js":
/*!*******************************!*\
  !*** ./scripts/inputPhone.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./scripts/lib.js\");\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMElements */ \"./scripts/DOMElements.js\");\n\r\n\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\nObject(_lib__WEBPACK_IMPORTED_MODULE_0__[\"changePlaceholder\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"], 'Номер телефона', '+7(123)456-78-90');\r\n\r\n//Отображение  картинки с галочкой при валидном значении номера телефона и валидация всей формы целиком\r\n_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].addEventListener('input', () => {\r\n    if (Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validatePhone\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].value)) {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationPhoneIconElement\"].classList.remove('display-none');\r\n    } else {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationPhoneIconElement\"].classList.add('display-none');\r\n    }\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"btnSubmitElement\"], _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].value);\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputPhone.js?");

/***/ }),

/***/ "./scripts/inputUrl.js":
/*!*****************************!*\
  !*** ./scripts/inputUrl.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./scripts/lib.js\");\n/* harmony import */ var _DOMElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMElements */ \"./scripts/DOMElements.js\");\n\r\n\r\n\r\n//Замена значения placeholder при фокусировке и расфокусировке input`a\r\nObject(_lib__WEBPACK_IMPORTED_MODULE_0__[\"changePlaceholder\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"], 'Сайт магазина', 'example.com');\r\n\r\n//Отображение  картинки с галочкой при валидном значении URL и валидация всей формы целиком\r\n_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].addEventListener('input', () => {\r\n    if (Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateUrl\"])(_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].value)) {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationUrlIconElement\"].classList.remove('display-none');\r\n    } else {\r\n        _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"verificationUrlIconElement\"].classList.add('display-none');\r\n    }\r\n    Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"]) (_DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"btnSubmitElement\"], _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputINNElement\"].value.length, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputPhoneElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputEmailElement\"].value, _DOMElements__WEBPACK_IMPORTED_MODULE_1__[\"inputUrlElement\"].value);\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./scripts/inputUrl.js?");

/***/ }),

/***/ "./scripts/lib.js":
/*!************************!*\
  !*** ./scripts/lib.js ***!
  \************************/
/*! exports provided: changePlaceholder, validateINN, validatePhone, validateEmail, validateUrl, validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePlaceholder\", function() { return changePlaceholder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateINN\", function() { return validateINN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePhone\", function() { return validatePhone; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateUrl\", function() { return validateUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForm\", function() { return validateForm; });\nconst btnSubmitElement = document.querySelector('#js-btn-submit');\r\n\r\n//Ф-ия замены значения placeholder при фокусировке и расфокусировке input`a\r\nconst changePlaceholder = (elem, firstPlaceholder, secondPlaceholder) => {\r\n    elem.addEventListener('focus', () => {\r\n        elem.setAttribute('placeholder', secondPlaceholder);\r\n    })\r\n    elem.addEventListener('blur', () => {\r\n        elem.setAttribute('placeholder', firstPlaceholder);\r\n    })\r\n}\r\n\r\n//Ф-ия вылидации длинный ИНН\r\nconst validateINN = (length) => {\r\n    let result = false;\r\n    if (length === 10 || length === 12) {\r\n        result = true;\r\n    }\r\n    return result;\r\n}\r\n\r\n// Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validatePhone = (phoneNumber) => {\r\n    let re = /\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}/;\r\n    return re.test(phoneNumber);\r\n}\r\n\r\n//Ф-ия валидации почты (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validateEmail = (email) => {\r\n    let re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n    return re.test(email);\r\n}\r\n\r\n//Ф-ия валидации адреса сайта (можно сделать более узкую валидацию расширя регулярное выражение,\r\n// но логика остается такой же)\r\nconst validateUrl = (url) => {\r\n    let re = /^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$/;\r\n    return re.test(url);\r\n}\r\n\r\n//Ф-ия активации кнопки отправки формы\r\nconst validateForm = (button, inn, phone, email, url) => {\r\n    let result = false;\r\n    if (validateINN(inn) && validatePhone(phone) && validateEmail(email) && validateUrl(url)) {\r\n        result = true;\r\n        btnSubmitElement.classList.remove('form__btn-submit-disabled');\r\n        btnSubmitElement.classList.add('form__btn-submit');\r\n        btnSubmitElement.removeAttribute('disabled');\r\n    } else {\r\n        btnSubmitElement.classList.add('form__btn-submit-disabled');\r\n        btnSubmitElement.classList.remove('form__btn-submit');\r\n        btnSubmitElement.setAttribute('disabled', 'true');\r\n    }\r\n    return result;\r\n}\r\n\n\n//# sourceURL=webpack:///./scripts/lib.js?");

/***/ }),

/***/ "./styles/all.scss":
/*!*************************!*\
  !*** ./styles/all.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/all.scss?");

/***/ })

/******/ });