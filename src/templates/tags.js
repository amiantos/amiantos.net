import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Excerpt from '../components/excerpt'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import About from '../components/about'
import Divider from '../components/divider'

const TagHeader = styled.div`
  ${ tw`opacity-50 font-sans text-center bg-black-monokai rounded-lg shadow-lg sm:text-lg md:text-xl text-grey-lightest p-6 m-2 sm:m-4` }
`
const ExcerptContainer = styled.div`
  ${ tw`z-40` }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${ totalCount } post${
    totalCount === 1 ? '' : 's'
  } tagged with '${ tag }'`

  return (
    <>
      <SEO title={ `posts tagged '` + tag + `'` }  keywords={[`gatsby`, `application`, `react`]} />
      <TagHeader>{tagHeader}</TagHeader>
      <ExcerptContainer>
        {edges.map(({ node }, i) => (
          <Excerpt data={node} i={i} key={i} />
        ))}
      </ExcerptContainer>
      <Divider />
      <About />
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 400)
          frontmatter {
            tags
            date(formatString: "YYYY-MM-DD")
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
  }
`