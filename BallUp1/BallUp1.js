/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BallUp1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./BallUp1/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./BallUp1/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./BallUp1/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./BallUp1/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./BallUp1/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [new Sound("pop", "./BallUp1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }
    
  *whenIReceiveGameOver() {
  while (true) {
    // BallUp1의 무한 루프를 종료하는 조건 추가
    if (this.touching("edge") || this.touching(this.sprites["MyApple"].andClones())) {
      break;
    }
    yield;
  }
  this.visible = false;
}

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.y = 180;
    this.x = this.random(-240, 240);
    while (true) {
      this.y -= 10;
      if (this.touching("edge")) {
        this.stage.vars.score++;
        this.y = 180;
        this.x = this.random(-240, 240);
      }
      if (this.touching(this.sprites["MyApple"].andClones())) {
        yield* this.startSound("pop");
        this.stage.vars.life--;
        this.y = 180;
        this.x = this.random(-240, 240);
      }
      if (this.compare(this.timer, 16) > 0) {
        yield* this.wait(3);
      }
      if (this.stage.vars.var1 === 3) {
        yield* this.wait(10000);
      }
      this.visible = true;
      yield;
    }
  }
}
