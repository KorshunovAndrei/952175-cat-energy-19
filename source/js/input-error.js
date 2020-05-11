"use strict";

let form = document.querySelector(".page-form");
let inputs = form.querySelectorAll("input[required]");
let icons = form.querySelectorAll(".page-form__icon");
let btn = form.querySelector(".page-form__btn");

btn.addEventListener("click", function(){
  for (let i of inputs) {
    i.classList.add("input-error");
  }

  for (let j of icons) {
    j.classList.add("input-error");
  }
});
