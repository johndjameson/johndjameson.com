---
layout: post
title: Ampersands & Google Fonts
title-display: Ampersands <b class="amp">&amp;</b> Google&nbsp;Fonts
categories: blog
description: "Titles, headings, and display text can all benefit from the use of a well-placed ampersand. Today Google Fonts makes using beautiful ampersands on the web easier and more widely supported than ever before."
---


[simplebits]: http://simplebits.com/notebook/2008/08/14/ampersands-2/
[css1]: http://css-tricks.com/using-the-best-ampersand-available/
[css2]: http://css-tricks.com/snippets/css/fancy-ampersand/
[codepen]: http://codepen.io/johndjameson/full/qzmFf
[base64]: http://www.motobit.com/util/base64-decoder-encoder.asp


<span class="post-intro">Ampersands are used most effectively</span> in display contexts, such as titles and headings, so it rarely makes sense to use the dull, standard-issue ampersands that accompany most fonts. Instead, we're often better off using a more interesting and elaborate character. Many fonts feature an *italic* ampersand that is far more elegant than its conventional counterpart, making the italic ampersand preferable in a variety of contexts.<sup class="post-marker"><a href="#note:1">1</a></sup>

![Baskerville's ampersand compared with Baskerville Italic's ampersand](/img/ampersands-baskerville.svg)

**But what do you do if the italic version of a font lacks an interesting ampersand?**

[Dan Cederholm][simplebits] and [Chris Coyier][css1] explored this issue a few years ago, offering a way to mark up ampersands within a span element and then providing a series of fallback fonts via <abbr>CSS</abbr>. Most of the fallbacks mentioned, however, are entirely reliant on <abbr>OS X</abbr> system fonts, offering a less-than-ideal experience to the majority of people browsing the web.

Today we are able to provide additional browser support thanks to the availability web fonts. With the help of Google Fonts specifically, **we're able to offer a cross-platform compatible solution that has widespread browser support and a tiny file size.**


##Styling Ampersands

We begin by importing our selected Google Fonts in the normal manner. Then by adding the <abbr>URI</abbr>-encoded string `&text=%26` to a Google Fonts <abbr>URL</abbr> inside our <abbr>CSS</abbr>, the browser requests a font file containing only the ampersand character of a specified font. **This allows users to download a miniscule 1 or 2 kilobyte font file, instead of one that is 50 or 60 kilobytes larger.**

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Font+Name&text=%26);
{% endhighlight %}

Then we create an ampersand class to apply throughout our <abbr>HTML</abbr>. Using some of the fonts discussed in previously mentioned articles, we're able to provide potential fallbacks in the unlikely event Google Fonts aren't supported.

{% highlight css %}
.amp {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-size: 125%; // A little bigger just because
  font-style: italic;
  font-weight: normal;
}
{% endhighlight %}

We can now identify ampersands anywhere in our markup by using the new-and-improved <abbr>HTML5</abbr> `<b>` elements with a class name of `amp`.

{% highlight html %}
Ampersands <b class="amp">&amp;</b> Google Fonts
{% endhighlight %}

Now that our <abbr>HTML</abbr> is marked up as intended, we have everything we need in place to start adding elegant, well-supported ampersands to our web design projects. ***But* if you're interested in sanding out a few of the rough edges, there's still *a little more* work we can do.**


##Making Improvements

With our <abbr>CSS</abbr> in its current state, querying the Google Fonts <abbr>API</abbr> for a single ampersand takes up *two* <abbr>HTTP</abbr> requests. The first response contains the <abbr>CSS</abbr> file we previously imported into our stylesheet, specifying a `@font-face` declaration for the requested font, which becomes the second <abbr>HTTP</abbr> request.

{% highlight css %}
@font-face {
  font-family: 'Font Name';
  font-style: italic;
  font-weight: 400;
  src: local('Font Name'), local('FontName-Italic'), url(http://themes.googleusercontent.com/licensed/font?kit=V_k5El2vkhx93NlGwmIB5Y3CqX6P7Jx8H90cFJ_LRto) format('woff2'), url(http://themes.googleusercontent.com/licensed/font?kit=p0-i_LrFh6jEfrY2wE1ZTo3CqX6P7Jx8H90cFJ_LRto) format('woff');
}
{% endhighlight %}

Because of different implentations of `@font-face` accross older browsers, Google delivers unique versions of this file depending on what browser makes the request. The `@font-face` syntax has been standardized in recent years, making user agent detection less and less necesary as time goes on. If you're willing to drop Google's user agent detection *in favor of making fewer <abbr>HTTP</abbr> requests*, then we can paste this <abbr>CSS</abbr> directly into our stylesheet.

{% highlight css %}
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
{% endhighlight %}

Alternatively, we can manually download the <abbr>WOFF</abbr> file Google provides and encode it as Base64 straight into the stylesheet, saving ourselves an additional <abbr>HTTP</abbr> request as part of the process.

Altough Google's <abbr>CSS</abbr> references both <abbr>WOFF2</abbr> and <abbr>WOFF</abbr> files, we need only the <abbr>WOFF</abbr> file in our own stylesheet. The main advantage of the <abbr>WOFF2</abbr> format is its smaller file size, but because we are embeddeding actual font data directly in the <abbr>CSS</abbr>, it makes little sense to include both file formats. A standard <abbr>WOFF</abbr> file has better support and makes a reliable default in the majority of browsers.<sup class="post-marker"><a href="#note:2">2</a></sup>

To convert a file to Base64, we can use an [online tool][base64] or the following Terminal command:

{% highlight bash %}
openssl base64 -in input-file.ext -out output-file.ext
{% endhighlight %}

We then add the resulting Base64 string inside our authored <abbr>CSS</abbr>.

{% highlight css %}
@font-face {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-style: italic;
  font-weight: 400;
  src: url(data:application/font-woff;charset=utf-8;base64,/*base64 string*/) format('woff');
}
{% endhighlight %}

And that's it&mdash;for real this time! Using Google Fonts, a little-known query string, and a touch of Base64 magic, we're able to encode stunning ampersands directly into our <abbr>CSS</abbr> files and with very a microscopic file size. This approach won't always work perfecly, but it's definitely a step toward upping your type game on the web.<sup class="post-marker"><a href="#note:3">3</a></sup>

<ol class="post-footnotes">
    <li id="note:1">Check out <a href="http://codepen.io/johndjameson/full/qzmFf">Elegant Ampersands</a> on CodePen for some beautiful examples.</li>
    <li id="note:1">Heads-up: Can I Use indicates limited <a href="http://caniuse.com/#search=woff"><abbr>WOFF</abbr> support</a> by the Android browser.</li>
    <li>Steps 2 through infinite courtesy of <a href="http://jessicahische.is/talkingtype">Jessica Hische</a>.</li>
</ol>