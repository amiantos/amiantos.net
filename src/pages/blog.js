import React from 'react'
import { Link, graphql } from 'gatsby'
import { PostContainer, Post, Title, Content } from '../styles/post'

import SEO from '../components/seo'

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
