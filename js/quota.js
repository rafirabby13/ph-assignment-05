document.getElementById("quota-btn").addEventListener("click", function () {
    let navValue = getElementInnerHtmlById("nav-value");
    let quotaInput = inputValue("quota-input");
    let quotaValue = getElementInnerHtmlById("quota-value");
    if (!isNaN(quotaInput) && navValue > quotaInput) {
      let quotaTotal = add(quotaValue, quotaInput);
      let remainingNavValue = substract(navValue, quotaInput);
      valueById("quota-value").innerHTML = quotaTotal;
      valueById("nav-value").innerText = remainingNavValue;
    } else {
      alert("Invalid Donation Amount");
    }
  });
  