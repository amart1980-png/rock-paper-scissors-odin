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

// Human Choice code

let humanChoice;

function getHumanChoice() {
    let humanInput = prompt("Please press the first letter of your chioce on keyboard('R'ock,'P'aper,'S'cissors)","");
    if (humanInput === "r" || humanInput === "R") {
        humanChoice = "Rock";
    } else if (humanInput === "p" || humanInput === "P") {
        humanChoice = "Paper";
    } else if (humanInput === "s" || humanInput === "S") {
        humanChoice = "Scissors";
    } else {
        alert("Please input 'R', 'P' or 'S'!");
    }
    return humanChoice;
}
getHumanChoice();
console.log(humanChoice);

// Players score variables

let humanScore = 0;
let computerScore = 0;