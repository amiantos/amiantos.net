import React from 'react'
import { Link } from 'gatsby'
import postStyles from './post.module.css'

const Post = ({ data, i }) => (
  <div className={postStyles.postContainer}>
    <Link to={data.fields.slug} key={i} className="link">
      <div className="post-list">
        <h1>{data.frontmatter.title}</h1>
        <span>{data.frontmatter.date}</span>
      </div>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: data.html }} />
  </div>
)

export default Post
