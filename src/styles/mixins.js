import { css } from 'styled-components'

export function transition({
  duration = 'var(--transition-duration)',
  easing = 'var(--transition-function)',
  properties = ['all'],
} = {}) {
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

export function underline({ color = 'currentColor', skip = true } = {}) {
  return css`
    text-decoration-skip-ink: ${skip ? 'auto' : 'none'};
    text-decoration: ${color} solid underline;
  `
}
