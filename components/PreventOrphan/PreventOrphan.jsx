import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function PreventOrphan({ as: Tag, children, limit, ...moreProps }) {
  if (typeof children !== 'string') {
    return children;
  }

  const str = children;

  const words = str.split(' ');

  if (words.length < 4) {
    return <Tag {...moreProps}>{str}</Tag>;
  }

  const joinedWordsLength =
    words[words.length - 1].length + 1 + words[words.length - 2].length;

  if (joinedWordsLength > limit) {
    return <Tag {...moreProps}>{str}</Tag>;
  }

  const spaceIndex = str.lastIndexOf(' ');

  return (
    <Tag {...moreProps}>
      {str.substring(0, spaceIndex)}&nbsp;{str.substring(spaceIndex + 1)}
    </Tag>
  );
}

PreventOrphan.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};

PreventOrphan.defaultProps = {
  as: Fragment,
  limit: 14,
};

export default PreventOrphan;
