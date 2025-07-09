import { Player } from "./Player.js";

export class Computer extends Player {
  availableMoves = [];
  constructor(boardSize = 10) {
    super("Computer", boardSize);
    this.prepareMoves(this.getBoard().size());
  }

  randomAttack(board) {
    return this.attack(board);
  }
  attack(board) {
    if (this.availableMoves.length === 0) return false;

    const [row, col] = this.availableMoves.pop();

    return super.attack(row, col, board);
  }
  prepareMoves(size) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        this.availableMoves.push([row, col]);
      }
    }

    for (let i = this.availableMoves.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.availableMoves[i], this.availableMoves[j]] = [
        this.availableMoves[j],
        this.availableMoves[i],
      ];
    }
  }
}
