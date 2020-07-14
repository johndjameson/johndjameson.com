import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { imageKitUrl } from 'common/helpers'
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
        src2x={imageKitUrl({
          path: 'polaroid-600.png',
          transformations: { w: 670, dpr: 2 },
        })}
        src={imageKitUrl({
          path: 'polaroid-600.png',
          transformations: { w: 670 },
        })}
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
