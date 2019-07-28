import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const ResponsiveSidenotes = () => (
  <Layout>
    <SEO title='Responsive Sidenotes' />

    <article class='row'>
      <section class='cell well well--l'>
        <div class='mv-g mv-g--centered_l'>
          <div class='mv-g-b mv-g-b--4of5_m mv-g-b--5of5_l'>
            <h1 class='title tac_l'>Styling Fallback Fonts with&nbsp;Sass</h1>
          </div>
        </div>
        <div class='mv-g mv-g--centered_l'>
          <div class='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
            <div class='mbm mbl_l tw7'>
              One of the pain points of loading fonts asynchronously is writing
              convoluted CSS for fallback styles. Fortunately, Sass can make it
              easier to achieve great-looking web typography before a site’s
              fonts finish&nbsp;loading.
            </div>
          </div>
        </div>
        <div class='article'>
          <div class='mv-g mv-g--centered_l'>
            <div class='mv-g-b mv-g-b--4of5_m mv-g-b--3of5_l'>
              <p>
                If you’ve ever read a blog post about loading web fonts
                asynchronously for performance, you’ve probably encountered CSS
                like this before:
              </p>
              <div class='highlight'>
                <pre class='syntax css'>
                  {`html {
  font-family: 'Arial', sans-serif;
}

html.wf-active {
  font-family: 'Source Sans Pro', 'Arial', sans-serif;;
}`}
                </pre>
              </div>
              <p>
                Look familiar? In that example, I’m using the{' '}
                <a href='https://github.com/typekit/webfontloader'>
                  Web Font Loader
                </a>{' '}
                to load Source Sans Pro via JavaScript. When the fonts finish
                downloading, the library adds a <code>wf-active</code> class to
                the <code>html</code> element. Then the font family switches
                from Arial to Source Sans Pro — or from <em>fallback font</em>{' '}
                to <em>web font</em>.
              </p>
              <p>
                Unfortunately, most web fonts don’t have ideal system font
                equivalents. To soften the janky reflow when switching fonts,
                you’ll need to fine-tune the fallback family’s size and other
                properties.
              </p>
              <p>
                Arial is bigger than Source Sans Pro, so in this example, I
                reduced its font size to <code>20px</code> to match Source Sans
                Pro at <code>21px</code>. To compensate for the decrease in font
                size, I also <em>increased</em> Arial’s line height.
              </p>
              <div class='highlight'>
                <pre class='syntax css'>
                  {`html {
  font-family: 'Arial', sans-serif;
  font-size: 20px;
  line-height: 1.45;
}

html.wf-active {
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-size: 21px;
  line-height: 1.35;
}`}
                </pre>
              </div>
              <p>
                Here, I wrote two selectors: <code>html</code> and{' '}
                <code>html.wf-active</code>. It’s a pretty intuitive for
                properties inherited from the <code>html</code> element, but
                relying on a similar approach elsewhere will introduce a couple
                maintenance problems throughout the CSS.
              </p>
              <p>
                Let’s go over the issues one by one and I’ll show you ways to
                use Sass to clean things up.
              </p>
              <h2 id='nest-with-the-ampersand-selector'>
                Nest with the Ampersand Selector
              </h2>
              <p>
                The first thing we can do is use Sass’ ampersand selector to
                nest the current selector within an ancestor. It’s easier
                explain with an example:
              </p>
              <div class='highlight'>
                <pre class='syntax sass'>
                  {`h1 {
  font-family: 'Arial', sans-serif;
  font-size: 34px;
  line-height: 1.25;

  html.wf-active & {
    font-family: 'Source Sans Pro', 'Arial', sans-serif;
    font-size: 36px;
    line-height: 1.1;
  }
}`}
                </pre>
              </div>
              <p>The compiled CSS looks like this:</p>
              <div class='highlight'>
                <pre class='syntax css'>
                  {`h1 {
  /* Fallback styles */
}

html.wf-active h1 {
  /* Web font styles */
}`}
                </pre>
              </div>
              <p>
                See how the <code>h1</code> comes after{' '}
                <code>html.wf-active</code>? Nesting this way cuts down on a
                little repetition, but there’s a lot more we can do.
              </p>
              <h2 id='decrease-specificity'>Decrease Specificity</h2>
              <p>
                <code>html.wf-active h1</code> is a <em>compound selector</em>,
                which makes it difficult to override any of its styles later on
                in the style sheet. Its specificity is unreasonably high for
                what should be a base style.
              </p>
              <p>
                We can address that problem by flipping the selector so it
                affects specificity only when web fonts <em>haven’t</em> loaded.
                The <code>not()</code> pseudo-class lets us do exactly that.
              </p>
              <div class='highlight'>
                <pre class='syntax css'>
                  {`h1 {
  font-family: 'Source Sans Pro', 'Arial', serif;
  font-size: 36px;
  line-height: 1.1;

  html:not(.wf-active) & {
    font-family: 'Arial', serif;
    font-size: 34px;
    line-height: 1.25;
  }
}`}
                </pre>
              </div>
              <p>
                Now when web fonts finish loading and the <code>wf-active</code>{' '}
                class gets applied, <code>html:not(.wf-active) h1</code> styles
                are ignored and the <code>h1</code> specificity stays nice and
                low.
              </p>
              <h2 id='put-it-in-a-mixin'>Put It in a Mixin</h2>{' '}
              <p>
                I don’t know about you, but I don’t want to write{' '}
                <code>html:not(.wf-loaded) &amp;</code> for every fallback font
                style throughout my code. It’s easy to forget and tedious to
                write.
              </p>
              <p>
                So let’s create a mixin to speed things up. The syntax for this
                one is simple. Name yours whatever you like, put the ampersand
                selector in there, and specify where the content goes.
              </p>
              <div class='highlight'>
                <pre class='syntax scss'>
                  {`@mixin fontless {
  html:not(.wf-active) & {
    @content;
  }
}`}
                </pre>
              </div>
              <p>Now use that mixin to apply fallback font styles with ease.</p>
              <div class='highlight'>
                <pre class='syntax css'>
                  {`h1 {
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-size: 36px;
  line-height: 1.1;

  @include fontless {
    font-family: 'Arial', sans-serif;
    font-size: 34px;
    line-height: 1.25;
  }
}`}
                </pre>
              </div>
              <p>
                If you want to use the same mixin on the <code>html</code>{' '}
                element, you’ll need to add a conditional to make sure it
                doesn’t nest inside itself.
              </p>
              <div class='highlight'>
                <pre class='syntax scss'>
                  {`@mixin fontless {
  @if is-superselector('html', &) {
    &:not(.wf-active) {
      @content;
    }
  }
  @else {
    html:not(.wf-active) & {
      @content;
    }
  }
}`}
                </pre>
              </div>
              <p>
                And then it works on <code>html</code>. Kablamo.
              </p>
              <div class='highlight'>
                <pre class='syntax scss'>
                  {`html {
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-size: 21px;
  line-height: 1.35;

  @include fontless {
    font-family: 'Arial', sans-serif;
    font-size: 20px;
    line-height: 1.45;
  }
}`}
                </pre>
              </div>
              <p>
                Okay, we’re done here. Who needs conclusions on front-end blog
                posts? You learned a thing — go have fun jank busting fallback
                fonts. Or{' '}
                <a href='https://twitter.com/johndjameson'>send me a tweet</a>{' '}
                if you liked the article or have any questions. That’s cool,
                too.
              </p>
            </div>
          </div>
          <div class='article-footer'>
            <div class='split'>
              <div class='split-cell'>
                <time class='tsi tss'>June 14, 2016</time>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
)

export default ResponsiveSidenotes
