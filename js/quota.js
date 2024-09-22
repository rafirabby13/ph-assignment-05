const quotaBtn = document.getElementById("quota-btn");
document.getElementById("quota-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let quotaInput = inputValue("quota-input");
  let quotaValue = getElementInnerHtmlById("quota-value");
  if (!isNaN(quotaInput) && navValue > quotaInput) {
    let quotaTotal = add(quotaValue, quotaInput);
    let remainingNavValue = substract(navValue, quotaInput);
    valueById("quota-value").innerHTML = quotaTotal;
    valueById("nav-value").innerText = remainingNavValue;

    // append child

    let quotaTitle = valueById("quota-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-3xl font-bold">${quotaInput} taka donated for ${quotaTitle}</h1>
    <h2 class="text-xl font-bold">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add("p-4");
    div.classList.add("border-2");
    div.classList.add("rounded-lg");
    div.classList.add("shadow-xl");

    historyContainer.appendChild(div);
    quotaBtn.setAttribute("onclick", my_modal_1.showModal());
  } else {
    alert("Invalid Donation Amount");
  }
});
