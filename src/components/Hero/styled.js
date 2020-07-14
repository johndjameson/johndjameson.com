import styled, { createGlobalStyle } from 'styled-components'
import { rem, rgba } from 'polished'
import { media } from 'styles/mixins'
import Polaroid from 'components/Polaroid'

const heroBackground = '#161616'

const heroBreakpoints = {
  fontSize: 900,
  layout: 800,
}

export const HeroGlobal = createGlobalStyle`
  html {
    background-color: ${heroBackground};
  }
`

export const HeroBase = styled.main`
  --hero-image-overlap: 90px;
  --hero-padding: 20px;
  align-items: center;
  background-color: ${heroBackground};
  color: #fffefa;
  display: flex;
  font-size: ${rem(18)};
  justify-content: center;
  line-height: 1.5;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 40px;
  padding-left: var(--hero-padding);
  padding-right: var(--hero-padding);
  padding-top: 40px;

  ${media.widerThan(heroBreakpoints.layout)`
    --hero-padding: 40px;
    font-size: ${rem(21)};
  `}
`

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
`

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
`

const HeroImage = styled(Polaroid)`
  box-shadow: 0 3px 10px ${rgba(heroBackground, 0.5)};
  max-width: none;
  position: relative;
  transition: transform 0.2s ease-in;
  width: calc(100% + (var(--hero-image-overlap) * 0.5));

  &:hover {
    box-shadow: 0 4px 20px ${rgba(heroBackground, 0.4)};
    transform: scale(1.05);
    transition-timing-function: ease-out;
  }
`

export const HeroSummer = styled(HeroImage)`
  transform: rotate(-2deg);
  z-index: 1;
`

export const HeroHalloweeen = styled(HeroImage)`
  margin-top: 90px;
  right: calc(var(--hero-image-overlap) * 0.5);
  transform: rotate(6deg);
  transition-duration: 0.25s;
`

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: 20px;
  max-width: ${rem(500)};
`

export const HeroHeading = styled.h1`
  font-family: var(--font-display);
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

`
