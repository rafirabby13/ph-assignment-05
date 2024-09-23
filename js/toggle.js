valueById("history").addEventListener("click", function () {
  const cards = valueById("cards");
  cards.classList.add("hidden");
  valueById("history").classList.add('bg-[#B4F461]')
  valueById("history").classList.add("border-[#B4F461]");
  // valueById("history").style.color = "#111111";
  valueById("history").classList.add('text-[#111111]')
  valueById("donation").classList.remove('bg-[#B4F461]')
  valueById("donation").classList.add('btn-outline')
  valueById("donation").classList.add('border')
  valueById("donation").classList.add('border-[#11111131]')
  valueById("donation").classList.add('text-[#11111171]')
  valueById("history-container").classList.remove('hidden')
});

valueById("donation").addEventListener("click", function () {
  const cards = valueById("cards");
  cards.classList.remove("hidden");
  valueById("history").classList.remove('bg-[#B4F461]')
  valueById("history").classList.remove("border-[#B4F461]");
  
  valueById("donation").classList.add('bg-[#B4F461]')
  valueById("donation").classList.remove('btn-outline')
  valueById("donation").classList.remove('border-[#11111131]')

  valueById("donation").classList.add('border-2')
  valueById("donation").classList.add('border-[#B4F461]')
  valueById("donation").classList.remove('text-[#11111171]')
  valueById("history").classList.remove('text-[#111111]')

  valueById("donation").classList.add('text-[#111111]')
  valueById("history-container").classList.add('hidden')

});
