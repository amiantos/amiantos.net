import React from 'react'
import {
  ExcerptContainer,
  Post,
  ExcerptLink,
  Title,
  Content,
  Image,
  Meta,
  TagLink
} from '../styles/post'
import kebabCase from 'lodash/kebabCase'

export default ({ data, i }) => {
  return (
    <ExcerptContainer>
      <Post>
        <ExcerptLink to={data.fields.slug}>
          <Title>{data.frontmatter.title}</Title>
        </ExcerptLink>
        <Meta>
          <TagLink to={data.fields.slug}>
            {data.frontmatter.date}
          </TagLink>
          { data.frontmatter.tags.map((tag, index) => {
            return (
              <TagLink key={index} to={`/tags/${ kebabCase(tag) }/`}>
                {tag}
              </TagLink>
            )
          })}
        </Meta>
        <Content>
          <ExcerptLink to={data.fields.slug}>
            {data.frontmatter.image && (<Image fluid={data.frontmatter.image.childImageSharp.fluid} />)}
            <p>{data.excerpt}</p>
          </ExcerptLink>
        </Content>
      </Post>
    </ExcerptContainer>
  )
}
