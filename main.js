let correctNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let wins = 0;

function checkGuess() {
    const guess = Number(document.getElementById('guess').value);
    const message = document.getElementById('message');
    const gameContainer = document.querySelector('.game-container');

    if (!guess || guess < 1 || guess > 20) {
        message.textContent = 'Please enter a number between 1 and 20.';
        return;
    }

    if (guess === correctNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        gameContainer.style.backgroundColor = 'green';
        wins++;
        document.getElementById('wins').textContent = `Wins: ${wins}`;
        resetGame();
    } else {
        score--;
        message.textContent = 'Wrong guess. Try again.';
        document.getElementById('score').textContent = `Score: ${score}`;
        
        if (score === 0) {
            message.textContent = 'Game over! You ran out of attempts.';
            gameContainer.style.backgroundColor = 'red';
            document.querySelector('button').disabled = true;
        }
    }
}

function resetGame() {
    score = 20;
    correctNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('guess').value = '';
    document.querySelector('button').disabled = false;
    document.querySelector('.game-container').style.backgroundColor = 'white';
}
