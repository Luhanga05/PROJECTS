function playGame() {
    //Scores inside the game
let humanScore = 0;
let computerScore = 0;

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        playRound();
    }
    // Display final scores 
    console.log(`\nFinal Scores: You ${humanScore} - ${computerScore} Computer`);
    console.log("Thanks for playing!");

    // Determine the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! The computer wins the game!");
    } else {
        console.log("It's a tie overall!");
    }
}
//help function to get computer choice
function getHumanChoice(){
    const userInput = prompt("Enter your choice: rock, paper, or scissors");//prompting user for input  
    return userInput.toLowerCase();//lowercase to avoid case sensitivity issues    
}
//help function to get computer choice
function getComputerChoice(){
    const randomNumber = Math.random();
    
    if (randomNumber<0.33){
        return "rock";
    }
    else if (randomNumber<0.66){
        return "paper";
    }
    else {
        return "scissors";
    }
}
// Start the game
playGame();