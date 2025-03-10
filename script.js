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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's tied!";
    }    
    
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                computerScore++;
                return "You lose! Paper beats rock!";
                
            } else if (computerChoice === "scissors") {
                humanScore++;
                return "You win! Rock beats scissors!"; 
            }
            
            break;

        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
                return "You lose! Scissors beats paper!";

            } else if (computerChoice === "rock") {
                humanScore++;
                return "You win! Paper beats rock!";  
            }
            break;

        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                return "You lose! Rock beats scissors!";

            } else if (computerChoice === "paper") {
                humanScore++;
                return "You win! Scissors beats paper!";   
            }
            break;
    }
}


let humanScore = 0;
let computerScore = 0;

// Create the buttons for the choices
const buttons = document.createElement("div");

const choiceRock = document.createElement("button");
choiceRock.setAttribute("id", "rock");
choiceRock.textContent = "Rock";

const choicePaper = document.createElement("button");
choicePaper.setAttribute("id", "paper");
choicePaper.textContent = "Paper";

const choiceScissors = document.createElement("button");
choiceScissors.setAttribute("id", "scissors");
choiceScissors.textContent = "Scissors";

buttons.appendChild(choiceRock);
buttons.appendChild(choicePaper);
buttons.appendChild(choiceScissors);

document.body.appendChild(buttons);


function getScore() {
    return `Score is ${humanScore} - ${computerScore}`;
}

// Display the score
scoreDiv = document.createElement("div");
scoreDiv.textContent = getScore();
document.body.appendChild(scoreDiv);

// Display the round's result
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

// Get player choice and play
function getPlayRound(e) {
    if (humanScore === 5 || computerScore === 5) return stopGame();

    const choice = e.target.id;
    const result = playRound(choice, getComputerChoice())
    resultDiv.textContent = result;
    scoreDiv.textContent = getScore();
}

buttons.addEventListener("click", (e) => getPlayRound(e));

function stopGame() {
    scoreDiv.remove();
    if (humanScore > computerScore) {
        resultDiv.textContent = `You won the game with a score of ${humanScore} to ${computerScore}`;
    } else {
        resultDiv.textContent = `You lost the game with a score of ${computerScore} to ${humanScore}`;
    }
}