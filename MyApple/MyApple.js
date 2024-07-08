/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MyApple extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("my apple", "./MyApple/costumes/my apple.png", {
        x: 218.5,
        y: 338.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.y += 10;
      }
      if (this.keyPressed("down arrow")) {
        this.y -= 10;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x -= 10;
      }
      if (this.compare(-180, this.y) > 0) {
        this.y = -180;
      }
      if (this.compare(this.x, 240) > 0) {
        this.x = 240;
      }
      if (this.compare(this.y, 180) > 0) {
        this.y = 180;
      }
      if (this.compare(-240, this.x) > 0) {
        this.x = -240;
      }
      if (
        this.compare(this.timer, 8) > 0 &&
        this.compare(this.timer, 16) < 0 &&
        this.toNumber(this.stage.vars.Score) === 0
      ) {
        if (this.keyPressed("right arrow")) {
          this.x -= 20;
        }
        if (this.keyPressed("left arrow")) {
          this.x += 20;
        }
      }
      if (
        this.compare(this.timer, 8) > 0 &&
        this.compare(this.timer, 16) < 0 &&
        this.toNumber(this.stage.vars.Score) === 1
      ) {
        if (this.keyPressed("up arrow")) {
          this.y -= 20;
        }
        if (this.keyPressed("down arrow")) {
          this.y += 20;
        }
      }
      if (this.compare(this.timer, 16) > 0) {
        yield* this.wait(3);
      }
      if (this.compare(this.timer, 19) > 0) {
        this.restartTimer();
        this.stage.vars.Score = this.random(0, 1);
        this.stage.vars.var1 = this.toNumber(this.stage.vars.var1) + 1;
      }
      if (this.toNumber(this.stage.vars.var1) === 3) {
        yield* this.broadcastAndWait("game over");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.sequence = [];
    this.stage.vars.life = 0;
    this.stage.vars.score = 0;
    this.stage.vars.time = this.random(1, 10);
    this.stage.vars.Score = this.random(0, 1);
    this.stage.vars.var1 = 1;
  }
}
