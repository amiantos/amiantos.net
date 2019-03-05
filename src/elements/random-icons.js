import React from 'react'
import Icon from '../elements/icon'
import {
  UpDown,
  RightLeft,
  LeftRight,
  DownUp,
  Orbit
} from '../styles/animations'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomIndex (animations) {
  return Math.floor(Math.random() * animations.length)
}

const randomIcon = index => {
  let shape = 'triangle'
  const x = getRandomInt(1, 20)
  switch (true) {
  case (x < 6):
    shape = 'square'
    break
  case (x < 12):
    shape = 'circle'
    break
  case (x === 20):
    shape = 'pentagram'
    break
  default:
    break
  }

  let fill = '#eee'
  switch (getRandomInt(1, 2)) {
  case 1:
    fill = '#ddd'
    break
  default:
    break
  }

  const animations = [
    UpDown,
    LeftRight,
    RightLeft,
    DownUp,
    Orbit,
  ]
  const AnimationType = animations[randomIndex(animations)]

  return (
    <Icon
      icon={shape}
      size={ getRandomInt(1, 4) + `rem` }
      top={ getRandomInt(0, 100) + '%' }
      left={ getRandomInt(0, 100) + '%' }
      fill={fill}
      animation={AnimationType}
      rotate={ getRandomInt(0, 1) }
      key={index} 
    />
  )
}

export const randomIcons = () => {
  let rows = []
  for (let i = 0; i < 30; i++) {
    rows.push(randomIcon(i))
  }
  return rows
}
