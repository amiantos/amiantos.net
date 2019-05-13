import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from '../styles/global'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { randomIcons } from '../elements/random-icons'
import '../styles/prismjs-monokai.css'

const Container = styled.main`
  ${ tw`relative max-w-lg mx-auto z-40` }
`

const IconContainer = styled.div`
  ${ tw`fixed w-full h-full z-0` }
`

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
          {/* <Menu /> */}
          <Container>
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
