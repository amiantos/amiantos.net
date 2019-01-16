import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  margin: 0 auto;
  max-width: 960;
  border-top: 1px solid #eee;
  padding: 1.45rem 1.0875rem;
  font-size: .7rem;
`

export default () => (
  <Footer>
    © {new Date().getFullYear()}
    {` `}
    <a href="http://bradroot.me">Brad Root</a>, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
)
