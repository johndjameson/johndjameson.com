---
title: Ampersands & Google Fonts
type: post
layout: article
date: 2014-03-08
description: "Titles, headings, and display text can all benefit from the use of a well-placed ampersand. Today Google Fonts makes using beautiful ampersands on the web easier and more widely supported than ever before."
---

Ampersands are used most effectively in display contexts, such as titles and headings, so it rarely makes sense to use the dull, standard-issue ampersands that accompany most fonts. Instead, we're often better off using a more interesting and elaborate alternative. Many fonts feature an _italic_ ampersand that is far more elegant than its conventional counterpart, making the italic ampersand preferable in a variety of contexts.[^1]

![Baskerville's ampersand compared with Baskerville Italic's ampersand][baskerville-ampersands]

**But what do you do if the italic version of a font lacks an interesting ampersand?**

[Dan Cederholm][simplebits-ampersand] and [Chris Coyier][csstricks-ampersand] explored this issue a few years ago, offering a way to mark up ampersands within a span element and then providing a series of fallback fonts via CSS. The most attractive ampersands are exclusive to OS X system fonts, however, offering an unideal experience to the majority of people browsing the web.

Today we are able to provide additional browser support thanks to the availability web fonts. With the help of Google Fonts specifically, **we're able to offer a cross-platform compatible solution that has widespread browser support and a tiny file size.**

Styling Ampersands
------------------

We start off by adding the URI-encoded string `&text=%26` to a Google Fonts URL inside our CSS. This allows browsers to download a miniscule _1 or 2 kilobyte_ file containing **only the ampersand character** of a specified font, rather than a font file that is 50 or 60 kilobytes larger.

```css
@import url(http://fonts.googleapis.com/css?family=Font+Name&text=%26);
```

Then we create an ampersand class to apply throughout our HTML. Using some of the fonts discussed in previously mentioned articles, we're able to provide potential fallbacks in the unlikely event Google Fonts aren't supported.

```css
.amp {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-size: 125%; // A little bigger just because
  font-style: italic;
  font-weight: normal;
}
```

We can now identify ampersands anywhere in our markup by using the new-and-improved HTML5 `<b>` elements with a class name of `amp`.

```html
Ampersands <b class="amp">&amp;</b> Google Fonts
```

Now that our HTML is marked up as intended, we have everything we need in place to start adding elegant, well-supported ampersands to our web design projects. **_But_ if you're interested in sanding out a few of the rough edges, there's still _a little more_ work we can do.**

Making Improvements
-------------------

With our CSS in its current state, querying the Google Fonts API for a single ampersand takes up _two_ HTTP requests. The first response contains the CSS file we previously imported into our style sheet. Because this CSS specifies a `@font-face` declaration for the requested font, the font itself becomes the _second_ HTTP request.

```css
@font-face {
  font-family: 'Font Name';
  font-style: italic;
  font-weight: 400;
  src: local('Font Name'), local('FontName-Italic'), url(http://themes.googleusercontent.com/licensed/font?kit=V_k5El2vkhx93NlGwmIB5Y3CqX6P7Jx8H90cFJ_LRto) format('woff2'), url(http://themes.googleusercontent.com/licensed/font?kit=p0-i_LrFh6jEfrY2wE1ZTo3CqX6P7Jx8H90cFJ_LRto) format('woff');
}
```

Due to different implentations of `@font-face` across older browsers, Google delivers unique versions of this file depending on what browser makes the request. The `@font-face` syntax has been standardized in recent years, making user agent detection less and less necesary as time goes on. If you're willing to drop Google's user agent detection *in favor of making fewer HTTP requests*, then **we can paste this CSS directly into our style sheet.**

```css
@font-face {
  font-family: 'Font Name';
  font-style: italic;
  font-weight: 400;
  src: local('Font Name'), local('FontName-Italic'), url(http://themes.googleusercontent.com/licensed/font?kit=V_k5El2vkhx93NlGwmIB5Y3CqX6P7Jx8H90cFJ_LRto) format('woff2'), url(http://themes.googleusercontent.com/licensed/font?kit=p0-i_LrFh6jEfrY2wE1ZTo3CqX6P7Jx8H90cFJ_LRto) format('woff');
}

.amp {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-size: 125%;
  font-style: italic;
  font-weight: normal;
}
```

Alternatively, we can manually download the WOFF file Google provides and encode it as Base64 _straight into the style sheet_, saving ourselves an additional HTTP request as part of the process.

Although Google's CSS references both WOFF2 and WOFF files, we need only the WOFF file in our own style sheet. The main advantage of the WOFF2 format is its smaller file size, but because we are embeddeding actual font data directly in the CSS, it makes little sense to include both file formats. A standard WOFF file has better support and makes a reliable default in the majority of browsers.[^2]

To convert a file to Base64, we can use an [online tool][base64-encoder] or the following Terminal command:

```shell
openssl base64 -in input-file.ext -out output-file.ext
```

We then add the resulting Base64 string inside our authored CSS.

```css
@font-face {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-style: italic;
  font-weight: 400;
  src: url(data:application/font-woff;charset=utf-8;base64,/*base64 string*/) format('woff');
}
```

And that's it&mdash;for real this time! Using Google Fonts, a little-known query string, and a touch of Base64 magic, we're able to encode stunning ampersands directly into our CSS files and with very a microscopic file size. This approach won't always work perfecly, but it's definitely a step toward upping your type game on the web.[^3]

[^1]: Check out [Elegant Ampersands][codepen-ampersands] on CodePen for some beautiful examples.
[^2]: Heads-up: Can I Use indicates limited [WOFF support][caniuse-woff] by the Android browser.
[^3]: Steps 2 through infinite provided by [Jessica Hische][jessicahische-type].

[base64-encoder]: http://www.motobit.com/util/base64-decoder-encoder.asp
[caniuse-woff]: http://caniuse.com/#search=woff
[codepen-ampersands]: http://codepen.io/johndjameson/full/qzmFf
[csstricks-ampersand]: http://css-tricks.com/using-the-best-ampersand-available/
[jessicahische-type]: http://jessicahische.is/talkingtype
[simplebits-ampersand]: http://simplebits.com/notebook/2008/08/14/ampersands-2/

[baskerville-ampersands]: assets/images/ampersands-baskerville.svg
