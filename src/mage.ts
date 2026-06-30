import { Character } from "./characters/character.ts";

export class Mage extends Character {
  override attack() {
    console.log(`${this.name}は魔法を唱えた！`);
  }
}
