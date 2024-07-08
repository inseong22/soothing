/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back31 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("masking1", "./Back31/costumes/masking1.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking2", "./Back31/costumes/masking2.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking3", "./Back31/costumes/masking3.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking4", "./Back31/costumes/masking4.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking5", "./Back31/costumes/masking5.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking6", "./Back31/costumes/masking6.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking7", "./Back31/costumes/masking7.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking8", "./Back31/costumes/masking8.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking9", "./Back31/costumes/masking9.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking10", "./Back31/costumes/masking10.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking11", "./Back31/costumes/masking11.png", {
        x: 185,
        y: 205
      }),
      new Costume("image 67", "./Back31/costumes/67.png", {
        x: 185,
        y: 205
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "masking1";
    while (true) {
      this.visible = false;
      this.costumeNumber++;
      yield* this.wait(0.0167);
      if (
        this.compare(8, this.timer) < 0 &&
        this.compare(16, this.timer) > 0 &&
        this.toNumber(this.stage.vars.var1) === 67
      ) {
        this.visible = true;
      }
      yield;
    }
  }
}
