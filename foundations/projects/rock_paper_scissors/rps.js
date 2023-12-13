// Rock, Paper Scissors

// Create computer choise
//   random choise

// create player choise
//   check input
//   (rock, rock, rock) should work

// create game logic
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const botPick = Math.floor(Math.random() * choices.length);
  console.log(`Computer: ${choices[botPick]}`);
  return choices[botPick];
}

function getPlayerChoice() {
  let pick;
  do {
    pick = prompt("rock, paper or scissors?").trim().toLowerCase();
    if (!choices.includes(pick)) alert("Enter viable choice");
  } while (!choices.includes(pick));
  console.log(`Player: ${pick}`);
  return pick;
}

function playRound(pc, cc) {
  if (cc === pc) {
    return "tie";
  }

  if (
    (cc === "rock" && pc === "scissors") ||
    (cc === "scissors" && pc === "paper") ||
    (cc === "paper" && "rock")
  ) {
    return "computer";
  }

  if (
    (cc === "scissors" && pc === "rock") ||
    (cc === "paper" && pc === "scissors") ||
    (cc === "rock" && pc === "paper")
  ) {
    return "player";
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  while (computerScore !== 5 && playerScore !== 5) {
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    const roundWinner = playRound(getPlayerChoice(), getComputerChoice());

    switch (roundWinner) {
      case "tie":
        console.log("It's a tie.");
        break;
      case "computer":
        computerScore++;
        console.log("Computer wins.");
        break;
      case "player":
        playerScore++;
        console.log("Player wins.");
        break;
      default:
        console.log("something happened...");
    }
  }
}

game();

// console.log(playRound(getComputerChoice(), getPlayerChoice()));
