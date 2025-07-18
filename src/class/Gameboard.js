import { Ship } from "./Ship.js";
import { generateID, createBoard } from "@sarawebs/sb-utils";
import { Cell } from "./Cell.js";
export class Gameboard {
  static HORAIZONAL = "H";
  static VERTICAL = "V";
  #boardSize = 10;
  #ships = [];
  #missed = [];
  #hit = [];
  #board = [];
  #id;
  constructor(size = 10) {
    this.#board = createBoard(size, size, (boardRow) =>
      boardRow.push(new Cell()),
    );
    this.#boardSize = size;
    this.#id = generateID("board");
  }
  getID() {
    return this.#id;
  }
  getCordinate(row, col) {
    return this.#board[row][col];
  }
  getCell(row, col) {
    return this.#board[row][col];
  }
  insertShip(ship, row, col, direction = Gameboard.HORAIZONAL) {
    if (!(ship instanceof Ship) || !this.isValid([row, col])) return null;
    let directionCapital = direction.toUpperCase();
    const length = ship.length;
    const makeEndCoordinate = {
      H: ([r, c]) => {
        let cordinate = [];
        let endCordinate = [r, c + length - 1];
        if (!this.isValid(endCordinate)) return null;

        for (let i = col; i < col + length; i++) {
          if (!this.isEmpty(row, i)) return null;
          cordinate.push([row, i]);
        }
        return cordinate;
      },
      V: ([r, c]) => {
        let cordinate = [];
        let endCordinate = [r + length - 1, c];
        if (!this.isValid(endCordinate)) return null;

        for (let i = row; i < row + length; i++) {
          if (!this.isEmpty(i, col)) return null;
          cordinate.push([i, col]);
        }
        return cordinate;
      },
    };

    const cordinates = makeEndCoordinate[directionCapital]([row, col]);
    if (!cordinates) return null;
    cordinates.forEach(([r, c]) => this.getCell(r, c).setValue(ship));
    this.#ships.push(ship);
    return ship;
  }
  isEmpty(row, col) {
    return this.getCell(row, col).isEmpty();
  }
  isValid(cordinate) {
    return (
      cordinate[0] < this.#boardSize &&
      cordinate[1] < this.#boardSize &&
      cordinate[0] >= 0 &&
      cordinate[1] >= 0
    );
  }
  receiveAttack(row, col) {
    const cell = this.getCell(row, col);
    if (cell.isShip()) {
      cell.getValue().hit();
      cell.setHit();
      this.#hit.push([row, col]);
      return true;
    }
    if (!cell.isEmpty()) return false;

    cell.setMissed();
    this.#missed.push([row, col]);
    return true;
  }
  allShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }
  getBoard() {
    return this.#board;
  }
  printBoard = () => {
    const boardWithCellValues = this.#board.map((row) =>
      row.map((cell) => cell.getValue()),
    );
    console.table(boardWithCellValues);
  };
  getRandomCord(size = this.size()) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    const direction = Math.round(Math.random())
      ? Gameboard.HORAIZONAL
      : Gameboard.VERTICAL;
    return [row, col, direction];
  }
  size() {
    return this.#boardSize;
  }
}
