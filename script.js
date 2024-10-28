console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

let number = 0;

// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");

const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");

const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");

const winnerButton = document.querySelector("#winner");

const restartButton = document.querySelector("#restart-button");
restartButton.style.display = "none";


const stepsButton = document.querySelector("#steps-Button");
const steps = document.querySelector("#steps");

const colorButton = document.querySelector("#color-Button");
const Horse = document.querySelector("#chosen-horse");

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  return checkWinner(blue_position, "Blue ");
}

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  return checkWinner(pink_position, "Pink ");
}

const advancebrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  return checkWinner(brown_position, "Brown ");
}

const restartGame = (e) => {
  brown_position = 1;
  pink_position = 1;
  blue_position = 1;
  changePosition(blueHorse,blue_position);
  changePosition(pinkHorse,pink_position);
  changePosition(brownHorse,brown_position);
  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
  number = 0;
  restartButton.disabled = true;
  document.getElementById("winner").innerHTML = "";
  restartButton.style.display = "none";

}

// Check for a winner
const checkWinner = (position, color) => {
  if (number == 0){
    if (position == 5){
      document.getElementById("winner").innerHTML = color + "is the Winner!";
      number = 1;
      console.log(number);
      blueButton.disabled = true;
      pinkButton.disabled = true;
      brownButton.disabled = true;
      restartButton.disabled = false;
      restartButton.style.display = "block";
    }
  }
}

const randomNum = (e) => {
  let randomNumber = Math.floor(Math.random() * 3);
  document.getElementById("steps").innerHTML = randomNumber;
}

const colorHorse = (e) => {
  document.getElementById("chosen-horse").innerHTML = "'Blue' if the random number is 0, <p>'Pink' if it is 1, and</p><p>'Brown' if it is 2.</p>"
}
  


// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click",advancePink);
brownButton.addEventListener("click",advancebrown);
restartButton.addEventListener("click", restartGame);
stepsButton.addEventListener("click", randomNum);
colorButton.addEventListener("click", colorHorse);
