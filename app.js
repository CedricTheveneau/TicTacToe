//? Tic tac toe

let wait = () => {
  console.log(`J'attends`);
};

//! Gets all boxes
const boxes = document.querySelectorAll(".box");

//! Gets the remaining boxes that are still available
let availableBoxes = document.querySelectorAll(".available");

//! Keeps up with the number of turns played
let counter = 0;

//! Content that is pushed on click for each box
const O = "O";
const X = "X";

//! Keeps up with the number of victories from the player
let pVic = 0;

//! Keeps up with the number of victories from the computer
let cVic = 0;

//! Keeps up with the number of games played
let plays = 0;

//! Shows results depending on which case we end up with : Win, Lose, Tie
let PlayerWin = () => {
  document.querySelector(".results").innerHTML = "Player wins !";
  document.querySelector(
    ".turns"
  ).innerHTML = `Please, click reset to play again`;
  pVic++;
  document.querySelector(
    ".victories"
  ).innerHTML = `Player's victories : ${pVic}<br/>AI's victories : ${cVic}`;
  plays++;
  document.querySelector(".gamesPlayed").innerHTML = `Games played : ${plays}`;
};

let AIWin = () => {
  document.querySelector(".results").innerHTML = "AI wins !";
  document.querySelector(
    ".turns"
  ).innerHTML = `Please, click reset to play again`;
  cVic++;
  document.querySelector(
    ".victories"
  ).innerHTML = `Player's victories : ${pVic}<br/>AI's victories : ${cVic}`;
  plays++;
  document.querySelector(".gamesPlayed").innerHTML = `Games played : ${plays}`;
};

let tie = () => {
  document.querySelector(".results").innerHTML = "Tie !";
  document.querySelector(
    ".turns"
  ).innerHTML = `Please, click reset to play again`;
  document.querySelector(
    ".victories"
  ).innerHTML = `Player's victories : ${pVic}<br/>AI's victories : ${cVic}`;
  plays++;
  document.querySelector(".gamesPlayed").innerHTML = `Games played : ${plays}`;
};

// ! Tics a box when clicked and ticks another box to simulate a second player
let gameSetup = () => {
  availableBoxes.forEach((box) => {
    //! Makes all boxes empty
    box.innerHTML = "&nbsp;";
    //! Waits for an interraction from the player
    box.addEventListener("click", () => {
      //! Clicks a box only if it's empty
      if (box.innerHTML == "&nbsp;") {
        let playerPlays = () => {
          counter++;
          document.querySelector(".count").innerHTML = `Turns : ${counter}`;
          box.innerHTML = X;
          box.classList.remove("available");
          availableBoxes = document.querySelectorAll(".available");
          document.querySelector(".turns").innerHTML = `It's AI's turn !`;
        };
        playerPlays();
        //! AI's turn, simulates a reflection time
        let AIPlays = () => {
          counter++;
          document.querySelector(".count").innerHTML = `Turns : ${counter}`;
          const randomIndex = Math.floor(Math.random() * availableBoxes.length);
          const item = availableBoxes[randomIndex];
          item.innerHTML = O;
          item.classList.remove("available");
          availableBoxes = document.querySelectorAll(".available");
          document.querySelector(".turns").innerHTML = `It's player's turn !`;
        };
        AIPlays();
      }
      let checks = () => {
        //! Check results
        //todo Player
        //! Horizontal
        if (
          boxes[0].innerHTML == boxes[1].innerHTML &&
          boxes[1].innerHTML == boxes[2].innerHTML &&
          boxes[1].innerHTML == X
        ) {
          PlayerWin();
        } else if (
          boxes[3].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[5].innerHTML &&
          boxes[4].innerHTML == X
        ) {
          PlayerWin();
        } else if (
          boxes[6].innerHTML == boxes[7].innerHTML &&
          boxes[7].innerHTML == boxes[8].innerHTML &&
          boxes[7].innerHTML == X
        ) {
          PlayerWin();
        }
        //! Vertical
        if (
          boxes[0].innerHTML == boxes[3].innerHTML &&
          boxes[3].innerHTML == boxes[6].innerHTML &&
          boxes[3].innerHTML == X
        ) {
          PlayerWin();
        } else if (
          boxes[1].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[7].innerHTML &&
          boxes[4].innerHTML == X
        ) {
          PlayerWin();
        } else if (
          boxes[2].innerHTML == boxes[5].innerHTML &&
          boxes[5].innerHTML == boxes[8].innerHTML &&
          boxes[5].innerHTML == X
        ) {
          PlayerWin();
        }
        //! Diagonal
        if (
          boxes[0].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[8].innerHTML &&
          boxes[4].innerHTML == X
        ) {
          PlayerWin();
        } else if (
          boxes[2].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[6].innerHTML &&
          boxes[4].innerHTML == X
        ) {
          PlayerWin();
        }
        //todo AI
        //! Horizontal
        if (
          boxes[0].innerHTML == boxes[1].innerHTML &&
          boxes[1].innerHTML == boxes[2].innerHTML &&
          boxes[1].innerHTML == O
        ) {
          AIWin();
        } else if (
          boxes[3].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[5].innerHTML &&
          boxes[4].innerHTML == O
        ) {
          AIWin();
        } else if (
          boxes[6].innerHTML == boxes[7].innerHTML &&
          boxes[7].innerHTML == boxes[8].innerHTML &&
          boxes[7].innerHTML == O
        ) {
          AIWin();
        }
        //! Vertical
        if (
          boxes[0].innerHTML == boxes[3].innerHTML &&
          boxes[3].innerHTML == boxes[6].innerHTML &&
          boxes[3].innerHTML == O
        ) {
          AIWin();
        } else if (
          boxes[1].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[7].innerHTML &&
          boxes[4].innerHTML == O
        ) {
          AIWin();
        } else if (
          boxes[2].innerHTML == boxes[5].innerHTML &&
          boxes[5].innerHTML == boxes[8].innerHTML &&
          boxes[5].innerHTML == O
        ) {
          AIWin();
        }
        //! Diagonal
        if (
          boxes[0].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[8].innerHTML &&
          boxes[4].innerHTML == O
        ) {
          AIWin();
        } else if (
          boxes[2].innerHTML == boxes[4].innerHTML &&
          boxes[4].innerHTML == boxes[6].innerHTML &&
          boxes[4].innerHTML == O
        ) {
          AIWin();
        }
        //! Tie
        if (availableBoxes.length == 1) {
          tie();
        } else {
          return;
        }
      };
      checks();
    });
  });
};
gameSetup();

//! Resets game

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerHTML = "&nbsp;";
    box.classList.add("available");
    document.querySelector(".results").innerHTML = "&nbsp;";
    counter = 0;
    document.querySelector(".count").innerHTML = `Turns : 0`;
  });
};

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  resetGame();
});
