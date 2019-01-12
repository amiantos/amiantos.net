import React from 'react'

const Footer = () => (
  <footer
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      borderTop: `1px solid #eee`,
      padding: `1.45rem 1.0875rem`,
      fontSize: `.7rem`,
    }}
  >
    © {new Date().getFullYear()}
    {` `}
    <a href="http://bradroot.me">Brad Root</a>, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
