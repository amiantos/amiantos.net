import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { keyframes, css } from 'styled-components'
import Img from 'gatsby-image'
import  { UpDownWide, UpDown } from '../styles/animations'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${ tw`container flex items-center` }
`

const Image = styled(Img)`
  ${ tw`w-full shadow-md hover:shadow-lg` };
`

const Box = styled.div`
  ${ tw`flex-1 p-2` };
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
