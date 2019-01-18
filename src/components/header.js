import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../elements/icon';

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

const Header = ({ siteTitle }) => (
  <>
    <Title>
      <Icon icon="triangle" top="20%" left="40%" size="2rem" />
      <Icon icon="square" top="20%" left="45%" size="2rem" />
      <Icon icon="circle" top="20%" left="50%" size="2rem" />
      <Icon icon="pentagram" top="20%" left="55%" size="2rem" />
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
