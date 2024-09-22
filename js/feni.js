document.getElementById("feni-btn").addEventListener("click", function () {
    let navValue = getElementInnerHtmlById("nav-value");
    let feniInput = inputValue("feni-input");
    let feniValue = getElementInnerHtmlById("feni-value");
    if (!isNaN(feniInput) && navValue > feniInput) {
      let feniTotal = add(feniValue, feniInput);
      let remainingNavValue = substract(navValue, feniInput);
      valueById("feni-value").innerHTML = feniTotal;
      valueById("nav-value").innerText = remainingNavValue;
    } else {
      alert("Invalid Donation Amount");
    }
  });
  