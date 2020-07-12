import styled from 'styled-components'
import { rgba } from 'polished'
import Image from 'components/Image'

const bgColor = '#161616'

export const PolaroidBase = styled(Image)`
  box-shadow: 0 4px 10px ${rgba(bgColor, 0.2)};
`
