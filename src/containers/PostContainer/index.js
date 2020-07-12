import React from 'react'
import { useRouteData } from 'react-static'
import MetaDescription from 'components/MetaDescription'
import Post from 'components/Post'
import Title from 'components/Title'

function PostContainer() {
  const { post } = useRouteData()

  return (
    <>
      <Title>{post.title}</Title>
      <MetaDescription>{post.description}</MetaDescription>
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
