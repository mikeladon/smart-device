"use strict";
var buttonHeader = document.querySelector(".item__form-button");
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
var buttonFooter = document.querySelectorAll(".clickable__mobile");
var sectionsList = document.querySelector(".sections__list");
var contactsList = document.querySelector(".contacts__list");
var TABLET_WIDTH = 767;
var scrollButton = document.querySelector(".intro__scroll");
var phoneInput = document.querySelector(".personal__phone--input");
var popupPhoneInput = document.querySelector(".details__phone--input");
var pageFooterContacts = document.querySelector(".page-footer__contacts");
var pageFooterSections = document.querySelector(".page-footer__sections");
var active = document.getElementsByClassName('toggle-open');
var phoneMaskPage = document.getElementById('personal__phone--input');
var contactLinks = document.querySelectorAll('.contacts__list li');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

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

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupContainer.classList.add("hidden");
  popupContainer.classList.remove("open");
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

window.addEventListener("load", onResizeWindow);
window.addEventListener("resize", onResizeWindow);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("open")) {
     	popupContainer.classList.add("hidden");
      popupContainer.classList.remove("open");
     	body.style.overflow = "auto";
    }
  }
});

buttonFooter.forEach(function (element) {
element.addEventListener("click", function (evt) {
  if (active.length > 0 && active[0] !== this) {
    active[0].parentNode.querySelector("ul").classList.add("hidden");
    active[0].querySelector(".toggle").classList.add('open-contacts');
    active[0].querySelector(".toggle").classList.remove('close-contacts');
    active[0].parentNode.querySelector("ul").querySelectorAll("li").forEach(function(link) {
      link.style.opacity = 0;
    })
    active[0].classList.remove('toggle-open');
  }
  this.parentNode.querySelector("ul").classList.remove("hidden");
  this.classList.toggle("toggle-open");
  this.querySelector(".toggle").classList.add('close-contacts');
  this.querySelector(".toggle").classList.remove('open-contacts');
  if (this.classList.contains('toggle-open') &&
    this.children[0].classList.contains('page-footer__contacts')) {
      this.querySelector(".toggle").style.top = '5px';
      this.parentNode.querySelector("ul").querySelectorAll("li").forEach(function(link) {
    link.style.display = "inline";
    setTimeout(() => link.style.opacity = 1, 0)
  });
    } else if (this.classList.contains('toggle-open') &&
    this.children[0].classList.contains('page-footer__sections')) {
      this.querySelector(".toggle").style.top = '30px';
        this.parentNode.querySelector("ul").querySelectorAll("li").forEach(function(link) {
    link.style.display = "inline";
    setTimeout(() => link.style.opacity = 1, 0)
  });
    } else if (!this.classList.contains('toggle-open') &&
    this.children[0].classList.contains('page-footer__sections')) {
      this.querySelector(".toggle").style.top = '25px';
      this.querySelector(".toggle").classList.remove('close-contacts');
      this.querySelector(".toggle").classList.add('open-contacts');
      this.parentNode.querySelector("ul").querySelectorAll("li").forEach(function(link) {
        link.style.opacity = 0;
      })
      this.parentNode.querySelector("ul").classList.add("hidden");
    } else if (!this.classList.contains('toggle-open') &&
      this.children[0].classList.contains('page-footer__contacts')) {
      this.querySelector(".toggle").style.top = '0px';
      this.querySelector(".toggle").classList.remove('close-contacts');
      this.querySelector(".toggle").classList.add('open-contacts');
      this.parentNode.querySelector("ul").querySelectorAll("li").forEach(function(link) {
        link.style.opacity = 0;
      })
      this.parentNode.querySelector("ul").classList.add("hidden");
    }
},false);
})

var mask = IMask(phoneMaskPage, maskOptions);
var mask = IMask(popupPhoneInput, maskOptions);

scrollButton.addEventListener("click", function (e) {
  e.preventDefault();
  var blockID = scrollButton.getAttribute("href");
  document.querySelector(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
})
