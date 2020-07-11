import { css } from 'styled-components'

// -------------------------------------
//   General
// -------------------------------------

export const transition = ({
  duration = 'var(--transition-duration)',
  easing = 'var(--transition-function)',
  properties = ['all'],
} = {}) => {
  if (properties.length > 1) {
    return css`
      transition-duration: ${duration};
      transition-property: ${properties.join(', ')};
      transition-timing-function: ${easing};
    `
  }

  return css`
    transition: ${properties[0]} ${duration} ${easing};
  `
}

export const underline = ({ color = 'currentColor', skip = true } = {}) => css`
  text-decoration-skip-ink: ${skip ? 'auto' : 'none'};
  text-decoration: ${color} solid underline;
`

// -------------------------------------
//   Media Queries
// -------------------------------------

const narrowerThan = breakpoint => (...args) => css`
  @media screen and (max-width: calc(${breakpoint}px - 1px)) {
    ${css(...args)}
  }
`

const widerThan = breakpoint => (...args) => css`
  @media screen and (min-width: ${breakpoint}px) {
    ${css(...args)}
  }
`

export const media = {
  narrowerThan,
  widerThan,
}
