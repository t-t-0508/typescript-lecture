import { Character } from "./characters/character.ts";

export class Mage extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp);
    this.weapon = weapon;
  }

  override attack(opponent: Character) {
    const power = 20;
    console.log(`${this.name}は${this.weapon}を唱えた！`);
    opponent.takeDamage(power);
    console.log(`${opponent.name}は${power}のダメージを受けた！`);
  }
}
