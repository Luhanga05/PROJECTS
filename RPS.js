let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById("result");
const finalWinnerDiv = document.getElementById("finalWinner");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        humanScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    //Display the round results and scores
    resultsDiv.innerHTML =
        `your choose: <b>${humanChoice}</b><br> computer choose: <b>${computerChoice}</b><br> ${result}<br> you: ${humanScore}|computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            declareFinalWinner();
            disableButtons();
    }
}

function declareFinalWinner(){
    if(humanScore=== 5){
        finalWinnerDiv.innerHTML = "You are the final winner!";
        finalWinnerDiv.style.color = "green";
    }else{
        finalWinnerDiv.innerHTML = "Computer is the final winner!";
        finalWinnerDiv.style.color = "red";
    }
    restartBTN.style.display = "inline-block"
}

// function to disable buttons after completing a round
function disableButtons() { 
    document.getElementById('Rock').disabled = true;
    document.getElementById('Paper').disabled = true;
    document.getElementById('Scissors').disabled = true;
}

// Event listeners for the buttons
document.getElementById('Rock').addEventListener('click', () => playRound('rock'));
document.getElementById('Paper').addEventListener('click', () => playRound('paper'));
document.getElementById('Scissors').addEventListener('click', () => playRound('scissors'));

// restart function
const restartBTN =  document.getElementById("restart");
restartBTN.addEventListener("click",restartGame);

// restart parameters
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.innerHTML = "";
    finalWinnerDiv.textContent = "";
    finalWinnerDiv.style.color = ""; // reset color instead of className
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    restartBTN.style.display = "none"; // hide again
}
//code is complete
