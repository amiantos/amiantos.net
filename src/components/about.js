import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { PostContainer } from '../styles/post'
import bradProfile from '../../images/brad-profile.jpg'

const About = styled.div`
  ${ tw`relative bg-white rounded shadow overflow-hidden mx-auto clearfix p-5 pb-1 md:p-8 md:pb-2` }
`

const AboutTitle = styled.div`
  ${ tw`font-sans bg-white text-lg font-bold text-black-monokai sm:text-xl md:text-2xl` }
`

const AboutContent = styled.div`
  ${ tw`font-sans text-black text-sm leading-loose-ish md:text-base pt-3 md:pt-5` };
`

const ProfilePhoto = styled.img`
  ${ tw`relative w-1/3 max-w-xs md:w-1/4 rounded-full shadow-lg float-right clearfix border-solid border-8 border-gumbo ml-3 mb-4 mt-4` }
`

export default () => {
  return (
    <PostContainer>
      <About>
        <AboutTitle>Well hello there!</AboutTitle>
        <ProfilePhoto src={bradProfile} title="Brad Root's most professional selfie" />
        <AboutContent>
          <p>My name is Brad Root and I'm a software engineer, music aficionado, and occasional unicyclist.</p>
          
          <p>In my spare time, I build <a href="https://github.com/amiantos">open source software</a>, and write about my experiences as a programmer here on this blog.</p>
          
          <p>If you enjoy the apps I build or articles I write, please consider supporting me <a href="https://www.patreon.com/amiantos">by becoming a patron</a>.</p>

          <p>Find me on <a href="https://www.twitter.com/amiantos">Twitter</a>, <a href="https://github.com/amiantos">GitHub</a>, and <a href="https://www.linkedin.com/in/amiantos/">LinkedIn</a>.</p>
        </AboutContent>
      </About>
    </PostContainer>
  )
}