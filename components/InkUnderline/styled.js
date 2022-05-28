import styled, { css } from 'styled-components';

export const InkUnderlineBase = styled.span`
  --ink-underline-outdent: 0.5ch;
  position: relative;
  white-space: nowrap;
`;

export const InkUnderlineSvg = styled.svg`
  fill: ${({ accentColor }) => accentColor};
  height: 0.25em; // Magic number: matches font weight
  left: calc(var(--ink-underline-outdent) * -1);
  max-width: none;
  position: absolute;
  top: calc(100% + 0.1em);
  width: calc(100% + (var(--ink-underline-outdent) * 2));
`;

InkUnderlineSvg.defaultProps = {
  accentColor: 'currentColor',
  preserveAspectRatio: 'none',
  viewBox: '0 0 79 13',
};
