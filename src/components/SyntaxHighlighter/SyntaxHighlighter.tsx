"use client";

import { Highlight } from "prism-react-renderer";
import clsx from "clsx";
import theme from "@/components/SyntaxHighlighter/theme";
import css from "@/components/SyntaxHighlighter/SyntaxHighlighter.module.css";

const displayLanguages = {
  css: "CSS",
  html: "HTML",
  javascript: "JavaScript",
  plain: "Plain Text",
  scss: "SCSS",
  shell: "Shell",
  svg: "SVG",
} as const;

function getDisplayLanguage(language: keyof typeof displayLanguages) {
  const displayLanguage = displayLanguages[language];

  if (!displayLanguage) {
    throw new Error(`No display name for language \`${language}\``);
  }

  return displayLanguage;
}

interface SyntaxHighlighterProps
  extends React.ComponentPropsWithoutRef<"div"> {}

// https://www.peterlunch.com/blog/prism-react-render-nextjs
function SyntaxHighlighter({ children, ...moreProps }: SyntaxHighlighterProps) {
  if (!children) {
    return null;
  }

  const codeProps = (children as any).props; // TODO: Fix this any

  const language = codeProps.className?.includes("language-")
    ? codeProps.className
        .split(" ")
        .find((str: string) => str.startsWith("language-"))
        .replace("language-", "")
    : "plain";
  const text = codeProps.children;

  const displayLanguage = getDisplayLanguage(language);

  return (
    <div {...moreProps} className={css.highlighter}>
      <div
        className={clsx(css.header, {
          [css.headerCaps]: displayLanguage === displayLanguage.toUpperCase(),
        })}
      >
        {displayLanguage}
      </div>

      <Highlight
        code={text}
        language={language}
        theme={theme as any /* TODO: Fix this any*/}
      >
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre className={clsx(css.pre)} style={{ ...style }}>
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
