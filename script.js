document.getElementById('rock').onclick = pick;
document.getElementById('paper').onclick = pick;
document.getElementById('scissors').onclick = pick;
let userScore = 0;
let computerScore = 0;
let ties = 0;

function pick() {
    //picks user choice
    let userChoice = this.id;
    console.log(userChoice);
    
    //picks computer choice
    let computerChoice = Math.random();

    if (computerChoice < 0.34){
        computerChoice = 'rock';
    }else if(computerChoice <= 0.67) {
        computerChoice = 'paper';
    }else {
        computerChoice = 'scissors';
    }

    console.log(computerChoice)
    document.getElementById('user-pick').innerHTML = "User picks: " + userChoice;
    document.getElementById('computer-pick').innerHTML = "Computer picks: " + computerChoice;
    //compares choices
        if (userChoice === computerChoice){
            ties++;
            document.getElementById("ties").innerHTML = "Ties: " + ties; 
            return "The result is a tie"
            }

        if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            userScore++;
            document.getElementById('player-score').innerHTML = "Player Score: " + userScore;
            return "player wins";
        }else{
            computerScore++;
            document.getElementById('computer-score').innerHTML = "Computer Score: " + computerScore;
            return "computer wins";
        }
            }

        if (userChoice === "paper") {
         if (computerChoice === "rock") {
            userScore++;
            document.getElementById('player-score').innerHTML = "Player Score: " + userScore;
             return "player wins";
          } else {
            computerScore++;
            document.getElementById('computer-score').innerHTML = "Computer Score: " + computerScore;
              return "computer wins";
          }
         }
    
         if (userChoice === "scissors") {
         if (computerChoice === "rock") {
            computerScore++;
            document.getElementById('computer-score').innerHTML = "Computer Score: " + computerScore;
             return "computer wins";
         } else {
            userScore++;
            document.getElementById('player-score').innerHTML = "Player Score: " + userScore;
             return "player wins";
        }
         
};

}


 