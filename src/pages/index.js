import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Excerpt from '../components/excerpt'
import PhotoBar from '../components/photobar'

const ExcerptContainer = styled.div`
  ${ tw`md:flex md:flex-wrap z-40` }
`

const IndexPage = props => {
  const postList = props.data.text
  const imageList = props.data.image
  return (
    <Layout>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      <PhotoBar data={imageList} />
      <ExcerptContainer>
        {postList.edges.map(({ node }, i) => (
          <Excerpt data={node} i={i} key={i} />
        ))}
      </ExcerptContainer>
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
              fluid(maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`
