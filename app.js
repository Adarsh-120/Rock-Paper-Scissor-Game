let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const usersScore = document.querySelector("#user-score");
const computersScore = document.querySelector("#computer-score");

// In this function , computer generate its own choice or random choice
const genComputerChoice = () => {
  const options = ["paper", "rock", "scissors"];
  const getIndx = Math.floor(Math.random() * 3);
  return options[getIndx];
};

// It is function which show the game was draw
const drawGame = () => {
  console.log("Game was draw.");
  message.innerText = "Match draw.  Play again !";
  message.style.backgroundColor = "#081b31";
};

// Here you show either user Wins or lose
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    usersScore.innerText = userScore;
    console.log("You Win !!");
    message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
  } else {
    computerScore++;
    computersScore.innerText = computerScore;
    console.log("You Lose !");
    message.innerText = `You Lose. ${computerChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};

// All conditions are here to check the boolean value of userWin
const playGame = (userChoice) => {
  console.log("User's choice is :- ", userChoice);
  // Generating  computer choice by using another function
  const computerChoice = genComputerChoice();
  console.log("Computer's choice is :- ", computerChoice);

  if (userChoice === computerChoice) {
    // Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Left choices are :- paper, scissors
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Left choices are :- rock, scissors
      userWin = computerChoice === "rock" ? true : false;
    } else {
      // userChoice === scissor
      // Left choices are :- paper, rock
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

// Select choice class to use, when we click on the image then we get what we had clicked or user's choice or user had clicked which figure.

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
