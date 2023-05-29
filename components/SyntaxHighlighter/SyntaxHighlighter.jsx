/** @jsxImportSource theme-ui */
import { Highlight } from 'prism-react-renderer';
import styled, { css } from 'styled-components';
import { theme } from './theme';

const displayNames = {
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  plain: 'Plain Text',
  scss: 'SCSS',
  shell: 'Shell',
};

function getDisplayName(language) {
  const displayName = displayNames[language];

  if (!displayName) {
    throw new Error(`No display name for language \`${language}\``);
  }

  return displayName;
}

const StyledSyntaxHeader = styled.div`
  background: var(--jdj-color-syntax-highlighter-header-bg);
  color: var(--jdj-color-syntax-highlighter-fg);
  font-size: 12px;
  font-weight: 600;
  padding: var(--jdj-space-200) var(--jdj-space-400);

  ${({ children }) => {
    if (children.split('').every((char) => char === char.toUpperCase())) {
      return css`
        letter-spacing: 0.05em;
      `;
    }
  }}
`;

// https://www.peterlunch.com/blog/prism-react-render-nextjs
function SyntaxHighlighter({ children, ...moreProps }) {
  const codeProps = children.props;

  const language = codeProps.className?.replace('language-', '') || 'plain';
  const text = codeProps.children;

  /* eslint-disable react/jsx-key */ // Keys are returned from getLineProps and getTokenProps
  return (
    <div {...moreProps}>
      <StyledSyntaxHeader>{getDisplayName(language)}</StyledSyntaxHeader>

      <Highlight
        code={text}
        language={language}
        theme={theme}
      >
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
  /* eslint-enable react/jsx-key */
}

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background: var(--jdj-color-syntax-highlighter-bg);
  border-radius: 6px;
  color: #fff;
  line-height: 1.7;
  overflow: hidden;

  pre {
    background: none !important;
    padding: var(--jdj-space-400);
  }

  * {
    margin-bottom: 0 !important;
  }
`;

export default StyledSyntaxHighlighter;
