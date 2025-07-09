import {Player} from './Player.js'


const element = new Player();


describe("Testing Player class", () => {


  test("getID method", () => {
    expect(element.getID()).toMatch(/player/);
  });
  
});
