"use strict";

const submitBtn = document.querySelector(".submit-btn");
const msgContainer = document.querySelector(".meassge-container");

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#select-where");
const message = document.querySelector("#message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const myForm = document.querySelector(".contact-form");
  let isValid = true;

  const dataArr = [...new FormData(myForm)];
  const data = Object.fromEntries(dataArr);

  dataArr.forEach((entry, index) => {
    const fieldDiv = document.getElementsByName(entry[0])[0].closest("div");

    if (entry[1] !== "") {
      fieldDiv.classList.remove("wrong");
      return;
    }

    fieldDiv.classList.add("wrong");
    isValid = false;

    fieldDiv.addEventListener("focusin", function (e) {
      this.classList.remove("wrong");
    });
  });

  if (isValid) {
    msgContainer.classList.add("show");
    setTimeout(() => {
      msgContainer.classList.remove("show");
    }, 5000);
  }
});
