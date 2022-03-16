
function computerPlay()
{
    let choice = Math.floor(Math.random() * 4);
    while(choice < 1)
    {
        choice = Math.floor(Math.random() * 4);
    }

    if(choice == 1)
    {
        return "Rock".toLowerCase();
    }
    if(choice == 2)
    {
        return "Paper".toLowerCase();
    }
    if(choice == 3)
    {
        return "Scissors".toLowerCase();
    }
}

function Round(playerSelection, computerSelection)
{
    calculateWinner(playerSelection, computerSelection);   
}

function calculateWinner(a, b)
{
    if(a == b)
    {
        window.alert("Tie!");
    }

    if(a == "rock" && b == "paper")
    {
        window.alert("Computer Wins!");
    }
    if(a == "rock" && b == "scissors")
    {
        window.alert("Player wins!");
    }

    if(a == "paper" && b == "rock")
    {
        window.alert("Player wins!");
    }
    if(a == "paper" && b == "scissors")
    {
        window.alert("Computer wins!");
    }

    if(a == "scissors" && b == "rock")
    {
        window.alert("Computer wins!");
    }
    if(a == "scissors" && b == "paper")
    {
        window.alert("Player wins!");
    }
}

function getPlayerInput()
{
    window.prompt("Enter input: ");
}

Round(getPlayerInput(), computerPlay());


