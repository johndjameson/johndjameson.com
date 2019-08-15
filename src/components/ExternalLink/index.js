/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'

function ExternalLink(props) {
  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default ExternalLink
