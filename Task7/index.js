function calculateMultiplication() {
  const num1Element = document.getElementById("num1");
  const num2Element = document.getElementById("num2");
  const resultElement = document.getElementById("result");

  const num1 = parseFloat(num1Element.value);
  const num2 = parseFloat(num2Element.value);

  const multiplication = num1 * num2;

  resultElement.innerHTML = `Multiplication: ${multiplication}`;
}

function calculateDivision() {
  const num1Element = document.getElementById("num1");
  const num2Element = document.getElementById("num2");
  const resultElement = document.getElementById("result");

  const num1 = parseFloat(num1Element.value);
  const num2 = parseFloat(num2Element.value);

  const division = num1 / num2;

  resultElement.innerHTML = `Division: ${division}`;
}
