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

const Container = styled.div`
  ${ tw`relative max-w-lg mx-auto z-40` }
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
