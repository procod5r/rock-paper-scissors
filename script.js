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

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock, Paper or Scissors");
    return humanChoice;
}

/*
    rock beats scissors
    paper beats rock
    scissors beats paper
*/ 
 



function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    for(let i=0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    
    displayWinner(humanScore, computerScore)




    function playRound(humanChoice, computerChoice) {
            round = round + 1;
            console.log(`Round ${round}`);
            
            humanChoice = humanChoice.toLowerCase();
            console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

            switch(true) {
                case (computerChoice === "rock" && humanChoice === "scissors"):
                case (computerChoice === "paper" && humanChoice === "rock"):
                case (computerChoice === "scissors" && humanChoice === "paper"):
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;

                case (humanChoice === "rock" && computerChoice === "scissors"):
                case (humanChoice === "paper" && computerChoice === "rock"):
                case (humanChoice === "scissors" && computerChoice === "paper"):
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;

                case (humanChoice === computerChoice):
                    console.log("It's a tie!");
                    break;
                    
            }

            // add line break
            console.log('')
    }
}

function displayWinner(humanScore, computerScore) {
    const winner = computeResults(humanScore, computerScore)

    console.log('===== RESULTS =====')
    
    console.log(`Your final score is: ${humanScore}`)
    console.log(`The computer's final score is: ${computerScore}`)

    console.log(`Winner: ${winner}`)
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

playGame()