// variables
const choices = ['Rock', 'Paper', 'Scissors'];
let results = 0;
let pScore = cScore = 0;
let cSelection = 'none';

// buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.querySelector('#scissors');

// playRound for each button press
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

// computerPlay function to randomly select
function computerPlay(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

// playRound() function to play a round of RPS
function playRound(pSelection, cSelection) {
    pSelection = this.textContent;
    let cSelection = computerPlay(choices);
    
    if (pSelection !== 'Rock' && pSelection !== 'Paper' && pSelection !== 'Scissors') {
        results = 4;
    } else if (pSelection === cSelection) {
        results = 2;
    } else {
        if (cSelection === 'Rock') {
            results = (pSelection === 'Paper') ?  1 : 3 ;
        } else if (cSelection === 'Paper') {
            results = (pSelection === 'Scissors') ?  1 : 3 ;
        } else if (cSelection === 'Scissors') {
            results = (pSelection === 'Paper') ?  3 : 1 ;
        }
    }

    switch (result) {
        case 2: 
            console.log("It's a tie!");
            break;
        case 1: 
            console.log("You win! " + pSelection + " beats " + cSelection + "!");
            pScore++;
            break;
        case 3: 
            console.log("You lose! " + cSelection + " beats " + pSelection + "!");
            cScore++;
            break;
        default: 
            alert("please input one of Rock, Paper, or Scissors!");
    }
}