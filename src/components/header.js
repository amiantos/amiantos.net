import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Title = styled.div`
  ${ tw`w-full pt-10 z-0 flex items-center` }
`

const StyledLink = styled(Link)`
  ${ tw`flex-none text-center mx-auto no-underline` }
`

const Text = styled.div`
  ${ tw`relative font-title text-5xl font-bold text-black-darkest` }
`

const Header = ({ siteTitle }) => (
  <header>
    <Title>
      <StyledLink to="/">
        <Text>{siteTitle}</Text>
      </StyledLink>
    </Title>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
