const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const websiteInput = document.getElementById("website");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const websiteError = document.getElementById("websiteError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  if (!validateName()) {
    showValidationError(nameError, "Name is required");
  }
  if (!validateEmail()) {
    showValidationError(emailError, "Valid email is required");
  }
  if (!validateWebsite()) {
    showValidationError(websiteError, "Valid URL is required");
  }
  if (!validateMessage()) {
    showValidationError(messageError, "Message is required");
  }

  if (form.checkValidity()) {
    console.log("Form submitted");
  }
});

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  websiteError.textContent = "";
  messageError.textContent = "";
}

function showValidationError(element, message) {
  element.textContent = message;
}

function validateName() {
  return nameInput.value.trim() !== "";
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateWebsite() {
  const website = websiteInput.value.trim();
  const websiteRegex = /^(http|https):\/\/[^ "]+$/;
  return websiteRegex.test(website);
}

function validateMessage() {
  return messageInput.value.trim() !== "";
}
