import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const ExcerptContainer = styled.div`
  ${ tw`md:w-1/2 md:flex-grow p-4` }
`

const Excerpt = styled.div`
  ${ tw`bg-white rounded shadow-lg` }
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

export default ({ data, i }) => (
  <ExcerptContainer>
    <Excerpt>
      <ExcerptLink to={data.fields.slug}>
        <Title>{data.frontmatter.title}</Title>
        <Content>
          {!data.excerpt ? '[photo]' : data.excerpt}
        </Content>
        <Date>{data.frontmatter.date}</Date>
      </ExcerptLink>
    </Excerpt>
  </ExcerptContainer>
)
