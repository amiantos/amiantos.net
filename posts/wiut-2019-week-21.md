---
title: What I'm Up To - Week 21, 2019
date: '2019-05-26'
description: "What I did over the past week"
tags: ['programming', 'lifesaver']
---

Hi! Welcome, this is my weekly post where I talk about, well, what I did over the course of the week. I might write about programming or anything else tangentially related.

---

## Life Saver

I completed my short term project that [that I started work on last week](/wiut-2019-week-20) and released it complete with [a simple page here on amiantos.net](/lifesaver) and I fleshed out the [readme on GitHub with the same stuff](https://github.com/amiantos/lifesaver).

The joke about how programming has an 80/80 rule where there's the first 80% of a project and then the second 80% really rings true here. At the end of last week I had a "fully functioning" version of the screensaver, but really it was nowhere near completion.

### SKSpriteNodes > SKShapeNodes

When I built the saver I thought that I could use SKShapeNodes for the grid of squares, but I started running into some problems immediately. The first one was that SKShapeNodes don't have a `color` property, so you can't animate transitions between colors. For a time I ended up using the solution [presented in this SO answer](https://stackoverflow.com/a/49166659/2117288) to get around it.

The second issue was that I noticed the performance seemed pretty bad considering this is a much simpler concept than [my other big SpriteKit project](https://www.github.com/amiantos/aeongarden), so I started to poke around online. I found essentially that [SKShapeNode has poor performance](https://stackoverflow.com/questions/50191671/performance-difference-between-skshapenode-and-skspritenode) compared to SKSpriteNode, and you don't have to go far to find [people complaining about it](https://sartak.org/2014/03/skshapenode-you-are-dead-to-me.html).

So I ended up converting all the nodes to SKSpriteNodes using the square PDF I'm using in Aeon Garden. This allowed me to get rid of that extension and animate the node color using normal SKActions which was nice. Also, performance shot way up!

### Config Sheets

For parts of this project I was using [the source of Brooklyn](https://github.com/pedrommcarrasco/Brooklyn) as an implementation guide since it was the most recent FOSS screensaver I'd encountered. Unfortunately while I tried to implement the configuration sheet for Life Saver in a similar manner to Brooklyn's, I just couldn't get it to work. I got really, incredibly frustrated at this point, since this was one of those issues where it _appeared_ that I was doing everything exactly the same way as everyone else, but it _wouldn't work_.

Eventually I found [this very simple screensaver implementation](https://github.com/erikdoe/swift-circle) on GitHub and followed the method they use to implement the config sheet, and it worked great for me!

There's still some major differences between Brooklyn and Life Saver that I haven't figured out the reason for, the primary example is that Brooklyn seems to be more than capable of loading its assets using the normal convienence methods, but for Life Saver I had to resort to the same [FileGrabber helper class](https://github.com/amiantos/lifesaver/blob/v1.0/Life%20Saver%20Shared/Utilities/FileGrabber.swift) I'm using in Aeon Garden to ensure I'm fetching from the right bundle.

### Optimization & Loop from Edge

I wanted to try to optimize the Game of Life implementation on my own, so I came up with two main ideas to try: 1.) Every update is finding the neighbors for the cell each time, which doesn't make a lot of sense. Why don't we cache the neighbor cells since they'll never change? 2.) During processing we're checking every single dead cell, but really the only dead cells that are going to change state are the ones around living cells, so can we simply check those dead cells instead?

Implementing #1 was pretty easy. After generating the grid of squares, we [calculate the neighbors and store them in the node](https://github.com/amiantos/lifesaver/blob/5373a2c9f65da489834fbcc0b6c003edc5e9cdb7/Life%20Saver%20Shared/LifeScene.swift#L134). Then I implemented the idea behind #2 by grabbing and storing all the dead cells connected to each living cell as it's being updated, and then processing those instead of _all_ the dead cells. However, I ended up stripping this out while debugging and never added it back in. (It really didn't seem to make a lot of difference anyway, but I could see it being useful with really large node counts but that's outside the scope of this project.)

One big benefit to implementing cached neighbors was that it meant I could more easily (in theory) implement _loop from edge_. This means that the cells on the top of the screen are neighbors of the cells on the bottom, and the left-side cells are neighbors to right-side cells. ([The code to do this is a bit messy](https://github.com/amiantos/lifesaver/blob/5373a2c9f65da489834fbcc0b6c003edc5e9cdb7/Life%20Saver%20Shared/LifeScene.swift#L148).) This makes the life area effectively "infinite", or maybe it's better to describe is as a "globe". The main benefit of this is that it's a more accurate simulation and leads to some interesting behavior, like swimmers generated that can live forever... which can cause its own problems.

### Keeping It Interesting

When you let the Game of Life run for any extended period of time you're likely to end up in one of two states. Either everything dies, or a "static" ecosystem emerges either composed entirely of "[still life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns)" patterns, or, if you're lucky, you'll get a glider of some sort that'll indefinitely traverse an otherwise empty tank.

These things aren't good for a screensaver, since you don't want static pixels drawn on the screen for too long of a period of time. In version 0.1 my solution was simply to check on the quantity of life in the tank, and if it was too low, do a "meteor shower" of life until more life caught on. This really sucked in a lot of ways: it was imperfect because it could fire for a long time without life catching on, and it resulted in a lot of visual confusion when it was happening--I actually saw one of my coworkers kind of squint trying to figure out what the heck was going on during a demo when it happened.

Eventually I replaced the "meteor storm" with random circles of living squares, by selecting a couple random dead nodes and making all their neighbors alive. This looked a bit weird and inorganic, so I mixed it up by [making it random as to whether each neighbor was toggled to alive state](https://github.com/amiantos/lifesaver/blob/5373a2c9f65da489834fbcc0b6c003edc5e9cdb7/Life%20Saver%20Shared/LifeScene.swift#L255), which results in a lot of different, more organic shapes, when repopulating the tank.

However it still triggered inconsistently because I couldn't settle on _when_ to repopulate the tank; this mainly resulted in situations where static ecosystems could occur--when dealing with random simulations the edge cases are infinite! I realized the solution was less that I should be checking for a minimum amount of living nodes, but instead I should check that there's enough _change_ happening between generations. By tracking variations in the quantity of life between generations, little to no variance between ticks likely means that the tank has become static.

The implementation of this took the form of [an array of counts of the living nodes](https://github.com/amiantos/lifesaver/blob/5373a2c9f65da489834fbcc0b6c003edc5e9cdb7/Life%20Saver%20Shared/LifeScene.swift#L217), which I keep constrained to 20 entries. When the condensed (Set) version of this array only has 1 or 2 unique values, the tank is eradicated and repopulated. Combined with repopulation after a natural ecosystem die-out, this became the best solution because it allows you to witness the complete life-cycle of each instance instead of just cutting it off and repopulating like the original behavior.

The next thing I realized is that over time the screen fills up with faded colors, and especially when using the Noun Project preset, this results in the background not being white or black anymore which I thought looked a little weird. I added another animation to fix this: after a certain number of ticks the dead cells will "fully decay" and disappear from the screen, leaving behind the normal backdrop color. On certain presets this looks _really cool_.

### Finishing It Up

After I did all this the final step was to add in more color schemes. My girlfriend and I both worked on this. I primarily used [Paletton](https://paletton.com/) to generate some of them, but also stole some ideas from [Schemecolor](https://www.schemecolor.com/) and generated some using [Coolors](https://coolors.co). I think Paletton is the best, because it gives you a variety of options for previwing the colors, and it's how I got the "Santa Fe" color scheme that's used for Aeon Garden as well.

### Code Signing a Screensaver

It's rumored that the next version of macOS will require signed apps for install, which sounds a bit ridiculous and restrictive, but it made me feel like I needed to figure out how to get rid of the "unidentified developer" warning you typically get when downloading and installing a screensaver.

Long story short, I eventually realized the only way to do it (after many false starts and dead ends) was simply to package the screensaver into an installer, and sign the installer. You can see my progression on the issue over in [this question I posted on StackOverflow](https://stackoverflow.com/questions/56307714/how-to-properly-codesign-macos-screensaver) (and then answered).

### What's Next for Life Saver?

The purpose of Life Saver was to give myself a small win with a small project that I could actually _finish_ relatively quickly. While there's some code that could still use refactoring, and optimizations that could still be done (especially trying to learn how to implement hashlife!), it's basically totally done and it's time for me to move on. It would be very easy to keep adding features and other ideas, but is it really necessary?

One thing I learned on this project is how to say _no_ to myself, and stop trying to throw everything in. I set a deadline and I stuck to it, trimming away superfluous ideas in the process. I'm pretty happy with the outcome, it's a really nice screensaver that I want to use. That's really all that matters. (Also, my girlfriend likes it, so that's bonus points.)

### Download Life Saver

Check out the [Life Saver page](/lifesaver) to see some video, screenshots, and download it.

---

That was it for me this week, Life Saver really dominated all my productive time, but it was a really good time. I'll see you next week!