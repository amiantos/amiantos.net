import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Title = styled.header`
  ${ tw`flex items-center w-full pt-10` }
`

const StyledLink = styled(Link)`
  ${ tw`relative flex-none mx-auto no-underline` }
`

const Text = styled.div`
  ${ tw`font-title font-bold text-5xl text-black-darkest` }
`

const Header = ({ siteTitle }) => (
  <Title>
    <StyledLink to="/">
      <Text>{siteTitle}</Text>
    </StyledLink>
  </Title>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
