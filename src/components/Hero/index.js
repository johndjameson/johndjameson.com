import React from 'react'
import InkUnderline from 'components/InkUnderline'
import PreventOrphan from 'components/PreventOrphan'
import polaroidHalloween from 'assets/polaroid-halloween.jpg'
import polaroidHalloween2x from 'assets/polaroid-halloween@2x.jpg'
import polaroidHalloweenWebp from 'assets/polaroid-halloween.webp'
import polaroidHalloweenWebp2x from 'assets/polaroid-halloween@2x.webp'
import polaroidSummer from 'assets/polaroid-summer.jpg'
import polaroidSummer2x from 'assets/polaroid-summer@2x.jpg'
import polaroidSummerWebp from 'assets/polaroid-summer.webp'
import polaroidSummerWebp2x from 'assets/polaroid-summer@2x.webp'
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
              src2x={polaroidSummer2x}
              src={polaroidSummer}
              webpSrc2x={polaroidSummerWebp2x}
              webpSrc={polaroidSummerWebp}
            />
            <HeroHalloweeen
              alt='Halloween 2019'
              src2x={polaroidHalloween2x}
              src={polaroidHalloween}
              webpSrc2x={polaroidHalloweenWebp2x}
              webpSrc={polaroidHalloweenWebp}
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
