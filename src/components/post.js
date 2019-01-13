import React from 'react'
import { Link } from 'gatsby'
import postStyles from './post.module.css'

const Post = ({ data, i }) => (
  <div className={postStyles.container}>
    <Link to={data.fields.slug} key={i} className={postStyles.link}>
      <h1>{data.frontmatter.title}</h1>
      <span>{data.frontmatter.date}</span>
      <div className={postStyles.post}>
        {data.excerpt}
      </div>
    </Link>
  </div>
)

export default Post
