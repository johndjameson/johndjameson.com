import React from 'react'
import { Head, useRouteData } from 'react-static'
import { Link } from '@reach/router'

function Blog() {
  const { posts } = useRouteData()

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <div>
        <h1>It's blog time.</h1>

        <h2>All Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blog
