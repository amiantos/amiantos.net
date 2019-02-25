---
title: My Favorite Development Tools
date: '2019-02-25'
description: "A continually updated list of my favorite development tools, including VSCode, Postico, and more."
tags: ['programming', 'python', 'swift']
---

Allegedly someone named Emmert Wolf said or wrote, "A man is only as good as his tools". Now, no one seems to know who Emmert Wolf is or where he might have said this, but he probably lived sometime before the last 5 years because if he were alive today he'd probably know better and say something like, "an individual is only as good as their tools," instead.

While the statement might only be partially true—people have dug out of prison using only a spoon before, of course—when it comes to developers, the tools they use _can_ greatly increase their efficiency at the very least. I used to program solely using Notepad++, without realizing that it totally held me back in some ways. With that in mind, I figured it would be good to make a recommended list of my favorite developer tools, especially the ones that I use on a daily basis.

Please note that I am primarily a **Python** and **Swift** developer at the moment, and these tools may be good for just one, or both. I also only develop on **macOS**, so some of these apps may be platform exclusive and not relevant to developers on other platforms.

### Visual Studio Code

[**Visual Studio Code**](https://code.visualstudio.com/) is just an all around great text editor that I use for everything unrelated to iOS development. I probably spend more time in VSCode than any other program on my machine. Right out of the box VSCode is great to use, but its extensive extension library pushes it right over the top for most people. I don't use a lot of extensions personally, but VSCode's customizability makes a big difference for a lot of developers (especially web developers).

### Docker

Even if you're not interested in using [**Docker**](https://www.docker.com/) as a tool for deploying scalable production code, Docker makes it very easy to set up a development environment that can be shared among people collaborating on your projects. For the [Numu Tracker API](http://github.com/numutracker/numutracker_api), I use Docker so that it's very easy for anyone who wants to contribute to bring up a local instance of the entire project without a struggle. It can't be overstated how convienent it is to be able to pull down the repo from GitHub, and within minutes you have a full dev environment good to go.

### Postico

If you work primarily with PostgreSQL and use macOS, I don't think it gets much nicer than [**Postico**](https://eggerapps.at/postico/). The app is very mac-like in appearance, and it's just very easy to use. I love that all my server definitions are available in the right-click menu off the Dock, so getting into a database quickly is quite easy. The interface for browsing tables and table structures is just pleasant all around. This is probably my second most-used app on my machine.

Postico is worth paying for but the free trial has no time limit and the trial limitations likely won't impact small-time or beginner developers for a long time.

If you use databases other than PostgreSQL, [**TablePlus**](https://tableplus.io/) looks to be the new hotness. I have some quibbles with some of their interface choices, so it hasn't pulled me away from Postico, but it's very nice and supports a mind-bogglingly large number of database types.

### Paw

When you're developing a web-based API, you need some method to test your endpoints with different sets of data to see how they're working for you. I've used a couple different methods to do this, but they all pale in comparison to [**Paw**](https://paw.cloud/). It has a very nice interface and makes it trivially easy for me to switch between different servers to test the same endpoints locally, on a remote test server, or on production. I even include the `.paw` file I use in the Numu Tracker API repo.

### GitUp

My favorite Git client is [**GitUp**](https://gitup.co/). It has a very simple design with a novel graphing concept that's just pleasing to look at; it reminds me quite a bit of the [NYC subway map](http://web.mta.info/maps/submap.html). I've tried several other Git clients, but GitUp is so fast, clean looking, and easy to use that I can't get pulled away. The fact that it's fully open source and free to use is just icing on the cake.

That said, I will give an honorable mention to [**Fork**](https://git-fork.com/), whose merge conflict resolution tool is really nice and makes complicated rebases much easier to pull off. GitUp kind of fails here, though these days I'll usually just handle my conflict resolution in VSCode instead of resorting to Fork.

### GitHub

Why am I recommending [**GitHub**](https://github.com/)? Doesn't everyone already use GitHub? Maybe, but I wanted to highlight that their organizational tools are really useful. While bigger companies might want to use something like [Clubhouse](https://clubhouse.io/) (which is great!), for solo developers you can't really beat having your [Kanban boards](https://www.atlassian.com/agile/kanban/boards) right in the same place your project is stored. I use their Projects feature extensively these days to keep track of ongoing development, and I'm learning to use Issues to keep feature requests and bug reports organized. Plus each repo has a Wiki built right in, great for developer documentation.

### Lingo

Sometimes the hardest part of development is just keeping all your art assets organized and easily available. You could try to commit art assets into your repositories, but what if someone who isn't a developer wants to grab or use your assets?

This is where [**Lingo**](https://www.lingoapp.com/) comes in. Instead of stuffing assets away in a folder in your repo or elsewhere, Lingo provides you with a pretty visual interface for searching and browsing your art assets. Assets can range from images, to fonts, to colors, and more, so that you can guarantee consistency in your app's branding.

Lingo isn't currently priced in a way that makes it good for solo developers working on small projects by themselves, but for growing teams it can make life a lot easier. Please note that I currently work on Lingo professionally, but even if I didn't I would still think it's a great tool for keeping all your art in one easy-to-find place. 

### The Noun Project

Speaking of art assets, at some point every developer needs icons. Even if you're just prototyping something and need a placeholder icon, you can't go wrong searching through [**The Noun Project**](https://thenounproject.com) for what you need. A Pro subscription is only $40/year and lets you download as many icons as you want, and while you can download icons for free to use with attribution, it _should_ fill you with a warm fuzzy feeling to support the artists who create all these great icons.

Please note that I am employed by The Noun Project, but I was a paying customer before I became an employee—nearly all the icons in Numu Tracker came from Noun Project.

### Black

This one is Python specific, but after I discovered [**Black**](https://github.com/ambv/black)—I'm so sorry—I don't think I could ever go back. Black is an automatic code formatter for Python projects—basically it means that I no longer have to worry about whether I'm using single quotes or double quotes consistently, or that I have enough white space between my function definitions. It also ensures formatting consistency throughout an entire project no matter who is developing for it. It really makes a big difference to my development quality of life, and saves me a lot of time that would be otherwise spent fiddling with or deciding on formatting.

### SwiftLint

While there isn't a Black for iOS development just yet (though there are some similar projects), [**SwiftLint**](https://github.com/realm/SwiftLint) comes pretty close. While it doesn't want to automatically format your code for you (it can correct some simple mistakes if you ask it to), it will help you avoid many common Swift anti-patterns and help you write cleaner code all around. It's very easy to integrate with Xcode, so there's no excuse to not add it to your pods and see what it recommends.

## What do you think?

Do you have any development tools you can't live without that you think I should know about? Reach out to me on Twitter @[amiantos](https://twitter.com/amiantos) and let me know!