import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Excerpt from '../components/excerpt'
import PhotoBar from '../components/photobar'

const IndexPage = props => {
  const postList = props.data.text
  const imageList = props.data.image
  return (
    <Layout>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      <PhotoBar data={imageList} />
      {postList.edges.map(({ node }, i) => (
        <Excerpt data={node} i={i} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  text: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "text"}}},
    sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        fields {
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
  image: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "image"}}},
    sort: {order: DESC, fields: [frontmatter___date]},
    limit: 4) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMM Do YYYY")
          title
          image {
            publicURL
            childImageSharp{
              fixed(height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}`
