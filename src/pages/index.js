import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import SEO from '../components/seo'
import Excerpt from '../components/excerpt'
import About from '../components/about'
import Divider from '../components/divider'

import numuShot from '../../images/numu-tracker-shot2.jpg'
import aeonShot from '../../images/aeon-garden-shot2.jpg'
import appleSVG from '../../images/apple-logo.svg'
import githubSVG from '../../images/github-logo.svg'
import IconLink from '../components/icon-link';

const ExcerptContainer = styled.div`
  ${ tw`z-40` }
`

const AppContainer = styled.div`
  ${ tw`md:inline-block align-top md:w-1/2 w-full block` }
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

const IndexPage = props => {
  const postList = props.data.posts
  return (
    <>
      <SEO title="home" keywords={[`gatsby`, `application`, `react`]} />
      <About />
      <AppContainer>
        <App>
          <AppPhoto src={numuShot} />
          <AppName>Numu Tracker</AppName>
          <AppContent>
            <p>Numu Tracker can keep you up to date on music by the artists you love the most. Part to-do list, part reminders and alerts, Numu gives you the tools to ensure you never miss out on new albums.</p>
            <center>
              <IconLink link="https://itunes.apple.com/us/app/numu-new-music-tracker/id1158641228" icon={appleSVG} text="View on App Store" /> 
              <IconLink link="https://www.github.com/numutracker" icon={githubSVG} text="View on Github" />
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
      <Divider />
      <ExcerptContainer>
        {postList.edges.map(({ node }, i) => (
          <Excerpt data={node} i={i} key={i} />
        ))}
      </ExcerptContainer>
    </>
  )
}

export default IndexPage

export const query = graphql`{
  posts: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 400)
        frontmatter {
          tags
          date(formatString: "MMM D, Y")
          title
        }
      }
    }
  }
}`
