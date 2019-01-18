import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'
import GlobalStyle from '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${ tw`absolute w-full h-full` }
  background: ${ props => props.bg };
  svg {
    fill: ${ props => props.fill };
  }
  clip-path: ${ props => props.clipPath };
`

const Content = styled(ParallaxLayer)`
  ${ tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50` };
`

const ParallaxPage = props => {
  return (
    <>
      <GlobalStyle />
      <Parallax pages={4}>
        <Divider speed={0.2} offset={0} />
        <Content bg="#aaa" offset={0}>Hi!</Content>

        <Divider
          bg="#23262b"
          clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
          fill="#23262b"
          speed={0.2}
          offset={1}
        />
        <Content offset={1}>Goodbye</Content>

        <Divider speed={0.2} offset={2} />
        <Content speed={0.5} offset={2} bg="#eee">Hello</Content>

        <Divider speed={0.2} offset={3} />
        <Content speed={0.3} offset={3} bg="#eee" >Goodbye</Content>
      </Parallax>
    </>
  )
}

export default ParallaxPage
