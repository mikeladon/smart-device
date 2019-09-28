"use strict";
var buttonHeader = document.querySelector(".item--form__button");
var popupContainer = document.querySelector(".popup__container");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var name = popup.querySelector(".details__name--input");
var email = popup.querySelector("[name=user-email-feedback]");
var message = popup.querySelector("[name=user-user-question]");
var body = document.querySelector(".body");
var pageHeader = document.querySelector(".page-header");
var pageMain = document.querySelector(".page-main");
var pageFooter = document.querySelector(".page-footer");
var pageIntro = document.querySelector(".intro");
var storage = "";
// var buttonSections = document.querySelector(".open-sections");
// var buttonContacts = document.querySelector(".open-contacts");
var buttonFooter = [...document.querySelectorAll("[class^='open-']")];
var sectionsList = document.querySelector(".sections__list");
var contactsList = document.querySelector(".contacts__list");
var TABLET_WIDTH = 767;
var scrollButton = document.querySelector(".intro__scroll");

var onOverlayClick = function(evt){
  if (!popup.contains(evt.target)) { 
    popup.classList.add("hidden");
    popupContainer.classList.add("hidden");
    popup.classList.remove("open");
    body.style.overflow = "auto";
	}
}

buttonHeader.addEventListener("click", function (evt) {
	evt.preventDefault();
  if (popupContainer.classList.contains("hidden")) {
    popupContainer.classList.remove("hidden");
    popup.classList.add("open");
    body.style.overflow = "hidden";
    document.addEventListener("mousedown", onOverlayClick);
    document.querySelector(".details__name--input").focus();
  } else {
    popupContainer.classList.add("hidden");
    document.removeEventListener("mousedown", onOverlayClick);
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popupContainer.classList.add("hidden");
  body.style.overflow = "auto";
});

popup.addEventListener("submit", function(evt) {
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("message", message.value);
});

var onResizeWindow = function () {
	if (window.innerWidth < TABLET_WIDTH) {
	document.querySelector(".sections__list").classList.add("hidden");
  document.querySelector(".contacts__list").classList.add("hidden");
	} else {
		document.querySelector(".sections__list").classList.remove("hidden");
    document.querySelector(".contacts__list").classList.remove("hidden");
	}
}

window.addEventListener("resize", onResizeWindow);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("open")) {
     	popupContainer.classList.add("hidden");
      popup.classList.remove("open");
     	body.style.overflow = "auto";
    }
  }
});

buttonFooter.forEach(function (element) {
element.addEventListener("click", function () {
var parent = this.parentElement.className;
 document.querySelector(".page-footer__extra > [class^='page-footer__']:not(."+parent+") >ul").classList.add("hidden");
  this.parentNode.querySelector("ul").classList.remove("hidden");
},false);
})

scrollButton.addEventListener("click", function (e) {
  e.preventDefault();
  var blockID = scrollButton.getAttribute("href");
  document.querySelector(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})

