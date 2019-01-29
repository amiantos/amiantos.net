import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

export const PostContainer = styled.div`
  ${ tw`relative w-full p-4` }
`

export const Post = styled.div`
  ${ tw`flex flex-col bg-white rounded shadow-lg overflow-hidden md:h-full` }
`

export const Title = styled.div`
  ${ tw`font-sans bg-black-monokai text-xl text-grey-lightest p-6` };
`

export const Footer = styled.div`
${ tw`block flex bg-grey-lightest text-xs text-grey-darkest p-4` };
border-top: 1px solid #eee;
`

export const DateLink = styled(Link)`
  ${ tw`flex-1 text-right font-sans no-underline text-xs text-grey-darkest` };
`

export const TagLink = styled(Link)`
  ${ tw`font-sans no-underline text-xs text-grey-darkest` }
`

export const Content = styled.div`
  ${ tw`flex-grow font-serif text-black leading-loose-ish p-6 pb-1 overflow-hidden` };
`

export const Image = styled(Img)`
  ${ tw`mb-6` }
`

export const ExcerptContainer = styled.div`
  ${ tw`relative md:w-1/2 md:flex-grow md:self-stretch p-4` }
`

export const ExcerptLink = styled(Link)`
  ${ tw`block no-underline` }
`
