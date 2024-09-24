const quotaBtn = document.getElementById("quota-btn");
document.getElementById("quota-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let quotaInput = inputValue("quota-input");
  let quotaInputwithoutValue = valueById("quota-input");

  let quotaValue = getElementInnerHtmlById("quota-value");
  if (!isNaN(quotaInputwithoutValue.value)) {
    if (navValue > quotaInput && quotaInput > 0) {
      let quotaTotal = add(quotaValue, quotaInput);
      let remainingNavValue = substract(navValue, quotaInput);
      valueById("quota-value").innerHTML = quotaTotal;
      valueById("nav-value").innerText = remainingNavValue;

      // append child

      let quotaTitle = valueById("quota-title").innerText;
      const div = document.createElement("div");
      div.innerHTML += `
      <h1 class="text-xl font-bold text-[#111111] mb-4">${quotaInput} taka donated for ${quotaTitle}</h1>
      <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
      `;
      let historyContainer = valueById("history-container");
      div.classList.add("p-8");
      div.classList.add("border-2");
      div.classList.add("rounded-lg");

      historyContainer.appendChild(div);
      quotaBtn.setAttribute("onclick", my_modal_1.showModal());
    } else {
      alert("Invalid Donation Amount");
    }
  } else {
    alert("Invalid Donation Amount");
  }
});
