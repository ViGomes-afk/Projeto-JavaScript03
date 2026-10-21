const result = document.querySelector('.result');
const humanScoreElement = document.getElementById('human-score');
const iaScoreElement = document.getElementById('ia-score');

let humanScore = 0;
let iaScore = 0;

const plyHuman = (humanChoice) => {

    determineWinner(humanChoice, plyComputer());
}

const plyComputer = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const determineWinner = (humanChoice, computerChoice) => {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        result.innerHTML = "Empate!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        humanScoreElement.innerHTML = humanScore;
        result.innerHTML = "Você ganhou!";
    } else {
        iaScore++;
        iaScoreElement.innerHTML = iaScore;
        result.innerHTML = "Você perdeu!";
    }
}