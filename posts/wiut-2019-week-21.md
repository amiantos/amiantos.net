---
title: What I'm Up To - Week 21, 2019
date: '2019-05-26'
description: "What I did over the past week"
tags: ['programming', 'lifesaver']
---

Hi! Welcome, this is my weekly post where I talk about, well, what I did over the course of the week. I might write about programming or anything else tangentially related I might want to write about.

---

## Life Saver

I completed my short term project that [that I started work on last week](/wiut-2019-week-20) and released it complete with [a simple page here on amiantos.net](/lifesaver) and I fleshed out the [readme on GitHub with the same stuff](https://github.com/amiantos/lifesaver).

The joke about how programming has an 80/80 rule where there's the first 80% of a project and then the second 80% really rings true here. At the end of last week I had a "fully functioning" version of the screensaver, but really it was nowhere near completion. All the easy stuff was done, and the harder stuff was left. Here's some stuff I learned.

### SKSpriteNodes > SKShapeNodes

When I built the saver I thought that I could use SKShapeNodes for the grid of squares, but I started running into some problems immediately. The first one was that SKShapeNodes don't have a `color` property, so you can't animate transitions between colors. For a time I ended up using the solution [presented in this SO answer](https://stackoverflow.com/a/49166659/2117288) to get around it.

The second issue was that I noticed the framerate performance seemed pretty bad considering it was much simpler than [my other big SpriteKit project](https://www.github.com/amiantos/aeongarden), so I started to poke around online. I found essentially that [SKShapeNode has poor performance](https://stackoverflow.com/questions/50191671/performance-difference-between-skshapenode-and-skspritenode) compared to SKSpriteNode, and you don't have to go far to find [people complaining about it](https://sartak.org/2014/03/skshapenode-you-are-dead-to-me.html).

So I ended up converting all the nodes to SKSpriteNodes using the square PDF I'm using in Aeon Garden. This allowed me to get rid of that extension and animate the node color using normal SKActions which was nice. Also, performance shot way up!

### Config Sheets

For parts of this project I was using [the source of Brooklyn](https://github.com/pedrommcarrasco/Brooklyn) as an implementation guide since it was the most recent FOSS screensaver I'd encountered. Unfortunately while I tried to implement the configuration sheet for Life Saver in a similar manner to Brooklyn's, I just couldn't get it to work. I got really, incredibly frustrated at this point, since this was one of those issues where it _appeared_ that I was doing everything exactly the same way as everyone else, but it _wouldn't work_.

Eventually I found [this very simple screensaver implementation](https://github.com/erikdoe/swift-circle) on GitHub and followed the method they use to implement the config sheet, and it worked great for me!

There's still some major differences between Brooklyn and Life Saver that I haven't figured out the reason for, the primary example is that Brooklyn seems to be more than capable of loading its assets using the normal convienence methods, but for Life Saver I had to resort to the same [FileGrabber helper class](https://github.com/amiantos/lifesaver/blob/v1.0/Life%20Saver%20Shared/Utilities/FileGrabber.swift) I'm using in Aeon Garden to ensure I'm fetching from the right bundle.

### Optimization & Loop from Edge

I wanted to try to optimize the Game of Life implementation on my own, so I came up with two main ideas to try: 1.) Every update is finding the neighbors for the cell each time, which doesn't make a lot of sense. Why don't we cache the neighbor cells since they'll never change? 2.) During processing we're checking every single dead cell, but really the only dead cells that are going to change state are the ones around living cells, so can we simply check those dead cells instead?

Implementing #1 was pretty easy. After generating the grid of squares, we [calculate the neighbors and store them in the node](https://github.com/amiantos/lifesaver/blob/5373a2c9f65da489834fbcc0b6c003edc5e9cdb7/Life%20Saver%20Shared/LifeScene.swift#L134). Then I implemented the idea behind #2 by grabbing and storing all the dead cells connected to each living cell as it's being updated, and then processing those instead of _all_ the dead cells. However, I ended up stripping this out while debugging and never added it back in.

One big benefit to implementing cached neighbors was that it meant I could more easily (in theory) implement _loop from edge_. This means that the cells on the top of the screen are neighbors of the cells on the bottom, and the left-side cells are neighbors to right-side cells. This makes the life area effectively "infinite", or maybe it's better to describe is as a "globe". The main benefit of this is that it's a more accurate simulation and leads to some interesting behavior, like swimmers generated that can live forever... which can cause its own problems.

### Keeping It Interesting

When you let the Game of Life run for any extended period of time you're likely to end up in one of two states. Either everything dies, or a "static" ecosystem emerges either composed entirely of "[still life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns)" patterns or if you're lucky you'll get a glider of some sort that'll indefinitely traverse an otherwise empty tank.

These things aren't good for a screensaver, since you don't want static pixels drawn on the screen for too long of a period of time. In version 0.1 my solution was simply to check on the quantity of life in the tank, and if it was too low, do a "meteor shower" of life until more life caught on. This really sucked in a lot of ways, it was imperfect and resulted in a lot of visual confusion when it was happening--I actually saw one of my coworkers kind of squint trying to figure out what the heck was going on during a demo of it.