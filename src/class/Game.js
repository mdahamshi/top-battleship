import {Player} from './Player.js'
import { Computer } from "./Computer.js";

export class Game {
  constructor(playerName, boardSize = 10) {
    this.player = new Player(playerName, boardSize);
    this.pc = new Computer(boardSize);
    this.activePlayer = this.player;
  }

  getPlayer() {
    return this.player;
  }
  getPC() {
    return this.pc;
  }
  getActivePlayer = () => this.activePlayer;
  switchPlayer() {
    if(this.activePlayer === this.player)
      this.activePlayer = this.pc;
    else
      this.activePlayer = this.player;
  }

  playRound(row, col) {
    const activePLayer = this.getActivePlayer();
    if(activePLayer === this.player){
      activePLayer.attack(row, col, this.pc.getBoard());
    } else {
      activePLayer.attack(this.player.getBoard());
    }
    this.switchPlayer();
    return true;
  }
}