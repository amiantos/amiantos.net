import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import pentagramIcon from '../images/pentagram.svg'
import { Orbit } from '../styles/animations'
import Img from "gatsby-image"

const Icon = () => (
  <svg style={{ width: `3rem` }}>
    <use xlinkHref={`#${ pentagramIcon.id }`} />
  </svg>
)

const PentaPosition = styled.div`
  ${ tw`absolute z-0 w-12` }
`
const Text = styled.div`
  ${ tw`relative font-sans text-5xl font-black text-black-darkest` }
`

const Title = styled.div`
  ${ tw`w-full h-48 font-serif z-0 flex items-center` }
`
const StyledLink = styled(Link)`
  ${ tw`flex-none text-center mx-auto no-underline` }
`

const Concrete = styled(Img)`
  ${ tw`fixed w-full h-full object-contain` }
`

const Header = ({ siteTitle }) => (
  <>
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "concrete.jpg" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fluid(maxWidth: 2080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Concrete fluid={data.file.childImageSharp.fluid} style={{position: "fixed"}}/>
      )}
    />
    <Title>
      <StyledLink to="/">
        <Text>{siteTitle}</Text>
        <Orbit>
          <PentaPosition>
            <Icon />
          </PentaPosition>
        </Orbit>
      </StyledLink>
    </Title>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
