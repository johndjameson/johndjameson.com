import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Iframe = styled(({ height, title, ...rest }) => (
  <iframe title={title} {...rest} />
))`
  border: 0;
  height: ${props => props.height}px;
  width: 100%;
`

function CodePen({ height, id, tabs, theme, title, user, version }) {
  const parameters = new URLSearchParams()

  parameters.set('default-tab', tabs)
  parameters.set('embed-version', version)
  parameters.set('theme-id', theme)

  return (
    <Iframe
      className='codepen'
      height={height}
      scrolling='no'
      src={`https://codepen.io/${user}/embed/${id}/?${parameters.toString()}`}
      title={title}
    />
  )
}

CodePen.propTypes = {
  height: PropTypes.number,
  id: PropTypes.string.isRequired,
  tabs: PropTypes.string,
  theme: PropTypes.number,
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  version: PropTypes.number,
}

CodePen.defaultProps = {
  height: 400,
  tabs: 'results',
  theme: 23596,
  user: 'johndjameson',
  version: 2,
}

export default CodePen
