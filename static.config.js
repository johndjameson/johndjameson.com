import fs from 'fs'
import klaw from 'klaw'
import matter from 'gray-matter'
import path from 'path'
import slugify from 'slugify'

function getPosts(filePath) {
  console.clear()
  const posts = []

  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync(`./src/${filePath}`)) {
        klaw(`./src/${filePath}`)
          .on('data', file => {
            if (
              path.extname(file.path) === '.md' ||
              path.extname(file.path) === '.mdx'
            ) {
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

  return getFiles()
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
        getData: () => ({ posts }),
        path: '/blog',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      { location: path.resolve('./src/pages') },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
