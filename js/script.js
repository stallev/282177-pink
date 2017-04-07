'use strict';

(function () {
  var hamburger = document.querySelector('.header__toggle-hamburger');
  var cross = document.querySelector('.header__toggle-cross');
  var nav = document.querySelector('.nav');
  var upperHeader = document.querySelector('.header__upper');
  var competitionBtnSubmit = document.querySelector('.form__submit-button');
  var messageError = document.querySelector('.message--error');
  var messageOk = document.querySelector('.message--ok');
  var closeBtnOk = document.querySelector('.message--ok button');

  hamburger.addEventListener('click', onDisplayNav);
  cross.addEventListener('click', onCloseNav);
  competitionBtnSubmit.addEventListener('click', messageDisplay);
  closeBtnOk.addEventListener('click', onHideOkMessage);

  function onDisplayNav() {
    nav.style.display = 'block';
    hamburger.style.display = 'none';
    cross.style.display = 'block';
    upperHeader.style.backgroundColor = '#293646';
  }
  function onCloseNav() {
    nav.style.display = 'none';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
    upperHeader.style.backgroundColor = 'rgba(28, 37, 48, 0.5)'
  }
  function messageDisplay(event) {
    event.preventDefault();
    messageOk.classlist.add('message-appear');
  }
  function onHideOkMessage() {
    messageOk.classlist.remove('message-appear');
  }
})();
