"use strict";

let pageForm = document.querySelector(".page-form");
let inputs = pageForm.querySelectorAll("input[required]");
let icons = pageForm.querySelectorAll(".page-form__icon");
let btn = pageForm.querySelector(".page-form__btn");

btn.addEventListener("click", function(){
  for (let i of inputs) {
    i.classList.add("input-error");
  }

  for (let j of icons) {
    j.classList.add("input-error");
  }
});
