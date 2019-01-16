import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Excerpt from '../components/excerpt'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Excerpt data={node} i={i} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
