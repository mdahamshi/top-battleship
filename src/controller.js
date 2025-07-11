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
  }

  initBoardEvents(board) {
    board.addEventListener("click", (e) => {
      const cell = e.target;
      if (!cell.dataset.row) return;
      this.view.pcBoard("disabled");

      this.game.playRound(cell.dataset.row, cell.dataset.col);
      this.view.renderBoard(this.view.pc_board, this.game.getPC());
      if (this.game.gameEnd) {
        this.view.updateMessage(`${this.game.winner} WON !`);
        this.view.pcBoard("disabled");
        return;
      }

      this.view.updateMessage("PC turn...");
      setTimeout(() => {
        this.game.playRound(0, 0);
        this.view.renderBoard(this.view.player_board, this.game.getPlayer());
        this.view.pcBoard("enable");
        this.view.updateMessage("Your turn...");
      }, 600);
    });

    const restart = document.getElementById("btn-restart");
    restart.addEventListener("click", (e) => {
      e.preventDefault();
      this.init(this.name);
    });

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
