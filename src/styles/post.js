import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

export const PostContainer = styled.div`
  ${ tw`relative w-full p-4` }
`

export const Post = styled.div`
  ${ tw`flex flex-col bg-white rounded shadow-lg overflow-hidden` }
`

export const Title = styled.div`
  ${ tw`font-sans bg-white text-2xl text-black-monokai p-6 border-solid border-black-monokai border-0 border-b-1` };
`

export const Footer = styled.div`
${ tw`block flex bg-grey-lightest text-xs text-grey-darkest p-4 border-solid border-blue-lightest border-0 border-t-1` };
`

export const DateLink = styled(Link)`
  ${ tw`flex-1 text-right font-sans no-underline text-xs text-grey-darkest hover:text-blue-dark` };
`

export const TagLink = styled(Link)`
  ${ tw`font-sans no-underline text-xs text-grey-darkest hover:text-blue-dark` }
`

export const Content = styled.div`
  ${ tw`flex-grow font-sans text-black text-lg leading-loose p-8 pb-1 overflow-hidden` };
`

export const Image = styled(Img)`
  ${ tw`mb-6` }
`

export const ExcerptContainer = styled.div`
  ${ tw`relative p-4` }
`

export const ExcerptLink = styled(Link)`
  ${ tw`block no-underline` }
`
