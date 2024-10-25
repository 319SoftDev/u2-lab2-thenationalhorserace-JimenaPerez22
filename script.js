console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

let number = 0;
let blueN = 1


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");

const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");

const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");

const winnerButton = document.querySelector("#winner");

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  return checkWinner(blue_position, "Blue ");

  if (blue_position >= 5){
    blueN += 1;
    document.getElementById("blue-horse").alt = "blue horse at postion " + blue_position + "out of 5";
  }

};
const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  return checkWinner(pink_position, "Pink ");
};

const advancebrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  return checkWinner(brown_position, "Brown ");
}



// Check for a winner
const checkWinner = (position, color) => {
  if (number == 0){
    if (position == 5){
      document.getElementById("winner").innerHTML = color + "is the Winner!";
      console.log("winner");
      number = 1;
      console.log(number);
    }
  }
};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click",advancePink);
brownButton.addEventListener("click",advancebrown);
