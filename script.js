// Logic to get computer choice

let computerChoice;

function getComputerChoice() {
    let randomChoice = (Math.random() * 100);
    if (randomChoice >= 0 && randomChoice <= 33) {
        computerChoice = "Rock";
    } else if (randomChoice >= 34 && randomChoice <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
    
}
getComputerChoice();
console.log(computerChoice);