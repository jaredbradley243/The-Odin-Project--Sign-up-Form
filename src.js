let registrationForm = document.getElementById("registration");
let formHeadline = document.getElementById("form-headline");
let confirmationMessage = document.getElementById("confirmation-message");
let description = document.getElementById("description");
let signupButton = document.getElementById("call-to-action-button");
let nsaButton = document.getElementById("NSA-Link");
let formInputFirstName = document.getElementById("fist-name");
let formInputLastName = document.getElementById("last-name");
let themeToggleButton = document.querySelector(".material-symbols-outlined");

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;
}

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  this.classList.add("input-fade-out");

  formHeadline.classList.add("input-fade-out");
  description.classList.add("input-fade-out");
  signupButton.classList.add("input-fade-out");
  signupButton.disabled = true;
  nsaButton.classList.add("input-fade-out");

  setTimeout(function () {
    confirmationMessage.classList.add("input-fade-in");
    confirmationMessage.style.display = "block";
    registrationForm.style.display = "none";
  }, 2000);

  setTimeout(function () {
    confirmationMessage.classList.add("input-fade-in");
    confirmationMessage.style.display = "block";
    registrationForm.style.display = "none";
  }, 2000);

  setTimeout(function () {
    confirmationMessage.classList.remove("input-fade-in");
    confirmationMessage.classList.add("input-fade-out");
  }, 4000);

  setTimeout(function () {
    confirmationMessage.style.fontFamily = "Cipher";
    description.style.fontFamily = "Cipher";
    signupButton.style.fontFamily = "Cipher";
    nsaButton.style.fontFamily = "Cipher";
    confirmationMessage.classList.add("input-fade-in");
    description.classList.add("input-fade-in");
    // signupButton.classList.add("input-fade-in");
    nsaButton.classList.add("input-fade-in");
  }, 6000);
});

formInputFirstName.addEventListener("input", function () {
  if (this.value) {
    this.classList.add("has-value");
  } else {
    this.classList.remove("has-value");
  }
});

formInputLastName.addEventListener("input", function () {
  if (this.value) {
    this.classList.add("has-value");
  } else {
    this.classList.remove("has-value");
  }
});

themeToggleButton.addEventListener("click", setTheme);
