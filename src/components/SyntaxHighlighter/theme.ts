import type { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "#fff",
  },
  styles: [
    {
      types: ["cdata", "comment", "doctype", "prolog"],
      style: {
        color: "#77777e",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#93a1a1",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["property", "keyword", "variable", "function", "tag"],
      style: {
        color: "#54a6df",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#ffffb6",
        textDecorationLine: "underline",
      },
    },
    {
      types: ["symbol", "deleted"],
      style: {
        color: "#dc322f",
      },
    },
    {
      types: [
        "attr-name",
        "boolean",
        "builtin",
        "char",
        "constant",
        "inserted",
        "number",
        "selector",
        "string",
        "unit",
      ],
      style: {
        color: "#bfabe7",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#ededed",
      },
    },
    {
      types: ["regex"],
      style: {
        color: "#e9c062",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#fd971f",
      },
    },
    {
      types: ["entity"],
      style: {
        color: "#ffffb6",
      },
    },
    {
      types: ["string"],
      style: {
        color: "#78b997",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important", "url"],
      style: {
        color: "#ce5d8f",
      },
    },
  ],
} as const;

export default theme;
