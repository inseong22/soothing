import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import MyApple from "./MyApple/MyApple.js";
import Back1 from "./Back1/Back1.js";
import BallUp1 from "./BallUp1/BallUp1.js";
import BallLeft1 from "./BallLeft1/BallLeft1.js";
import BallRight1 from "./BallRight1/BallRight1.js";
import Frame427319156 from "./Frame427319156/Frame427319156.js";
import BackCon1 from "./BackCon1/BackCon1.js";
import BallDown1 from "./BallDown1/BallDown1.js";
import Frame427319157 from "./Frame427319157/Frame427319157.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  MyApple: new MyApple({
    x: 80,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 10,
    visible: true,
    layerOrder: 3
  }),
  Back1: new Back1({
    x: 0,
    y: 1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  BallUp1: new BallUp1({
    x: 56,
    y: 180,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 6
  }),
  BallLeft1: new BallLeft1({
    x: -120,
    y: -62,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 7
  }),
  BallRight1: new BallRight1({
    x: -70,
    y: 134,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 8
  }),
  Frame427319156: new Frame427319156({
    x: -4,
    y: 6,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 9
  }),
  BackCon1: new BackCon1({
    x: 0,
    y: 1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  BallDown1: new BallDown1({
    x: 229,
    y: 60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 5
  }),
  Frame427319157: new Frame427319157({
    x: -2,
    y: -1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 90,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
