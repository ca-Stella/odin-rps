// variables
const choices = ['Rock', 'Paper', 'Scissors'];
let results = 0;
let pScore = cScore = 0;
let cSelection = pSelection = 'none';

// buttons
const buttonRegion = document.querySelector('.choices');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.querySelector('#scissors');

// result elements
const tallyResults = document.querySelector('.tally');
const pCount = document.querySelector('.p-count');
const cCount = document.querySelector('.c-count');
const roundResults = document.querySelector('.round-results');

// playRound for each button press
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

// playGame function to play only until winner determined
function playGame() {
    playRound(this.textContent);
    if (pScore > 4 || cScore > 4) {
        const finalResult = document.createElement('div');
        let finalState = (pScore == 5) ? 'Player, congrats!' : 'Computer, better luck next time!';
        finalResult.textContent = 'Winner is ' + finalState ;
        buttons.forEach(button => buttonRegion.removeChild(button));
        buttonRegion.insertBefore(finalResult, buttonRegion.firstChild);
    }
}

// playRound() function to play a round of RPS
function playRound(pSelection) {
    cSelection = computerPlay(choices);
    let result = checkWinner(pSelection, cSelection);
    declareResult(result);
    tallyUp();
}

// computerPlay function to randomly select
function computerPlay(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

// checkWinner() helper function
function checkWinner(pSelection, cSelection) {
    let result = 0;
    if (pSelection === cSelection) {
        result = 2;
    } else {
        if (cSelection === 'Rock') {
            results = (pSelection === 'Paper') ?  1 : 3 ;
        } else if (cSelection === 'Paper') {
            results = (pSelection === 'Scissors') ?  1 : 3 ;
        } else if (cSelection === 'Scissors') {
            results = (pSelection === 'Paper') ?  3 : 1 ;
        }
    }
    return result;
}

// tallyUp() function to add scores
function tallyUp() {
    pCount.textContent = pScore;
    cCount.textContent = cScore;
}

//declareResult() function to post results
function declareResult(result) {
    const sent = document.createElement('div');
    switch (result) {
        case 2: 
            sent.textContent = "It's a tie!";
            break;
        case 1: 
            pScore++;
            sent.textContent = ("You win! " + pSelection + " beats " + cSelection + "!");
            break;
        case 3: 
            cScore++;
            sent.textContent = ("You lose! " + cSelection + " beats " + pSelection + "!");
            break;
        default: 
            sent.textContent = ("Something's Wrong!");
    }
    roundResults.insertBefore(sent, roundResults.firstChild);
}