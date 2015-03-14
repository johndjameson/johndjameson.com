---
title: Updating Your Shell with Homebrew
type: post
layout: article
date: 2014-07-21
description: "If you haven't manually updated your version of Bash or Zsh on OS X, chances are it’s out-of-date. Here’s how to install the latest version and keep your shell updated using Homebrew."
---

OS X ships with an outdated version of Bash as its default shell. The preinstalled version dates back to 2007, and since then, Bash has been updated to add features and fix troublesome bugs. If you want to use an _updated_ version of Bash&mdash;or even Zsh&mdash;as your shell, you can install it by using Homebrew, a package manager for OS X.[^1]

Installing via Homebrew
-----------------------

To get things started, you need to tell Homebrew to install the latest version of your shell. Whether you prefer using Bash or Zsh, the following instructions will work for both. Just change the word `bash` to `zsh`, and you'll be good to go.

Open your terminal and enter this command:

```shell
brew install bash
```

Homebrew installs packages to `/usr/local/bin/`, so you'll need to specify that path when looking for any Homebrew packages. In the following three commands, we'll initiate a shell as the `root` user, append our desired shell's path to a file of whitelisted system shells, and then change the system shell globally.

```shell
sudo -s
echo /usr/local/bin/bash >> /etc/shells
chsh -s /usr/local/bin/bash
```

Now you can close and reopen your terminal. With just those few commands, you should be using with the latest version of your shell. You can double-check the version you're using with the command `echo $BASH_VERSION`. Or, if you've installed Zsh, you can use the command `echo $ZSH_VERSION` to do the same.

That's it for installing your brand-new shell. Let's take a look at how to keep it _up-to-date_ with the help of Homebrew.

Staying Current
---------------

The Homebrew command `update` actually refers to updating Homebrew itself. If you want to install the latest version of a Homebrew _package_, you'll have to use the word `upgrade` instead:

```shell
brew upgrade bash
```

In this example, Homebrew will look for the package named `bash` on your computer and install the latest version. If you already have the newest version installed, Homebrew will print an error message telling you exactly that. You'll have to run this command manually from time to time, but it's a much more reliable approach than downloading directly from source or maintaining a cloned version control repository.

Now go out and write shell scripts for [all the things][dandenney-tweet].

[^1]: You can set up Homebrew by following the instructions on its [website][homebrew].

[dandenney-tweet]: https://twitter.com/dandenney/status/490210755246301185
[homebrew]: http://brew.sh/
