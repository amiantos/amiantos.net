import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import SEO from '../components/seo'

const PostContainer = styled.div`
  ${ tw`relative w-full p-4` }
`

const Post = styled.div`
  ${ tw`bg-white rounded shadow-lg overflow-hidden` }
`

const Title = styled.div`
  ${ tw`font-sans bg-blue-darkest text-xl text-grey-lightest p-6` };
`

const Content = styled.div`
  ${ tw`font-serif text-black leading-normal p-6` };
`

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <>
      <SEO title="archive" keywords={[`blog`, `archive`]} />
      <PostContainer>
        <Post>
          <Title>Blog Archive</Title>
          <Content>
            <ul>
              {postList.edges.map(({ node }, i) => (
                <li>
                  {node.frontmatter.date}
                  {` `}-{` `}
                  <Link to={node.fields.slug} key={i}>
                    {node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Content>
        </Post>
      </PostContainer>
    </>
  )
}

export default BlogPage

export const tocQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges{
        node{
          fields{
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
