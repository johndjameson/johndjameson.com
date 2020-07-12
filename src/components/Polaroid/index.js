import PropTypes from 'prop-types'
import React from 'react'
import { PolaroidBase } from './styled'

function Polaroid(props) {
  return <PolaroidBase {...props} />
}

Polaroid.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Polaroid
