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
  ${ tw`fixed w-full h-full z-0` }
`

const Layout = ({ children }) => (
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
          <UpDown>
            <Icon icon="triangle" size="3rem" top="20%" left="20%" fill="#eee" />
          </UpDown>
          <UpDown>
            <Icon icon="triangle" size="3rem" top="80%" left="80%" fill="#eee" />
          </UpDown>
          <UpDown>
            <Icon icon="triangle" size="3rem" top="60%" left="80%" fill="#eee" />
          </UpDown>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
