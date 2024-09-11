let firstCard = 5
let secondCard = 9
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
    if (sum <= 20) {
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
        console.loYou've got Blackjack!")
        hasBlackJack = true
        message = "You've got Blackjack!"
    }
    else {
        console.log("You're out of the game!")
        isAlive = false
        message = "You're out of the game!"
    }

    sumEl.textContent = "Sum: " + sum    
    messageEl.textContent = message
}

