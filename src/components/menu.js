import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Menu = styled.ul`
  ${ tw`relative flex items-center justify-center list-reset mx-auto pb-4` }
`

const MenuItem = styled.li`
  ${ tw`flex-shrink p-2` }
`

const MenuLink = styled(Link)`
  ${ tw`font-sans no-underline pb-1 hover:border-solid border-blue-dark border-0 border-b-2` }
`

export default () => {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink to='/'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/about'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/tags/programming'>Programming</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/tags/photo'>Photos</MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  )
}

