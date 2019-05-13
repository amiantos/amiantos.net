import React from 'react'
import { graphql } from 'gatsby'
import {
  PostContainer,
  Post,
  Title,
  Content,
  Image,
  DateLink,
  Meta,
  TagLink
} from '../styles/post'
import SEO from '../components/seo'
import About from '../components/about'
import kebabCase from 'lodash/kebabCase'
import Divider from '../components/divider'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <SEO title={post.frontmatter.title} keywords={post.frontmatter.tags} description={post.frontmatter.description || post.excerpt}/>
      <PostContainer>
        <Post>
          <Title>{post.frontmatter.title}</Title>
          <Meta>
            <TagLink to={post.fields.slug}>
              {post.frontmatter.date}
            </TagLink>
            { post.frontmatter.tags.map((tag, index) => {
              return (
                <TagLink key={index} to={`/tags/${ kebabCase(tag) }/`}>
                  {tag}
                </TagLink>
              )
            })}
          </Meta>
          <Content>
            {post.frontmatter.image && (
              <a href={post.frontmatter.image.publicURL}>
                <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
              </a>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Content>
        </Post>
      </PostContainer>
      <Divider />
      <About />
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
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
  }
`
