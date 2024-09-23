const feniBtn = document.getElementById("feni-btn")
document.getElementById("feni-btn").addEventListener("click", function () {
    let navValue = getElementInnerHtmlById("nav-value");
    let feniInput = inputValue("feni-input");
    let feniValue = getElementInnerHtmlById("feni-value");
    if (!isNaN(feniInput) && navValue > feniInput && feniInput>0) {
      let feniTotal = add(feniValue, feniInput);
      let remainingNavValue = substract(navValue, feniInput);
      valueById("feni-value").innerHTML = feniTotal;
      valueById("nav-value").innerText = remainingNavValue;
      // append child
      let feniTitle = valueById("feni-title").innerText;
    const div = document.createElement("div");
    div.innerHTML += `
    <h1 class="text-xl font-bold text-[#111111] mb-4">${feniInput} taka donated for ${feniTitle}</h1>
    <h2 class="text-lg font-light text-[#111111]">${currentDate()}</h2>
    `;
    let historyContainer = valueById("history-container");
    div.classList.add('p-8')
    div.classList.add('border-2')
    div.classList.add('rounded-lg')

    historyContainer.appendChild(div);
   feniBtn.setAttribute('onclick', my_modal_1.showModal())
    } else {
      alert("Invalid Donation Amount");
    }
  });
  