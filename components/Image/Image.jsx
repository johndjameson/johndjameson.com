import React from 'react';
import PropTypes from 'prop-types';

function Image({ alt, src, src2x, ...moreProps }) {
  const imgProps = {};

  if (src2x) {
    imgProps.srcSet = `${src}, ${src2x} 2x`;
  }

  return (
    <img
      alt={alt}
      src={src}
      {...imgProps}
      {...moreProps}
    />
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src2x: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
