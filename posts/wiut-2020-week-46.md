---
title: What I’m Up To - Week 46, 2020
date: "2020-11-15"
description: "What I did over the past week: Learning Pico-8!"
tags: ["programming","pico-8"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## PiBar for iOS

I admit I didn't work on PiBar for iOS at all this week. I am near the final stage for getting a beta out, but I'm waiting on an app icon from my friend and co-worker. Sure, that's really just an excuse to not work on it, but I am excited to get the app out. I've actually been using it a lot from my iPhone and iPad, so I can see how it will be useful for people. I think everyone who uses it will be very happy!

---

## Getting Started with Pico-8

I'm sure in many other posts I've talked about how I'd love to make a game. Problem is, I don't have any good ideas, or the ideas I do have are too lofty for me to build for real because I'm some combination of lazy and scared to go too far outside my comfort zone all at once.

A week or two ago I saw an article about Pico-8, a "fantasy console" that basically replicates the experience of developing for a console roughly equivalent to an NES, with some QOL improvements like programming in Lua. It sounded interesting to me, like a good way to develop simple games but without the benefit of a framework like SpriteKit which can do a lot of the hard stuff for me (like particle systems and drawing sprites to the screen and moving them around). It'd challenge me to come up with small, simple ideas that fit within the confines of Pico-8, while still teaching me some new programming techniques.

First up, I had to [buy Pico-8 for $14.99](https://www.lexaloffle.com/pico-8.php). No big deal!

Secondly, I looked for some tutorials to help me get my bearings. At this point I'd already decided that my first project would be to try to port [Life Saver](https://github.com/amiantos/lifesaver), my Conway's Game of Life implementation, over to Pico-8. But I needed to get my feet wet before trying to jump in and build something for real.

I started with the [Game Development for Pico-8 Zine](https://mboffin.itch.io/gamedev-with-pico-8-issue1) by MBoffin, available for free (or name your price) on Itch.io. This thing is a great introduction to the Pico-8, offering a tutorial for two full (but very simple) games: a Flappy Bird-like clone, and a Moon Lander clone, and some additional code samples showing how to structure your code, create particles, and utilize coroutines. It's also got a big reference for Pico-8 specific functions in the back which I've used several times now. All in all, a great place to start!

After doing that zine, I decided it was time to sit down and try to implement Life Saver. Right off the bat, I knew I wouldn't really be able to implement Life Saver as it is, because the Pico-8 only has 16 colors, I can't very well smoothly fade cells between colors. So I set out to just implement a fairly basic version of Conway's Game of Life. If you google "pico-8 Game of Life" there are a couple very nice, fully featured implementations out there, so I set the bar fairly slow: just gotta get Life working.

It took several hours. The main problem was that I was trying to do things as I would in Swift, with the oodles of memory that I have when developing for iOS. I kept running into "Out of Memory" errors, trying to store 16,000+ tables within tables. It just didn't work. On top of that, my Life implementation isn't very optimized, so if I did a full 128x128 grid of life cells, it took about a second to generate each new state. Not very fun at all. I ultimately reduced the amount of cells down to 64x64 which would generate faster.

The next day I worked on it some more, and added support for different colors to kind of emulate the Life Saver flavor of Life. You can see the [final product on the web](https://amiantos.github.io/carts/life/). If you're interested in the code, the [p8 file is over here](https://github.com/amiantos/amiantos.github.io/blob/main/carts/life/life.p8). It's not the greatest, cleanest code in the world, but it works.

I've been thinking about game ideas, but I still don't feel like I have a firm enough grasp of Pico-8. (Maybe I'm still making excuses.) So I set out to find more tutorials. Thankfully, there's [a four issue Pico-8 Fanzine](https://sectordub.itch.io/pico-8-fanzine-1?download) that is very similar to the other one. So I downloaded that last night, and did the first tutorial, where you make a one player Pong-like called Squashy. I did the tutorial, and then decided to liven it up a bit by taking the code from the particle system tutorial in the Game Dev zine... in the end, I ended up with [a ball that shoots flaming particles](https://amiantos.github.io/carts/picozine1/squashy/) while you play. Cool!

Hopefully next week I can begin work on a game idea I have, but I am going to go through all these zine tutorials first. We'll see what happens!

---

That's it for me this week! See you next week.
