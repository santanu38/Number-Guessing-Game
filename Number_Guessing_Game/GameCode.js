let randomNum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const remaining=document.querySelector('.lastResult')
const guessSlot=document.querySelector('.guesses')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevguess=[]
let numguess=1
let playgame=true
if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){
   if(isNaN(guess)){
     alert('please enter a valid number')
   }else if(guess<1){
    alert('please enter a number more than 1')
   }else if(guess>100){
    alert('please enter a number less than 100')
   }else{
     prevguess.push(guess)
     if(numguess==11){
        displayGuess(guess)
        displayMessage(`Game Over,Random number was ${randomNum}`)
        endGame()
     }
     else{
       displayGuess(guess)
       checkGuess(guess)
     }
   }
}
function checkGuess(guess){
   if(guess===randomNum){
     displayMessage(`you guessed it right`)
     endGame()
   }else if(guess<randomNum){
     displayMessage(`Number is too low`)
   }else if(guess>randomNum){
    displayMessage(`Number is too high`)
  }
}
function displayGuess(guess){//or clean up method
    userInput.value=""
    guessSlot.innerHTML+=`${guess}, `
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value=""
  userInput.setAttribute('disabled','')
  p.classList.add("button")
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playgame=false
  newGame()
}
function newGame(){
   const newGameButton=document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
     randomNum=parseInt(Math.random()*100+1)
     prevguess=[]
     numguess=1
     guessSlot.innerHTML=""
     remaining.innerHTML=`${11-numguess}`
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
       playgame=true
   })
}
