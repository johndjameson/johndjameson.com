---
title: Filtering Google Results with Alfred
type: post
layout: article
date: 2014-08-20
description: "Google offers powerful filters for search results that can help you find exactly what you're looking for&mdash;it just isn't quick or easy to do. By using Alfred, you can configure these searches once and reuse them whenever you want."
---

<b class='post-lead'>Filtering search results on Google</b> is always a bit of a hassle. The search tools are difficult to find, and once you've found them, you have to click each filter individually before _refreshing the page_ to enable another one. For commonly used filters or groups of filters, this can add up to be a real productivity killer. Thanks to [Alfred][alfred], however, you can configure these filters a **single time,** and then save them as a custom Web Search to use again in the future.[^1]

Adding a Custom Search
----------------------

To get started, open the `Preferences` window in Alfred, click the `Features` tab, and then select the `Web Search` sidebar item. You should encounter a table of Alfred’s built-in Web Searches that you can augment by clicking `Add Custom Search`.

The modal that appears will let you define a custom search URL, as well as a title and keyword to use via Alfred’s main window. Once you configure a Google search _just the way you like it_, find the part of the URL that matches your search text and replace the words with `{query}`. Then paste your modified URL into the `Search URL` input field and label it to your liking.

![Alfred Preferences][alfred-preferences]

In the example above, I've defined a custom Google search that filters out any web pages published more than a year ago. This idea was inspired by Olivier Lacan's blog post [Put a Date on It][olivier-date] and helps me every day when searching for up-to-date information on web-related nerdery.

Feel free to copy the URL below:

```
https://www.google.com/search?q={query}&tbs=qdr:y
```

Useful Google Searches
----------------------

Configuring Google searches via the website can generate some scary-looking URLs littered with unnecessary parameters. You can shorten these dramatically before adding them to Alfred, but the process involved is rarely better than Delete Things until It Breaks.&trade;

If you want to avoid that hassle altogether, here are a few more Google search URLS you can paste into Alfred and start using today.

### Web Results

```
Last month:
https://www.google.com/search?q={query}&tbs=qdr:m

Last week:
https://www.google.com/search?q={query}&tbs=qdr:w

Last 24 hours (great for news and Smash Bros. rumors):
https://www.google.com/search?q={query}&tbs=qdr:d

Verbatim:
https://www.google.com/search?q={query}&tbs=li:1
```

### Image Results

```
Animated GIFs:
https://www.google.com/search?q={query}&tbm=isch&tbs=ift:gif,itp:animated

Show sizes:
https://www.google.com/search?q={query}&tbm=isch&tbs=imgo:1

Labeled for reuse with modification:
https://www.google.com/search?q={query}&tbm=isch&tbs=sur:fmc
```

Keep 'em Coming
---------------

That's it for now, but as a [crazy efficiency nerd][olivier-tweet], I'll make sure to add to this post whenever I think of another useful Google search. Until then, have fun experimenting with custom search URLs on different websites. For example, you could search for only Prime-eligible items on Amazon&mdash;or even tweets you've posted in the last month.

[^1]: Check out Drew Barontini's _excellent_ [article][drew-alfred] on how to set up Aflred like a pro.

[alfred]: http://www.alfredapp.com/
[drew-alfred]: http://drewbarontini.com/setup/alfred/
[olivier-date]: http://olivierlacan.com/posts/put-a-date-on-it/
[olivier-tweet]: https://twitter.com/olivierlacan/status/501359705550495744

[alfred-preferences]: /assets/images/alfred-google-past-year.jpg
