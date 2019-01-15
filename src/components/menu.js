import React from 'react'
import { Link } from 'gatsby'
import menuStyles from './menu.module.css'

const Menu = () => {
  return (
    <ul class={menuStyles.menu}>
      <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
      <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
      <li><Link to='/blog' style={{ textDecoration: 'none' }}>Archive</Link></li>
    </ul>
  )
}

export default Menu
