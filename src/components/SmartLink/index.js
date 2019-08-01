/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ExternalLink from 'components/ExternalLink'

function SmartLink({ href, ...rest }) {
  return href.startsWith('http') ? (
    <ExternalLink href={href} {...rest} />
  ) : (
    <Link to={href} {...rest} />
  )
}

SmartLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default SmartLink
