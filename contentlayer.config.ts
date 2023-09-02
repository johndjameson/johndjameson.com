import { defineDocumentType, makeSource } from "contentlayer/source-files";

const publications = {
  "code-school": "Code School",
  "css-tricks": "CSS-Tricks",
} as const;

export const ExternalPost = defineDocumentType(() => ({
  name: "ExternalPost",
  filePathPattern: `external-posts/*.md`,
  contentType: "mdx",
  fields: {
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    publication: {
      type: "enum",
      options: Object.keys(publications),
      required: true,
    },
    title: { type: "string", required: true },
    url: { type: "string", required: true },
  },
  computedFields: {
    publicationDisplayName: {
      type: "string",
      resolve: (post) => {
        if (publications[post.publication]) {
          return publications[post.publication];
        }

        // Log error message for bad data Contentlayer allows silently
        throw new Error(
          `\`${post.publication}\` is not an enumerated publication`
        );
      },
    },
  },
}));

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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [ExternalPost, Post],
});
