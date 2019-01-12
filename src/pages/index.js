import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 style={{
        borderBottom: `1px solid #eee`,
        paddingBottom: `0.5rem`,
        fontSize: `1.5em`,
      }}
      >
        welcome to hell
      </h1>
      <p>I'm still trying to decide what to put on this here website.</p>
      <p>
        In the meantime, you should visit
        {` `}
        <a href="https://www.github.com/amiantos">my GitHub</a>.
      </p>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
