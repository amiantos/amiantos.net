import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

export const PostContainer = styled.div`
  ${ tw`relative w-full p-2 sm:p-4` }
`

export const Post = styled.div`
  ${ tw`bg-white rounded-lg shadow-lg overflow-hidden` }
`

export const Title = styled.div`
  ${ tw`font-sans bg-white text-lg font-bold text-black-monokai pb-3 pt-5 pl-5 pr-5 sm:text-xl md:text-2xl md:pt-8 md:pl-8 md:pr-8 md:pb-4` };
`

export const Meta = styled.div`
${ tw`text-xs text-grey-darkest pb-0 pt-2 ml-5 mr-5 md:ml-8 md:mr-8` };
`

export const TagLink = styled(Link)`
  ${ tw`inline-block mb-1 font-sans no-underline text-xs text-grey-darkest p-1 pr-2 pl-2 mr-1 bg-grey-lighter rounded hover:text-white hover:bg-grey-dark ` }
`

export const Content = styled.div`
  ${ tw`font-sans text-black text-sm leading-loose p-5 pb-1 overflow-hidden md:text-lg md:p-8 md:pb-2` };
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
