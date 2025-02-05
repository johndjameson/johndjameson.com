"use client";

import React from "react";

import css from "@/components/SyntaxHighlighter/SyntaxHighlighter.module.css";
import theme from "@/components/SyntaxHighlighter/theme";
import clsx from "clsx";
import { Highlight } from "prism-react-renderer";

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
  if (!React.isValidElement(children)) {
    return null;
  }

  // biome-ignore lint/suspicious/noExplicitAny: TODO: Fix this any
  const codeProps = children.props as any;

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

      <Highlight code={text} language={language} theme={theme}>
        {({ className, getLineProps, getTokenProps, style, tokens }) => (
          <pre className={clsx(css.pre)} style={{ ...style }}>
            {tokens
              .slice(0, -1) // Remove trailing newline
              .map((line, tokenIndex) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: It’s fine
                <div {...getLineProps({ line })} key={tokenIndex}>
                  {line.map((token, lineIndex) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: It’s fine too
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
