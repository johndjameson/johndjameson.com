---
title: Kerning & Ligatures in Letterspaced Type
type: post
layout: article
date: 2015-09-01
description: "Letterspacing affects type's horizontal rhythm, and so do kerning and ligatures. Combining all three of them can make for beautifully spaced typography."
---

I recently [wrote an article][guidelines] about the general guidelines for letterspacing type on the web. _This article_ is a follow-up and much more focused, so bear that in mind as you continue reading. I'd recommend checking out the last one if you want a quick overview of using letterspacing on the web.

Now with that out of the way, let's jump right into the rules for letterspacing type with kerning and ligatures.

Kerning
-------

It's a good practice to enable kerning in titles, headings, and other display type. These elements attract the most attention in a design, so it's important to get their details _just right_ when typesetting.

### Tight letterspacing

The majority of kerning _decreases_ the space present between letters. By enabling kerning alone, you can often decrease the horizontal spacing in a line of type &mdash; similar to reducing letterspacing. Tight letterspacing exaggerates the need for kerning, so if you make negative adjustments to the `letter-spacing` property, you should probably enable kerning, too.

<%= codepen({ pen: '5e36a72a168d631d7f3b3ccdcf310497', height: 290 }) %>

In the example above, there's a noticeable gap between the unkerned _T_ and _o_ pair at the beginning of the word _Tomato_. It looks awkward in an otherwise tightly spaced context. Enabling kerning here tightens up the initial spacing and improves the overall look and feel of the word.

### Loose letterspacing

Kerning becomes less important as letterspacing increases, and at a certain point, it's barely even noticeable.

If we look at the same word _Tomato_ &mdash; now set with positive letterspacing &mdash; the difference is too subtle to make an impact. Kerning becomes a nice-to-have here, instead of a necessity.

<%= codepen({ pen: '6d702133d6c081a4af782d648e1c3ff6', height: 290 }) %>

Ligatures
---------

Since ligatures are the combined form of two or more letters, and letterspacing adjusts the space _in between_ those letters, you end up with two typesetting techniques that are at cross-purposes. That's not to say you shouldn't letterspace type containing ligatures, but there are a couple considerations to keep in mind.

### Loose letterspacing

Ligatures are always a fixed width, but you can still letterspace the type surrounding them. As a result, ligatures end up looking clumped together within a word. It's best to avoid them altogether in loosely letterspaced type.

<%= codepen({ pen: 'e4d79dfcf8e98e856f9d5c8ba65f8b4e', height: 230 }) %>

In this example, we're much better off using the version of _liftoff_ that doesn't contain ligatures.

### Tight letterspacing

Ligatures are often narrower than their two related characters, so they look right at home in lightly tightened type. In a very tight setting, however, ligatures can stand out as noticeably wider than other letters.

<%= codepen({ pen: 'cb5625881dcf0db7e11d26d69c2ff40c', height: 230 }) %>

If you look closely at the _ff_ and _ft_ pairs in the second word _liftoff_, you'll see an awkward gap between their crossbars. Enabling ligatures fixes this problem by combining the separate letters into a single glyph and merging the two crossbars into one.

Browser support
---------------

The default behavior of most browsers is to disable kerning and ligatures wherever the `letter-spacing` property is applied. Due to current browser support, it takes some very precise CSS to get all three components working together.

The biggest issue is that Safari doesn't _actually_ support `font-feature-settings`. Declare the property in any way, and Safari enables both kerning and ligatures. Want to turn on small caps? You get kerning and ligatures. Want to _disable_ kerning and ligatures? You get kerning and ligatures. This is particularly problematic when the property is inherited, since there's no way to unset it by using the property itself.

I made a [CodePen demo][codepen-demo] with more information on browser support. It's a little too in-depth to embed here, but definitely take a look if you plan on using kerning and ligatures together with with the `letter-spacing` property.

And that's it!
--------------

Before we wrap up, I have to give a shout-out to [Bram Stein][twitter-bram] for his work on [The State of Web Type][state-of-web-type]. That site has been a _huge_ help for me in figuring out an approach that works across browsers.

If you have any questions about letterspacing on the web &mdash; or if you just want to chat about web typography &mdash; send me a message over on [Twitter][twitter].

[codepen-demo]: http://codepen.io/johndjameson/pen/e96a930f0a73dd36f9ff173422b48523?editors=110
[guidelines]: guidelines-for-letterspacing-type.html
[state-of-web-type]: http://stateofwebtype.com/
[twitter]: https://twitter.com/johndjameson
[twitter-bram]: https://twitter.com/bram_stein
