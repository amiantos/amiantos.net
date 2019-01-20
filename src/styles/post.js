import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

export const PostContainer = styled.div`
  ${ tw`relative w-full p-4` }
`

export const Post = styled.div`
  ${ tw`bg-white rounded shadow-lg overflow-hidden` }
`

export const Title = styled.div`
  ${ tw`font-sans bg-blue-darkest text-xl text-grey-lightest p-6` };
`

export const DateLink = styled(Link)`
  ${ tw`block font-sans no-underline bg-grey-lightest text-xs text-right text-grey-dark p-4` };
  border-top: 1px solid #eee;
`

export const Content = styled.div`
  ${ tw`font-serif text-black leading-normal p-6 pb-0` };
`

export const Image = styled(Img)`
  ${ tw`mb-6` }
`

export const ExcerptContainer = styled.div`
  ${ tw`relative md:w-1/2 md:flex-grow p-4` }
`

export const ExcerptLink = styled(Link)`
  ${ tw`block no-underline` }
`
