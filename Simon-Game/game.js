const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

let started = false;
let level = 0;

if (isMobile) {
  $("#level-title").text("Touch to Start");
  $(document).on("touchstart", function () {
    if (!started) {
      startGame();
    }
  });
} else {
  $("#level-title").text("Press Any Key to Start");
  $(document).on("keydown", function () {
    if (!started) {
      startGame();
    }
  });
}

$(".btn").on("click", function () {
  if (started) {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  } else {
    if (!isMobile) {
      $("#level-title").fadeIn(125).fadeOut(125).fadeIn(125);
      playSound("wrong");
    }
  }
});

function startGame() {
  setTimeout(function () {
    nextSequence();
    started = true;
  }, 800);
}

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(125).fadeOut(125).fadeIn(125);
  playSound(randomChosenColour);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  playSound("wrong");

  if (isMobile) {
    $("#level-title").text("Game Over, Touch to Restart");
  } else {
    $("#level-title").text("Game Over, Press Any Key to Restart");
  }
  started = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
