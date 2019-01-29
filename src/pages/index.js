import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import SEO from '../components/seo'
import Excerpt from '../components/excerpt'

const ExcerptContainer = styled.div`
  ${ tw`md:flex md:flex-wrap md:items-stretch z-40` }
`

const IndexPage = props => {
  const postList = props.data.posts
  return (
    <>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      <ExcerptContainer>
        {postList.edges.map(({ node }, i) => (
          <Excerpt data={node} i={i} key={i} />
        ))}
      </ExcerptContainer>
    </>
  )
}

export default IndexPage

export const query = graphql`{
  posts: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 570)
        frontmatter {
          tags
          date(formatString: "MMM Do YYYY")
          title
          image {
            publicURL
            childImageSharp{
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`
