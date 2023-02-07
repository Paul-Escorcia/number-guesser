let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, secretTarget){
  if (Math.abs(humanGuess - secretTarget) > Math.abs(computerGuess - secretTarget)){
    return true
  }
  else if(Math.abs(humanGuess - secretTarget) < Math.abs(computerGuess - secretTarget)){
    return false
  }
}

function updateScore(winner){
    switch(winner) {
    case "human":
      humanScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }
}
function advanceRound(){
  return currentRoundNumber++;
}