const rebuildingBtn = document.getElementById("rebuilding-btn");
document.getElementById("rebuilding-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let rebuildingInput = inputValue("rebuilding-input");
  let rebuildingInputwithoutValue = valueById("rebuilding-input");
  let rebuildingValue = getElementInnerHtmlById("rebuilding-value");
  if (!isNaN(rebuildingInputwithoutValue.value)) {
    if (navValue >= rebuildingInput && rebuildingInput > 0) {
    let rebuildingTotal = add(rebuildingValue, rebuildingInput);
    let remainingNavValue = substract(navValue, rebuildingInput);
    valueById("rebuilding-value").innerHTML = rebuildingTotal;
    valueById("nav-value").innerText = remainingNavValue;
    // append child
    let rebuildingTitle = valueById("rebuilding-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-xl font-bold text-[#111111] mb-4">${rebuildingInput} Taka is Donated for ${rebuildingTitle}</h1>
    <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add("p-8");
    div.classList.add("border-2");
    div.classList.add("rounded-lg");

    historyContainer.appendChild(div);
    rebuildingBtn.setAttribute("onclick", my_modal_1.showModal());
    rebuildingInputwithoutValue.value=''
    }
    else {
      alert("Invalid Donation Amount");
    }
  } else {
    alert("Invalid Donation Amount");
  }
});
