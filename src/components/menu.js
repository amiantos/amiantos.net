import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Menu = styled.ul`
  ${ tw`flex items-center justify-center list-reset mx-auto pb-5` }
`

const MenuItem = styled.li`
  ${ tw`flex-shrink p-2` }
`

const MenuLink = styled(Link)`
  ${ tw`font-sans no-underline` }
`

export default () => {
  return (
    <Menu>
      <MenuItem>
        <MenuLink to='/'>Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/about'>About</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/blog'>Archive</MenuLink>
      </MenuItem>
    </Menu>
  )
}

