---
title: Guidelines for Letterspacing Type
type: post
layout: article
date: 2015-08-18
description: "Blog posts on line height and vertical rhythm are all so boring. Let's get horizontal, instead."
---

I know very few web designers who ever adjust letterspacing when setting type on the web. Small changes can have an enormous effect on the readabiltity of text. That means it's hard to make those decisions unless you're _very confident_ with your knowledge in web typography.

Effectively letterspacing text can make the difference between good typography and _great_ typography. With that in mind, I decided to put together some guidelines for letterspacing type on the web.

Capital letters
---------------

When setting type in all uppercase, it's almost always a good idea to increase the text's letterspacing from its default value. The spacing built into most fonts isn't intended for use with uppercase text, so that means you'll need to loosen tracking manually via CSS.

This usually involves setting a `letter-spacing` value around 0.2–0.25 ems for headings and a value around 0.05–0.1 ems for acronyms.

<p data-height="200" data-theme-id="2137" data-slug-hash="QbRayd" data-default-tab="result" data-user="johndjameson" class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/QbRayd/'>QbRayd</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

In this example, "HTML" and "CSS" are set in _small caps_, but the same advice applies here, too.

Font size
---------

The relationship between font size and letterspacing is pretty straightforward: as size increases, letterspacing decreases, and as size decreases, letterspacing increases.

In more practical terms, here's what that relationship looks like:

- Large text (e.g., titles and headings) should have decreased letterspacing.
- Body text should have default tracking, or stick very close to default letterspacing.
- Very small text should have increased letterspacing.

<p data-height="435" data-theme-id="2137" data-slug-hash="aa39c703c30de9f1b65a3c738ad344c2" data-default-tab="result" data-user="johndjameson" class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/aa39c703c30de9f1b65a3c738ad344c2/'>aa39c703c30de9f1b65a3c738ad344c2</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

Font weight
-----------

Like with font size, the relationship between font weight and letterspacing follows a simple pattern: as weight increases, letterspacing decreases, and as weight decreases, letterspacing increases.

This is because of the way typefaces at look and feel at certain weights. Light typefaces have an airy aesthetic that's complemented by open letterspacing, while bold typefaces have a dark and heavy aesthetic that's complemented by pulling the letters _closer together_.

<p data-height="350" data-theme-id="2137" data-slug-hash="ba2516c0e03124d5afe2d7f0eefec5fd" data-default-tab="result" data-user="johndjameson" class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/ba2516c0e03124d5afe2d7f0eefec5fd/'>ba2516c0e03124d5afe2d7f0eefec5fd</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

For a more in-depth explanation on how weight affects letterspacing decisions, check out Carolina de Bartolo's _Typography Matters_ talk over on [YouTube][carolina].

Light-on-dark text
------------------

Light type set on a dark background usually benefits from a small increase in letterspacing.

If you look at the following example, you'll notice that the white-on-black text appears _bolder_ than the black-on-white text. They're the exact same size and weight, but the white-on-black text still looks a little bit thicker. To compensate for that difference, you'll need to make a subtle increase in letterspacing.

<p data-height="228" data-theme-id="2137" data-slug-hash="qdGyJY" data-default-tab="result" data-user="johndjameson" class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/qdGyJY/'>Value vs. Letterspacing</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

CSS supports `letter-spacing` values in quarter-pixel increments, so I'm able to specify `0.5px` in this example. When setting type at a small size, you'll often find comfortable letterspacing somewhere _in between_ whole pixel values.

There's always more to learn
----------------------------

This article just _scratches the surface_ of letterspacing type on the web. Once you start combining different elements of typography, you'll run into situations where its best to work _outside_ these guidelines. For example, how does type set in italics respond to letterspacing? And in what situations does wordspacing come into play?

I'm still figuring out the answers to those questions myself, but if you'd like to start a conversation about web typography, hit me up on [Twitter][twitter].

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[carolina]: https://www.youtube.com/watch?v=VpBslige5Yk&feature=youtu.be&t=1130
[twitter]: https://twitter.com/johndjameson