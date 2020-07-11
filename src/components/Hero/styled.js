import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

const bgColor = '#161616'

export const HeroGlobal = createGlobalStyle`
  html {
    background-color: ${bgColor};
  }
`

export const HeroBase = styled.main`
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
  // ...
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
