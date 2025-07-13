import { addCopyRight } from "@sarawebs/sb-utils";
import { createGridBoard } from "./components/board.js";
import { createDialogModal } from "./components/DialogModal.js";
import makeNameForm from "./components/name-form.js";
import logoImage from "../asset/logo.svg";
import userImage from "../asset/woman.png";
import winnerModal from './components/game-end.js'

export class View {
  constructor(appName) {
    addCopyRight(appName);
    this.content = document.getElementById("content");

    document.querySelector("title").textContent = appName;
    document.getElementById("logo-name").textContent = appName;
    this.player_board = createGridBoard("player-board", "Your board");
    this.pc_board = createGridBoard("pc-board", "PC");
    this.message = document.getElementById("message");
    this.winnerModal = winnerModal();
    this.initNameForm();
    const user = document.querySelector("#user-img");
    user.src = userImage;
  }
  initNameForm() {
    this.dialog = createDialogModal();
    document.body.insertBefore(this.dialog, this.content);
    this.dialog.content = document.getElementById("dialog-content");
    this.dialog.content.innerHTML = "";
    this.nameForm = makeNameForm();
    this.dialog.content.appendChild(this.nameForm);
    this.dialog.showModal();
  }
  updateMessage(msg) {
    this.message.textContent = msg;
  }
  pcBoard(flag) {
    if (flag === "enable") this.pc_board.classList.remove("disabled");
    else this.pc_board.classList.add("disabled");
  }
  showWinner(text) {
    const name = this.winnerModal.querySelector('#winner-name');
    name.textContent = text;
    this.dialog.content.innerHTML = "";
    this.dialog.content.appendChild(this.winnerModal);
    this.dialog.showModal();
  }
  init() {
    this.pcBoard('enable');
    this.dialog.close();
  }
  renderBoard(viewBoard, player) {
    const board = player.getBoard();
    const rows = board.getBoard().length;
    const cols = board.getBoard()[0].length;
    const name = viewBoard.querySelector(".battlefield-label");
    name.textContent = `${player.getName()}'s board`;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const viewCell = viewBoard.querySelector(
          `.cell[data-row="${r}"][data-col="${c}"]`,
        );
        const cell = board.getCell(r, c);
        viewCell.dataset.type = cell.getType();
      }
    }
  }
}
