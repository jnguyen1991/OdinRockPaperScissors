
const choices = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    const playerSelectionParsed = parsePlayerSelection(playerSelection);
    if (playerSelectionParsed === "ROCK"){
        if (computerSelection === "SCISSORS"){
            return "Win";
        }
        if (computerSelection === "PAPER"){
            return "Loss";
        }
    }
    if (playerSelectionParsed === "PAPER"){
        if (computerSelection === "ROCK"){
            return "Win";
        }
        if (computerSelection === "SCISSORS"){
            return "Loss";
        }
    }
    if (playerSelectionParsed === "SCISSORS"){
        if (computerSelection === "PAPER"){
            return "Win";
        }
        if (computerSelection === "ROCK"){
            return "Loss";
        }
    }
    return "Draw"
}

function parsePlayerSelection(playerChoice){
    let parsedAnswer = playerChoice.toUpperCase();
    if (choices.includes(parsedAnswer)){
        return parsedAnswer;
    }
    return undefined;
}

function game(){
    const rounds = 5;
    let playerResponse = undefined;
    let gameResult;
    let playerWins = 0;
    let computerWins = 0;
    let computerChoice = undefined;

    for (let i = 0; i < rounds; i++){
        playerResponse = undefined;
        alert(`Round ${i+1}`);
        console.log(`Round ${i+1}`);
        alert(`Current score, Player: ${playerWins} Computer: ${computerWins}`);
        console.log(`Current score, Player: ${playerWins} Computer: ${computerWins}`)
        while (!playerResponse){
            playerResponse = parsePlayerSelection(prompt("Select Rock, Paper, Scissors: "));
            if (!playerResponse){
                alert("Invalid choice, please select Rock, Paper or Scissors.");
                console.log("Invalid choice, please select Rock, Paper or Scissors.");
            }
        }

        computerChoice = getComputerChoice();

        gameResult = playRound(playerResponse, computerChoice);
        alert(`Player Choice: ${playerResponse} Computer Choice: ${computerChoice} Result: ${gameResult}`);
        if (gameResult==="Win"){
            playerWins += 1;
        }
        else if (gameResult==="Loss"){
            computerWins += 1;
        }
        else{
            continue;
        }
    }

    if (playerWins > computerWins){
        alert("You win!");
        console.log("You win!");
    }
    if (playerWins < computerWins){
        alert("Computer wins!");
        console.log("Computer wins!");
    }
    if (playerWins === computerWins){
        alert("Tie game!");
        console.log("Tie game!");
    }
}

game();