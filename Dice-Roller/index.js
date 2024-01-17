const DISPLAY_RESULT = document.querySelector("#result");
const DICE_ONE = document.querySelector("#dice-one");
const DICE_TWO = document.querySelector("#dice-two");
const ROLL_DICE_BTN = document.querySelector("#roll-dice-btn");

if (!DISPLAY_RESULT || !DICE_ONE || !DICE_TWO || !ROLL_DICE_BTN) {
  console.error("One or more elements not found.");
} else {
  const rollDice = () => {
    const { diceOne, diceTwo } = randomNumber();
    displayDice(diceOne, diceTwo);
    checkResult(diceOne, diceTwo);
  };

  const randomNumber = () => {
    const diceOne = Math.floor(Math.random() * 6 + 1);
    const diceTwo = Math.floor(Math.random() * 6 + 1);
    return { diceOne, diceTwo };
  };

  const displayDice = (diceOne, diceTwo) => {
    DICE_ONE.setAttribute("src", `assets/dice${diceOne}.png`);
    DICE_TWO.setAttribute("src", `assets/dice${diceTwo}.png`);
  };

  const checkResult = (diceOne, diceTwo) => {
    if (diceOne > diceTwo) {
      DISPLAY_RESULT.innerText = "Player 1 wins!";
    } else if (diceOne < diceTwo) {
      DISPLAY_RESULT.innerText = "Player 2 wins!";
    } else {
      DISPLAY_RESULT.innerText = "Draw!";
    }
  };

  ROLL_DICE_BTN.addEventListener("click", rollDice);
}
