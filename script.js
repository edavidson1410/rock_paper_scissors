function getComputerChoice() {  //computer picks rock, paper, or scissors
    const choice=["rock", "paper", "scissors"]
    let list_random=Math.floor(Math.random()*(choice.length)) //picks number between 0 and 1, rounds it down to whole number. multiplies it by length of list.
    decision=choice.slice(list_random, ++list_random)
    return decision
}

function oneRound() {
    let computerSelection=getComputerChoice()
    let playerSelection=prompt("Rock, Paper, or Scissors?", "")
    playerSelection=playerSelection.toLowerCase()
    if (playerSelection=="rock" && computerSelection=="paper" ||
        playerSelection=="paper" && computerSelection=="scissors" ||
        playerSelection=="scissors" && computerSelection=="rock") {
        return lose
        console.log("Computer picks " + computerSelection + "! You lose!")
        }
    else if (playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper") {
        return win
        console.log("Computer picks " + computerSelection + "! You win!")
        }
    else {
        console.log("Computer also picked " + computerSelection + "! Go again!")
        oneRound()
    }
}

function game() {
    
}