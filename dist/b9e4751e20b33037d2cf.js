!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);const l=document.querySelector("#js-btn-submit"),r=(e,t,n)=>{e.addEventListener("focus",()=>{e.setAttribute("placeholder",n)}),e.addEventListener("blur",()=>{e.setAttribute("placeholder",t)})},s=e=>{let t=!1;return 10!==e&&12!==e||(t=!0),t},o=e=>/\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(e),u=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),a=e=>/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(e),i=(e,t,n,r,i)=>{let d=!1;return s(t)&&o(n)&&u(r)&&a(i)?(d=!0,l.classList.remove("form__btn-submit-disabled"),l.classList.add("form__btn-submit"),l.removeAttribute("disabled")):(l.classList.add("form__btn-submit-disabled"),l.classList.remove("form__btn-submit"),l.setAttribute("disabled","true")),d},d=document.querySelector(".js-form__inn-field"),c=document.querySelector(".js-form__phone-field"),m=document.querySelector(".js-form__email-field"),v=document.querySelector(".js-form__site-field"),f=document.querySelector(".js-inn-verification-result-block"),p=(document.querySelector("#js-btn-submit"),document.querySelector(".js-inn-ok")),b=document.querySelector(".js-email-ok"),y=document.querySelector(".js-site-ok"),_=document.querySelector(".js-phone-ok");r(d,"ИНН организации или ИП","Введите 10 или 12 цифр"),d.addEventListener("input",()=>{f.textContent=d.value.length,0===d.value.length&&(f.textContent=""),s(d.value.length)?(p.classList.remove("display-none"),f.classList.add("display-none")):(p.classList.add("display-none"),f.classList.remove("display-none")),i(0,d.value.length,c.value,m.value,v.value)}),r(v,"Сайт магазина","example.com"),v.addEventListener("input",()=>{a(v.value)?y.classList.remove("display-none"):y.classList.add("display-none"),i(0,d.value.length,c.value,m.value,v.value)}),r(m,"Электронная почта","example@mail.com"),m.addEventListener("input",()=>{u(m.value)?b.classList.remove("display-none"):b.classList.add("display-none"),i(0,d.value.length,c.value,m.value,v.value)}),r(c,"Номер телефона","+7(123)456-78-90"),c.addEventListener("input",()=>{o(c.value)?_.classList.remove("display-none"):_.classList.add("display-none"),i(0,d.value.length,c.value,m.value,v.value)})}]);