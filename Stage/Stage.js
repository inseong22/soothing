/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 0,
        y: 0
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 259.39999389648426,
        y: 184.66093047326345
      }),
      new Costume("dynamic_masking", "./Stage/costumes/dynamic_masking.png", {
        x: 300,
        y: 300
      }),
      new Costume("dynamic_masking3", "./Stage/costumes/dynamic_masking3.png", {
        x: 300,
        y: 300
      }),
      new Costume("dynamic_masking2", "./Stage/costumes/dynamic_masking2.png", {
        x: 300,
        y: 300
      }),
      new Costume("dynamic_masking4", "./Stage/costumes/dynamic_masking4.png", {
        x: 300,
        y: 300
      }),
      new Costume("dynamic_masking5", "./Stage/costumes/dynamic_masking5.png", {
        x: 480,
        y: 360
      }),
      new Costume("dynamic_masking6", "./Stage/costumes/dynamic_masking6.png", {
        x: 480,
        y: 360
      }),
      new Costume("Cross", "./Stage/costumes/Cross.png", {
        x: 332,
        y: 278.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.life = -87;
    this.vars.score = 1013;
    this.vars.Score = 1;
    this.vars.time = 1;
    this.vars.var1 = 15;
    this.vars.sequence = [];
    this.vars.sequence2 = [];

    this.watchers.life = new Watcher({
      label: "Life",
      style: "normal",
      visible: true,
      value: () => this.vars.life,
      x: 290,
      y: -40
    });
    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 280,
      y: -85
    });
    this.watchers.Score = new Watcher({
      label: "조작_score",
      style: "normal",
      visible: false,
      value: () => this.vars.Score,
      x: 245,
      y: 123
    });
    this.watchers.var1 = new Watcher({
      label: "var1",
      style: "normal",
      visible: false,
      value: () => this.vars.var1,
      x: 247,
      y: 98
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.compare(8, this.timer) < 0 && this.compare(16, this.timer) > 0) {
        this.costume = "dynamic_masking5";
      } else {
        this.costume = "backdrop2";
      }
      yield;
    }
  }
}
