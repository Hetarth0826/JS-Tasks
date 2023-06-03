function validateForm(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rePassword = document.getElementById("rePassword").value;
  var genderMale = document.getElementById("male").checked;
  var genderFemale = document.getElementById("female").checked;
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var languagesEnglish = document.getElementById("english").checked;
  var languagesKannada = document.getElementById("kannada").checked;
  var languagesHindi = document.getElementById("hindi").checked;
  var languagesTelugu = document.getElementById("telugu").checked;

  clearErrors();

  var isValid = true;

  if (firstName.trim() === "") {
    showError("firstNameError", "POOR");
    isValid = false;
  }

  if (lastName.trim() === "") {
    showError("lastNameError", "POOR");
    isValid = false;
  }

  if (email.trim() === "") {
    showError("emailError", "POOR");
    isValid = false;
  }

  if (password.trim() === "") {
    showError("passwordError", "POOR");
    isValid = false;
  }

  if (rePassword.trim() === "") {
    showError("rePasswordError", "POOR");
    isValid = false;
  }

  if (genderMale === false && genderFemale === false) {
    showError("genderError", "POOR");
    isValid = false;
  }

  if (age.trim() === "" || isNaN(age)) {
    showError("ageError", "POOR");
    isValid = false;
  }

  if (phone.trim() === "") {
    showError("phoneError", "POOR");
    isValid = false;
  }

  if (address.trim() === "") {
    showError("addressError", "POOR");
    isValid = false;
  }

  if (state.trim() === "") {
    showError("stateError", "POOR");
    isValid = false;
  }

  if (country.trim() === "") {
    showError("countryError", "POOR");
    isValid = false;
  }

  if (
    languagesEnglish === false &&
    languagesKannada === false &&
    languagesHindi === false &&
    languagesTelugu === false
  ) {
    showError("languagesError", "POOR");
    isValid = false;
  }

  if (isValid) {
    console.log("Registration successful!");
  }
}

function showError(errorElementId, errorMessage) {
  var errorElement = document.getElementById(errorElementId);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}
