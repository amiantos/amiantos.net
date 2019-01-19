import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import triangleSVG from '../images/triangle.svg'
import squareSVG from '../images/square.svg'
import circleSVG from '../images/circle.svg'
import pentagramSVG from '../images/pentagram.svg'

const Wrapper = styled.div`
  ${ tw`relative z-0` }
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

const Icon = ({ icon, size, top, left, fill }) => (
  <Wrapper top={top} left={left}>
    <svg style={{ width: `${ size }`, height: `${ size }` }} fill={fill}>
      <use xlinkHref={ icons[icon].resource } />
    </svg>
  </Wrapper>
)

export default Icon
