import PropTypes from 'prop-types'
import React from 'react'
import PreventOrphan from 'components/PreventOrphan'

import { ArchiveNoticeBase } from './styled'

function ArchiveNotice({ className, children }) {
  return (
    <ArchiveNoticeBase className={className}>
      <PreventOrphan>{children}</PreventOrphan>
    </ArchiveNoticeBase>
  )
}

ArchiveNotice.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ArchiveNotice.defaultProps = {
  children:
    'This post is out of date and has been archived. Don’t say I didn’t warn you!',
}

export default ArchiveNotice
