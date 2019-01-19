import React from 'react'
import SEO from '../components/seo'
import { PostContainer, Post, Title, Content } from '../styles/post'

const AboutPage = props => {
  return (
    <>
      <SEO title="about" keywords={[`brad root`, `brad`, `root`, `about`]} />
      <PostContainer>
        <Post>
          <Title>About</Title>
          <Content>
            <p>Hi! I'm <a href="http://bradroot.me">Brad</a>.</p>
            <p>Things I Like:</p>
            <ul>
              <li>Music</li>
              <li>Programming</li>
              <li>Cycling (Uni and Bi)</li>
              <li>Television & Movies</li>
              <li>Art</li>
            </ul>
            <p>This site is built using GatsbyJS.</p>
            <p>
              You can view the source code for this site on <a href="https://www.github.com/amiantos/amiantos.net">GitHub</a>.
            </p>
          </Content>
        </Post>
      </PostContainer>
    </>
  )
}

export default AboutPage
