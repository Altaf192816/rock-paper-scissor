let playerScore = 0;
let computerScore = 0;

const playerMove = function (letter) {
  let player;
  const word = letter.toLowerCase().at(0);
  if (word === "r") player = 1;
  else if (word === "p") player = 2;
  else if (word === "s") player = 3;
  if (!player) return;
  document.querySelector(".img1").setAttribute("src", `./Game-${player}.png`);
  return player;
};

const computerMove = function () {
  let computer = Math.floor(Math.random() * 3 + 1);
  document.querySelector(".img2").setAttribute("src", `./Game-${computer}.png`);
  return computer;
};

const init = function () {
  document.querySelector(".img1").style.background =
    "linear-gradient(rgb(255, 0, 51), rgb(0, 183, 255))";
  document.querySelector(".img2").style.background =
    "linear-gradient(rgb(255, 0, 51), rgb(0, 183, 255))";
};

//click Event
document
  .querySelector(".btn-container")
  .addEventListener("click", function (e) {
    init();
    if (e.target.classList.contains("btn")) {
      let player1 = playerMove(e.target.textContent);
      let player2 = computerMove();
      result(player1, player2);
    }
  });

//keyboard Event
document.addEventListener("keydown", function (event) {
  init();
  let player1 = playerMove(event.key);
  if (!player1) return;
  let player2 = computerMove();
  result(player1, player2);
});

//result
const result = function (player1, player2) {
  if (
    (player1 === 1 && player2 === 3) ||
    (player1 === 2 && player2 === 1) ||
    (player1 === 3 && player2 === 2)
  ) {
    playerScore++;
    document.querySelector("h2").textContent = "Player win";
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".img1").style.background =
      "linear-gradient(rgb(81, 255, 0), rgb(0, 183, 255))";
  } else if (
    (player2 === 1 && player1 === 3) ||
    (player2 === 2 && player1 === 1) ||
    (player2 === 3 && player1 === 2)
  ) {
    computerScore++;
    document.querySelector("h2").textContent = "Computer win";
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".img2").style.background =
      "linear-gradient(rgb(81, 255, 0), rgb(0, 183, 255))";
  } else if (
    (player1 === 1 && player2 === 1) ||
    (player1 === 2 && player2 === 2) ||
    (player1 === 3 && player2 === 3)
  ) {
    document.querySelector("h2").textContent = "Draw";
  }
};
