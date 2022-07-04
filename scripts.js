// variables
const choices = ['Rock', 'Paper', 'Scissors'];
let result = 0;
let pScore = cScore = 0;
let cSelection = pSelection = pText = '';

// buttons
const buttonRegion = document.querySelector('.choices');
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.querySelector('#Scissors');
const btnTryAgain = document.createElement('button');

// result elements
const tallyResults = document.querySelector('.tally');
const pCount = document.querySelector('.p-count');
const cCount = document.querySelector('.c-count');
const roundResults = document.querySelector('.round-results');

// playGame for each button press
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame));

// playGame function to play only until winner determined
function playGame() {
    pSelection = this.id;
    pText = this.textContent;
    playRound(pSelection, pText);
    if (pScore > 4 || cScore > 4) {
        const finalResult = document.createElement('div');
        let finalState = (pScore == 5) ? 'Player, congrats!' : 'Computer, better luck next time!';
        finalResult.textContent = 'Winner is ' + finalState ;
        finalResult.style.cssText = ('font-size: 20px; margin: 5px');
        buttons.forEach(button => button.style.display = 'none');
        buttonRegion.insertBefore(finalResult, buttonRegion.firstChild);
        btnTryAgain.textContent = 'Try Again';
        buttonRegion.appendChild(btnTryAgain, buttonRegion.firstChild);
        buttonRegion.style.cssText += ('flex-direction: column; justify-content: center; gap: 5px; border: none; border-radius: 10px; box-shadow: 0 0  1em 5px rgb(255, 196, 0)'); // box-shadow: 0 0 0 5pt gray; 
        btnTryAgain.addEventListener('click', tryAnother);
    }
}

// tryAnother() function to Try again 
function tryAnother() {
    window.location.reload(true);
}

// playRound() function to play a round of RPS
function playRound(pSelection, pText) {
    cSelection = computerPlay(choices);
    let result = checkWinner(pSelection, cSelection);
    declareResult(result, pText);
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
            result = (pSelection === 'Paper') ?  1 : 3 ;
        } else if (cSelection === 'Paper') {
            result = (pSelection === 'Scissors') ?  1 : 3 ;
        } else if (cSelection === 'Scissors') {
            result = (pSelection === 'Paper') ?  3 : 1 ;
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
function declareResult(result, pText) {
    const sent = document.createElement('div');
    switch (result) {
        case 2: 
            sent.textContent = "It's a tie!";
            break;
        case 1: 
            pScore++;
            sent.textContent = ("You win! " + pText + " beats " + cSelection + "!");
            break;
        case 3: 
            cScore++;
            sent.textContent = ("You lose! " + cSelection + " beats " + pText + "!");
            break;
        default: 
            sent.textContent = ("Something's Wrong!");
    }
    roundResults.insertBefore(sent, roundResults.firstChild);
}