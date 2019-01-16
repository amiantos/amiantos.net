import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2em;
`

const Image = styled(Img)`
  height: 200px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`

export default ({ data }) => {
  return (
    <Container>
      {data.edges.map(({ node }, i) => (
        <div>
          <Link to={node.fields.slug}>
            <Image fixed={node.frontmatter.image.childImageSharp.fixed} />
          </Link>
        </div>
      ))}
    </Container>
  )
}
