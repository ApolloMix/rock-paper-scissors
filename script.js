
function computerPlay()
{
    let choice = Math.floor(Math.random() * 4);
    while(choice < 1)
    {
        choice = Math.floor(Math.random() * 4);
    }

    if(choice == 1)
    {
        return "Rock";
    }
    if(choice == 2)
    {
        return "Paper";
    }
    if(choice == 3)
    {
        return "Scissors";
    }
}


