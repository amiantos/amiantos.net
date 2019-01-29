import React from 'react'
import {
  ExcerptContainer,
  Post,
  ExcerptLink,
  Title,
  DateLink,
  Content,
  Image,
  Footer,
  TagLink
} from '../styles/post'
import kebabCase from 'lodash/kebabCase'

export default ({ data, i }) => {
  const tagQuantity = data.frontmatter.tags.length
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
        <Footer>
          { data.frontmatter.tags.map((tag, index) => (
            <span key={tag}>
              <TagLink to={`/tags/${ kebabCase(tag) }/`}>
                {tag}
              </TagLink>
              { index < (tagQuantity - 1) && (
                <>,&nbsp;</>
              )}
            </span>
          )) }
          <DateLink to={data.fields.slug}>
            {data.frontmatter.date}
          </DateLink>
        </Footer>
      </Post>
    </ExcerptContainer>
  )
}
