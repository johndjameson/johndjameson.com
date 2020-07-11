import styled, { createGlobalStyle } from 'styled-components'
import { rem, rgba } from 'polished'
import Polaroid from 'components/Polaroid'

const bgColor = '#161616'

export const HeroGlobal = createGlobalStyle`
  html {
    background-color: ${bgColor};
  }
`

export const HeroBase = styled.main`
  --hero-image-overlap: 90px;
  background-color: ${bgColor};
  color: #fffefa;
  display: flex;
  font-size: ${rem(21)};
  justify-content: center;
  line-height: 1.5;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
`

export const HeroGrid = styled.div`
  align-items: center;
  display: grid;
  flex-grow: 1;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
`

export const HeroImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 1%; // Magic number to indent rotation
  padding-right: 3%; // Magic number to indent rotation
`

const HeroImage = styled(Polaroid)`
  box-shadow: 0 3px 10px ${rgba(bgColor, 0.5)};
  position: relative;
  transition: transform 0.2s ease-in;
  width: 100%;

  &:hover {
    box-shadow: 0 4px 20px ${rgba(bgColor, 0.4)};
    transform: scale(1.05);
    transition-timing-function: ease-out;
  }
`

export const HeroSummer = styled(HeroImage)`
  left: calc(var(--hero-image-overlap) * 0.5);
  transform: rotate(-2deg);
  z-index: 1;
`

export const HeroHalloweeen = styled(HeroImage)`
  margin-top: 90px;
  right: calc(var(--hero-image-overlap) * 0.5);
  transform: rotate(6deg);
  transition: transform 0.25s ease-in-out;
`

export const HeroContent = styled.div`
  display: grid;
  grid-row-gap: 20px;
  max-width: ${rem(500)};
`

export const HeroHeading = styled.h1`
  font-family: var(--font-display);
  font-size: ${rem(92)};
  font-style: italic;
  font-weight: 100;
  line-height: 0.85;
  margin-bottom: 20px;
`
