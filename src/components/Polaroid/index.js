import PropTypes from 'prop-types'
import React from 'react'
import { PolaroidBase } from './styled'

function Polaroid({ alt, className, src }) {
  return <PolaroidBase alt={alt} className={className} src={src} />
}

Polaroid.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Polaroid
