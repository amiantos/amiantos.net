import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const ExcerptContainer = styled.div`
  ${ tw`relative md:w-1/2 md:flex-grow p-4` }
`

const Excerpt = styled.div`
  ${ tw`bg-white rounded shadow-lg overflow-hidden` }
`

const ExcerptLink = styled(Link)`
  ${ tw`block no-underline` }
`

const Title = styled.div`
  ${ tw`font-sans bg-blue-darkest text-xl text-grey-lightest p-6` };
`

const Date = styled.div`
  ${ tw`font-sans bg-grey-lightest text-xs text-right text-grey-dark p-4` };
  border-top: 1px solid #eee;
`

const Content = styled.div`
  ${ tw`font-serif text-black leading-normal p-6` };
`

const Image = styled(Img)`
  ${ tw`` }
`

export default ({ data, i }) => (
  <ExcerptContainer>
    <Excerpt>
      <ExcerptLink to={data.fields.slug}>
        <Title>{data.frontmatter.title}</Title>
        <Content>
          {data.frontmatter.image && (
            <Image fluid={data.frontmatter.image.childImageSharp.fluid} />
          )}
          {data.frontmatter.image && data.excerpt && ( <br/> )}
          {data.excerpt}
        </Content>
        <Date>{data.frontmatter.date}</Date>
      </ExcerptLink>
    </Excerpt>
  </ExcerptContainer>
)
