var winCount = 0;

var main = function (input) {
  var randomWord = generateRandWord();

  if (randomWord == input) {
    winCount = winCount + 1;
  }

  if (winCount == 1) {
    return `Your guess is ${input}, the random word is ${randomWord}. You got one correct. Try one more time.`;
  }

  if (winCount == 2) {
    winCount = 0;
    return `Your guess is ${input}, the random word is ${randomWord}. You got two correct. You win!`;
  }

  return `Your guess is ${input}, the random word is ${randomWord}. Try Again!`;
};

//To generate random number between 0 to 2 inclusive
var generateRandWord = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);

  if (resultInteger == 0) {
    return "banana";
  }
  if (resultInteger == 1) {
    return "chisel";
  }
  if (resultInteger == 2) {
    return "faucet";
  }
};
