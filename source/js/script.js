'use strict';
var buttonHeader = document.querySelector('.item--form__button');
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var name = popup.querySelector(".details__name--input");
var email = popup.querySelector("[name=user-email-feedback]");
var message = popup.querySelector("[name=user-user-question]");
var body = document.querySelector('.body');
var pageHeader = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main');
var pageFooter = document.querySelector('.page-footer');
var pageIntro = document.querySelector('.intro');
var storage = "";
var buttonSections = document.querySelector('.open-sections');
var buttonContacts = document.querySelector('.open-contacts');
var sectionsList = document.querySelector('.sections__list');
var contactsList = document.querySelector('.contacts__list');
var TABLET_WIDTH = 767;

var onOverlayClick = function(evt){
  if (!popup.contains(evt.target)) { 
    popup.classList.add('hidden');
    popup.classList.remove('open');
    body.style.overflow = "auto";
    pageHeader.style.background = "#1b2d37";
    pageIntro.style.background = "#1b2d37";
	}
}

buttonHeader.addEventListener('click', function (evt) {
	evt.preventDefault();
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    popup.classList.add('open');
    body.style.overflow = "hidden";
    pageHeader.style.background = "rgba(0,0,0,0.9)";
    pageIntro.style.background = "rgba(0,0,0,0.9)";
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
  body.style.overflow = "auto";
  pageHeader.style.background = "#1b2d37";
  pageIntro.style.background = "#1b2d37";
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
     	body.style.overflow = "auto";
	    pageHeader.style.background = "#1b2d37";
	    pageIntro.style.background = "#1b2d37";
    }
  }
});

buttonSections.addEventListener('click', function () {
	if (sectionsList.classList.contains('hidden')) {
		sectionsList.classList.remove('hidden');
		sectionsList.classList.add('open');
		buttonSections.style.backgroundImage = "url('../img/icons/close-contacts.svg')";
		buttonSections.style.width = "16px";
		buttonSections.style.height = "1px";
	} else if (sectionsList.classList.contains('open')) {
		sectionsList.classList.remove('open');
		sectionsList.classList.add('hidden');
		buttonSections.style.backgroundImage = "url('../img/icons/button-open.svg')";
		buttonSections.style.width = "16px";
		buttonSections.style.height = "16px";
	}
});

buttonContacts.addEventListener('click', function () {
	if (!contactsList.classList.contains('hidden')) {
		contactsList.classList.remove('open');
		contactsList.classList.add('hidden');
		buttonContacts.style.backgroundImage = "url('../img/icons/button-open.svg')";
		buttonContacts.style.width = "16px";
		buttonContacts.style.height = "16px";
	} else {
		contactsList.classList.remove('hidden');
		contactsList.classList.add('open');
		buttonContacts.style.backgroundImage = "url('../img/icons/close-contacts.svg')";
		buttonContacts.style.width = "16px";
		buttonContacts.style.height = "1px";
	}
});

