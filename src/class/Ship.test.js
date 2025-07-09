import { Ship } from "./Ship.js";

const ship = new Ship(4);

describe("Testing ship class", () => {
  test("hit method", () => {
    expect(ship.hit()).toEqual(1);
  });
  test("isSumk method", () => {
    expect(ship.isSunk()).toEqual(false);
    for (let i = 0; i <= ship.length; i++) ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
  test("length method", () => {
    expect(ship.length).toEqual(4);
  });
  test("getID method", () => {
    expect(ship.getID()).toMatch(/ship/);
  });
});
