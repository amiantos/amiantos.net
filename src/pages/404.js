import React from 'react'
import SEO from '../components/seo'
import { PostContainer, Post, Title, Content } from '../styles/post'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const NotFoundContainer = styled(PostContainer)`
  ${ tw`w-3/4 mx-auto` }
`

const NotFoundPage = props => {
  return (
    <>
      <SEO title="about" keywords={[`brad root`, `brad`, `root`, `about`]} />
      <NotFoundContainer>
        <Post>
          <Title>404 Not Found</Title>
          <Content>
            <p>Whoa! Whatever you were looking for, it isn't here anymore.</p>
            <p>I'm really sorry.</p>
          </Content>
        </Post>
      </NotFoundContainer>
    </>
  )
}

export default NotFoundPage
