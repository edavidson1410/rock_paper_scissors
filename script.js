//beginner scores

let playerScore = 0;
let computerScore = 0;
updateScore();


//randomized computer choice
function getComputerChoice() {  //computer picks rock, paper, or scissors
    const choice=["rock", "paper", "scissors"];
    let list_random=Math.floor(Math.random()*(choice.length)); //picks number between 0 and 1, rounds it down to whole number. multiplies it by length of list.
    decision=choice.slice(list_random, ++list_random);
    return decision;
}

//play a round
function oneRound(choice) {
    let computerSelection=getComputerChoice();
    let playerSelection = choice;


    if (playerSelection=="rock" && computerSelection=="paper" ||
        playerSelection=="paper" && computerSelection=="scissors" ||
        playerSelection=="scissors" && computerSelection=="rock") {
        computerScore++
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}`;
        }
    else if (playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper") {
        playerScore++
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}`;
        }
    else if (playerSelection==computerSelection) {  //in case of tie
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}`;
    }
    updateScore()
}

//updates score on html
function updateScore() {
    const playerScoreDiv = document.getElementById("playerScore");
    const computerScoreDiv = document.getElementById("computerScore");

    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

//plays game on click of choice and updates score.
const choiceBtns = document.querySelectorAll(".btn");
console.log(choiceBtns)
choiceBtns.forEach(choice => choice.addEventListener("click", () => {
    document.getElementById("gameResult").innerHTML = oneRound(choice.id);
    updateScore();
}))

//reset counter function on click
const reset = document.querySelector(".reset");
console.log(reset)
reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
});