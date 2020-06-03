import fs from 'fs'
import klaw from 'klaw'
import matter from 'gray-matter'
import path from 'path'
import slugify from 'slugify'

function getPosts(filePath) {
  const posts = []

  return new Promise(resolve => {
    if (fs.existsSync(`./src/${filePath}`)) {
      klaw(`./src/${filePath}`)
        .on('data', file => {
          if (['.md', '.mdx'].includes(path.extname(file.path))) {
            const {
              content,
              data: { date, title },
            } = matter.read(file.path)

            posts.push({
              content,
              date,
              slug: slugify(title, { lower: true }),
              title,
            })
          }
        })
        .on('error', console.log)
        .on('end', () => {
          resolve(posts)
        })
    } else {
      resolve(posts)
    }
  })
}

export default {
  getRoutes: async () => {
    const posts = await getPosts('posts')

    return [
      {
        children: posts.map(post => ({
          getData: () => ({ post }),
          path: `/${post.slug}`,
          template: 'src/templates/Post',
        })),
        getData: () => ({
          posts: posts.map(post => {
            delete post.content
            return post
          }),
        }),
        path: '/blog',
      },
    ]
  },
  plugins: [
    'react-static-plugin-mdx',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      { location: path.resolve('./src/pages') },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
