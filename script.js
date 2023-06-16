
const choices = ['ROCK','PAPER','SCISSORS'];

let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(e){
    const playerSelectionParsed = e.target.innerHTML;
    const computerSelection = getComputerChoice();
    let result;
    if (playerSelectionParsed === "ROCK"){
        if (computerSelection === "SCISSORS"){
            result = "Win";
        }
        if (computerSelection === "PAPER"){
            result = "Loss";
        }
    }
    if (playerSelectionParsed === "PAPER"){
        if (computerSelection === "ROCK"){
            result = "Win";
        }
        if (computerSelection === "SCISSORS"){
            result = "Loss";
        }
    }
    if (playerSelectionParsed === "SCISSORS"){
        if (computerSelection === "PAPER"){
            result = "Win";
        }
        if (computerSelection === "ROCK"){
            result = "Loss";
        }
    }
    if (!result){
        result = "Draw";
    }
    console.log(result);
    updateScore(result);
    checkScore();
}

function checkScore(){
    console.log(`Player: ${playerScore} - Computer: ${computerScore}` )
    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            writeMessage("You won the game! Congrats!");
        }
        else{
            writeMessage("You lost the game! Better luck next time!");
        }
        console.log("Reset game");
        playerScore = 0;
        computerScore = 0;
    }
}

function updateScore(result){
    if (result === "Win"){
        playerScore += 1;
        writeMessage("You win this round!")
    }
    if (result === "Loss"){
        computerScore += 1;
        writeMessage("You lose this round!")
    }
    if (result === "Draw"){
        writeMessage("This rounds a draw!")
    }
    updateScoreboard();
}

function updateScoreboard(){
    const scoreboard = document.querySelector('#scoreboard');
    scoreboard.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function writeMessage(string){
    const message = document.querySelector('#message');
    message.textContent = `${string}`;
}

function game(){
    const rounds = 5;
    let playerResponse = undefined;
    let gameResult;
    let playerWins = 0;
    let computerWins = 0;
    let computerChoice = undefined;


    playerResponse = undefined;
    console.log(`Current score, Player: ${playerWins} Computer: ${computerWins}`)
    /*
    while (!playerResponse){
        playerResponse = parsePlayerSelection(prompt("Select Rock, Paper, Scissors: "));
        if (!playerResponse){
            console.log("Invalid choice, please select Rock, Paper or Scissors.");
        }
    }
    */

    computerChoice = getComputerChoice();

    gameResult = playRound(playerResponse, computerChoice);
    if (gameResult==="Win"){
        playerWins += 1;
    }
    else if (gameResult==="Loss"){
        computerWins += 1;
    }

    if (playerWins > computerWins){
        console.log("You win!");
    }
    if (playerWins < computerWins){
        console.log("Computer wins!");
    }
    if (playerWins === computerWins){
        console.log("Tie game!");
    }
}

function getChoice(e){
    console.log(e);
    console.log(e.target.innerHTML);
}

const buttons = Array.from(document.querySelectorAll('.choice'));
console.log(buttons);
buttons.forEach(button => button.addEventListener('click',playRound))


/*game();*/