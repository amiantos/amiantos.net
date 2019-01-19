import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const upDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
  }
`

const downUp = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-30px);
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

const rightLeft = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-30px);
  }
`

const orbit = keyframes`
  from {
    transform: rotate(0deg) translateX(60px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(60px) rotate(-360deg);
  }
`

const rotateSlowAnimation = css`
  ${ rotate } 30s linear infinite;
`

const upDownAnimation = css`
  ${ upDown } 12s ease-in-out infinite alternate;
`

const downUpAnimation = css`
  ${ downUp } 12s ease-in-out infinite alternate;
`

const leftRightAnimation = css`
  ${ leftRight } 12s ease-in-out infinite alternate;
`

const rightLeftAnimation = css`
  ${ rightLeft } 12s ease-in-out infinite alternate;
`

const orbitAnimation = css`
  ${ orbit } 60s linear infinite;
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

export const DownUp = styled.div`
  animation: ${ downUpAnimation };
`

export const LeftRight = styled.div`
  animation: ${ leftRightAnimation };
`

export const RightLeft = styled.div`
  animation: ${ rightLeftAnimation };
`
