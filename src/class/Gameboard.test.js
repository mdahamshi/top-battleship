import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";

const board = new Gameboard();
describe("Testing Gameboard class", () => {
  test("getCordinate method", () => {
    expect(board.getCell(0, 0).isEmpty()).toBeTruthy();
  });
  test("insertShip method", () => {
    let ship = new Ship(4);
    let ship2 = new Ship(1);
    board.insertShip(ship, 0, 0, "V");
    expect(board.insertShip(ship, 0, 0, 'v')).toBeNull();
    expect(board.insertShip(ship2, 9, 0, 'v')).toBeTruthy();
    expect(board.insertShip(ship2, 10, 0, 'v')).toBeNull();
    expect(board.insertShip(ship2, 0, 0, 'v')).toBeNull();
    expect(board.getCell(0, 0).isShip()).toBeTruthy();
  });
  test("receiveAttack method", () => {
    board.receiveAttack(0, 1);
    const ship = board.getCell(0, 0).getValue();
    [0, 1, 2, 3].forEach((r) => board.receiveAttack(r, 0));
    expect(board.getCell(0, 1).isMissed()).toBeTruthy();
    expect(board.getCell(0, 0).isHit()).toBeTruthy();
    expect(ship.isSunk()).toBeTruthy();
  });
  test("getID method", () => {
    expect(board.getID()).toMatch(/board/);
  });
  test("board instanceof", () => {
    expect(board instanceof Gameboard).toBeTruthy();
  });
});
afterAll(() => {
  board.printBoard();
});
