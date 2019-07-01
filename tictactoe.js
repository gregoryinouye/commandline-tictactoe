class Board {
  constructor() {
    this.nextMove = 'X';
    this.state = [];
  };

  drawBoard() {
    console.log(`      |      |      \n${this.state[0] === undefined ? '      ' : this.state[0]}|${this.state[1] === undefined ? '      ' : this.state[1]}|${this.state[2] === undefined ? '      ' : this.state[2]}\n      |      |      \n------+------+------\n      |      |      \n${this.state[3] === undefined ? '      ' : this.state[3]}|${this.state[4] === undefined ? '      ' : this.state[4]}|${this.state[5] === undefined ? '      ' : this.state[5]}\n      |      |      \n------+------+------\n      |      |      \n${this.state[6] === undefined ? '      ' : this.state[6]}|${this.state[7] === undefined ? '      ' : this.state[7]}|${this.state[8] === undefined ? '      ' : this.state[8]}\n      |      |      `);
  }

  addO(square) {
    this.state[square] = 'O';
  }

  addX(square) {
    this.state[square] = 'X';
  }

};

const game = new Board;
