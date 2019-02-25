import React from 'react'
import SEO from '../components/seo'
import { PostContainer, Post, Title, Content } from '../styles/post'

const AboutPage = props => {
  return (
    <>
      <SEO title="about" keywords={[`brad root`, `brad`, `root`, `about`]} />
      <PostContainer>
        <Post>
          <Title>What's this?</Title>
          <Content>
            <p>Hi! I'm Brad. I'm a software engineer living in Los Angeles.</p>
            <p>I currently work for <a href="https://www.thenounproject.com">The Noun Project</a> on <a href="https://www.lingoapp.com">Lingo</a>.</p>
            <p>In my free time, I develop <a href="https://itunes.apple.com/us/app/numu-new-music-tracker/id1158641228?mt=8">Numu Tracker</a>, a FOSS project that basically acts as a automatic "to-do list" for music you want to listen to. You can follow along as I build out the new verison, or contribute, <a href="https://github.com/numutracker">over on GitHub</a>.</p>
            <p>
              Here's some ways you can find or reach me:
              <ul>
                <li><a href="https://www.twitter.com/amiantos">Twitter</a></li>
                <li><a href="https://github.com/amiantos">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/amiantos/">LinkedIn</a></li>
                <li><a href="mailto:amiantos@icloud.com">Email</a></li>
              </ul>
            </p>
            <p>This site was built using GatsbyJS, a static site generator for React. It's pretty cool. You can view the source code for this site on <a href="https://www.github.com/amiantos/amiantos.net">GitHub</a>.</p>
          </Content>
        </Post>
      </PostContainer>
    </>
  )
}

export default AboutPage
