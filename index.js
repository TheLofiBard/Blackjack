let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "Ethan",
    chips: 267
}

playerEl.textContent = player.name + ": $"  + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber === 1) {
        randomNumber = 11;
        return randomNumber
    }
    else if (randomNumber > 10) {
        randomNumber = 10
        return randomNumber
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
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
    if (isAlive === true && sum != 21) {
        let card = getRandomCard();
        cards.push(card)
        sum += card;
        renderGame();
    }
    
}

