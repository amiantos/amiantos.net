import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { PostContainer } from '../styles/post'

import bradProfile from '../../images/brad-profile.jpg'
import numuShot from '../../images/numu-tracker-shot2.jpg'
import aeonShot from '../../images/aeon-garden-shot2.jpg'
import lifeSaverShot from '../../images/lifesaver-shot2.jpg'
import gamebookEngineShot from '../../images/gamebook-engine-shots.jpg'
import appleSVG from '../../images/apple-logo.svg'
import githubSVG from '../../images/github-logo.svg'
import IconLink from '../components/icon-link';

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

const PatreonButton = styled.a`
  ${ tw`font-sans font-smallcaps shadow-md font-bold inline-block rounded-lg bg-black text-center mt-6 no-underline p-4 pl-6 pr-6 text-white text-lg md:text-xl`}
`

const SectionHeader = styled.div`
  ${ tw`opacity-75 font-sans font-bold text-center bg-gumbo rounded-full shadow sm:text-lg md:text-xl text-white text-bold p-6 m-2 sm:m-4` }
`

const AppsContainer = styled.div`
  ${ tw`text-center` }
`

const AppContainer = styled.div`
  ${ tw`md:inline-block align-top text-left md:w-1/2 w-full block` }
`

const App = styled.div`
  ${ tw`bg-white rounded shadow overflow-hidden m-4` }
`

const AppPhoto = styled.img`
  ${ tw`w-full block mb-0 p-0 pt-2` }
`

const AppName = styled.div`
  ${ tw`bg-white text-black font-sans text-lg font-bold mt-0 p-4 border-box border-solid border-0 border-t-8 border-gumbo` }
`

const AppContent = styled.div`
  ${ tw`font-sans text-black text-sm leading-loose-ish ml-4 mr-4` };
`

export default () => {
  return (
    <>
      <PostContainer>
        <About>
          <AboutTitle>Well hello there!</AboutTitle>
          <ProfilePhoto src={bradProfile} title="Brad Root's most professional selfie" />
          <AboutContent>
            <p>My name is Brad Root and I'm a software engineer, music aficionado, and occasional unicyclist.</p>
            
            <p>In my spare time, I build <a href="https://github.com/amiantos">open source software</a>, and write about my experiences as a programmer here on this blog.</p>
            
            <p>You can also find me on <a href="https://www.twitter.com/amiantos">Twitter</a>, <a href="https://github.com/amiantos">GitHub</a>, and <a href="https://www.linkedin.com/in/amiantos/">LinkedIn</a>.</p>

            <p>If you enjoy the apps I build or articles I write, please consider supporting me <a href="https://www.patreon.com/amiantos">by becoming a patron</a>.</p>
          </AboutContent>
        </About>
        <center>
          <PatreonButton href="https://www.patreon.com/amiantos">Support these projects by becoming a Patron</PatreonButton>
        </center>
      </PostContainer>
      <AppsContainer>
      <AppContainer>
        <App>
          <AppPhoto src={lifeSaverShot} />
          <AppName>Life Saver</AppName>
          <AppContent>
            <p>Life Saver is an implementation of Conway's Game of Life as an abstract, colorful, highly configurable Apple TV app and macOS screensaver that should please designers and nerds alike. </p>
            <center>
              <IconLink link="https://apps.apple.com/ca/app/life-saver-tv/id1470667717" icon={appleSVG} text="View on App Store" /> 
              <IconLink link="https://www.github.com/amiantos/lifesaver" icon={githubSVG} text="View on Github"/>
            </center>
          </AppContent>
        </App>
      </AppContainer>
      <AppContainer>
        <App>
          <AppPhoto src={gamebookEngineShot} />
          <AppName>Gamebook Engine</AppName>
          <AppContent>
            <p>Gamebook Engine is an iOS app for creating and playing gamebooks, a type of interactive fiction where the player gets to make decisions that influence the story.</p>
            <center>
              <IconLink link="https://testflight.apple.com/join/FjHHmoVy" icon={appleSVG} text="View on TestFlight" /> 
              <IconLink link="https://www.github.com/amiantos/gamebookengine" icon={githubSVG} text="View on Github"/>
            </center>
          </AppContent>
        </App>
      </AppContainer>
      <AppContainer>
        <App>
          <AppPhoto src={aeonShot} />
          <AppName>Aeon Garden</AppName>
          <AppContent>
            <p>Aeon Garden is an abstract artificial life toy for iOS, tvOS, and macOS. A virtual fish tank for all your screens, watch creatures evolve to generative ambient soundscapes.</p>
            <center>
              <IconLink link="https://www.github.com/amiantos/aeongarden" icon={githubSVG} text="View on Github"/>
            </center>
          </AppContent>
        </App>
      </AppContainer>
    </AppsContainer>
  </>
  )
}