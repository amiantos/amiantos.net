import React from 'react'
import { Link } from 'gatsby'
import excerptStyles from './excerpt.module.css'

const Excerpt = ({ data, i }) => (
  <div className={excerptStyles.container}>
    <Link to={data.fields.slug} key={i} className={excerptStyles.link}>
      <h1>{data.frontmatter.title}</h1>
      <span>{data.frontmatter.date}</span>
      <div className={excerptStyles.excerpt}>
        {!data.excerpt ? '[photo]' : data.excerpt} <Link to={data.fields.slug} key={i}>continue</Link>
      </div>
    </Link>
  </div>
)

export default Excerpt
