"use client";

import React from "react";

import css from "@/components/SyntaxHighlighter/SyntaxHighlighter.module.css";
import theme from "@/components/SyntaxHighlighter/theme";
import { clsx } from "clsx";
import { Highlight } from "prism-react-renderer";

const displayLanguages = {
  css: "CSS",
  html: "HTML",
  javascript: "JavaScript",
  plain: "Plain Text",
  scss: "SCSS",
  shell: "Shell",
  svg: "SVG",
  tsx: "TSX",
} as const;

function getDisplayLanguage(language: keyof typeof displayLanguages) {
  const displayLanguage = displayLanguages[language];

  if (!displayLanguage) {
    throw new Error(`No display name for language \`${language}\``);
  }

  return displayLanguage;
}

interface SyntaxHighlighterProps extends React.ComponentPropsWithoutRef<"div"> {
  showCopy?: boolean;
}

// https://www.peterlunch.com/blog/prism-react-render-nextjs
function SyntaxHighlighter({
  children,
  showCopy = false,
  ...moreProps
}: SyntaxHighlighterProps) {
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

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div {...moreProps} className={clsx(css.highlighter, "relative")}>
      <div
        className={clsx(css.header, {
          [css.headerCaps]: displayLanguage === displayLanguage.toUpperCase(),
        })}
      >
        {displayLanguage}

        <button
          onClick={copyCode}
          className={clsx(
            "cursor-pointer rounded p-1.5 text-slate-100 transition-colors",
            "hover:bg-gray-600 hover:text-slate-50",
          )}
          title="Copy code"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>

      <Highlight code={text} language={language} theme={theme}>
        {({ getLineProps, getTokenProps, style, tokens }) => (
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
