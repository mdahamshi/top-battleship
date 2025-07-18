import { generateID } from "@sarawebs/sb-utils";
import { Ship } from "./Ship.js";

export class Cell {
  #value;
  #id;
  static MISSED = "missed";
  static HIT = "hit";
  constructor(val = "") {
    this.#value = val;
    this.#id = generateID("cell");
  }
  getType() {
    if (this.isEmpty()) return "empty";
    if (this.isShip()) return "ship";
    if (this.isHit()) return "hit";
    if (this.isMissed()) return "missed";
  }
  setValue = (val) => (this.#value = val);
  setMissed = () => (this.#value = Cell.MISSED);
  setHit = () => (this.#value = Cell.HIT);
  isShip = () => this.#value instanceof Ship;
  isMissed = () => this.#value === Cell.MISSED;
  isHit = () => this.#value === Cell.HIT;
  getID = () => this.#id;
  isEmpty = () => this.#value === "";
  getValue = () => this.#value;
}
