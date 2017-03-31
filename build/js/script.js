'use strict';

(function () {
  var hamburger = document.querySelector('.header__toggle-hamburger');
  var cross = document.querySelector('.header__toggle-cross');
  var nav = document.querySelector('.nav');
  var upperHeader = document.querySelector('.header__upper');

  hamburger.addEventListener('click', onDisplayNav);
  cross.addEventListener('click', onCloseNav);

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
    upperHeader.style.backgroundColor = 'rgba(40, 54, 69, 0.3)'
  }
})();
