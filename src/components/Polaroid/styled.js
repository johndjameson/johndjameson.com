import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'
import Image from 'components/Image'

const bgColor = '#161616'

const develop = keyframes`
  from {
    filter: contrast(0.05) brightness(1.85);
  }

  to {
    filter: none;
  }
`

export const PolaroidBase = styled(({ loaded, ...moreProps }) => (
  <Image {...moreProps} />
))`
  animation: 3s ${develop} linear paused both;
  box-shadow: 0 4px 10px ${rgba(bgColor, 0.2)};
  visibility: hidden;

  ${({loaded} ) => loaded && css`
    animation-play-state: running;
    visibility: visible;
` }
`
