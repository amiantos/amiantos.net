import React from 'react'
import {
  ExcerptContainer,
  Post,
  ExcerptLink,
  Title,
  Content,
  Image,
  Meta,
  TagLink,
  DateLink
} from '../styles/post'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby';

export default ({ data, i }) => {
  return (
    <ExcerptContainer>
      <Post>
        <DateLink to={data.fields.slug}>
          {data.frontmatter.date}
        </DateLink>
        <Title to={data.fields.slug}>{data.frontmatter.title}</Title>
        <Meta>
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
