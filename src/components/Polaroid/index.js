import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PolaroidBase } from './styled'

function Polaroid(props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <PolaroidBase loaded={loaded} onLoad={() => setLoaded(true)} {...props} />
  )
}

Polaroid.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Polaroid
