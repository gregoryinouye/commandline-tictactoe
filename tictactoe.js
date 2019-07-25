const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// start game
//   create board
//   player one choose x or o
//   enter name
// player one moves
// check for victory/draw
//   display message
//   otherwise continue moves

const board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' ',
};

let playerOne = 'x';
let playerTwo = 'o';

function startGame() {
  renderBoard(board);
}

function renderBoard(board) {
  console.log(` ${board[1]} | ${board[2]} | ${board[3]} \n-----------\n ${board[4]} | ${board[5]} | ${board[6]} \n-----------\n ${board[7]} | ${board[8]} | ${board[9]} `);
}

startGame();