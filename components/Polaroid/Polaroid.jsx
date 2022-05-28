import PropTypes from 'prop-types';
import React from 'react';
import { PolaroidBase, PolaroidFrame, PolaroidImage } from './styled';
import { imageKitUrl } from 'helpers/imageKitUrl';

function Polaroid({ alt, className, ...moreProps }) {
  return (
    <PolaroidBase className={className}>
      <PolaroidImage alt={alt} {...moreProps} />
      <PolaroidFrame
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
  );
}

Polaroid.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Polaroid;
