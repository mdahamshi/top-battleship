import {Game} from './Game.js'

const element = new Game('Me', 12);

describe("Testing Game class", () => {
  test("getPlayer method", () => {
    expect(element.getPlayer()).toBeDefined();
  });
  
  
  
  for (let i = 0; i < 100; i++) {
    test(`Run #${i + 1} playRound`, () => {
      const [r, c]  = element.getPlayer().getRandomCord();
      expect(element.playRound(r, c)).toBeDefined();
    });
  }

});


afterAll(() => {
  console.log('pc board:')
  element.getPC().getBoard().printBoard();
  console.log('player board:')
  element.getPlayer().getBoard().printBoard();
});
