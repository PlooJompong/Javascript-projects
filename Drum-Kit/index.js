const DRUMS = document.querySelectorAll(".drum");

for (let i = 0; i < DRUMS.length; i++) {
  DRUMS[i].addEventListener("click", () => {
    console.log(DRUMS[i].innerHTML);
    let audio = new Audio("assets/sounds/tom-1.mp3");
    audio.play();
  });
}
