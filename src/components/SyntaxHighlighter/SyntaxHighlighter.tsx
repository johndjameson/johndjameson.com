"use client";

import { Highlight } from "prism-react-renderer";
import theme from "@/components/SyntaxHighlighter/theme";
import css from "@/components/SyntaxHighlighter/SyntaxHighlighter.module.css";

const displayNames = {
  css: "CSS",
  html: "HTML",
  javascript: "JavaScript",
  plain: "Plain Text",
  scss: "SCSS",
  shell: "Shell",
} as const;

function getDisplayName(language: keyof typeof displayNames) {
  const displayName = displayNames[language];

  if (!displayName) {
    throw new Error(`No display name for language \`${language}\``);
  }

  return displayName;
}

interface SyntaxHighlighterProps
  extends React.ComponentPropsWithoutRef<"div"> {}

// https://www.peterlunch.com/blog/prism-react-render-nextjs
function SyntaxHighlighter({ children, ...moreProps }: SyntaxHighlighterProps) {
  if (!children) {
    return null;
  }

  const codeProps = (children as any).props; // TODO: Fix this any

  const language = codeProps.className?.replace("language-", "") || "plain";
  const text = codeProps.children;

  return (
    <div {...moreProps} className={css.highlighter}>
      <div className={css.header}>{getDisplayName(language)}</div>

      <Highlight
        code={text}
        language={language}
        theme={theme as any /* TODO: Fix this any*/}
      >
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre className={`${className} ${css.pre}`} style={{ ...style }}>
            {tokens
              .slice(0, -1) // Remove trailing newline
              .map((line, tokenIndex) => (
                <div {...getLineProps({ line })} key={tokenIndex}>
                  {line.map((token, lineIndex) => (
                    <span {...getTokenProps({ token })} key={lineIndex} />
                  ))}
                </div>
              ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default SyntaxHighlighter;
