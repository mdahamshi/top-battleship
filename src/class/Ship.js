import {generateID} from '@sarawebs/sb-utils';
export class Ship {
  #length = null;
  #hitNumber = 0;
  #id;
  constructor(length) {
    this.#length = length;
    this.#id = generateID('ship');
  }
  get length() {
    return this.#length;
  }
  hit() {
    this.#hitNumber++;
    return this.#hitNumber;
  }
  isSunk() {
    return this.#hitNumber >= this.#length;
  }
  getID() {
    return this.#id;
  }
}
