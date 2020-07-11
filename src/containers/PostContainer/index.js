import React from 'react'
import { useRouteData } from 'react-static'
import Post from 'components/Post'
import Title from 'components/Title'

function PostContainer() {
  const { post } = useRouteData()

  return (
    <>
      <Title>{post.title}</Title>
      <Post
        archived={post.archived}
        date={post.date}
        description={post.description}
        title={post.title}
      >
        {post.content}
      </Post>
    </>
  )
}

export default PostContainer
