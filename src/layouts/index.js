import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/global'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Icon from '../elements/icon'
import { UpDown, RightLeft, LeftRight, DownUp } from '../styles/animations';

const Container = styled.div`
  ${ tw`relative max-w-lg mx-auto z-40` }
`

const IconContainer = styled.div`
  ${ tw`fixed w-full h-full z-0` }
`

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomTops = [
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
]

const randomLefts = [
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
  getRandomInt(5, 95) + `%`,
]

const randomIcon = () => {
  let shape = 'triangle'
  switch (getRandomInt(1, 3)) {
  case 1:
    shape = 'square'
    break
  case 2:
    shape = 'circle'
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
  const animations = [UpDown, LeftRight, RightLeft, DownUp]
  const AnimationType = animations[Math.floor(Math.random()*animations.length)];

  return (
    <Icon icon={shape} size='3rem' top={ getRandomInt(0, 100) + '%' } left={ getRandomInt(0, 100) + '%' } fill={fill} animation={AnimationType} rotate={ getRandomInt(0, 1) } />
  )
}

const randomIcons = () => {
  let rows = []
  for (let i = 0; i < 30; i++) {
    rows.push(randomIcon())
  }
  return rows
}

const renderedIcons = randomIcons()

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <IconContainer>
            { renderedIcons }
          </IconContainer>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>
            <Menu />
            <div>
              {children}
            </div>
            <Footer />
          </Container>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
