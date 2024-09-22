valueById('history')
.addEventListener('click', function(){
    const cards = valueById('cards')
    cards.classList.add('hidden')
})

valueById('donation')
.addEventListener('click', function(){
    const cards = valueById('cards')
    cards.classList.remove('hidden')

})