import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import SEO from '../components/seo'
import Excerpt from '../components/excerpt'
import About from '../components/about'
import Divider from '../components/divider'

import numuShot from '../../images/numu-tracker-shot.jpg'
import aeonShot from '../../images/aeon-garden-shot.jpg'

const ExcerptContainer = styled.div`
  ${ tw`z-40` }
`

const AppContainer = styled.div`
  ${ tw`inline-block w-1/2` }
`

const App = styled.div`
  ${ tw`bg-white rounded shadow overflow-hidden m-5` }
`

const AppPhoto = styled.img`
  ${ tw`w-full block mb-0 p-0 pt-4` }
`

const AppName = styled.div`
  ${ tw`bg-white text-black font-sans text-lg font-bold mt-0 p-4 border-box border-solid border-0 border-t-8 border-gumbo` }
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
        </App>
      </AppContainer>
      <AppContainer>
        <App>
          <AppPhoto src={aeonShot} />
          <AppName>Aeon Garden</AppName>
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
