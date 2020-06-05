import styled from 'styled-components'
import { rem, rgba } from 'polished'
import { underline } from 'styles/mixins'
import CodeBlock from 'components/CodeBlock'
import SmartLink from 'components/SmartLink'

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
  margin-bottom: ${rem(30)};
`

export const PostDescription = styled.p`
  color: var(--heading-color);
  font-family: var(--font-sans-serif);
  font-weight: 700;
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
  margin-bottom: ${rem(25)};
  margin-top: ${rem(25)};
`

export const PostHeading = styled.h2`
  font-family: var(--font-sans-serif);
  font-size: ${rem(18)};
  margin-bottom: ${rem(20)};
  margin-top: ${rem(40)};
`

export const PostImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

PostImage.defaultProps = {
  loading: 'lazy',
}

export const PostLink = styled(SmartLink)`
  ${underline()}
  transition: opacity var(--transition);

  &:focus,
  &:hover {
    opacity: 0.5;
  }
`

export const PostListItem = styled.li`
  margin-bottom: ${rem(5)};
`

export const PostOrderedList = styled.ol`
  counter-reset: postOrderedList;
  margin-bottom: ${rem(20)};
  // padding-left: ${rem(20)};

  ${PostListItem} {
    position: relative;

    &::before {
      color: var(--heading-color);
      content: counter(postOrderedList) ')';
      counter-increment: postOrderedList;
      font-family: var(--font-small-caps);
      font-size: 0.8em;
      position: absolute;
      right: calc(100% + ${rem(5)});
      text-align: right;
      top: 0.225em;
      width: fit-content;
    }
  }
`

export const PostParagraph = styled.p`
  margin-bottom: ${rem(20)};
`

export const PostUnorderedList = styled.ul`
  margin-bottom: ${rem(20)};

  ${PostListItem} {
    position: relative;

    &::before {
      color: var(--heading-color);
      content: '•';
      font-family: var(--font-small-caps);
      font-size: 0.8em;
      position: absolute;
      right: calc(100% + ${rem(5)});
      text-align: right;
      top: 0.225em;
      width: fit-content;
    }
  }
`
