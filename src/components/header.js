import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Title = styled.h1`
  ${ tw`fixed font-serif z-0` }
`

const Spacer = styled.div`
  ${ tw`h-48` }
`

const Header = ({ siteTitle }) => (
  <>
    <Title>
      <Link to="/">
        {siteTitle}
      </Link>
    </Title>
    <Spacer />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
