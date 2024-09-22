function getElementInnerHtmlById(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}
function valueById(id) {
  const elem = document.getElementById(id);
  return elem;
}

function inputValue(input) {
  const inputVal = document.getElementById(input).value;
  return parseFloat(inputVal);
}

function add(num1, num2) {
  return num1 + num2;
}

function substract(a, b) {
  return a - b;
}

function currentDate(){
  let date = new Date();
  return date;
}

