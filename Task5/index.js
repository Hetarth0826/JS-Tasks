function reverseNumber() {
  var numberInput = document.getElementById("number");
  var resultElement = document.getElementById("result");
  var number = parseInt(numberInput.value);

  let reversedNumber = 0;

  while (number !== 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  resultElement.innerHTML = "Reversed number: " + reversedNumber;
}
