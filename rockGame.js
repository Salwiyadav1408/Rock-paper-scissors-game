//track user score
let userScore = 0;
//track computer score
let computerScore = 0;

//to access which option is to be selected
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

//computer's choice

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //generate random number
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
    //rock, paper, scissors
    
};

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Match was Draw! Play again.";
    msg.style.backgroundColor = "#1e2749";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin) {
        //increment user score
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = `You Win! your choice ${userChoice} beats comp choice ${compChoice}`;
        msg.style.backgroundColor = "#3a5a40";
    } else {
        //increment computer score
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("You Lost, Better Luck Next Time!");
        msg.innerText = `You loose comp choice ${compChoice} beats your choice${userChoice}`
        msg.style.backgroundColor = "#780000";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice -> modular
    
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    //who will win the game

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;//assuming that we have won the game
        if(userChoice === "rock") {
            //compChoice scissors, paper
            userWin = compChoice === "paper" ? false : true; //comp won, our assumption will be wronf, that's why false is used.
        }
        else if(userChoice === "paper") {
            //compChoice rock, paper
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === " rock " ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        //access id of div
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);

        //call playGame & pass user's choice
        playGame(userChoice);
    })
});