import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { PostContainer } from '../styles/post'

const Divider = styled.hr`
  ${ tw`relative border-solid border-grey-light ml-12 mr-12 mt-2 mb-2` }
`

export default () => {
  return (
    <PostContainer>
      <Divider />
    </PostContainer>
  )
}