import { Ship } from "./Ship.js";

const ship = new Ship(4);

describe("Testing ship class", () => {
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
