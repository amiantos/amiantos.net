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
import { UpDown, RotateSlow, UpDownWide, LeftRight } from '../styles/animations';

const Container = styled.div`
  ${ tw`relative max-w-lg mx-auto z-40` }
`

const IconContainer = styled.div`
  ${ tw`absolute w-full h-full z-0` }
`

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomTops = [
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
  getRandomInt(0, 10) + `%`,
]

const randomLefts = [
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
  getRandomInt(30, 60) + `%`,
]

const randomIcons = () => (
  <>
    <Icon icon="triangle" size="3rem" top={ randomTops[0] } left={ randomLefts[0] } fill="#eee" />
    <Icon icon="square" size="3rem" top={ randomTops[1] } left={ randomLefts[1] } fill="#eee" />
    <Icon icon="circle" size="3rem" top={ randomTops[2] } left={ randomLefts[2] } fill="#eee" />
    <Icon icon="triangle" size="3rem" top={ randomTops[3] } left={ randomLefts[3] } fill="#ddd" />
    <Icon icon="square" size="3rem" top={ randomTops[4] } left={ randomLefts[4] } fill="#ddd" />
    <Icon icon="circle" size="3rem" top={ randomTops[5] } left={ randomLefts[5] } fill="#ddd" />
    <Icon icon="triangle" size="3rem" top={ randomTops[6] } left={ randomLefts[6] } fill="#ccc" />
    <Icon icon="square" size="3rem" top={ randomTops[7] } left={ randomLefts[7] } fill="#ccc" />
    <Icon icon="circle" size="3rem" top={ randomTops[8] } left={ randomLefts[8] } fill="#ccc" />
    <Icon icon="triangle" size="3rem" top={ randomTops[9] } left={ randomLefts[9] } fill="#eee" />
    <Icon icon="square" size="3rem" top={ randomTops[10] } left={ randomLefts[10] } fill="#eee" />
    <Icon icon="circle" size="3rem" top={ randomTops[11] } left={ randomLefts[11] } fill="#eee" />
  </>
)

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
            { randomIcons() }
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
