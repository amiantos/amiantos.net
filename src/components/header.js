import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Text = styled.div`
  ${ tw`relative font-sans text-5xl font-black text-black-darkest` }
`

const Title = styled.div`
  ${ tw`w-full h-48 font-serif z-0 flex items-center` }
`
const StyledLink = styled(Link)`
  ${ tw`flex-none text-center mx-auto no-underline` }
`

const Header = ({ siteTitle }) => (
  <>
    <Title>
      <StyledLink to="/">
        <Text>{siteTitle}</Text>
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
