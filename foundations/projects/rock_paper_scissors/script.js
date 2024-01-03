const buttons = document.querySelectorAll("button");
const playerScoreBox = document.querySelector("#playerScore");
const playerVersusSign = document.querySelector("#playerSign");
const computerScoreBox = document.querySelector("#computerScore");
const computerVersusSign = document.querySelector("#computerSign");
const resultBox = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;

const choices = {
    rock: "@",
    paper: "|",
    scissors: "V"
}

function getComputerChoice() {
    const keys = Object.keys(choices);
    randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}

function playRound(cc, pc) {
    if (cc === pc) {
        return "tie"
    }

    if (
        (cc === "rock" && pc === "scissors") ||
        (cc === "scissors" && pc === "paper") ||
        (cc === "paper" && pc === "rock")
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

function update(result) {
    switch (result) {
        case "tie":
            resultBox.textContent = "It's a tie!";
            break;
        case "computer":
            resultBox.textContent = "Computer wins!";
            computerScore++;
            computerScoreBox.textContent = computerScore;
            break;
        case "player":
            resultBox.textContent = "Player wins!";
            playerScore++;
            playerScoreBox.textContent = playerScore;
            break;
        default:
            resultBox.textContent = "Something happened";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSign = button.getAttribute("id");
        const computerSign = getComputerChoice();

        playerVersusSign.textContent = choices[playerSign];
        computerVersusSign.textContent = choices[computerSign];

        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            playerScoreBox.textContent = playerScore;

            computerScore = 0;
            computerScoreBox.textContent = computerScore;
        } else {
            const result = playRound(computerSign, playerSign);
            update(result);
        }
    });
})

