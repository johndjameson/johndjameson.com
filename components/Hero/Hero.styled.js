import Polaroid from 'components/Polaroid/Polaroid';
import styled from 'styled-components';
import { get } from  'styles/theme';
import { media } from 'styles/mixins';
import { rem, rgba } from 'polished';

const heroBackground = '#161616';

const heroBreakpoints = {
  fontSize: 900,
  layout: 800,
};

export const HeroBase = styled.section`
  --hero-image-overlap: 90px;
  --hero-padding-x: var(--jdj-layout-gutter);
  align-items: center;
  background-color: ${heroBackground};
  color: #fffefa;
  display: flex;
  font-size: ${rem(18)};
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding-bottom: ${get('space.11')};
  padding-left: var(--hero-padding-x);
  padding-right: var(--hero-padding-x);
  padding-top: ${get('space.11')};

  ${media.widerThan(heroBreakpoints.layout)`
    font-size: ${rem(21)};
  `}
`;

export const HeroGrid = styled.div`
  display: grid;
  flex-grow: 1;
  justify-content: center;
  max-width: 1280px;

  ${media.widerThan(heroBreakpoints.layout)`
    align-items: center;
    grid-column-gap: 60px;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const HeroImages = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 1.5%; // Magic number to indent rotation
  padding-right: 3.5%; // Magic number to indent rotation

  ${media.narrowerThan(heroBreakpoints.layout)`
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
  `}
`;

const HeroImage = styled(Polaroid)`
  box-shadow: 0 3px 10px ${rgba(heroBackground, 0.5)};
  max-width: none;
  position: relative;
  transition: transform 0.2s ease-in;
  width: calc(100% + (var(--hero-image-overlap) * 0.5));

  @media (prefers-reduced-motion: no-preference) {
    @media (hover) {
      &:hover {
        box-shadow: 0 4px 20px ${rgba(heroBackground, 0.4)};
        transform: scale(1.05);
        transition-timing-function: ease-out;
      }
    }
  }
`;

export const HeroSummer = styled(HeroImage)`
  transform: rotate(-2deg);
  z-index: 1;
`;

export const HeroHalloweeen = styled(HeroImage)`
  margin-top: 90px;
  right: calc(var(--hero-image-overlap) * 0.5);
  transform: rotate(6deg);
  transition-duration: 0.25s;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: 20px;
  max-width: ${rem(500)};
`;

export const HeroHeading = styled.h1`
  font-family: var(--jdj-font-heading);
  font-size: ${rem(60)};
  font-style: italic;
  font-weight: 200;
  line-height: 0.85;

  ${media.widerThan(heroBreakpoints.layout)`
    margin-bottom: 20px;
    font-size: ${rem(76)};
  `}

  ${media.widerThan(heroBreakpoints.fontSize)`
    font-size: ${rem(92)};
  `}
`;
