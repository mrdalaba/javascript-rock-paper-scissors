let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('choices').textContent = "You chose: " + playerChoice + " | Computer chose: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "you win!";
        playerScore++;
    } else {
        result = "Compter wins!";
        computerScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = "You: " + playerScore + " | Computer: " + computerScore;
}
