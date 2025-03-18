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