import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function PreventOrphan({ as: Tag, children: string, ...moreProps }) {
  const spaceIndex = string.lastIndexOf(' ')

  return spaceIndex >= 0 ? (
    <Tag {...moreProps}>
      {string.substr(0, spaceIndex)}&nbsp;{string.substr(spaceIndex + 1)}
    </Tag>
  ) : (
    <Tag {...moreProps}>{string}</Tag>
  )
}

PreventOrphan.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.string.isRequired,
}

PreventOrphan.defaultProps = {
  as: Fragment,
}

export default PreventOrphan
