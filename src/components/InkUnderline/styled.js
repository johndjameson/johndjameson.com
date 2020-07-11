import styled, { css } from 'styled-components'

export const InkUnderlineBase = styled.span`
  --ink-underline-outdent: 0.5ch;
  position: relative;
  white-space: nowrap;
`

export const InkUnderlineSvg = styled.svg`
  height: 0.25em; // Magic number: matches font weight
  left: calc(var(--ink-underline-outdent) * -1);
  position: absolute;
  top: calc(100% + 0.1em);
  width: calc(100% + (var(--ink-underline-outdent) * 2));

  ${({ highlight }) => {
    if (highlight) {
      return css`
        fill: #26b86e !important; // Sanitize;
      `
    }
  }}
`

InkUnderlineSvg.defaultProps = {
  highlight: false,
  preserveAspectRatio: 'none',
  viewBox: '0 0 79 13',
}
