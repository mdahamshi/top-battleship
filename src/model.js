import { Game } from "./class/Game.js";

export class Model {
  constructor(name = "Sara") {
    const game = new Game(name);
    game.buildBoardRand(game.getPlayer().getBoard());
    game.buildBoardRand(game.getPC().getBoard());
    this.game = game;
    this.playerBoard = this.game.getPlayer().getBoard();
    this.pcBoard = this.game.getPC().getBoard();
  }
}
