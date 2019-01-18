import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const Post = styled.div`
  margin-bottom: 3rem;
  color: #333;
`

const Content = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.58rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  color: #333;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0px;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  color: #333;
  ${ tw`font-sans` };
`

const DateLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
  text-decoration: none;
  ${ tw`font-sans` };
`

const Image = styled(Img)`
  margin-bottom:1.2em;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <DateLink to={post.fields.slug}>
          {post.frontmatter.date}
        </DateLink>
        {post.frontmatter.image && (
          <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
        )}
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        type
        date(formatString: "MMM Do YYYY")
        image {
          publicURL
          childImageSharp{
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
