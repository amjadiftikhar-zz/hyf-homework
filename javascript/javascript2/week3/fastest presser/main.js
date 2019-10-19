//Create an input and a button in html. When the button is clicked, get the value of the input. This value will be the amount of 
// time the game should run.

const button = document.getElementById('clickButton');
const reBtn = document.getElementById('restartButton');
const inputTime = document.querySelector('input');
const s = document.getElementById('sTimes');
const l = document.getElementById('lTimes');
const sResult = document.getElementById('sResult');
const lResult = document.getElementById('lResult');

let lCounter = 0;
let sCounter = 0; 

button.addEventListener('click', () => {
let gameTime = inputTime.value;
const gameTimer = setInterval(() => {    
    gameTime -=1;
    gameEnd.textContent = gameTime;
    if(gameTime === 0){
        clearInterval(gameTimer);
        gameEnd.textContent = 'Game End!'
    } 
}, 1000);
if(inputTime.value == ''){
    clearInterval(gameTimer);
    gameEnd.textContent = 'Enter seconds to start the game'
} 

window.addEventListener('keypress', event => {
    if(event.key === 's'){
        sCounter++;
        s.textContent = sCounter;
    } else if(event.key === 'l'){
        lCounter++;
        l.textContent = lCounter;
    } else {
        console.log(event.key);
    }
setTimeout(() => {
    // console.log('hello world')
    if(sCounter > lCounter){
        sResult.textContent = 'Congrats, you have won the game!';
        lResult.textContent = '';
    } else if(lCounter > sCounter){
        lResult.textContent = 'Congrats, you have won the game!';
        sResult.textContent = '';
    } 
    else if(lCounter === sCounter){
        sResult.textContent = 'draw, you can start again!';
        lResult.textContent = 'draw, you can start again!';
    }
}, inputTime * 1000);
});
})
reBtn.addEventListener('click', () => {
    window.location.reload();
});



