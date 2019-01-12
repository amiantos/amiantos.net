import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>welcome to hell</h1>
    <p>amiantos.net is no more.</p>
    <p>amiantos.net lives again! eventually.</p>
    <h2>I love Andie!</h2>
  </Layout>
)

export default IndexPage
