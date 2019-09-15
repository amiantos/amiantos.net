import React from 'react'
import SEO from '../components/seo'
import { PostContainer, Post, Title, Content } from '../styles/post'
import YouTube from '../components/youtube'
import lifesaverSSShots from '../../images/lifesaver-screenshots-1.1.png'
import { Link } from 'gatsby'
import About from '../components/about'
import Divider from '../components/divider';


const NotFoundPage = props => {
  return (
    <>
      <SEO
        title="Gamebook Engine - Create Interactive Fiction on your iPhone and iPad!" 
        keywords={[`interactive fiction`, `chooseable path`, `adventure game`, `choose your own adventure`, `open source`]} 
        description="Gamebook Engine is an iOS app for playing and creating Gamebooks, a type of interactive fiction where the player gets to make choices that shape the path of the story."
      />
      <PostContainer>
        <Post>
          <Title to='/gamebookengine'>Gamebook Engine</Title>
          <Content>
            <p>Gamebook Engine is currently in beta.</p>
            <h2>Privacy Policy</h2>
            <p>Gamebook Engine does not collect any information about you or your usage of the app. No information is ever transmitted from your instance of Gamebook Engine to any server on the internet. If you share Gamebooks using the export function, that is entirely separate from Gamebook Engine and who you share them with is up to you and out of our control.</p>
          </Content>
        </Post>
      </PostContainer>
      <Divider/>
      <About />
    </>
  )
}

export default NotFoundPage
