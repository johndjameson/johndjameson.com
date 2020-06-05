import PropTypes from 'prop-types'
import React from 'react'
import CodePen from 'components/CodePen'
import { PostKeyboard } from './styled'

function PostHtml({ element: { props, type } }) {
  if (type === 'codepen') {
    return (
      <CodePen
        height={Number(props.height)}
        id={props.id}
        title={props.title}
      />
    )
  }

  if (type === 'kbd') {
    return <PostKeyboard>{props.children}</PostKeyboard>
  }

  return '❌'
}

PostHtml.propTypes = {
  element: PropTypes.shape({
    props: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostHtml
