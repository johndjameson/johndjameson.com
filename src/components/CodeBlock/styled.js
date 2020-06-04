import styled from 'styled-components'
import { rem, rgba } from 'polished'

export const CodeBlockBase = styled.div`
  background-color: ${rgba('#000', 0.05)};
  color: var(--heading-color);
  padding: ${rem(18)} ${rem(20)} ${rem(20)};
`

export const CodeBlockLabel = styled.p`
  border-bottom: 1px solid #332e2e;
  font-family: var(--font-small-caps);
  font-size: ${rem(14)};
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: ${rem(15)};
  padding-bottom: ${rem(2)};
`

export const CodeBlockPre = styled.pre`
  font-family: var(--font-monospace);
  font-size: ${rem(14.5)};
  font-weight: 500;
  line-height: 1.5;
  overflow-x: auto;
`

export const CodeBlockCode = styled.code`
  font-family: inherit;
`
