 let firstCard = 5
let secondCard = 10
let sum= firstCard+ secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
function startGame(){
    sumEl.textContent= "sum: " + sum
    cardEl.textContent= "cards:" + firstCard + "  " + secondCard
     if(sum <= 20){
    message= "Do you want a new card?" 
    } else if (sum === 21) {
    message="Congracts! You have Blackjack!"
    hasBlackJack = true
    } else {
    message="You are out of the game."
    isAlive= false
    } 
   messageEl.textContent = message
}
function newCard(){
    let card= 3
    sum+=card
    startGame()
}