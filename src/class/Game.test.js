import { Game } from "./Game.js";

const element = new Game("Me", 10);
beforeAll(() => {
  element.buildBoardRand(element.getPlayer().getBoard());
  element.buildBoardRand(element.getPC().getBoard());
});

describe("Testing Game class, playing game...", () => {
  beforeEach(() => {
    while (!element.gameEnd) {
      const [r, c] = element.getPlayer().getBoard().getRandomCord();
      element.playRound(r, c);
    }
  });
  test("Game end", () => {
    expect(element.gameEnd).toBe(true);
  });
});

afterAll(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("pc board:");
      element.getPC().getBoard().printBoard();
      console.log("player board:");
      element.getPlayer().getBoard().printBoard();
      console.log(`Winner: ${element.winner}`);
      resolve();
    }, 1000);
  });
});
