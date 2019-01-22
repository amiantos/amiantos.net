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
  return (
    <ExcerptContainer>
      <Post>
        <ExcerptLink to={data.fields.slug}>
          <Title>{data.frontmatter.title}</Title>
        </ExcerptLink>
        <Content>
          <ExcerptLink to={data.fields.slug}>
            {data.frontmatter.image && (<Image fluid={data.frontmatter.image.childImageSharp.fluid} />)}
            <p>{data.excerpt}</p>
          </ExcerptLink>
        </Content>
        <DateLink to={data.fields.slug}>
          {data.frontmatter.date}
        </DateLink>
      </Post>
    </ExcerptContainer>
  )
}
