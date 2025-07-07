import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { publications } from "./src/constants/publications";

const publicationField = {
  type: "enum",
  options: Object.keys(publications),
} as const;

export const ExternalPost = defineDocumentType(() => ({
  name: "ExternalPost",
  filePathPattern: "external-posts/*.md",
  contentType: "mdx",
  fields: {
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    publication: {
      ...publicationField,
      required: true,
    },
    title: { type: "string", required: true },
    url: { type: "string", required: true },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    archived: { type: "boolean" },
    date: { type: "date", required: true },
    development: { type: "boolean" },
    description: { type: "string", required: true },
    publication: publicationField,
    title: { type: "string", required: true },
    titleSize: { type: "number" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
    },
    url: {
      type: "string",
      resolve: (post) =>
        `/posts/${post._raw.sourceFileName.replace(".mdx", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ExternalPost, Post],
});
