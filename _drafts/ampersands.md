---
layout: post
title: Ampersands & Google Fonts
title-display: Ampersands <span class="amp">&</span> Google&nbsp;Fonts
categories: blog
description: "Titles, headings, and display text can all benefit from the use of a well-placed ampersand."
---


[simplebits]: http://simplebits.com/notebook/2008/08/14/ampersands-2/
[css1]: http://css-tricks.com/using-the-best-ampersand-available/
[css2]: http://css-tricks.com/snippets/css/fancy-ampersand/
[codepen]: http://codepen.io/johndjameson/full/qzmFf
[base64]: http://www.motobit.com/util/base64-decoder-encoder.asp


<!--

* Cross-browser w/ fallbacks
* Tiny file size
* Optional:
* Plug the CodePen

-->


<i class="c-smallcaps">Ampersands are used most effectively</i> in display contexts, such as titles and headings, so it rarely makes sense to use the dull, standard-issue ampersands that accompany most fonts. Instead, we're often better off using a more interesting and elaborate character. Many fonts feature an *italic* ampersand that is far more elegant than its conventional counterpart, making the italic ampersand preferable in a variety of contexts.<sup class="post-marker"><a href="#note:1">1</a></sup>

**But what do you do if the italic version of a font lacks an interesting ampersand?**

[Dan Cederholm][simplebits] and [Chris Coyier][css1] explored this issue a few years ago, offering a way to mark up ampersands within a span element and then providing a series of fallback fonts via CSS. Most of the fallbacks mentioned, however, are entirely reliant on <abbr>OS X</abbr> system fonts, offering a different experience to the majority of people browsing the web.

Today even more support is possible through the availability web fonts. With the help of Google Fonts specifically, **we're able to offer a cross-platform compatible solution that has widespread browser support and a tiny file size**.


##Styling Ampersands

By adding the URI-encoded string `&text=%26` to a Google Fonts URL inside our CSS, the browser requests a font file containing only the ampersand character of a specified font. This allows users to download a miniscule 1 or 2 kilobyte font file, instead of one that is 50 or 60 kilobytes larger.

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Font+Name&text=%26);
{% endhighlight %}

We can then create an ampersand class to apply throughout our HTML. Using some of the fonts discussed in previously mentioned articles, we're able to provide acceptable fallbacks in the event unlikely event Google Fonts aren't supported.

{% highlight css %}
.amp {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-size: 125%; // A little bigger just because
  font-style: italic;
  font-weight: normal;
}
{% endhighlight %}

Now we can mark up ampersands anywhere in our HTML by using `span` elements with a class of `amp`.

{% highlight html %}
Ampersands <span class="amp">&amp;</span> Google Fonts
{% endhighlight %}

And that's it&mdash;that's everything you need to know to start adding elegant, well-supported ampersands to your web design projects. Now go out and impress your friends with some beautiful web typography.

**But if you're interested in sanding out a few of the rough edges, there's still *a little more* work we can do.**


##Making Improvements

<!--

* Paste Google Fonts response into CSS
  - Saves one request
  - Removes UA detection
    - Support of the modern @font-face syntax
* Encode the requested font as Base64
  - Tools online or Terminal command
  - Fallbacks ensure graceful degredation

-->

With our CSS in its current state, querying the Google Fonts API for a single ampersand takes up *2* HTTP requests. The first response contains the CSS file we previously imported into our stylesheet, specifying a `@font-face` declaration for the requested font.

{% highlight css %}
@font-face {
  font-family: 'Font Name';
  font-style: italic;
  font-weight: 400;
  src: local('Font Name'), local('FontName-Italic'), url(http://themes.googleusercontent.com/licensed/font?kit=V_k5El2vkhx93NlGwmIB5Y3CqX6P7Jx8H90cFJ_LRto) format('woff2'), url(http://themes.googleusercontent.com/licensed/font?kit=p0-i_LrFh6jEfrY2wE1ZTo3CqX6P7Jx8H90cFJ_LRto) format('woff');
}
{% endhighlight %}

Because of different implentations of `@font-face` accross older browsers, Google delivers unique versions of this file depending on what browser makes the request. The `@font-face` syntax has been standardized in recent years, making user agent detection less and less necesary as time goes on. If you're willing to drop Google's user agent detection in favor of making fewer <abbr>HTTP</abbr> requests, then we can paste this CSS directly into our stylesheet. Our fallback fonts are more important here, just in case something goes wrong

{% highlight css %}
@font-face {
  font-family: 'Font Name';
  font-style: italic;
  font-weight: 400;
  src: local('Font Name'), local('FontName-Italic'), url(http://themes.googleusercontent.com/licensed/font?kit=V_k5El2vkhx93NlGwmIB5Y3CqX6P7Jx8H90cFJ_LRto) format('woff2'), url(http://themes.googleusercontent.com/licensed/font?kit=p0-i_LrFh6jEfrY2wE1ZTo3CqX6P7Jx8H90cFJ_LRto) format('woff');
}

.amp {
  font-family: "Font Name", "Baskerville", "Palatino", inherit;
  font-size: 125%; // A little bigger just because
  font-style: italic;
  font-weight: normal;
}
{% endhighlight %}

Alternatively, we can just grab the WOFF file Google provides and manually encode it as Base64 straight into the stylesheet, saving ourselves an additional HTTP request in the process.



The main advantage of the <abbr>WOFF2</abbr> format is its smaller file size, but because we are embeddeding minimal font data directly in the <abbr>CSS</abbr>, it makes little sense to include both file formats. A standard <abbr>WOFF</abbr> file has more browser support and will do just fine.

{% highlight css %}
@font-face {
  font-family: "Font Name";
  font-style: italic;
  font-weight: 400;
  src: url(data:application/font-woff;charset=utf-8;base64,/*base64 string*/) format('woff');
}
{% endhighlight %}

<ol class="post-footnotes">
    <li id="note:1">Check out <a href="http://codepen.io/johndjameson/full/qzmFf">Elegant Ampersands</a> on CodePen for some beautiful examples.</li>
</ol>