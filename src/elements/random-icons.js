import React from "react";
import Icon from "../elements/icon";
import {
  UpDown,
  RightLeft,
  LeftRight,
  DownUp,
  Orbit,
} from "../styles/animations";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomIndex(animations) {
  return Math.floor(Math.random() * animations.length);
}

const randomIcon = (index) => {
  let shape = "triangle";
  const x = getRandomInt(1, 61);
  switch (true) {
    case x < 10:
      shape = "square";
      break;
    case x < 20:
      shape = "circle";
      break;
    case x < 30:
      shape = "diamond";
      break;
    case x < 40:
      shape = "hexagon";
      break;
    case x < 50:
      shape = "pentagon";
      break;
    case x === 61:
      shape = "pentagram";
      break;
    default:
      break;
  }

  let fill = "#eee";
  switch (getRandomInt(1, 3)) {
    case 1:
      fill = "#202060";
      break;
    case 2:
      fill = "#202060";
      break;
    case 3:
      fill = "#202060";
      break;
    default:
      break;
  }

  const animations = [UpDown, LeftRight, RightLeft, DownUp, Orbit];
  const AnimationType = animations[randomIndex(animations)];

  return (
    <Icon
      icon={shape}
      size={getRandomInt(1, 4) + `rem`}
      top={getRandomInt(0, 100) + "%"}
      left={getRandomInt(0, 100) + "%"}
      fill={fill}
      animation={AnimationType}
      rotate={getRandomInt(0, 1)}
      key={index}
    />
  );
};

export const randomIcons = () => {
  let rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(randomIcon(i));
  }
  return rows;
};
