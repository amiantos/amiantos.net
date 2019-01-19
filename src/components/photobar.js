import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${ tw`container flex items-center` }
`

const Image = styled(Img)`
  ${ tw`w-full rounded shadow-md overflow-hidden` };
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
