// set computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersPicked = [];
// win, loss, guesses, guessed variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// HTML variable references
var winCounterHTML = document.getElementById("win-counter");
var lossCounterHTML = document.getElementById("loss-counter");
var guessesCounterHTML = document.getElementById("guesses-counter");
var guessedLettersHTML = document.getElementById("guessed-letters");
// Functions reset,
winCounterHTML.textContent = "Wins: " + wins;
lossCounterHTML.textContent = "Losses: " + losses;
guessesCounterHTML.textContent = "Guesses Left: " + guessesLeft;
guessedLettersHTML.textContent = "Your Guesses: ";
function resetGame() {
  guessesLeft = 9;
  lettersPicked = [];
}
// Run the function on keypress
document.onkeyup = function(event) {
  // What key was pressed?
  var userGuess = event.key; 
  lettersPicked.push(userGuess);
  // What did the computer select?
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  // Logic of the game
  // If the user guesses correctly
  if (userGuess === computerGuess) {
    wins++;
    // if user guesses incorrectly
  } else if (userGuess !== computerGuess) {
      guessesLeft = guessesLeft - 1;
      if (guessesLeft == 0 ) {
      resetGame();
      losses++;
    }
  } 

  // make references back to HTML
  winCounterHTML.textContent = "Wins: " + wins;
  lossCounterHTML.textContent = "Losses: " + losses;
  guessesCounterHTML.textContent = "Guesses Left: " + guessesLeft;
  guessedLettersHTML.textContent = "Your Guesses: " + lettersPicked;

}

