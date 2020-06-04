import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import ArchiveNotice from 'components/ArchiveNotice'
import SmartLink from 'components/SmartLink'
import {
  PostBase,
  PostCode,
  PostCodeBlock,
  PostHeading,
  PostParagraph,
  PostTitle,
} from './styled'

function Post({ archived, children, title }) {
  return (
    <PostBase>
      {archived && <ArchiveNotice />}

      <PostTitle>{title}</PostTitle>

      <Markdown
        renderers={{
          code: PostCodeBlock,
          heading: PostHeading,
          inlineCode: PostCode,
          link: SmartLink,
          linkReference: SmartLink,
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
  title: PropTypes.string.isRequired,
}

export default Post
