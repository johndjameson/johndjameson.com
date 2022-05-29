import Image from 'components/Image/Image';
import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

export const PolaroidBase = styled(({ loaded, ...moreProps }) => (
  <div {...moreProps} />
))`
  --polaroid-image-size: 93%;
  background-color: #d9d9d9; // Starting gray
  box-shadow: 0 4px 10px ${rgba('#161616', 0.4)};
  position: relative;
`;

export const PolaroidImage = styled(Image)`
  height: auto;
  left: 4%;
  position: absolute;
  top: 4.5%;
  transition: filter 2s ease-in-out;
  width: var(--polaroid-image-size);
`;

export const PolaroidFrame = styled(Image)`
  height: auto;
  position: relative;
  width: 100%;
`;
