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


// create 2 variable to keep track of human and computer score

let humanScore = 0;
let computerScore = 0;

// create a new function to play the round

function playRound(computerChoice, humanChoice) {
    const result = document.createElement("p");
    result.classList.add("result");
    container.appendChild(result);
    if (computerChoice === "rock") {
        switch (humanChoice) {
            case "rock":
                result.textContent = "It's a Draw! Rock vs Rock.";
                break;
                case "paper":
                result.textContent = "You Win! Paper beats Rock.";
                humanScore += 1;
                break;
                case "scissors":
                result.textContent = "You Lose! Rock beats Scissors!";
                computerScore += 1;
                break; 
        };
    } else if (computerChoice === "paper") {   
        switch (humanChoice) {
            case "rock":
                result.textContent = "You Lose! Paper beats Rock.";
                computerScore += 1;
                break;
            case "paper":
                result.textContent = "It's a Draw. Paper vs Paper.";
                break;
            case "scissors":
                result.textContent = "You Win! Scissors beats Paper!";
                humanScore += 1;
                break; 
        };
    } else if (computerChoice === "scissors") { 
        switch (humanChoice) {
            case "rock":
                result.textContent = "You Win! Rock beats Scissors.";
                humanScore += 1;
                break;
            case "paper":
                result.textContent = "You Lose! Scissors beats Paper.";
                computerScore += 1;
                break;
            case "scissors":
                result.textContent = "It's a Draw! Scissors vs Scissors!";
                break; 
            };
            
    }
    if (computerScore === 5) {
        score.textContent = `YOU LOSE THE MATCH! Player ${humanScore} : ${computerScore} Computer`;
        btn.forEach((button) => {
            button.setAttribute('disabled', true);
        });
        container.appendChild(reset);
        
    } else if (humanScore === 5) {
        score.textContent = `YOU WIN THE MATCH! Player ${humanScore} : ${computerScore} Computer`;
        btn.forEach((button) => {
        button.setAttribute('disabled', true);
        });
        container.appendChild(reset);
    } else {
        score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
    }
}


const btn = document.querySelectorAll("button");
const reset = document.createElement("button");
reset.textContent = 'Reset';
const container = document.querySelector(".container");
const score = document.querySelector("#score");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "rock":
                playRound(getComputerChoice(), "rock");
                break;
            case "paper":
                playRound(getComputerChoice(), "paper");
                break;
            case "scissors":
                playRound(getComputerChoice(), "scissors");
                break;                        
        } 
    })
})


reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    const results = document.querySelectorAll(".result");
    results.forEach((result) => {
        container.removeChild(result);
    });
    btn.forEach((button) => {
        button.removeAttribute('disabled');
        });
    score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
}) 