import Markdown from 'react-markdown/with-html'
import PropTypes from 'prop-types'
import React from 'react'
import ArchiveNotice from 'components/ArchiveNotice'
import PostHtml from './PostHtml'
import PostList from './PostList'
import {
  PostBase,
  PostCode,
  PostCodeBlock,
  PostDescription,
  PostHeading,
  PostImage,
  PostLink,
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
        escapeHtml={false}
        renderers={{
          code: PostCodeBlock,
          heading: PostHeading,
          image: PostImage,
          inlineCode: PostCode,
          link: PostLink,
          linkReference: PostLink,
          list: PostList,
          listItem: PostListItem,
          paragraph: PostParagraph,
          parsedHtml: PostHtml,
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
