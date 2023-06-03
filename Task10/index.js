function getDataType() {
  var str = "hello";
  console.log(typeof str);
}

function checkString() {
  var str = "hello";
  var str1 = "bye";
  console.log(str.includes(str1));
}

function getKeys() {
  var numbers = [0, 1, 2, 3, 4, 5];
  console.log(Object.keys(numbers));
}

function runMapFunction() {
  var numbers = [1, 2, 3, 4, 5];
  var doubledNumbers = numbers.map((num) => num * 2);
  console.log(doubledNumbers);
}

function reverseArray() {
  var numbers = [1, 2, 3, 4, 5];
  var reversedNumbers = numbers.reverse();
  console.log(reversedNumbers);
}

function runFilterFunction() {
  var numbers = [1, 2, 3, 4, 5];
  var evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}
