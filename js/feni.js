const feniBtn = document.getElementById("feni-btn")
document.getElementById("feni-btn").addEventListener("click", function () {
    let navValue = getElementInnerHtmlById("nav-value");
    let feniInput = inputValue("feni-input");
    let feniValue = getElementInnerHtmlById("feni-value");
    if (!isNaN(feniInput) && navValue > feniInput) {
      let feniTotal = add(feniValue, feniInput);
      let remainingNavValue = substract(navValue, feniInput);
      valueById("feni-value").innerHTML = feniTotal;
      valueById("nav-value").innerText = remainingNavValue;
      // append child
      let feniTitle = valueById("feni-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-3xl font-bold">${feniInput} taka donated for ${feniTitle}</h1>
    <h2 class="text-xl font-bold">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add('p-4')
    div.classList.add('border-2')
    div.classList.add('rounded-lg')
    div.classList.add('shadow-xl')

    historyContainer.appendChild(div);
   feniBtn.setAttribute('onclick', my_modal_1.showModal())
    } else {
      alert("Invalid Donation Amount");
    }
  });
  