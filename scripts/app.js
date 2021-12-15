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
  const playerWon = (playerChoice === 'rock' && computerChoice !== 'paper') || (playerChoice === 'paper' && computerChoice !== 'scissor') || (playerChoice === 'scissor' && computerChoice !== 'rock');
  const draw = (playerChoice === computerChoice);

  if (draw) {
    document.querySelector('#result').innerHTML = 'Its a draw, try again!';
    drawScore++;
    drawScoreBoard.textContent = drawScore;
  } else if (playerWon) {
    document.querySelector('#result').innerHTML = 'Wohoo, you WIN!!!';
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else {
    document.querySelector('#result').innerHTML = 'OUCH! The COMPUTER wins';
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  gamesPlayed++;
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


