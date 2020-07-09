'use strict';

export const transitionOn = () => {
  const mainElem = document.querySelector('.main');
  mainElem.removeAttribute('id');
  console.log('transition on')
}
