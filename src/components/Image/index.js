import React from 'react'
import PropTypes from 'prop-types'

function Image({ alt, src, src2x, webpSrc, webpSrc2x, ...moreProps }) {
  const imgProps = {}
  const webpProps = {}

  if (src2x) {
    imgProps.srcSet = `${src}, ${src2x} 2x`
  }

  if (!webpSrc) {
    return <img alt={alt} src={src} {...imgProps} {...moreProps} />
  }

  webpProps.srcSet = webpSrc2x ? `${webpSrc}, ${webpSrc2x} 2x` : webpSrc

  return (
    <picture>
      <source type='image/webp' {...webpProps} />
      <img alt={alt} src={src} {...imgProps} {...moreProps} />
    </picture>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  src2x: PropTypes.string,
  src: PropTypes.string.isRequired,
  webpSrc2x: PropTypes.string,
  webpSrc: PropTypes.string,
}

Image.defaultProps = {
  alt: '',
}

export default Image
