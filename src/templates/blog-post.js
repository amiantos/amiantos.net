import React from 'react'
import { graphql } from 'gatsby'
import {
  PostContainer,
  Post,
  Title,
  Content,
  Image,
  DateLink
} from '../styles/post'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostContainer>
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <Content>
          {post.frontmatter.image && (
            <a href={post.frontmatter.image.publicURL}>
              <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
            </a>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
        <DateLink to={post.fields.slug}>
          {post.frontmatter.date}
        </DateLink>
      </Post>
    </PostContainer>
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
