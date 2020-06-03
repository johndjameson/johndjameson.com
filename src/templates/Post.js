import React from 'react'
import { Head, useRouteData } from 'react-static'
import { Link } from '@reach/router'
import Markdown from 'react-markdown'

function Post({ children }) {
  const { post } = useRouteData()

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <article>
        <Link to='/blog'>Back</Link>
        <h1>{post.title}</h1>
        <Markdown source={post.content} />
      </article>
    </>
  )
}

export default Post
