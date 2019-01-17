import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
import Img from 'gatsby-image'
import  { UpDownWide, UpDown } from '../styles/animations'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${ tw`container mx-auto px-4 flex` }
`

const Image = styled(Img)`
  ${ tw`w-1/4` };
`

const Box = styled.div`
  ${ tw`flex-1` };
`

export default ({ data }) => {
  return (
    <Container>
      {data.edges.map(({ node }, i) => (
        <Box key={i}>
          <Link to={node.fields.slug}>
            <Image fluid={node.frontmatter.image.childImageSharp.fluid} />
          </Link>
        </Box>
      ))}
    </Container>
  )
}
