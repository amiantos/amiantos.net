import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Menu = styled.ul`
  ${ tw`relative flex items-center justify-center list-reset mx-auto pb-0 md:pb-4` }
`

const MenuItem = styled.li`
  ${ tw`flex-shrink p-1 sm:p-2` }
`

const MenuLink = styled(Link)`
  ${ tw`font-sans no-underline pb-1 hover:border-solid border-black-monokai border-0 border-b-2 text-xs sm:text-sm md:text-base` }
`

export default () => {
  return (
    <nav>
      <Menu>
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

