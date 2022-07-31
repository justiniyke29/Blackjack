 let firstCard = 12
let secondCard = 9
let sum= firstCard+ secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
function startGame(){
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