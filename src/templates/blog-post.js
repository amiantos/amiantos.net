import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import postStyles from './blog-post.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div class={postStyles.container}>
        <h1 className={postStyles.title}>{post.frontmatter.title}</h1>
        <Link to={ post.fields.slug } className={postStyles.date}>
          <span>{post.frontmatter.date}</span>
        </Link>
        <div className={postStyles.post} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
        date(formatString: "MMM Do YYYY")
      }
    }
  }
`
