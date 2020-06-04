import PropTypes from 'prop-types'
import React from 'react'
import {
  CodeBlockBase,
  CodeBlockCode,
  CodeBlockLabel,
  CodeBlockPre,
} from './styled'

function CodeBlock({ value, ...moreProps }) {
  return (
    <CodeBlockBase {...moreProps}>
      <CodeBlockLabel>Example</CodeBlockLabel>

      <CodeBlockPre>
        <CodeBlockCode>{value}</CodeBlockCode>
      </CodeBlockPre>
    </CodeBlockBase>
  )
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
}

export default CodeBlock
