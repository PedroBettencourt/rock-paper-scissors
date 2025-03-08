function getComputerChoice() {
    const randomNum = parseInt(Math.random() * 3);
    let computerChoice;
    
    switch(randomNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("What's your choice?").toLocaleLowerCase()

    if (humanChoice != "rock" && 
        humanChoice != "paper" &&
        humanChoice != "scissors") {
            return false;
        }
    
    return humanChoice;
}

function playGame() {
    let humanChoice;
    let computerChoice;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's tied!");
        }    
        
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You lose! Paper beats rock!");
                    computerScore++;
                } else if (computerChoice === "scissors") {
                    console.log("You win! Rock beats scissors!");
                    humanScore++;
                }
                
                break;
    
            case "paper":
                if (computerChoice === "scissors") {
                    console.log("You lose! Scissors beats paper!");
                    computerScore++;
                } else if (computerChoice === "rock") {
                    console.log("You win! Paper beats rock!");
                    humanScore++;
                }
                
                break;
    
            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose! Rock beats scissors!");
                    computerScore++;
                } else if (computerChoice === "paper") {
                    console.log("You win! Scissors beats paper!");
                    humanScore++;
                }
    
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

if (humanScore < computerScore) {
    console.log("You lost the game!");
} else if (humanScore > computerScore) {
    console.log("You won the game!");
} else {
    console.log("The game was tied!");
}