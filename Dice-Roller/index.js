const ROLL_DICE_BTN = document.querySelector("#roll-dice-btn");
const DICE_ONE = document.querySelector("#dice-one");
const DICE_TWO = document.querySelector("#dice-two");

let diceOne;
let diceTwo;

function rollDice() {
  diceOne = Math.floor(Math.random() * 6 + 1);
  diceTwo = Math.floor(Math.random() * 6 + 1);
  displayDice();
  checkResult();
}

function displayDice() {
  const diceElements = [DICE_ONE, DICE_TWO];
  const diceValues = [diceOne, diceTwo];

  for (let i = 0; i < diceElements.length; i++) {
    const diceElement = diceElements[i];
    const diceValue = diceValues[i];

    if (diceValue >= 1 && diceValue <= 6) {
      diceElement.setAttribute("src", `assets/dice${diceValue}.png`);
    }
  }
}

function checkResult() {
  if (diceOne < diceTwo) {
    console.log("Player 2 wins");
  } else if (diceOne > diceTwo) {
    console.log("Player 1 wins");
  } else {
    console.log("It's a tie");
  }
}

ROLL_DICE_BTN.addEventListener("click", rollDice);
