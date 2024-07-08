/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Back8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("masking1", "./Back8/costumes/masking1.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking2", "./Back8/costumes/masking2.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking3", "./Back8/costumes/masking3.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking4", "./Back8/costumes/masking4.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking5", "./Back8/costumes/masking5.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking6", "./Back8/costumes/masking6.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking7", "./Back8/costumes/masking7.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking8", "./Back8/costumes/masking8.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking9", "./Back8/costumes/masking9.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking10", "./Back8/costumes/masking10.png", {
        x: 185,
        y: 205
      }),
      new Costume("masking11", "./Back8/costumes/masking11.png", {
        x: 185,
        y: 205
      }),
      new Costume("image 44", "./Back8/costumes/44.png", {
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
        this.toNumber(this.stage.vars.var1) === 44
      ) {
        this.visible = true;
      }
      yield;
    }
  }
}
