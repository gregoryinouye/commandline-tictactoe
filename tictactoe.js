const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// start game
//   create board
//   player one choose x or o
//   enter name=
// check for victory/draw
//   if win: display message
//   if draw: display messages
//   else:
//     player moves

let playerOne = 'x';
let playerTwo = 'o';
let winner = null;
let isPlayerOneToMove = true;

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

function startGame() {

  renderBoard();
  getMove(isPlayerOneToMove ? playerOne : playerTwo);

  // isPlayerOneToMove = !isPlayerOneToMove;
  // renderBoard(board);
  // add move to board
  // check for win conditions
};

function renderBoard() {
  console.log(`   ${board[1]} | ${board[2]} | ${board[3]} \n  -----------\n   ${board[4]} | ${board[5]} | ${board[6]} \n  -----------\n   ${board[7]} | ${board[8]} | ${board[9]} `);
};

function getMove(player) {
  rl.question('Please select a square (1-9): ', answer => {
    if (board[answer] === ' ') {
      board[answer] = player;
      isPlayerOneToMove = !isPlayerOneToMove;
      rl.close();
      renderBoard();
    } else {
      console.log('Invalid selection. Please try again!');
      renderBoard();
      getMove(player);
    }
  });
};

function checkGameStatus() {
  // check for win
  // if no win but board is full, draw game
  // otherwise call player turn
}

function gameOver(winner) {
  winner === null ? console.log('Game is drawn!') : console.log(`Player ${!isPlayerOneToMove ? playerOne : playerTwo} wins!`);
}

startGame();
