document.getElementById("noakhali-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let noakhaliInput = inputValue("noakhali-input");
  let noakhaliValue = getElementInnerHtmlById("noakhali-value");
  if (!isNaN(noakhaliInput) && navValue > noakhaliInput) {
    let noakhaliTotal = add(noakhaliValue, noakhaliInput);
    let remainingNavValue = substract(navValue, noakhaliInput);
    valueById("noakhali-value").innerHTML = noakhaliTotal;
    valueById("nav-value").innerText = remainingNavValue;
  } else {
    alert("Invalid Donation Amount");
  }
});
