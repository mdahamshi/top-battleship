import { Computer } from "./Computer.js";
import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";

const element = new Computer();
const board = new Gameboard();

describe("Testing Computer class", () => {
  test("getID method", () => {
    expect(element.getID()).toMatch(/player/);
  });
  test("getBoard method", () => {
    expect(element.getBoard()).toBeTruthy();
  });

});
describe("randomAttack multiple runs", () => {
  let ship = new Ship(4);
  let ship2 = new Ship(1);
  board.insertShip(ship, 0, 0, "V");
  board.insertShip(ship2, 9, 0, "h")
  for (let i = 0; i < 100; i++) {
    test(`Run #${i + 1} randomAttack`, () => {
      expect(element.randomAttack(board)).toBeTruthy();
    });
  }
});

afterAll(() => {
  board.printBoard();
});
