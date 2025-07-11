import { Cell } from "./Cell.js";
import { Ship } from "./Ship.js";

const element = new Cell();

describe("Testing Cell class", () => {
  test("isEmpty method", () => {
    expect(element.isEmpty()).toBeTruthy();
  });
  test("setMissed method", () => {
    expect(element.setMissed()).toEqual(Cell.MISSED);
    expect(element.isMissed()).toBeTruthy();
  });
  test("setHit method", () => {
    expect(element.setHit()).toEqual(Cell.HIT);
    expect(element.isHit()).toBeTruthy();
  });
  test("isShip method", () => {
    element.setValue(new Ship());
    expect(element.isShip()).toBeTruthy();
  });
  test("getType method", () => {
    expect(element.getType()).toBe("ship");
  });
  test("getID method", () => {
    expect(element.getID()).toMatch(/cell/);
  });
  test("cell instanceof", () => {
    expect(element instanceof Cell).toBeTruthy();
  });
});
