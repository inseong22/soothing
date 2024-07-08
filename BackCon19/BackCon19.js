/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BackCon19 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "image 19",
        "./BackCon19/costumes/19.png",
        { x: 185, y: 205 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.var1) === 19 &&
        this.compare(8, this.timer) < 0 && this.compare(16, this.timer) > 0
      ) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
