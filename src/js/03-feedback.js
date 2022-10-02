const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const submitButoon = document.querySelector("button");
const data = { email: "", message: "" };

email.addEventListener("input", addData);
message.addEventListener("input", addData);
submitButoon.addEventListener("click", userData);

checkData();

function checkData() {
  const localData = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (localData) {
    email.value = localData.email;
    message.value = localData.message;
    data.email = localData.email;
    data.message = localData.message;
  }
}

const saveData = throttle(function () {
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}, 500);

function addData(e) {
  data[this.name] = e.target.value;
  saveData();
}

function userData(e) {
  e.preventDefault();
  const localData = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (!email.value || !message.value) {
    console.log("error: not all fields are filled");
    alert("Please fill all fields");
  } else {
    console.log(localData);
    localStorage.removeItem("feedback-form-state");
    data.email = "";
    data.message = "";
    form.reset();
  }
}