document.getElementById("noakhali-btn").addEventListener("click", function () {
  let noakhaliValue = getElementInnerHtmlById("noakhali-value");
  let navValue = getElementInnerHtmlById("nav-value");
  let noakhaliInput = inputValue("noakhali-input");
  let noakhaliTotal = add(noakhaliValue, noakhaliInput);
  let remainingNavValue = substract(navValue, noakhaliInput);

  console.log(noakhaliTotal);
  document.getElementById("noakhali-value").innerHTML = noakhaliTotal;
  document.getElementById("nav-value").innerText = remainingNavValue;
});
