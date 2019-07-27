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
let isPlayerOneToMove = true;

let board;

function startGame() {
  board = {
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
  renderBoard();
  getMove();

  // isPlayerOneToMove = !isPlayerOneToMove;
  // renderBoard(board);
  // add move to board
  // check for win conditions
};

function renderBoard() {
  console.log(`   ${board[1]} | ${board[2]} | ${board[3]} \n  -----------\n   ${board[4]} | ${board[5]} | ${board[6]} \n  -----------\n   ${board[7]} | ${board[8]} | ${board[9]} `);
};

function getMove() {
  const player = isPlayerOneToMove ? playerOne : playerTwo;
  rl.question('Please select a square (1-9): ', answer => {
    if (board[answer] === ' ') {
      board[answer] = player;
      isPlayerOneToMove = !isPlayerOneToMove;
      renderBoard();
      checkGameStatus();
    } else {
      console.log('Invalid selection. Please try again!');
      renderBoard();
      getMove();
    }
  });
};

function checkGameStatus() {
  let player = !isPlayerOneToMove ? playerOne : playerTwo;
  if ((board[1] === player && board[2] === player && board[3] === player)
    || (board[4] === player && board[5] === player && board[6] === player)
    || (board[7] === player && board[8] === player && board[9] === player)
    || (board[1] === player && board[4] === player && board[7] === player)
    || (board[2] === player && board[5] === player && board[8] === player)
    || (board[3] === player && board[6] === player && board[9] === player)
    || (board[1] === player && board[5] === player && board[9] === player)
    || (board[7] === player && board[5] === player && board[9] === player)) {
      // need to specify winner in gameOver call
      gameOver(player);
    } else if (Object.keys(board).every(element => board[element] !== ' ')) {
    gameOver(null);
  } else {
    getMove();
  }
}

function gameOver(winner) {
  winner === null ? console.log('Game is drawn!') : console.log(`Player ${winner} wins!`);
  rl.question('Play again? (Y/N): ', answer => {
    answer = answer.toLowerCase();
    if (answer === 'y' || answer === 'yes') {
      startGame();
    } else {
      rl.close();
    }
  });
};

startGame();
