const results = document.querySelector('.results-container');
const buttonsContainer = document.querySelector('.btn-container');
const gameRound = document.querySelector('.round');
const roundInfo = document.querySelector('.round-info');
const choicesText = document.querySelector('.choice-info');
const userScore = document.querySelector('.userScoreSpan');
const compScore = document.querySelector('.compScoreSpan');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const nextRound = document.createElement('button');

rockBtn.textContent = "ROCK"
paperBtn.textContent = "PAPER"
scissorsBtn.textContent = "SCISSORS"
rockBtn.setAttribute("id", "rock")
rockBtn.classList.add('options');
paperBtn.setAttribute("id", "paper")
paperBtn.classList.add('options');
scissorsBtn.setAttribute("id", "scissors")
scissorsBtn.classList.add('options');
buttonsContainer.appendChild(rockBtn)
buttonsContainer.appendChild(paperBtn)
buttonsContainer.appendChild(scissorsBtn)

let round = 0;
let option;

document.addEventListener('click', (e) => {
    if(e.target.matches('.options')){    
        switch(e.target.id) {
            case "rock":
                option = "rock";
                break;
            case "paper":
                option = "paper";
                break;
            case "scissors":
                option = "scissors";
        }
        playGame()
    }
})

function getHumanChoice() {
    return option;
}

function getComputerChoice() {
    let computerChoice;
    let randomizedNumber = Math.floor(Math.random() * 3)  + 1
    if(randomizedNumber === 1) {
        computerChoice = 'rock';
        return computerChoice
    } 
    if(randomizedNumber === 2) {
        computerChoice = 'paper';
        return computerChoice
    } 
    if(randomizedNumber === 3) {
        computerChoice = 'scissors';
        return computerChoice
    } 
}


let humanScore = 0;
let computerScore = 0;

function playGame() {

    playRound(getHumanChoice(), getComputerChoice())
        
    if(round === 5) {
        displayWinner(humanScore, computerScore);
    }
 




    function playRound(humanChoice, computerChoice) {
            round = round + 1;
            gameRound.textContent = `Round ${round}`;
            
            humanChoice = humanChoice.toLowerCase();

            switch(true) {
                case (computerChoice === "rock" && humanChoice === "scissors"):
                case (computerChoice === "paper" && humanChoice === "rock"):
                case (computerChoice === "scissors" && humanChoice === "paper"):
                    choicesText.textContent = `You chose: ${humanChoice}. Comp chose: ${computerChoice}`;
                    roundInfo.textContent = `Comp wins! ${computerChoice} beats ${humanChoice}`;
                    computerScore++;
                    break;

                case (humanChoice === "rock" && computerChoice === "scissors"):
                case (humanChoice === "paper" && computerChoice === "rock"):
                case (humanChoice === "scissors" && computerChoice === "paper"):
                    choicesText.textContent = `You chose: ${humanChoice}. Comp chose: ${computerChoice}`;
                    roundInfo.textContent =  `You win! ${humanChoice} beats ${computerChoice}`;
                    humanScore++;
                    break;

                case (humanChoice === computerChoice):
                    choicesText.innerHTML = `You chose: ${humanChoice}. Comp chose: ${computerChoice}`;
                    roundInfo.textContent = "It's a tie!";
                    break;
                    
            }
            userScore.parentNode.style.padding = "10px";
            userScore.textContent = `You: ${humanScore}`;
            compScore.textContent = `Comp: ${computerScore}`;

    }
}

function displayWinner(humanScore, computerScore) {
    const winner = computeResults(humanScore, computerScore)
    gameRound.textContent = "Results";
    
    results.style.color = "green";
    results.style.fontWeight = 600;
    results.style.textAlign = "center";
    results.style.fontSize = "32px";
    results.style.fontFamily = "cursive";

    if (winner == "IT'S A TIE!") {
        results.style.color = "grey";
        results.textContent = `DRAW`;
    }
    else{
        results.textContent = `Winner: \n${winner}`;
    }

}

function computeResults(humanScore, computerScore) {

    if(humanScore > computerScore) {
        return "YOU!!!"
    } else if(humanScore === computerScore){
        return "IT'S A TIE!"
    } else {
        return "COMPUTER"
    }
}