/* create a  function that for the value of math.random return the computer choiche contained in an array*/ 

function getComputerChoice() {
    let randomChoice = Math.random();
    let gameChoice = ["rock", "paper", "scissors"];
    if (randomChoice  < 0.3) {
        return gameChoice[0];
    } else if (randomChoice >= 0.3 & randomChoice < 0.6) {
        return gameChoice[1];
    } else {
        return gameChoice[2];
    } 
};
console.log(getComputerChoice());

/*create a function to take the human choice*/

function getHumanChoice() {
    return prompt("Rock, Paper or Scissor: ").toLowerCase();
}
console.log(getHumanChoice());

// create 2 variable to keep track of human and computer score

let humanScore = 0;
let computerScore = 0;

// create a new function to play the round

function playRound(computerChoice, humanChoice) {
    switch (computerChoice) {
        case "rock":
            switch (humanChoice) {
                case "rock":
                    console.log("It's a Draw! Rock vs Rock.");
                    break;
                case "paper":
                    console.log("You Win! Paper beats Rock.");
                    humanScore += 1;
                    break;
                case "scissors":
                    console.log("You Lose! Rock beats Scissors!");
                    computerScore += 1;
                    break; 
            }
        case "paper":
            switch (humanChoice) {
                case "rock":
                    console.log("You Lose! Paper beats Rock.");
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("It's a Draw. Paper vs Paper.");
                    break;
                case "scissors":
                    console.log("You Win! Scissors beats Paper!");
                    humanScore += 1;
                    break; 
            }
        case "scissors":
            switch (humanChoice) {
                case "rock":
                    console.log("You Win! Rock beats Scissors.");
                    humanScore += 1;
                    break;
                case "paper":
                    console.log("You Lose! Scissors beats Paper.");
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("It's a Draw! Scissors vs Scissors!");
                    break; 
            }
            
    }
}

playRound(getComputerChoice(), getHumanChoice());
console.log(computerScore);
console.log(humanScore);
