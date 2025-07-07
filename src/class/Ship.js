
export class Ship {
  #length = null;
  #hitNumber = 0;
  #sunk = false;
  constructor(length) {
    this.#length = length;
  }

  hit() {
    this.#hitNumber++;
    return this.#hitNumber;
  }
  isSunk() {
    return this.#sunk;
  }
  length() {
    return this.#length;
  }
}
