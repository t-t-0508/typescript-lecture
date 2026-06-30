import { Character } from "./characters/character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する
  protected maxHp: number;

  //TODO: maxHp プロパティの初期化
  constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  getHpRatio(): number {
    return (this.hp / this.maxHp) * 100;
  }

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  override attack(opponent: Character): void {
    if (this.getHpRatio() <= 30) {
      const crisisPower = 30;
      console.log(`${this.name}は必死に抵抗している！`);
      opponent.takeDamage(crisisPower);
      console.log(`${opponent.name}は${crisisPower}のダメージを受けた！`);
      return;
    }
    const power = 20;
    console.log(`${this.name}は攻撃してきた！`);
    opponent.takeDamage(power);
    console.log(`${opponent.name}は${power}のダメージを受けた！`);
  }
}
