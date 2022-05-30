import InkUnderline from 'components/InkUnderline/InkUnderline';
import PreventOrphan from 'components/PreventOrphan/PreventOrphan';
import React from 'react';
import {
  HeroBase,
  HeroContent,
  HeroGrid,
  HeroHalloweeen,
  HeroHeading,
  HeroImages,
  HeroSummer,
} from './Hero.styled';
import { ThemeModeContext } from 'styles/theme-mode';
import { imageKitUrl } from 'helpers/imageKitUrl';
import { useContext } from 'react';

function Hero() {
  const themeState = useContext(ThemeModeContext);

  return (
    <HeroBase>
      <HeroGrid>
        <HeroImages>
          <HeroSummer
            alt="Summer of ’rona"
            src2x={imageKitUrl({
              path: 'polaroid-summer-square.jpg',
              transformations: { w: 290, dpr: 2 },
            })}
            src={imageKitUrl({
              path: 'polaroid-summer-square.jpg',
              transformations: { w: 290 },
            })}
          />
          <HeroHalloweeen
            alt="Summer of ’rona"
            src2x={imageKitUrl({
              path: 'polaroid-halloween-square.jpg',
              transformations: { w: 290, dpr: 2 },
            })}
            src={imageKitUrl({
              path: 'polaroid-halloween-square.jpg',
              transformations: { w: 290 },
            })}
          />
        </HeroImages>

        <HeroContent>
          <HeroHeading>Front-end Engineer</HeroHeading>

          <p>
            Hello, I’m{' '}
            <InkUnderline
              accentColor={themeState.isLight ? '#bf645f' : '#9c84c1'}
              as="strong"
            >
              John D. Jameson
            </InkUnderline>
            .
          </p>

          <PreventOrphan as="p">
            I work with teams to build inclusive digital products and nerd out
            about design systems, CSS architecture, page speed performance,
            React, and web typography.
          </PreventOrphan>

          <PreventOrphan as="p">
            Originally raised in Miami, today you can find me coding away in
            Austin and pretending I’m not an escaped Florida Man on the loose.
          </PreventOrphan>
        </HeroContent>
      </HeroGrid>
    </HeroBase>
  );
}

export default Hero;
