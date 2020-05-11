"use strict";

let nav = document.querySelector(".page-header__nav");
let navToggle = document.querySelector(".page-header__toggle");

navToggle.classList.remove("page-header__toggle--nojs");
nav.classList.remove("page-header__nav--nojs");

navToggle.addEventListener("click", function(){
  if (navToggle.classList.contains("page-header__toggle--on")) {
    navToggle.classList.remove("page-header__toggle--on");
    navToggle.classList.add("page-header__toggle--off");
  }
  else {
    navToggle.classList.add("page-header__toggle--on");
    navToggle.classList.remove("page-header__toggle--off");
  }

  if (nav.classList.contains("page-header__nav--opened")) {
    nav.classList.remove("page-header__nav--opened");
  }
  else {
    nav.classList.add("page-header__nav--opened");
  }
});
