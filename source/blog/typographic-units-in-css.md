---
title: Typographic Units in CSS
type: post
layout: article
date: 2015-08-05
description: "CSS offers many more units than pixels, ems, and percentages. But out of all the units available to us, I find two the most intriguing: ex and ch."
---

`Ex` and `ch` are _typographic units_, meaning their values depend on an element's font family. When you use `em` or `rem` units, the browser computes their values based on the element's font size. It doesn't matter what font gets displayed onscreen, the browser will compute the same values for every typeface. This is where `ex` and `ch` units offer a little more flexibility. They require the browser to reference an element's font family _before_ computing values and applying styles.

Let's take a look at these two typographic units in more detail.

Ex units
--------

In typographic terms, x-height is determined by the height of a typeface's lowercase letters. This is often measured by the letter x, which doesn't have any ascenders or descenders. The relationship between a typeface's font size and x-height can tell you a lot about the typeface's proportions with only a couple measurements.

`Ex` units get their value from the x-height of the _font context_ they're computed in, which is determined by two things: font family and font size. In other words, they're equal to the x-height of a specific font family at a specific font size.

To illustrate this, if Helvetica Neue is set at a font size of `100px`, then you can expect `1ex` to equal about `52px`:

![Ex units equal the x-height of a typeface](typographic-units-ex-units.svg)

Using `ex` units in CSS is just like using any other units. You're able to write them with any CSS property you'd use with pixels or `em` units.

<p data-height='270' data-theme-id='2137' data-slug-hash='d81ece0b6a9436654dd4777a73634005' data-default-tab='result' data-user='johndjameson' class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/d81ece0b6a9436654dd4777a73634005/'>d81ece0b6a9436654dd4777a73634005</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src='https://assets.codepen.io/assets/embed/ei.js'></script>

Ch units
--------

`Ch` units are based on the _characters_ of a typeface, drawing their value from the width of a font's `0` glyph. I'll warn you that this is [somewhat arbitrary][meyer-defining-ch], and the width of a `0` is often a poor estimate of a typeface's average character width. However, when using a monospace typeface — where all glyphs share identical widths — `ch` units are always dependable.

![Ch units equal a 0 character's width](typographic-units-ch-units.svg)

With this constaint in mind, here are some of the use cases where I've found `ch` units to be particularly useful:

- Setting a container's width
- Letter-spacing text (instead of using height-based units like `em`)
- Creating gutters that are based on a typeface's proportions

In the following example, I'm able to declare `max-width: 75ch` on the paragraph element, ensuring [ideal line length][csstricks-45-75] as the user's viewport widens.

<p data-height="257" data-theme-id="2137" data-slug-hash="fbfae4fd58d5356f6b95683fb219aa38" data-default-tab="result" data-user="johndjameson" class='codepen'>See the Pen <a href='http://codepen.io/johndjameson/pen/fbfae4fd58d5356f6b95683fb219aa38/'>fbfae4fd58d5356f6b95683fb219aa38</a> by John D. Jameson (<a href='http://codepen.io/johndjameson'>@johndjameson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Takeaways
---------

I'll admit that `ex` and `ch` units are more than a little weird. They're unlike any other units CSS have to offer. Weirdness aside, these typographic units offer front-end developers a lot of opportunities for exploring web typography. With any luck, I hope that `ex` and `ch` wont be the only two of their kind and that additional typographic units are soon to follow.

[csstricks-45-75]: https://css-tricks.com/bookmarklet-colorize-text-45-75-characters-line-length-testing/
[meyer-defining-ch]: http://meyerweb.com/eric/thoughts/2012/05/15/defining-ch/