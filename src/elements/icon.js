import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import triangleSVG from '../images/triangle.svg'
import squareSVG from '../images/square.svg'
import circleSVG from '../images/circle.svg'
import pentagramSVG from '../images/pentagram.svg'
import { UpDown, RotateSlow, LeftRight, UpDownWide, RightLeft } from '../styles/animations';

const Wrapper = styled.div`
  ${ tw`absolute inline-block z-0` }
  left: ${ props => props.left };
  top: ${ props => props.top };
`

const icons = {
  triangle: {
    resource: `#${ triangleSVG.id }`,
  },
  square: {
    resource: `#${ squareSVG.id }`,
  },
  circle: {
    resource: `#${ circleSVG.id }`,
  },
  pentagram: {
    resource: `#${ pentagramSVG.id }`,
  }
}

const Div = styled.div`
`

const Icon = ({ icon, size, top, left, fill, animation, rotate }) => {
  const AnimationType = animation
  const Rotation = rotate ? RotateSlow : Div
  return (
    <Wrapper top={top} left={left}>
      <AnimationType>
        <Rotation>
          <svg style={{ width: `${ size }`, height: `${ size }` }} fill={fill}>
            <use xlinkHref={ icons[icon].resource } />
          </svg>
        </Rotation>
      </AnimationType>
    </Wrapper>
  )
}

export default Icon
