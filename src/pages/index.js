import React from 'react'
import { Link } from 'gatsby'
import ExternalLink from 'components/ExternalLink'
import Layout from 'components/layout'
import SEO from 'components/seo'

import manicule from 'images/manicule.svg'
import typeSpecimens from 'images/type-specimens.jpg'
import typeStudies from 'images/type-studies.png'
import webTypography from 'images/web-typography.svg'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <main role='main'>
      <section className='row bc-black c-white'>
        <div className='cell well well--2 well--4_m'>
          <p className='mbs tsi tsl tac tal_m'>
            John D. Jameson <span className='c-red'>(me)</span> presents
            a&nbsp;bunch&nbsp;of&nbsp;things&nbsp;about
          </p>
          <h1 className='srt'>Web Typography</h1>
          <img
            alt=''
            className='mv-heroTitle mbs w100p'
            height='65'
            src={webTypography}
            width='975'
          />
          <p className='mbf tac tar_m tsi tsl'>
            Because he’s a nerd{' '}
            <span className='c-red'>
              (and&nbsp;maybe&nbsp;you&nbsp;are,&nbsp;too)
            </span>
          </p>
        </div>
      </section>
      <section className='row'>
        <div className='cell well well--l mbf'>
          <div className='mv-strikeAround mbl'>
            <h2 className='heading--uppercase'>Projects</h2>
          </div>
          <div className='mv-g has-cropHeight'>
            <div className='mv-g-b mv-g-b--3of5_m mbm mbf--m'>
              <ExternalLink className='db' href='https://typestudies.com'>
                <p className='srt'>Type Specimens</p>
                <img
                  alt=''
                  className='mv-thumbnail'
                  height='365'
                  src={typeStudies}
                  width='584'
                />
              </ExternalLink>
            </div>
            <div className='mv-g-b mv-g-b--2of5_m has-cropHeight'>
              <ExternalLink
                className='mv-cropHeight_m mv-thumbnail'
                href='https://typespecimens.io'
              >
                <p className='srt'>Type Studies</p>
                <img
                  alt=''
                  className='mv-thumbnail-media w100p'
                  height='404'
                  src={typeSpecimens}
                  width='366'
                />
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
      <section className='row mbm--m'>
        <div className='cell well well--l'>
          <div className='mv-strikeAround mbl'>
            <h2 className='heading--uppercase'>Blog Posts</h2>
          </div>
          <div className='mv-g'>
            <div className='mv-g-b mv-g-b--3of5_m mbl_M'>
              <h3 className='heading heading--2'>Latest Post</h3>
              <div className='has-manicule mbl'>
                <div className='mv-manicule dn_1180'>
                  <img alt='' className='mv-manicule-image' src={manicule} />
                  <p className='mv-manicule-text'>New</p>
                </div>
                <Link
                  className='link link--underlined'
                  to='/blog/styling-fallback-fonts-with-sass'
                >
                  Styling Fallback Fonts with Sass
                </Link>
                <time className='db mbs tsi tss'>June 14, 2016</time>
                <p className='mbs'>
                  One of the pain points of loading fonts asynchronously is
                  writing convoluted CSS for fallback styles. Fortunately, Sass
                  can make it easier to achieve great-looking web typography
                  before a site’s fonts finish loading.
                </p>
                <Link
                  className='link link--underlined link--underlined--s tss'
                  to='/blog/styling-fallback-fonts-with-sass'
                >
                  Continue Reading
                </Link>
              </div>
              <h3 className='heading heading--2'>More Posts</h3>
              <ul className='list'>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/sidebearings-and-alignment'
                      >
                        Sidebearings &amp; Alignment
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>September 30, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/making-sense-of-ch-units'
                      >
                        Making Sense of Ch Units
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>September 16, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/kerning-and-ligatures-in-letterspaced-type'
                      >
                        Kerning &amp; Ligatures in Letterspaced Type
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>September 01, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/guidelines-for-letterspacing-type'
                      >
                        Guidelines for Letterspacing Type
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>August 18, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/typographic-units-in-css'
                      >
                        Typographic Units in CSS
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>August 05, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/data-attributes-for-keyboard-shortcuts'
                      >
                        Data Attributes for Keyboard Shortcuts
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>March 16, 2015</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/filtering-google-results-with-alfred'
                      >
                        Filtering Google Results with Alfred
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>August 20, 2014</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/updating-your-shell-with-homebrew'
                      >
                        Updating Your Shell with Homebrew
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>July 21, 2014</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/using-emmet-with-sublime-text'
                      >
                        Using Emmet with Sublime Text
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>April 28, 2014</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/ampersands-and-google-fonts'
                      >
                        Ampersands &amp; Google Fonts
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>March 08, 2014</time>
                    </div>
                  </div>
                </li>
                <li className='list-item'>
                  <div className='mv-g mv-g--centered'>
                    <div className='mv-g-b mv-g-b--2of3_m'>
                      <Link
                        className='link link--underlined'
                        to='/blog/responsive-sidenotes'
                      >
                        Responsive Sidenotes
                      </Link>
                    </div>
                    <div className='mv-g-b mv-g-b--1of3_m'>
                      <time className='tsi tss'>January 27, 2014</time>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='mv-g-b mv-g-b--2of5_m'>
              <h3 className='heading heading--2'>Interviews</h3>
              <ul className='list mbm'>
                <li className='list-item'>
                  <p className='mbf'>
                    <ExternalLink
                      className='link link--underlined'
                      href='https://medium.com/type-thursday/type-specimens-on-the-web-59a4335c1a3'
                    >
                      Type Specimens on the Web
                    </ExternalLink>
                  </p>
                  <time className='tsi tss'>October 8, 2016</time>
                </li>
              </ul>
              <h3 className='heading heading--2'>CSS-Tricks</h3>
              <ul className='list mbm'>
                <li className='list-item'>
                  <p className='mbf'>
                    <ExternalLink
                      className='link link--underlined'
                      href='https://css-tricks.com/styling-underlines-web'
                    >
                      Styling Underlines on the Web
                    </ExternalLink>
                  </p>
                  <time className='tsi tss'>October 10, 2016</time>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
