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
        console.log("Computer picks " + computerSelection + "! You lose!")
        return "lose"
        }
    else if (playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper") {
        console.log("Computer picks " + computerSelection + "! You win!")
        return "win"
        }
    else if (playerSelection==computerSelection) {  //in case of tie
        console.log("Computer also picked " + computerSelection + "! Go again!")
        return oneRound()
    }
    else { //in case of option not in choice array
        console.log("That's not an option!")
        return oneRound()
    }
}

function game() {
    let number_games=Number(prompt("How many rounds would you like to play?", ""))
    let player_win=0
    let player_loss=0

    for (n=0; n<number_games; n++) {  
        let result=oneRound()
            if (result=="lose") {    //if player loses
                player_loss=++player_loss
            }
            else if (result=="win") {      //if player wins                              
                player_win=++player_win
            }
        console.log("The score is " + player_win + "-" + player_loss)
    }
    console.log("Good Game!")
}
