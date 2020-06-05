import { css } from 'styled-components'

export function underline({ skip = true } = {}) {
  return css`
    text-decoration-skip-ink: ${skip ? 'auto' : 'none'};
    text-decoration: underline;
  `
}
