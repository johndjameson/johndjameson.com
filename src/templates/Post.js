import React from 'react'
import { useRouteData } from 'react-static'
import Markdown from 'react-markdown'
import ArchiveNotice from 'components/ArchiveNotice'
import SmartLink from 'components/SmartLink'
import Title from 'components/Title'

function Post({ children }) {
  const { post } = useRouteData()

  return (
    <>
      <Title>{post.title}</Title>

      <article>
        {post.archived && <ArchiveNotice />}

        <h1>{post.title}</h1>

        <Markdown
          renderers={{ link: SmartLink, linkReference: SmartLink }}
          source={post.content}
        />
      </article>
    </>
  )
}

export default Post
