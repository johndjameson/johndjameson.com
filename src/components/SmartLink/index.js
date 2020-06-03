import React from 'react'
import { Link } from '@reach/router'

function SmartLink(props) {
  const { href, ...moreProps } = props

  return href.startsWith('http') ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a target='_blank' rel='noopener noreferrer' {...props} />
  ) : (
    <Link to={href} {...moreProps} />
  )
}

export default SmartLink
