import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import indexStyles from './index.module.css'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <div className={indexStyles.postContainer}>
          <Link to={node.fields.slug} key={i} className="link">
            <div className="post-list">
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
            </div>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          html
          frontmatter {
            date(formatString: "MMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
