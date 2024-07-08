/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BallRight1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./BallRight1/costumes/ball-a.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-b", "./BallRight1/costumes/ball-b.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-c", "./BallRight1/costumes/ball-c.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-d", "./BallRight1/costumes/ball-d.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-e", "./BallRight1/costumes/ball-e.svg", {
        x: 22,
        y: 22
      })
    ];

    this.sounds = [new Sound("pop", "./BallRight1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(this.sprites["MyApple"].x, this.sprites["MyApple"].y);
    this.x = 240;
    this.y = this.random(-180, 180);
    while (true) {
      this.x -= 10;
      if (this.touching("edge")) {
        this.stage.vars.score++;
        this.x = 240;
        this.y = this.random(-180, 180);
      }
      if (this.touching(this.sprites["MyApple"].andClones())) {
        yield* this.startSound("pop");
        this.stage.vars.life--;
        if (this.toNumber(this.stage.vars.life) === 0) {
          this.broadcast("game over");
        }
        this.x = 240;
        this.y = this.random(-180, 180);
      }
      if (this.compare(this.timer, 16) > 0) {
        yield* this.wait(3);
      }
      if (this.stage.vars.sequence2.length === 0) {
        yield* this.wait(1000000);
      }
      yield;
    }
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
}
