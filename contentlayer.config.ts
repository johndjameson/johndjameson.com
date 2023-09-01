import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    archived: { type: "boolean" },
    date: { type: "date", required: true },
    development: { type: "boolean" },
    description: { type: "string", required: true },
    title: { type: "string", required: true },
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

export default makeSource({ contentDirPath: "content", documentTypes: [Post] });
