---
layout: post
title: Responsive Sidenotes
title-display: Responsive Sidenotes
categories: blog
description: "Footnotes and sidenotes are both useful ways to annotate online blog posts and articles. With the help of responsive design, it's now possible to use both approaches at the same time."
---

<b class="tsc">If you resize your browser window</b>, you’ll notice that the footnotes at the very bottom of the page transform into sidenotes alongside body paragraphs.<sup class="post-marker"><a href="#note:1">1</a></sup> The numbered links within body text also appear and disappear, depending on the width of the browser. It’s a useful technique to display additional information on devices with ample screen space but still present the information to people using smaller devices.

Let’s check out the code that makes it work.


##HTML

First off, we're going to need a container for our content. I'm partial to an `<article>` element with the class name `post`. Fill it with a few paragraphs inside `<p>` elements as usual, supplying whatever content you see fit.

{% highlight html %}
<article class="post">
  <p><!-- paragraph text--></p>
  <p><!-- some more text--></p>
  <p><!-- yet even more text--></p>
</article>
{% endhighlight %}

Now, in order to mark the locations of your annotations, use the following format:

{% highlight html %}
<sup class="post-marker"><a href="#note:1">1</a></sup>
{% endhighlight %}

The `<sup>` tag semantically identifies the child `<a>` element as a superscript and also allows us to use <abbr>CSS</abbr> properties on two unique elements later on.<sup class="post-marker"><a href="#note:2">2</a></sup> The `href="#note:1"` attribute allows users to click annotation markers, repositioning the browser window to reveal related footnotes.

Once the body text is annotated with the intended markup, it's time to provide the content of our footnotes and sidenotes. Right before the closing `</article>` tag, add the following ordered list, modified as needed for your content.

{% highlight html %}
<ol class="post-footnotes">
  <li id="note:1">This is the first annotation.</li>
  <li id="note:2">This one's the second.</li>
  <li id="note:3">And this is the third.</li>
</ol>
{% endhighlight %}

And that's it for the <abbr>HTML</abbr>. *Not so bad, right?*


##JavaScript

The first thing we need to do is create variables for the jQuery objects we'll be using later.

{% highlight javascript %}
var $document = $(document),
    $post = $('.post'),
    $markers = $('.post .post-marker'),
    $footnotes = $('.post-footnotes');
{% endhighlight %}

Once that's taken care of, we need to outline our goals and write code to do the following tasks:

1. Identify each individual footnote within the `.post-footnotes` list.
2. Contain the parent of each `.post-marker` inside a `<div>` for future presentation.
3. Loop through each new `<div>` and add a child `<aside>` element that contains the related footnote text.

In JavaScript, that looks a lot like this:

{% highlight javascript %}
function createSidenotes() {
    var $footnoteArray = $footnotes.children();

    $markers.parent().wrap("<div class='post-subject'></div>");

    for (var i = 0; i < $markers.length; i++) {
        $($('.post-subject')[i]).append(
            // role='complementary' provided for ARIA support
            "<aside class='post-sidenote' role='complementary'><p>"
            + $($footnoteArray[i]).html()
            + "</p></aside>"
        );
    }
}
{% endhighlight %}

<abbr>CSS</abbr> has no way of styling parent elements, so we're also going to need to indicate whether or not our `.post` contains annotations. The following code checks whether or not any footnotes exist and then adds a class to the `.post` if the conditional statement returns `true`.

{% highlight javascript %}
function toggleNotes() {
    if ($footnotes.length > 0 && $markers.length > 0) {
        $post.addClass('has-sidenotes');
    }
}
{% endhighlight %}

Now wrap those two functions in a jQuery `ready()` method for good measure and you're almost done.

{% highlight javascript %}
$document.ready(function() {
    createSidenotes();
    toggleNotes();
});
{% endhighlight %}


##CSS

Without any <abbr>CSS</abbr> to style and structure the new markup, our footnotes remain visible at the bottom of the page, regardless of browser width. Even worse, the *sidenotes* fall directly beneath related `<p>` elements, making them completely ineffective until fixed.

Before writing any <abbr>CSS</abbr>, let's identify our goals this time around:

1. Style annotation markers to be visually distinct from body text.
2. Connect each annotation marker with its subject so they are not separated by new lines.
3. Hide footnotes and annotation markers when the browser width is **greater than** a certain width.
4. Display sidenotes when the browser width is **less than** a certain width.
5. Style sidenotes to position themselves within the margin of the page.

Using the following <abbr>CSS</abbr>, let's take care of all of those goals one by one and finish things up.

{% highlight css %}
.post-marker {
  font-size: 70%;
  position: relative;
  top: -0.4em;
}
/* Thin non-breaking spaces are not universally supported,
   so we need to shrink a regular non-breaking space. */
.post-marker::before {
  content: "\00a0"; /* non-breaking space */
  font-size: 25%; /* make the space very thin */
}
.post-marker a {
  letter-spacing: 1px /* Puts narrow spaces between brackets */
}
.post-marker a::before {
  content: "[";
}
.post-marker a::after {
  content: "]";
}
.post-subject {
  position: relative;
}
.post-sidenote {
  box-sizing: border-box; /* Add vendor prefixes as needed */
  display: none;
  left: 100%;
  padding-left: 20px; /* Your site's gutter value */
  position: absolute;
  top: 0;
  width: 25%;
}
@media screen and (min-width: 800px) {
  .post.has-sidenotes .post-marker,
  .post.has-sidenotes .post-footnotes {
    display: none;
  }
  .post.has-sidenotes .post-sidenote {
    display: block;
  }
}
{% endhighlight %}

And they you have it: responsive sidenotes that display on wide browsers yet degrade gracefully to footnotes in narrow browsers and environments without JavaScript support.<sup class="post-marker"><a href="#note:3">3</a></sup>

##Gotchas

If you've been writing <abbr>CSS</abbr> for a while, you might've already considered a few of the limitations associated with this approach, mainly:

* Absolutely positioning the `<aside>` elements relative to a parent `div` means you can provide only a single sidenote per paragraph. Otherwise, multiple annotations will stack on one another, making them completely illegible.
* When displayed in the margin, lengthy sidenotes can invade the starting place of other sidenotes. Adjusting line height, font size, italics, and width will help address the issue, but isn't guaranteed to solve it in every situation.
* Commenting on figures and images using sidenotes becomes tricky due to the awkward placement of a footnote marker on small screens. In this case, it's best to use a `<figcaption>` element beneath the related content with information that should arguably be nearby anyway.

With those constraints in mind, I think responsive sidenotes are a worthwhile addition to the design of many blogs—especially when compared to footnotes alone. Responsive sidenotes move additional information out of the main flow of a blog post or article, removing potential distractions to readers while also making annotations easier to read when needed.

<ol class="post-footnotes">
  <li id="note:1">This text appears either on the bottom or the right of the page, depending on the width of your browser.</li>
	<li id="note:2">Single elements can work, but don't allow the same semantics or flexibility of display.</li>
  <li id="note:3">Check out the <a href="https://github.com/johndjameson/johndjameson.com/blob/master/sass/modules/_post.sass">Sass version</a> on this site's GitHub repo. </li>
</ol>