import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

function Blog() {
  const { posts } = useRouteData()

  return (
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
  )
}

export default Blog