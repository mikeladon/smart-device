'use strict';
var buttonHeader = document.querySelector('.item--form__button');
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var name = popup.querySelector(".details__name--input");
var email = popup.querySelector("[name=user-email-feedback]");
var message = popup.querySelector("[name=user-user-question]");
var storage = "";
var TABLET_WIDTH = 767;

var onOverlayClick = function(evt){
  if (!popup.contains(evt.target)) { 
    popup.classList.add('hidden');
    popup.classList.remove('open');
	}
}

buttonHeader.addEventListener('click', function (evt) {
	evt.preventDefault();
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    popup.classList.add('open');
    document.addEventListener('mousedown', onOverlayClick);
    document.querySelector('.details__name--input').focus();
  } else {
    popup.classList.add('hidden');
    popup.classList.remove('open');
    document.removeEventListener('mousedown', onOverlayClick);
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("hidden");
  popup.classList.remove("open");
});

popup.addEventListener("submit", function(evt) {
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("message", message.value);
});

var onResizeWindow = function () {
	if (window.innerWidth < TABLET_WIDTH) {
	document.querySelector('.sections__list').classList.add('hidden');
	} else {
		document.querySelector('.sections__list').classList.remove('hidden');
	}
}

window.addEventListener('resize', onResizeWindow);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("open")) {
      popup.classList.remove("open");
     	popup.classList.add("hidden");
    }
  }
});