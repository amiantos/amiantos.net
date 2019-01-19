import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Footer = styled.footer`
  ${ tw`p-16 font-sans text-xs text-center` }
`

export default () => {
  return (
    <Footer>
      © {new Date().getFullYear()}
      {` `}
      <a href="http://bradroot.me">Brad Root</a>, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Footer>
  )
}
