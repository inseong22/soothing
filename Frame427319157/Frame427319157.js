/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Frame427319157 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Frame 427319157",
        "./Frame427319157/costumes/Frame 427319157.png",
        { x: 480, y: 200 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenIReceiveGameOver() {
    this.moveAhead();
    this.visible = true;
    /* TODO: Implement stop all */ null;
  }
    
  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
