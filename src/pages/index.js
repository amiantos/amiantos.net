import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{
      borderBottom: `1px solid #eee`,
      paddingBottom: `0.5rem`,
      fontSize: `1.5em`,
    }}
    >
      welcome to hell
    </h1>
    <p>I'm still trying to decide what to put on this here website.</p>
    <p>
      In the meantime, you should visit
      {` `}
      <a href="https://www.github.com/amiantos">my GitHub</a>.
    </p>
  </Layout>
)

export default IndexPage
