import { Player } from "./Player.js";
import { Computer } from "./Computer.js";
import { Ship } from "./Ship.js";
import { Gameboard } from "./Gameboard.js";

export class Game {
  static shipLengths = [1, 1, 1, 2, 2, 3, 3, 4];
  constructor(playerName, boardSize = 10) {
    this.player = new Player(playerName, boardSize);
    this.pc = new Computer(boardSize);
    this.activePlayer = this.player;
    this.gameEnd = false;
  }
  buildBoardRand(board) {
    Game.shipLengths.forEach((length) => {
      const ship = new Ship(length);
      let res = null;
      while (res === null) {
        const [r, c, d] = board.getRandomCord();
        res = board.insertShip(ship, r, c, d);
      }
    });
  }
  getPlayer() {
    return this.player;
  }
  getPC() {
    return this.pc;
  }
  getActivePlayer = () => this.activePlayer;
  switchPlayer() {
    if (this.activePlayer === this.player) this.activePlayer = this.pc;
    else this.activePlayer = this.player;
  }

  playRound(row, col) {
    const activePLayer = this.getActivePlayer();
    let oponentBoard = this.player.getBoard();
    if (activePLayer === this.player) {
      oponentBoard = this.pc.getBoard();
      activePLayer.attack(row, col, oponentBoard);
    } else {
      activePLayer.attack(oponentBoard);
    }

    if (oponentBoard.allShipsSunk()) {
      this.gameEnd = true;
      this.winner = activePLayer.getName();
      return activePLayer.getName();
    }
    this.switchPlayer();

    return null;
  }
}
