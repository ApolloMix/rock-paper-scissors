function computerPlay()
{
    const choice = Math.floor(Math.random() * 3)
    
    if(choice === 0)
    {
        return "rock";
    }
    if(choice === 1)
    {
        return "paper";
    }
    if(choice === 2)
    {
        return "scissors";
    }
}

function playerSelection() 
{
    let choice = window.prompt("Choose your weapon!:").toLowerCase();
    return choice;
}

function playRound(playerChoice, computerChoice)
{   
    if(playerChoice === computerChoice)
    {
        whoWon = "computer";
        return "Tie!";
    }

    if(playerChoice === "rock" && computerChoice === "paper")
    {
        whoWon = "computer"
        return "Computer wins!";
    }
    if(playerChoice === "rock" && computerChoice === "scissors")
    {
        whoWon = "player";
        return "Player wins!";
    }
    
    if(playerChoice === "paper" && computerChoice === "rock")
    {
        whoWon = "player";
        return "Player wins!";
    }
    if(playerChoice === "paper" && computerChoice === "scissors")
    {
        whoWon = "computer"
        return "Computer wins!";
    }
    if(playerChoice === "scissors" && computerChoice === "rock")
    {
        whoWon = "computer"
        return "Computer wins!";
    }
    if(playerChoice === "scissors" && computerChoice === "paper")
    {
        whoWon = "player";
        return "Player wins!";
    }
}

function checkWinner()
{
    if(whoWon === "player")
    {
        playerScore++;
        console.log("player wins! with " + playerScore + " points!");
    }
    if(whoWon === "computer")
    {
        computerScore++;
        console.log("computer wins! with " + computerScore + " points!");
    }
}

function game() 
{
    window.prompt("Welcome to Rock Paper Scissors!, type 'start' to begin!");

    for(let i = 0; i <= 5; i++)
    {
        playRound(playerSelection(), computerAnswer)
        checkWinner();
    }
}

let playerScore = 0;
let computerScore = 0;
const computerAnswer = computerPlay();
var whoWon;

game();

