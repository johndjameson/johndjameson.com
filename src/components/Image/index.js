/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'

function Image(props) {
  return <img {...props} />
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  loading: PropTypes.oneOf(['auto', 'eager', 'lazy']),
  src: PropTypes.string.isRequired,
}

Image.defaultProps = {
  loading: 'lazy',
}

export default Image
