document.getElementById('rock').onclick = pick;
document.getElementById('paper').onclick = pick;
document.getElementById('scissors').onclick = pick;


function pick() {
    let userChoice = this.id;
    console.log(userChoice);
    

    let computerChoice = Math.random();

    if (computerChoice < 0.34){
        computerChoice = 'rock';
    }else if(computerChoice <= 0.67) {
        computerChoice = 'paper';
    }else {
        computerChoice = 'scissors';
    }

    console.log(computerChoice)
    

    function comparePicks(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "The result is a tie!"
        }
    }
        if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return"player wins";
        }else{
            return "computer wins";
        }
            }

        if (userChoice === "paper") {
         if (computerChoice === "rock") {
             return "player wins";
          } else {
              return "computer wins";
          }
         }
    
         if (userChoice === "scissors") {
         if (computerChoice === "rock") {
             return "computer wins";
         } else {
             return "player wins";
        }
}
}


 