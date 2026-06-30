import { Character } from "./characters/character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
  }

  attack() {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    console.log(`${this.name} は矢を放った!`);
  }
}
