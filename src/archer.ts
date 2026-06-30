import { Character } from "./characters/character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
  }

  override attack(opponent: Character) {
    const power = 20;
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    console.log(`${this.name} は矢を放った!`);
    opponent.takeDamage(power);
    console.log(`${opponent.name}は${power}のダメージを受けた！`);
  }
}
