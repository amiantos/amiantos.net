import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`

const leftRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(30px);
  }
`

const orbit = keyframes`
  from {
    transform: rotate(0deg) translateX(1px);
  }
  to {
    transform: rotate(360deg) translateX(1px);
  }
`

const rotateSlowAnimation = css`
  ${ rotate } 30s ease-in-out infinite;
`

const upDownAnimation = css`
  ${ upDown } 10s ease-in-out infinite alternate;
`

const upDownWideAnimation = css`
  ${ upDownWide } 18s ease-in-out infinite alternate;
`

const leftRightAnimation = css`
  ${ leftRight } 8s ease-in-out infinite alternate;
`

const orbitAnimation = css`
  ${ orbit } 10s linear infinite;
`

export const RotateSlow = styled.div`
  animation: ${ rotateSlowAnimation };
`

export const Orbit = styled.div`
  animation: ${ orbitAnimation };
`

export const UpDown = styled.div`
  animation: ${ upDownAnimation };
`

export const UpDownWide = styled.div`
  animation: ${ upDownWideAnimation };
`

export const LeftRight = styled.div`
  animation: ${ leftRightAnimation };
`

export const waveAnimation = length => css`
  animation: ${ wave } ${ length } linear infinite alternate;
`

export const rotateAnimation = length => css`
  animation: ${ rotate } ${ length } linear infinite;
`
