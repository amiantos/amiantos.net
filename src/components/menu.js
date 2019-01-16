import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 960px;
`

const MenuItem = styled.li`
  padding: 0.5875rem 0.5875rem;
  margin: 0px;
  display: flex;
`

export default () => {
  return (
    <Menu>
      <MenuItem>
        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
      </MenuItem>
      <MenuItem>
        <Link to='/blog' style={{ textDecoration: 'none' }}>Archive</Link>
      </MenuItem>
    </Menu>
  )
}

