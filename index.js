let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) +1
    return randomNumber
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum 

    if (sum <= 20) {
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
        console.log("You've got Blackjack!")
        hasBlackJack = true
        message = "You've got Blackjack!"
    }
    else {
        console.log("You're out of the game!")
        isAlive = false
        message = "You're out of the game!"
    }
   
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard();
    cards.push(card)
    sum += card;

    renderGame();
}

