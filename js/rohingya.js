const rohingyaBtn = document.getElementById("rohingya-btn");
document.getElementById("rohingya-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let rohingyaInput = inputValue("rohingya-input");
  let rohingyaInputwithoutValue = valueById("rohingya-input");
  let rohingyaValue = getElementInnerHtmlById("rohingya-value");
  if (!isNaN(rohingyaInputwithoutValue.value)) {
    if (navValue >= rohingyaInput && rohingyaInput > 0) {
    let rohingyaTotal = add(rohingyaValue, rohingyaInput);
    let remainingNavValue = substract(navValue, rohingyaInput);
    valueById("rohingya-value").innerHTML = rohingyaTotal;
    valueById("nav-value").innerText = remainingNavValue;
    // append child
    let rohingyaTitle = valueById("rohingya-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-xl font-bold text-[#111111] mb-4">${rohingyaInput} Taka is Donated for ${rohingyaTitle}</h1>
    <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add("p-8");
    div.classList.add("border-2");
    div.classList.add("rounded-lg");

    historyContainer.appendChild(div);
    rohingyaBtn.setAttribute("onclick", my_modal_1.showModal());
    rohingyaInputwithoutValue.value=''
    }
    else {
      alert("Invalid Donation Amount");
    }
  } else {
    alert("Invalid Donation Amount");
  }
});
