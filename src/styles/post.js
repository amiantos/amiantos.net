import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

export const PostContainer = styled.div`
  ${ tw`relative w-full p-2 sm:p-4` }
`

export const Post = styled.div`
  ${ tw`bg-white rounded shadow overflow-hidden` }
`

export const Title = styled(Link)`
  ${ tw`block font-sans bg-white no-underline text-lg font-bold text-black-monokai pb-3 pt-5 pl-5 pr-5 sm:text-xl md:text-2xl md:pl-8 md:pr-8 md:pb-4` };
`

export const Meta = styled.div`
${ tw`text-xs text-grey-darkest mt-5 ml-5 md:ml-8 md:mt-10` };
`

export const TagLink = styled(Link)`
  ${ tw`inline-block font-bold uppercase mb-1 font-sans italic no-underline text-xs text-white p-1 pr-3 pl-3 pb-1 mr-1 bg-gumbo rounded-full hover:underline` }
`

export const DateLink = styled(Link)`
  ${ tw`block font-sans font-bold no-underline text-base text-gumbo mb-3 ml-5 md:ml-8` }
`

export const Content = styled.div`
  ${ tw`font-sans text-black text-sm leading-loose p-5 pt-4 pb-1 overflow-hidden md:text-base md:p-8 md:pb-2 md:pt-5` };
`

export const Image = styled(Img)`
  ${ tw`mb-6 rounded shadow` }
`

export const ExcerptContainer = styled.div`
  ${ tw`relative p-2 sm:p-4` }
`

export const ExcerptLink = styled(Link)`
  ${ tw`block no-underline` }
`
