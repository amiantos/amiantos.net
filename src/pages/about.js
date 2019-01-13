import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="about" keywords={[`brad root`, `brad`, `root`, `about`]} />
      <h1>About</h1>
      <p>Hi! I'm <a href="http://bradroot.me">Brad</a>.</p>
      <p>Things I Like:</p>
      <ul>
        <li>Music</li>
        <li>Programming</li>
        <li>Cycling (Uni and Bi)</li>
        <li>Television & Movies</li>
        <li>Art</li>
      </ul>
      <p>This site is built using GatsbyJS.</p>
      <p>
        You can view the source code for this site on <a href="https://www.github.com/amiantos/amiantos.net">GitHub</a>.
      </p>
    </Layout>
  )
}

export default AboutPage
