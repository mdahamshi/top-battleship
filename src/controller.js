import { Model } from "./model";
import { View } from "./view";

export class Controller {
  constructor(appName) {
    this.view = new View(appName);
    this.appName = appName;
    this.init();
    this.initBoardEvents(this.view.pc_board);
  }
  init(name) {
    this.model = new Model(name);
    this.game = this.model.game;
    this.view.renderBoard(this.view.player_board, this.game.getPlayer());
    this.view.renderBoard(this.view.pc_board, this.game.getPC());
    this.message("Your turn...");
  }
  message(msg) {
    this.view.updateMessage(msg);
  }
  playRound(row, col) {
    this.view.pcBoard("disabled");
    this.game.playRound(row, col);
    this.view.renderBoard(this.view.pc_board, this.game.getPC());
    this.message("PC turn...");
    this.checkEnd();
  }
  pcPlay() {
    this.game.playRound(0, 0);
    this.view.renderBoard(this.view.player_board, this.game.getPlayer());
    this.view.pcBoard("enable");
    this.message("Your turn...");
    this.checkEnd();
  }
  checkEnd() {
    if (this.game.gameEnd) {
      this.view.updateMessage(`${this.game.winner} WON !`);
      this.view.showWinner(`${this.game.winner} WON !`);
      this.view.pcBoard("disabled");
      return true;
    }
    return false;
  }
  restartGame(e) {
    e.preventDefault();
    this.init(this.name);
    this.view.init();
  }
  initBoardEvents(board) {
    board.addEventListener("click", (e) => {
      const cell = e.target;
      if (!cell.dataset.row) return;

      this.playRound(cell.dataset.row, cell.dataset.col);

      if (!this.gameEnd) {
        setTimeout(() => {
          this.pcPlay();
        }, 600);
      }
    });

    const restart = document.getElementById("btn-restart");
    restart.addEventListener("click", (e) => this.restartGame(e));
    this.view.winnerModal
      .querySelector("button")
      .addEventListener("click", (e) => this.restartGame(e));

    document
      .getElementById("button-start-game")
      .addEventListener("click", (e) => {
        e.preventDefault();
        const form = this.view.nameForm;
        const name = form.elements["player-name"].value.trim();
        this.name = name;
        this.init(name);
        this.view.dialog.close();
      });
  }
}
