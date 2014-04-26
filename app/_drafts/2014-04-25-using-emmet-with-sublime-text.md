---
layout: post
title: Using Emmet with Sublime Text
title-display: Using Emmet with Sublime&nbsp;Text
categories: blog
description: "Emmet is an invaluable time-saving tool for anyone who writes <abbr>HTML</abbr> and <abbr>CSS</abbr>. Thanks to Sublime Text, it only takes a little bit of effort to install and start using right now."
---

[packagecontrol-install]: https://sublime.wbond.net/installation
[csstricks-screencast]: http://css-tricks.com/video-screencasts/129-emmet-awesome/
[emmet-bio]: http://docs.emmet.io/#emmet--the-essential-toolkit-for-web-developers
[emmet-docs]: http://docs.emmet.io/
[emmet-download]: http://emmet.io/download/

<!--
1. What it is
2. Why it's useful
3. How to install it
4. How to use it
5. How to learn more
 -->

<!-- ⌘ is &#x2318; -->

<b class="tsc">One of the biggest problems</b> with hand-authoring <abbr>HTML</abbr> is the monotony of writing the common markup that surrounds the content itself. While several templating languages exist to allieve this issue, they introduce dependencies and abstractions that have a somewhat steep learning curve to master. Fortunately, a tool called Emmet walks the line between both manual and automated approaches&mdash;and has become one of the most useful additions to my workflow.


##What is Emmet?

<figure class="quotation">
    <blockquote class="quotation-body">Emmet (previously known as Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML &amp; CSS workflow you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation.</blockquote>
    <figcaption class="quotation-citation"><cite><a href="http://docs.emmet.io/#emmet--the-essential-toolkit-for-web-developers">Emmet Documentation</a></cite></figcaption>
</figure>

This means that by using Emmet we can:

* Type shortcuts for standard HTML patterns
* Save time writing CSS
* Make life easier

<figure class="imageFigure">
    <img src="/img/emmet-example-1.gif">
    <figcaption>Scaffolding an <abbr>HTML</abbr> document and common navigation using&nbsp;Emmet</figcaption>
</figure>

Pretty useful, right? Let's find out how to install it using Sublime Text.


##Setting Up Package Control

Sublime Text has an amazing add-on called <strong>Package Control</strong> that lets you find and install virtually <em>any</em> plug-in from within the application itself.<sup class="post-marker"><a href="#note:1">1</a></sup> The snippet to install Package Control changes with every release, so you'll have to copy that code directly from the [offcial website][packagecontrol-install].

Once you have the snippet for your version of Sublime, launch the program and show the Console (<kbd><kbd>&#x2318;</kbd>+<kbd>`</kbd></kbd> on <abbr>OS X</abbr>). Paste in the copied code and submit it, then watch Package Control install itself like magic.

With Package Control installed, you can download additional plug-ins by opening the Command Palette (<kbd><kbd>Shift</kbd>+<kbd>&#x2318;</kbd>+<kbd>P</kbd></kbd> on <abbr>OS X</abbr>) and typing "Install Package" and then submitting the top result. A similar menu opens next, revealing the list of packages available for installation. Type "Emmet" here and choose the top result.

<figure class="imageFigure">
    <img src="/img/emmet-example-2.gif">
    <figcaption>Installing Emmet using Package Control</figcaption>
</figure>


##Using Emmet

Now that we have Emmet installed, we can finally start having fun with some of its incredible shortcuts. The formula for using Emmet is very straightforward:

1. Type a supported shortcut
2. Press <kbd>Tab</kbd>

And that's it! Now check out all the useful shortcuts you can start using right now:

<!-- A big fat table of my favorites. Maybe make it two tabs for HTML and CSS. -->


##Getting Better

If you’re like me, getting up to speed with new tools is an endless struggle. Fortunately, Emmet is <em>completely optional</em> once installed and you can ignore all of its features until <strong>you</strong> want to use them. This makes mastering Emmet as flexible as gradually adding shortcuts to your workflow when you need them. Start with the shorthand for a class or <abbr>ID</abbr>, for example, and then build up from there, learning more ambitious shortcuts along the way.

You can visit the [official documentation][emmet-docs] to discover <em>all</em> of Emmet's features, or if that isn't your cup of tea, CSS-Tricks' Chris Coyier has a sweet [screencast][csstricks-screencast] covering the basics along with everything else you'll need to know.

<ol class="post-footnotes">
    <li id="note:1">You can try Emmet without installing <em>anything</em> thanks to <a href="http://codepen.io/pen/">CodePen</a>.</li>
</ol>
