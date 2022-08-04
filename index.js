let player = {
    name: "Justin",
    chips: 100
}
let cards= []
let sum= 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent= player.name + ":$" + player.chips
        function getRandomCard(){
            let randomCard = Math.floor(Math.random()*13)+1
            if (randomCard===1){
                return 11
            }
            else if(randomCard>10){
                return 10
            }
            else{ return randomCard}
        }
                
        function startGame(){ 
            isAlive = true
            let firstCard = getRandomCard()
            let secondCard = getRandomCard()
            cards = [firstCard, secondCard]
            sum = firstCard + secondCard
            renderGame()
        }  
        function renderGame(){
            sumEl.textContent= "sum: " + sum
                cardEl.textContent= "cards:" 
                    for (let i=0; i<cards.length; i++){
                    cardEl.textContent+=cards[i] +" "
                    }
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
    if(isAlive=== true && hasBlackJack === false){
        let card= getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()  
    }
}