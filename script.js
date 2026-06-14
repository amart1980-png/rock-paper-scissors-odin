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
// getComputerChoice();
// console.log(computerChoice);

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
// getHumanChoice();
// console.log(humanChoice);

// Players score variables

let humanScore = 0;
let computerScore = 0;

// Logic to play a single round

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }
}

function playGame() {
    for (let i = 1; i < 5; i++) {
        playRound(humanSelection,computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }
    if (humanScore === computerScore) {
        console.log("Final score is Draw!");
    } else if (humanScore > computerScore) {
        console.log("The Winner is Human!");
    } else {
        console.log("The Winner is Computer!");
    }
}
playGame();

 


