import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PolaroidBase, PolaroidFrame, PolaroidImage } from './styled'

function Polaroid({ alt, className, ...moreProps }) {
  const [frameLoaded, setFrameLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <PolaroidBase className={className} loaded={frameLoaded && imageLoaded}>
      <PolaroidImage
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        {...moreProps}
      />
      <PolaroidFrame
        onLoad={() => setFrameLoaded(true)}
        src2x='https://ik.imagekit.io/johndjameson/tr:f-auto,w-335,dpr-2/johndjameson/polaroid-600.png'
        src='https://ik.imagekit.io/johndjameson/tr:f-auto,w-335/johndjameson/polaroid-600.png'
      />
    </PolaroidBase>
  )
}

Polaroid.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Polaroid
