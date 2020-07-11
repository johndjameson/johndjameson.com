import PropTypes from 'prop-types'
import React from 'react'
import { PostOrderedList, PostUnorderedList } from './styled'

function PostList({ children, ordered }) {
  return ordered ? (
    <PostOrderedList>{children}</PostOrderedList>
  ) : (
    <PostUnorderedList>{children}</PostUnorderedList>
  )
}

PostList.propTypes = {
  children: PropTypes.node.isRequired,
  ordered: PropTypes.bool.isRequired,
}

export default PostList
