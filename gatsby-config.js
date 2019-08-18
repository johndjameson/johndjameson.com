module.exports = {
  siteMetadata: {
    title: `John D. Jameson`,
    description: `Web typography and front-end development. Senior UI Engineer at Rooster Teeth in Austin, TX.`,
    author: `@johndjameson`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 600,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#663399`,
      },
    },
  ],
}
