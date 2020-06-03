import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import Markdown from 'react-markdown'
import Title from 'components/Title'

function Post({ children }) {
  const { post } = useRouteData()

  return (
    <>
      <Title>{post.title}</Title>

      <article>
        <Link to='/blog'>Back</Link>
        <h1>{post.title}</h1>
        <Markdown source={post.content} />
      </article>
    </>
  )
}

export default Post
