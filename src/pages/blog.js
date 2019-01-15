import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="archive" keywords={[`blog`, `archive`]} />
      <ul>
        {postList.edges.map(({ node }, i) => (
          <li><Link to={node.fields.slug} key={i}>{node.frontmatter.title}</Link> - {node.frontmatter.date}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const tocQuery = graphql`
query{
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges{
        node{
          fields{
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
          }
        }
      }
    }
  }`
