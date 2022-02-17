import React from 'react'
import { imageKitUrl } from 'common/helpers'
import InkUnderline from 'components/InkUnderline'
import PreventOrphan from 'components/PreventOrphan'
import {
  HeroBase,
  HeroContent,
  HeroGlobal,
  HeroGrid,
  HeroHalloweeen,
  HeroHeading,
  HeroImages,
  HeroSummer,
} from './styled'

function ArchiveNotice({ children }) {
  return (
    <>
      <HeroGlobal />

      <HeroBase>
        <HeroGrid>
          <HeroImages>
            <HeroSummer
              alt='Summer of ’rona'
              src2x={imageKitUrl({ path: 'polaroid-summer-square.jpg', transformations: { w: 290, dpr: 2 }, })}
              src={imageKitUrl({ path: 'polaroid-summer-square.jpg', transformations: { w: 290 }, })}
            />
            <HeroHalloweeen
              alt='Summer of ’rona'
              src2x={imageKitUrl({ path: 'polaroid-halloween-square.jpg', transformations: { w: 290, dpr: 2 }, })}
              src={imageKitUrl({ path: 'polaroid-halloween-square.jpg', transformations: { w: 290 }, })}
            />
          </HeroImages>

          <HeroContent>
            <HeroHeading>Front-end Engineer</HeroHeading>

            <p>
              Hello, I’m{' '}
              <InkUnderline as='strong' highlight>
                John D. Jameson
              </InkUnderline>
              .
            </p>

            <PreventOrphan as='p'>
              I’m passionate about building highly polished design systems and
              user experiences with special attention given to architecture,
              component libraries, rendering performance, and typography.
            </PreventOrphan>

            <PreventOrphan as='p'>
              Raised in Miami, today you can find me coding away at Sips by in Austin, pretending I’m not an escaped Florida Man on the
              loose.
            </PreventOrphan>
          </HeroContent>
        </HeroGrid>
      </HeroBase>
    </>
  )
}

export default ArchiveNotice
