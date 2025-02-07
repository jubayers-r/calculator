const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let attempts = 0;
let running = true;

let message = `Guess a number between ${minNum} and ${maxNum}:`;
while (running) {
  guess = window.prompt(message);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(
      `Invalid number! Try again guessing a number between ${minNum} and ${maxNum}.`
    );
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`Out of range! Please guess between ${minNum} and ${maxNum}.`);
  } else {
    attempts++;
    if (guess > answer) {
      message = `Too high! Guess a lower number between ${minNum} and ${maxNum}:`;
    } else if (guess < answer) {
      message = `Too low! Guess a higher number between ${minNum} and ${maxNum}:`;
    } else {
      running = false;
      window.alert(`CONGRATS! ${answer} is the correct guess!`);
      window.alert(`It took you ${attempts} attempts.`);
    }
  }
}
