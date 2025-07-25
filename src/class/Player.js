import { Gameboard } from "./Gameboard.js";
import { generateID } from "@sarawebs/sb-utils";
export class Player {
  #id;
  #board;
  name;
  previousMoves = [];

  constructor(name = "Player", boardSize = 10) {
    this.#id = generateID("player");
    this.name = name;
    this.#board = new Gameboard(boardSize);
  }
  attack(row, col, board) {
    if (this.movePlayed(row, col)) return false;
    this.previousMoves.push([row, col]);
    return board.receiveAttack(row, col);
  }
  movePlayed(row, col) {
    return this.previousMoves.some(([r, c]) => r === row && c === col);
  }

  getBoard = () => this.#board;
  getID = () => this.#id;
  getName = () => this.name;
}
