const noakhaliBtn = valueById("noakhali-btn");
document.getElementById("noakhali-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let noakhaliInput = inputValue("noakhali-input");
  let noakhaliInputwithoutValue = valueById("noakhali-input");

  let noakhaliValue = getElementInnerHtmlById("noakhali-value");
  if (!isNaN(noakhaliInputwithoutValue.value)) {
    if (navValue > noakhaliInput && noakhaliInput > 0) {
      let noakhaliTotal = add(noakhaliValue, noakhaliInput);
      let remainingNavValue = substract(navValue, noakhaliInput);
      valueById("noakhali-value").innerHTML = noakhaliTotal;
      valueById("nav-value").innerText = remainingNavValue;
      // append child
      let noakhaliTitle = valueById("noakhali-title").innerText;
      const div = document.createElement("div");
      div.innerHTML += `
    <h1 class="text-xl text-[#111111] font-bold mb-4">${noakhaliInput} taka donated for ${noakhaliTitle}</h1>
    <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
    `;
      let historyContainer = valueById("history-container");
      div.classList.add("p-8");
      div.classList.add("border-2");
      div.classList.add("rounded-lg");

      historyContainer.appendChild(div);
      noakhaliBtn.setAttribute("onclick", my_modal_1.showModal());
    } else {
      console.log("object");
      alert("Invalid Donation Amount");
    }
  } else {
    console.log("object");
    alert("Invalid Donation Amount");
  }
});
