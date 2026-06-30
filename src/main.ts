import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Archer } from "./archer";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80, "魔法");
const archer = new Archer("アーチャー", 40, 10);
const slime = new Enemy("スライム", 50);
warrior.showStatus();
mage.showStatus();
archer.showStatus();
slime.showStatus();
warrior.attack(slime);
slime.attack(warrior);

warrior.showStatus();
mage.showStatus();
archer.showStatus();
slime.showStatus();
