function sortAlphabetically() {
  const inputElement = document.getElementById("inputString");
  const resultElement = document.getElementById("result");
  const inputString = inputElement.value;

  const sortedString = inputString.toLowerCase().split("").sort().join("");

  resultElement.innerHTML = "Sorted string: " + sortedString;
}
