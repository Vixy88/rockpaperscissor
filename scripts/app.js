// * Remember to run 'go live' below to see your changes on save.

// * write all your code INSIDE the function below
const gameOptions = ['rock', 'paper', 'scissor']; // variable with array storing the game options
let playerChoice = null; // empty variable for storing the player choice
let computerChoice = null; // empty variable for storing the computer choice
let playerScore = 0; // variable to store the players score everytime he wins a game
let computerScore = 0; // variable to store the computers score everytime it wins a game
let drawScore = 0; // variable storing the total number of draws
let gamesPlayed = 0;

// ENTIRE GAME LOGIC
const launchGame = (playerChoice, computerChoice) => {
  const playerScoreBoard = document.querySelector('.player-count');
  const computerScoreBoard = document.querySelector('.computer-count');
  const drawScoreBoard = document.querySelector('.draw-count');
  computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];

  if (playerChoice === computerChoice) {
    document.querySelector('#result').innerHTML = 'Its a draw, try again!';
    drawScore++;
    drawScoreBoard.textContent = drawScore;
    gamesPlayed++;
  } else if (playerChoice === 'rock' && computerChoice !== 'paper') {
    document.querySelector('#result').innerHTML =
      'Rock beats scissor so the PLAYER wins!';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
    gamesPlayed++;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    document.querySelector('#result').innerHTML =
      'Paper beats rock so the COMPUTER wins!';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    gamesPlayed++;
  } else if (playerChoice === 'paper' && computerChoice !== 'scissor') {
    document.querySelector('#result').innerHTML =
      'Paper beats rock so the PLAYER wins!';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
    gamesPlayed++;
  } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
    document.querySelector('#result').innerHTML =
      'Scissor beats paper so the COMPUTER wins!';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    gamesPlayed++;
  } else if (playerChoice === 'scissor' && computerChoice !== 'rock') {
    document.querySelector('#result').innerHTML =
      'Scissor beats paper so the PLAYER wins!';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
    gamesPlayed++;
  } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
    document.querySelector('#result').innerHTML =
      'Rock beats scissor so the COMPUTER wins!';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    gamesPlayed++;
  } else {
    document.querySelector('#result').innerHTML =
      'Something went wrong here, please try again or if the problem persists go play with a real person..:-)';
  }

  document.querySelector('#playerChoice').innerHTML = playerChoice;
  document.querySelector('#computerChoice').innerHTML = computerChoice;
};

// RESTART GAME FUNCTION

function restartGame() {
  location.reload();
}

// LEADERBOARD ALERT

function leaderBoardAlert() {
  alert('Nice Try Human, but unfortunately Skynet has taken over the leaderboard and soon the world!')
}

// FORM SUBMISSION
const form = document.querySelector('#form');

function onSubmit(event) {
  event.preventDefault();
  const userName = document.querySelector('#username').value;
  document.querySelector('.playerName').textContent = `The ${userName}'s`;
  document.querySelector('.playerNameResult').textContent = `The ${userName}`;
  form.classList = 'hideForm';
}

form.addEventListener('submit', onSubmit);


