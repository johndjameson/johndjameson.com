import React from 'react'
import InkUnderline from 'components/InkUnderline'
import PreventOrphan from 'components/PreventOrphan'

import {
  HeroBase,
  HeroContent,
  HeroGlobal,
  HeroGrid,
  HeroHeading,
  HeroImages,
} from './styled'

function ArchiveNotice({ children }) {
  return (
    <>
      <HeroGlobal />

      <HeroBase>
        <HeroGrid>
          <HeroImages>
            <img alt='Summer of ’rona' src='https://placehold.it/402x489' />
          </HeroImages>

          <HeroContent>
            <HeroHeading>Front-end Engineer</HeroHeading>

            <p>
              Hello, I’m{' '}
              <InkUnderline as='strong'>John D. Jameson</InkUnderline>.
            </p>

            <PreventOrphan as='p'>
              I’m passionate about building highly polished design systems and
              user experiences with special attention given to architecture,
              component libraries, rendering performance, and typography.
            </PreventOrphan>

            <PreventOrphan as='p'>
              Raised in Miami, today you can find me coding away at Rooster
              Teeth in Austin, pretending I’m not an escaped Florida Man on the
              loose.
            </PreventOrphan>
          </HeroContent>
        </HeroGrid>
      </HeroBase>
    </>
  )
}

export default ArchiveNotice
