import {Gameboard} from './Gameboard.js'

const board = new Gameboard();
describe("Testing Gameboard class", () => {
  test("hit method", () => {
    expect(ship.hit()).toEqual(1);
  });
  test("isSumk method", () => {
    expect(ship.isSunk()).toEqual(false);
  });
  test("length method", () => {
    expect(ship.length()).toEqual(4);
  });
});
