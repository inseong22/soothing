/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cross extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Cross",
        "./Cross/costumes/Cross.png",
        { x: 332, y: 278.5 }
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
        this.compare(this.timer, 16) > 0 &&
        this.compare(this.timer, 20) < 0
      ) {
        this.moveAhead();
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
