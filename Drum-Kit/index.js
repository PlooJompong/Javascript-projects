const DRUMS = document.querySelectorAll(".drum");

for (let i = 0; i < DRUMS.length; i++) {
  DRUMS[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", (e) => {
  makeSound(e.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      let crash = new Audio("assets/sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      let kickBass = new Audio("assets/sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "d":
      let snare = new Audio("assets/sounds/snare.mp3");
      snare.play();
      break;

    case "f":
      let tom1 = new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("assets/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("assets/sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.error("Sound not found");
  }
}
