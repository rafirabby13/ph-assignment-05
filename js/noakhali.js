document.getElementById("noakhali-btn").addEventListener("click", function () {
  let navValue = getElementInnerHtmlById("nav-value");
  let noakhaliInput = inputValue("noakhali-input");
  let noakhaliValue = getElementInnerHtmlById("noakhali-value");
  if (!isNaN(noakhaliInput) && navValue > noakhaliInput) {
    let noakhaliTotal = add(noakhaliValue, noakhaliInput);
    let remainingNavValue = substract(navValue, noakhaliInput);
    valueById("noakhali-value").innerHTML = noakhaliTotal;
    valueById("nav-value").innerText = remainingNavValue;
    // append child
    let noakhaliTitle = valueById("noakhali-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-3xl font-bold">${noakhaliInput} taka donated for ${noakhaliTitle}</h1>
    <h2 class="text-xl font-bold">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add('p-4')
    div.classList.add('border-2')
    div.classList.add('rounded-lg')
    div.classList.add('shadow-xl')

    historyContainer.appendChild(div);
  } else {
    alert("Invalid Donation Amount");
  }
});
