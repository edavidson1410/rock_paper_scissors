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
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}\nLOSS`;
        }
    else if (playerSelection=="rock" && computerSelection=="scissors" ||
        playerSelection=="paper" && computerSelection=="rock" ||
        playerSelection=="scissors" && computerSelection=="paper") {
        playerScore++
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}\nWIN`;
        }
    else if (playerSelection==computerSelection) {  //in case of tie
        return `Player Selection: ${playerSelection} Computer selection: ${computerSelection}\nTIE`;
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
choiceBtns.forEach(choice => choice.addEventListener("click", () => {
    document.getElementById("gameResult").innerHTML = oneRound(choice.id);
    updateScore();
}))

//plays game on click of choice button
// const btns = document.querySelectorAll(".btn");
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function() {
//         document.getElementById("gameResult").innerHTML = oneRound(btns[i].id);
//   }
// }




//OUTDATED FUNCTION FOR UI
// function game(choice) {
//     let player_win=0;
//     let player_loss=0;

//     for (n=0; n < 5; n++) {  
//         let result=oneRound(choice);
//             if (result=="lose") {    //if player loses
//                 player_loss=++player_loss;
//             }
//             else if (result=="win") {      //if player wins                              
//                 player_win=++player_win;
//             }
//         console.log("The score is " + player_win + "-" + player_loss);
//     }
//     console.log("Good Game!");
// }


