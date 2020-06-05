import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import ArchiveNotice from 'components/ArchiveNotice'
import SmartLink from 'components/SmartLink'
import PostList from './PostList'
import {
  PostBase,
  PostCode,
  PostCodeBlock,
  PostDescription,
  PostHeading,
  PostImage,
  PostListItem,
  PostParagraph,
  PostTitle,
} from './styled'

function Post({ archived, children, description, title }) {
  return (
    <PostBase>
      {archived && <ArchiveNotice />}

      <PostTitle>{title}</PostTitle>

      {description && <PostDescription>{description}</PostDescription>}

      <Markdown
        renderers={{
          code: PostCodeBlock,
          heading: PostHeading,
          image: PostImage,
          inlineCode: PostCode,
          link: SmartLink,
          linkReference: SmartLink,
          list: PostList,
          listItem: PostListItem,
          paragraph: PostParagraph,
        }}
        source={children}
      />
    </PostBase>
  )
}

Post.propTypes = {
  archived: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Post
