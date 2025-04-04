
//  we need 2 variables to track the score of you and computer
let userScore = 0;
let compScore = 0;
// to access all choices 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    //to generate random numbr
   const randIdx = Math.floor(Math.random() * 3);
   return options [randIdx];
    //rock, paper, scissors
}

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You lose");
        msg.innerText = "You lose."
        msg.style.backgroundColor = "red";
    }
}

// generate user choice
const playGame = (userChoice) =>{
     console.log("userchoice = ",userChoice); 

    //generate computer choice
     const compChoice = genCompChoice();
     console.log("compchoice = ",compChoice); 

    if(userChoice === compChoice) {
        //Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock" ) {
           //scissor , paper
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissors
           userWin = compChoice === "scissors" ? false : true;
        }  else {
            // rock, paper
           userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
   });
});