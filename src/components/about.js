import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { PostContainer } from '../styles/post';
import bradProfile from '../../images/brad-profile.jpg'

const About = styled.div`
  ${ tw`relative bg-white rounded shadow overflow-hidden mx-auto clearfix p-5 pb-1 md:p-8 md:pb-2` }
`

const AboutTitle = styled.div`
  ${ tw`font-sans bg-white text-lg font-bold text-black-monokai sm:text-xl md:text-2xl` }
`

const AboutContent = styled.div`
  ${ tw`font-sans text-black text-sm leading-loose-ish md:text-lg pt-3 md:pt-5` };
`

const ProfilePhoto = styled.img`
  ${ tw`relative w-1/3 max-w-xs rounded float-right clearfix ml-2 mb-2 mt-3 sm:ml-4 sm:mb-4 sm:mt-4` }
`

export default () => {
  return (
    <PostContainer>
      <About>
        <AboutTitle>Well hello there!</AboutTitle>
        <ProfilePhoto src={bradProfile} alt="Brad Root's face" />
        <AboutContent>
          <p>My name is Brad Root and I'm a software engineer, music aficionado, and occasional unicyclist.</p>

          <p>I build <a href="https://itunes.apple.com/us/app/numu-new-music-tracker/id1158641228?mt=8"><strong></strong>Numu Tracker</a>, a service that makes it easy to keep track of music you want to listen to. It's open source front to back, you can find out more <a href="https://github.com/numutracker/">on GitHub</a>.</p>

          <p>Find me on <a href="https://www.twitter.com/amiantos">Twitter</a>, <a href="https://github.com/amiantos">GitHub</a>, and <a href="https://www.linkedin.com/in/amiantos/">LinkedIn</a>.</p>
        </AboutContent>
      </About>
    </PostContainer>
  )
}