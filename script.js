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
