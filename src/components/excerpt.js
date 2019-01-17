import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 3rem;
  color: #333;
`

const ExcerptLink = styled(Link)`
  text-decoration: none!important;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0px;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  color: #333;
`

const Date = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
`

const Excerpt = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.58rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  color: #333;
`

export default ({ data, i }) => (
  <Container>
    <ExcerptLink to={data.fields.slug}>
      <Title>{data.frontmatter.title}</Title>
      <Date>{data.frontmatter.date}</Date>
      <Excerpt>
        {!data.excerpt ? '[photo]' : data.excerpt}
      </Excerpt>
    </ExcerptLink>
  </Container>
)
