const DISPLAY_RESULT = document.querySelector("#result");
const DICE_ONE = document.querySelector("#dice-one");
const DICE_TWO = document.querySelector("#dice-two");
const ROLL_DICE_BTN = document.querySelector("#roll-dice-btn");

if (!DISPLAY_RESULT || !DICE_ONE || !DICE_TWO || !ROLL_DICE_BTN) {
  console.error("One or more elements not found.");
} else {
  let diceOne;
  let diceTwo;

  function rollDice() {
    randomNumber();
    displayDice();
    checkResult();
  }

  function randomNumber() {
    diceOne = Math.floor(Math.random() * 6 + 1);
    diceTwo = Math.floor(Math.random() * 6 + 1);
  }

  function displayDice() {
    DICE_ONE.setAttribute("src", `assets/dice${diceOne}.png`);
    DICE_TWO.setAttribute("src", `assets/dice${diceTwo}.png`);
  }

  function checkResult() {
    if (diceOne > diceTwo) {
      DISPLAY_RESULT.innerText = "Player 1 wins!";
    } else if (diceOne < diceTwo) {
      DISPLAY_RESULT.innerText = "Player 2 wins!";
    } else {
      DISPLAY_RESULT.innerText = "Draw!";
    }
  }

  ROLL_DICE_BTN.addEventListener("click", rollDice);
}
