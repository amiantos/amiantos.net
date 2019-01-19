import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const PostContainer = styled.div`
  ${ tw`relative w-full p-4` }
`

const Post = styled.div`
  ${ tw`bg-white rounded shadow-lg` }
`

const Title = styled.div`
  ${ tw`font-sans bg-blue-darkest text-xl text-grey-lightest p-6` };
`

const DateLink = styled(Link)`
  ${ tw`block font-sans no-underline bg-grey-lightest text-xs text-right text-grey-dark p-4` };
  border-top: 1px solid #eee;
`

const Content = styled.div`
  ${ tw`font-serif text-black leading-normal p-6` };
`

const Image = styled(Img)`
  ${ tw`` }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostContainer>
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <Content>
          {post.frontmatter.image && (
            <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
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
