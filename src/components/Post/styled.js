import CodeBlock from 'components/CodeBlock'
import styled from 'styled-components'
import { rem, rgba } from 'polished'

export const PostBase = styled.article`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rem(630)};
`

export const PostTitle = styled.h1`
  // margin-left: -0.025em; // Sidebearing offset
  color: var(--heading-color);
  font-family: var(--font-display);
  font-size: ${rem(80)};
  font-style: italic;
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 1;
  margin-bottom: ${rem(20)};
`

export const PostCode = styled.code`
  background-color: ${rgba('#000', 0.05)};
  color: ${rgba('#080505', 0.9)};
  font-size: 0.9em;
  font-weight: 500;
  padding-left: ${rem(5)};
  padding-right: ${rem(5)};
`

export const PostCodeBlock = styled(CodeBlock)`
  margin-bottom: ${rem(20)};
`

export const PostHeading = styled.h2`
  margin-bottom: ${rem(20)};
  margin-top: ${rem(40)};
`

export const PostParagraph = styled.p`
  margin-bottom: ${rem(20)};
`
