const cycloneBtn = document.getElementById("cyclone-btn");
document.getElementById("cyclone-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let cycloneInput = inputValue("cyclone-input");
  let cycloneInputwithoutValue = valueById("cyclone-input");
  let cycloneValue = getElementInnerHtmlById("cyclone-value");
  if (!isNaN(cycloneInputwithoutValue.value)) {
    if (navValue > cycloneInput && cycloneInput > 0) {
    let cycloneTotal = add(cycloneValue, cycloneInput);
    let remainingNavValue = substract(navValue, cycloneInput);
    valueById("cyclone-value").innerHTML = cycloneTotal;
    valueById("nav-value").innerText = remainingNavValue;
    // append child
    let cycloneTitle = valueById("cyclone-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-xl font-bold text-[#111111] mb-4">${cycloneInput} taka donated for ${cycloneTitle}</h1>
    <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add("p-8");
    div.classList.add("border-2");
    div.classList.add("rounded-lg");

    historyContainer.appendChild(div);
    cycloneBtn.setAttribute("onclick", my_modal_1.showModal());
    }
    else {
      alert("Invalid Donation Amount");
    }
  } else {
    alert("Invalid Donation Amount");
  }
});
