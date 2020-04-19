---
title: What I'm Up To - Week 16, 2020
date: "2020-04-19"
description: "What I did over the past week: I started a new micro-project! And... that's about it."
tags: ["programming", "last-statement"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## Last Statement

This week I began work on a small project I'd been thinking about for quite a while. The inspiration comes from a former co-worker who has a repo on GitHub called [Last Statement](https://github.com/bjudson/last-statement), which is basically a scraper for the Texas Department of Criminal Justice website, compiling all the last statements of people who have been executed by the State. (For those unfamiliar: when you're executed, you get to say some final words before the deed is done.) His site doesn't work anymore, but something about the macabre idea of compiling all the last statements from people who are about to die really stuck in my head.

I'd decided about a year or more ago that it would be reflective of my sense of humor to try to turn this data into a screensaver. What if I subverted the built-in macOS "Word of the Day" screensaver and instead populated it with these last statements? Kind of like an "execution of the day" screensaver? It's an idea that fits with my sense of humor, where something is so shocking & dark that it's kind of funny. That's not to say I think _anything_ is funny about the death penalty, but that being forced to face something controversial and uncomfortable in an unexpected environment often elicits that kind of awkward laughter I adore: the kind where you laugh because you don't really know what else to do.

It's also just a good small project to stretch some of my programming chops. I waffled back and forth on how to gather the data; I figured at first that I'd just reuse some of **bjudson**'s code and build the scraper in Python, but I decided eventually to make this an all Swift project. The repo is still private so I can't link to anything yet, but one part of the workspace is a small MacOS app built in Swift UI that is simply dedicated to scraping the TDCJ website using the excellent [SwiftSoup](https://github.com/scinfu/SwiftSoup) package; the second part of the workspace is the actual screensaver.

I figured I would try to write the screensaver using native macOS drawing features, assuming that Apple built the "Word of the Day" screensaver that way. This [screensaver tutorial over here](https://medium.com/better-programming/how-to-make-a-custom-screensaver-for-mac-os-x-7e1650c13bd8) seemed to be a good starting point. After a brief bit of experimentation, I realized the `draw()` method wasn't ideal. The first step was to draw a gradient similar to the one in the "WOTD" screensaver, and the second step was to draw something moving on screen (so I drew the bouncing ball from the tutorial). This resulted in a very poor and inconsistent framerate on my 1440p display, because it's drawing that huge gradient _every_ frame. These results were the opposite of the "WOTD" screensaver, which has silky-smooth animations.

I turned to the [r/macprogramming](https://www.reddit.com/r/macprogramming/) subreddit to ask a simple question: "How is the WOTD screensaver built?" Someone chimed in to say they believe it was built using [Quartz Composer](https://en.wikipedia.org/wiki/Quartz_Composer). I had seen this name when I opened the WOTD screensaver in a text editor to poke around for clues, but didn't register it may have been how the saver was built. At the posters urging, I downloaded Quartz Composer and messed around for a bit, but there were several downsides to trying to build my screensaver this way: 1.) I don't know Quartz Composer, and after a couple minutes it became clear I wasn't just going to become a Quartz Composer expert in an hour or two, and 2.) the Quartz framework has been deprecated by Apple, so while it still works, who knows for how long it will work.

After these experiments I decided that I should just stick with what I know: SpriteKit. I've already written several things in SpriteKit, and I am pretty familiar with its idiosyncrasies, so I should be able to crank out something very quickly. Luckily there were still things to learn even in the early stages of the project.

The background of the "WOTD" screensaver is a nice gradient. It's easy to draw nice gradients with `NSGradient`, but now that I was using SpriteKit I found myself without an easy method of drawing gradients. I'd experimented with gradients in Aeon Garden, to poor results, and ended up turning back to the same method I'd used last time: this [SKTexture extension on GitHub](https://gist.github.com/maximbilan/93d4159ff2f97d0580d2#file-sktexturegradient-swift). I'll save you some time: this extension produces gradients with severe color-banding at large sizes. I did find some another SpriteKit gradient drawing solution, but it used some UIKit specific code that isn't available in macOS development.

Then I discovered `CAGradientLayer`, which draws wonderful gradients, but only in views with layers. I guess I just had a hunch, but I wondered: can I draw a nice gradient in the main `ScreenSaverView` and then overlay my `SKView` on top of that so that the gradient is drawn by AppKit, but the floating text in the saver is drawn by SpriteKit? The short answer is yes, and the long answer is also yes. Apple has a helpful little page titled "[Creating a Scene with a Transparent Background](https://developer.apple.com/documentation/spritekit/skscene/creating_a_scene_with_a_transparent_background)" about doing exactly this, and it works great! I don't know how it works, some sort of crazy black magic like the rest of SpriteKit, but I am glad it works. I have a perfect gradient, and text slides across the screen with transparency effects in glorious 60 FPS.

As of this writing, I have the very basics of the screensaver in place. It can load a JSON file, parse it, and then begin sliding random names of executed offenders across the screen very similarly to "WOTD". I have a decent amount of work to do over the next week.

- I need to get the statements to fade in occasionally, this is a combo of several animations: a name slides in and stays in place; then a black overlay fades into place, and the paragraphs of text appear on screen. After some amount of time (I might try to calculate how long it should take a slow reader to read the text on screen so that the timing is dynamic) the overlay fades out and the name slides off screen. Multi-line text in `SKLabelNode` is a bit complicated, but hopefully I wont run into too much trouble.

- I want the screensaver to pull in the execution data from the internet. It'll come with a JSON file built in so it'll work without internet, but I want it to be able to grab updated executions automatically (there's a new one every couple of months) without people needing to update the screensaver. This shouldn't be too challenging.

- There are a lot of executions that only provide the "summary of incident" (a.k.a. what they did to land on death row) in image form. I'd like to make these available to the screensaver, so I'll likely find myself doing some old school data entry, transcribing the text from the images into my executions database. I want to do this in the macOS app that scrapes them from the website, but SwiftUI at the moment doesn't have a `UITextField` equivalent so I'll need to do some fiddling I haven't done before to get that working.

- I'd like the macOS app that does the scraping to also handle the uploading the final JSON file back into storage. Basically the flow of the final app should be this: 1.) Grab JSON file from remote storage, 2.) Scrape the TDCJ website to add any new executions without overwriting existing ones, 3.) Allow editing of the executions, 4.) Upload the final JSON file back to S3 for storage.

- Theme support and other configuration options. At the very least I'd like there to be a "dark mode" setting since the default bright blue is kind of blinding. I'd also like to give users the option to turn off the "summary of incident" during the display, I assume there are some people who only want to see the last statement without the heinous details of what the people did which can be fairly depressing and disturbing.

I am really happy with how this project is coming along, and I can't wait to share it with you all!

---

## Website Design

You might noticed that amiantos.net has changed appearance a little bit. How much you like it probably depends on how you feel about the color purple. I'm not a big fan of purple, but there's something about this new design that makes me much happier than the old one did. It just pops! It feels cool and retro and hip. So hip.

---

That's it for me this week, I'll see you next week!
