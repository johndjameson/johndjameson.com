import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Image from 'components/Image'

export const PolaroidBase = styled(({ loaded, ...moreProps }) => (
  <div {...moreProps} />
))`
  --polaroid-image-size: 93%;
  background-color: #d9d9d9; // Starting gray
  box-shadow: 0 4px 10px ${rgba('#161616', 0.2)};
  position: relative;
  visibility: hidden;

  ${({ loaded }) =>
    loaded &&
    css`
      visibility: visible;

      ${PolaroidImage} {
        filter: none;
      }
    `}
`

export const PolaroidImage = styled(Image)`
  filter: contrast(0) brightness(1.7) grayscale(0.5);
  height: auto;
  left: calc((100% - var(--polaroid-image-size)) * 0.5);
  position: absolute;
  top: calc((100% - var(--polaroid-image-size)) * 0.5);
  transition: filter 2s ease-in-out;
  width: var(--polaroid-image-size);
`

export const PolaroidFrame = styled(Image)`
  position: relative;
`
