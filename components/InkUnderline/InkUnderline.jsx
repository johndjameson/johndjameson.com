import React from 'react'
import { InkUnderlineBase, InkUnderlineSvg } from './styled'

function InkUnderline({ as, children, className, highlight }) {
  return (
    <InkUnderlineBase as={as} className={className}>
      {children}
      <InkUnderlineSvg highlight={highlight}>
        <path d='M1.697 6.955c.4 0 1.42.7 1.01-.71-.2-.88.81-1.93 2.23-2.29 2.62-.87 5.46-1.05 8.29-1.58 3.43-.53 7.08-.35 10.72-.53 2.22 0 4.45-.35 6.47-.35 1.41-.18 2.63 0 4.04-.35.41 0 .81-.18 1.01.35 0 0 .81 1.06.61-.35 0-.53 1.01-.18 1.62-.18 0-.17.6-.53.4.18-.2.53.41.53.81.35 1.01-.7 1.01-.35 2.02-.53 1.02-.17 2.43.88 3.04-.53.4.36 1.01 0 1.41 0 3.04.36 6.07.18 9.31.36h.4c1.82 1.4 4.45.7 6.47 1.4.81.36 1.82-.35 2.63.18.61.18 1.22 0 1.82-.18.61-.35.81.36 1.01.71.21-.18.21-.53.61-.35 2.02.17 4.04-.36 6.07-.36 1.21-.17 1.82.53 1.82 1.41 0 .88.4 1.59 1.41 1.76 1.22.18 1.22 1.24 1.01 1.76-.4 1.06-.8 2.11-1.21 3.35-.2.88-1.42 1.58-2.63 1.58-.2 0-.61.18-.81-.17-.2-.35.2-.35.61-.53.61-.35.4-.53-.2-.71-3.04-.7-6.07-.88-9.1-.88h-2.63c-.41 0-.61 0-1.02.18-.6.7-1.61.35-2.42.35-5.06-.53-9.91 0-14.76.71-4.05.53-8.1.53-11.94-.71-1.62-.35-3.23 0-4.85 0-1.21 0-2.23-.35-3.44 0-.2 0-.6 0-.6-.35 0-.18 0-.53-.21-.18-.4.88-1.21.71-1.82.71-4.65 0-9.1.53-13.55.7-.6 0-.6.36-.81.71-.81.7-1.82.88-2.22.17-.81-1.23-2.02-1.76-3.03-2.64-.41-.18-.81-.53-1.02-1.05-.4-1.24 0-1.59 1.42-1.41zm24.07 2.99H26.367c-.2-.18-.2-.18-.4-.18 0 0-.2 0-.2.18zm7.88-8.27l.2.17.01-.17h-.21zm1.01.17c.21 0 .41 0 .41-.17.2-.18 0-.18-.2-.18-.21 0-.21 0-.41.18-.2.17 0 .17.2.17zm5.06-.35c0-.18.2-.18.2-.18 0-.17 0-.17-.2-.17 0 0 0 .17-.2.17.2 0 .2 0 .2.18zm26.9 1.59c.2 0 .4 0 .4-.18h-.4c-.2.18-.41 0-.41.18.21.17.41.17.41 0zm9.3 4.04h-.2v.18c.2 0 .2 0 .2-.18z' />
      </InkUnderlineSvg>
    </InkUnderlineBase>
  )
}

export default InkUnderline
