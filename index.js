let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    console.log("Drawing a new card from the deck!")
    let card = 5;
    sum += card;

    renderGame();
}

