---
title: Data Attributes for Keyboard Shortcuts
type: post
layout: article
date: 2015-03-16
allow_orphan: true
description: "With a little help from JavaScript, you can add a data attribute to any HTML element to instantly assign a shortcut key."
---

Assigning keyboard shortcuts on the web could be as simple as adding an HTML attribute onto an element and setting its value. Even though browsers are unlikely to support this approach natively, you're still able to define shortcut keys in your markup by using `data` attributes and a touch of JavaScript.

```html
<button data-shortcut='s'>Do Something</button>
```

I think that's pretty intuitive. Think about all the common use cases:

- Clicking a button
- Following a link
- Focusing a form input

Other than scrolling past copy on code-related blog posts, these three things make up **most of the interactions on the web.** Using `data` attributes can give you an expressive, reusable syntax for assigning keyboard shortcuts to each of these use cases.

Let's go over how it works.

Set up Dependencies
-------------------

Before getting started, you'll need to grab jQuery and [jQuery Hotkeys][jquery-hotkeys], and link them up in your project.[^1] You can get by on your own without either library, but including them both helps simplify the code we'll cover down below.

Using [Bower][bower], you can download a copy of each library by entering the following shell command:

```shell
bower install jquery jquery.hotkeys --save
```

Write Some JavaScript
---------------------

Remember our three use cases? Well, in JavaScipt, they translate into the following behaviors:

- Triggering a `click` event
- Changing `window.location`
- Giving `focus` to an element

With jQuery Hotkeys set up in your project, write a `$(document).ready()` call that contains the following JavaScript:

```javascript
$('[data-shortcut]').each(function() {
  var $element = $(this),
      key = $element.data('shortcut');

  $(document).on('keyup', null, String(key), function() {
    $element.trigger('focus').trigger('click');

    if ($element.prop('tagName').toLowerCase() === 'a') {
      window.location = element.attr('href');
    }
  });
});
```

This code will loop through every HTML element that has a `[data-shortcut]` attribute and attach the keyboard shortcut's event handler. Now when you press an assigned key, the `keyup` event will trigger both `click` and `focus` events on its related DOM element. Additionally, if the element is an `<a>` tag, your browser will follow the link provided by the element's `href` attribute.

Assign Your Shortcuts
---------------------

Your JavaScript is up and running, so you can finally start assigning keyboard shortcuts in your markup! Find an `<a>`, `<button>`, or `<input>` tag that could use a shortcut, and add a `data-shortcut` attribute with the intended key as its value.

```html
<a href='http://example.com/edit' data-shortcut='e'>Edit</a>
```

If you want to assign a keyboard shortcut that requires pressing two or more keys at once, you'll need to use the [syntax][jquery-hotkeys-notes] that jQuery Hotkeys provides.[^2]

```html
<a href='/index.html' data-shortcut='shift+1'>

<button data-shortcut='alt+m'>Menu</button>

<input type='submit' data-shortcut='ctrl+alt+enter'>
```

And that's it &mdash; you've set up everything you need to start assigning keyboard shortcuts in your markup. _Now go forth and empower efficiency._

[^1]: jQuery Hotkeys isn't offered on any CDNs, so you'll need a local copy.
[^2]: The jQuery Hotkeys [example page][jquery-hotkeys-example] has even more key combinations.

[bower]: http://bower.io/
[jquery-hotkeys]: https://github.com/jeresig/jquery.hotkeys
[jquery-hotkeys-notes]: https://github.com/jeresig/jquery.hotkeys#notes
[jquery-hotkeys-example]: https://rawgit.com/jeresig/jquery.hotkeys/master/test-static-01.html
