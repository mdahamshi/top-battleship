import { Player } from "./Player.js";

export class Computer extends Player {
  availableMoves = [];
  constructor() {
    super("Computer");
    this.prepareMoves(this.getBoard().size());
  }

  randomAttack(board) {
    if (this.availableMoves.length === 0) return false;

    const [row, col] = this.availableMoves.pop();

    return this.attack(row, col, board);
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
  getRandomCord(size) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    return [row, col];
  }
}
