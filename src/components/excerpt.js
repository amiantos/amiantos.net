import React from 'react'
import {
  ExcerptContainer,
  Post,
  ExcerptLink,
  Title,
  DateLink,
  Content,
  Image
} from '../styles/post'

export default ({ data, i }) => {
  return (<ExcerptContainer>
    <Post>
      <ExcerptLink to={data.fields.slug}>
        <Title>{data.frontmatter.title}</Title>
        <Content>
          {data.frontmatter.image && (<Image fluid={data.frontmatter.image.childImageSharp.fluid} />)}
          {data.frontmatter.image && data.excerpt && (<br />)}
          {data.excerpt}
        </Content>
        <DateLink to={data.fields.slug}>
          {data.frontmatter.date}
        </DateLink>
      </ExcerptLink>
    </Post>
  </ExcerptContainer>)
}
