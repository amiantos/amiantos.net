---
title: What I'm Up To - Week 23, 2019
date: '2019-06-09'
description: "This week in Brad: Langton's Ant, 2D Toroidal Arrays, SpriteKit optimization, and more!"
tags: ['programming', 'spritekit', 'lifesaver']
---

Hi! Welcome, this is my weekly post where I talk about what I did over the course of the week. This week was WWDC, so there was a lot of excitement all over the internet about that, but I also learned some cool stuff outside of that later in the week.

---

## Langton's Ant

Over the course of the week I was wrestling with the question of "what's next?". This seems a little silly because I have at least two projects that need work (Aeon Garden, and Numu Tracker) but I didn't really feel like working on them, which makes me feel a little weird and guilty, like I'm procrastinating. But is it really procrastination when you procrastinate by being productive in other, similarly educational ways?

On Friday I stumbled across [Langton's Ant](https://en.wikipedia.org/wiki/Langton%27s_ant), another kind of cellular automaton. It's much simpler than [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) but I immediately felt a little inspired to see if I could do something with it similar to Life Saver.

I don't have a public repo up yet, because I haven't quite found an idea strong enough, but I did post two videos of experiments on Twitter. One I landed on late Friday night...

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">This is weird and kinda gross looking... but I like it. <a href="https://t.co/EwauFOoWnS">pic.twitter.com/EwauFOoWnS</a></p>&mdash; Brad Root (@amiantos) <a href="https://twitter.com/amiantos/status/1137237124703330305?ref_src=twsrc%5Etfw">June 8, 2019</a></blockquote>

Saturday I ended up with a configuration that looked a little like continents on a map, so I started to run with the idea. This video isn't great, and isn't the best version of the "terrain generation" idea, but here it is anyway...

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">After messing around with Langton&#39;s Ant for a while I ended up here, a planet generator using ants to develop the surface over time. Really slow, but actually kind of cool... curious to see what the outcome looks like after several hours. <a href="https://t.co/AJo1M5SVSs">pic.twitter.com/AJo1M5SVSs</a></p>&mdash; Brad Root (@amiantos) <a href="https://twitter.com/amiantos/status/1137530354141544451?ref_src=twsrc%5Etfw">June 9, 2019</a></blockquote>

By the end of Saturday night I ended up with a better version of "terrain generation" but after getting it working in a way that looks okay, I realized that what I ended up with was kind of a bastard hybrid of two good ideas done poorly. I thought what I was going for was "cool looking terrain generator that uses Langton's Ant" but what I really ended up with was "inaccurate/unrealistic terrain generator and Langton's Ant is involved for no particular reason". If I like the visuals of a terrain generator, maybe I should make one for real!

While I don't have a finished product, I did learn a couple extremely useful things along the way which I'll discuss below.

---

## Toroidal 2D Array

When working on my Langton's Ant experiments I realized that a 2D array would make my life much easier. Unlike Life Saver, in Langton's Ant you're dealing with a moving object that needs to be aware of its orientation, position, and the state of cells under it. To handle this, primarily we just need to be able to very quickly grab a reference to a cell in the grid. Life Saver's code contained no such ability, so I needed to come up with a solution.

I'd heard about 2D arrays before, but had never used them. I quickly found a great StackOverflow answer that [provided a Swift generics version of a 2D array](https://stackoverflow.com/a/53421491/2117288), called a matrix, so I ended up harvesting that code. This 2D array means it's very easy to get a node at a specific place, because I can simply ask for it using `matrix[23, 10]`. It's extremely fast! Way better than any `.filter` hijinks I did in Life Saver.

However, both Life Saver and my Langton's Ant experiments "loop from edge", meaning that the top and bottom of the field are virtually stitched together, as well as the left and right sides of the field. I didn't know this, but it's called a [toroidal array](https://en.wikipedia.org/wiki/Torus). In Life Saver, I wrote some very messy code to simulate a toroidal array during neighbor generation, but with Langton's Ant, this wouldn't work at all because we weren't dealing with 'neighbors'.

After a little bit of thought, I realized I could modify the Matrix class from above so that it would support the functionality of a torus automatically. I ended up writing a GitHub gist for this: [ToroidalMatrix.swift](https://gist.github.com/amiantos/bb0f313da1ee686f4f69b8b44f3cd184).

The idea is that if you request a position that exceeds the size of the matrix, it'll automatically flip you around. So if your matrix is 10x10, and you request `matrix[-1, 10]` it'll actually return the contents of `matrix[9, 0]`. This code isn't flawless, if you request `matrix[-2, 11]` it's still going to return the contents of `9, 0` (and not `8, 1`), but that's an easy modification to make if needed. For my use, that won't be needed.

After I got this working with Langton's Ant, I realized I could likely use it to vastly speed up neighbor pre-fetching in Life Saver, so I [cut out a lot of code and added it in](https://github.com/amiantos/lifesaver/pull/10). The difference was night and day. I'd tried running large amounts of nodes on Life Saver before, but the main bottleneck was that neighbor pre-fetching was extremely inefficient and could take up to a minute. With this change, neighbor pre-fetching takes milliseconds even on very large quantities of cells, you don't even notice it happening!

That said, I was still having performance issues with large amounts of nodes, but the fix for that was right around the corner...

---

## Optimizing SKSpriteNode

I have a bad habit not reading the documentation when programming. It's weird, because when I do literally anything else in life, I read the manual. When I got a new car, I read through the entire user manual, twice! But when I'm learning a new technology, I just fumble my way through it and, if I'm lucky, I end up inadvertently reading the documentation when it crosses my path.

This week I got a taste of what I am missing when I don't seek out documentation when I stumbled on [this page talking about SpriteKit performance](https://developer.apple.com/documentation/spritekit/nodes_for_scene_building/maximizing_node_drawing_performance). I saw this line on that page and a lightbulb went off in my head:

> In general, all scene nodes can be rendered in a single draw call that came from the same SKTexture

In Life Saver, every SKSpriteNode grabs the same square PDF file to use as a texture. It never occured to me, because they're each colored differently, that they could actually all share a reference to the same texture. [I tried it out](https://github.com/amiantos/lifesaver/pull/8), and the performance gains were incredible:

> On launch, this [optimization] results in a 50%+ reduction in memory usage... with the small square setting starting memory usage is ~94 MB. After this optimization, starting memory usage is ~44 MB. Additionally, per-frame draw count goes from 576 down to 1. This is pretty amazing.

This sort of optimization (combined with the toroidal 2D array above) meant that it was very easy to add an even more zoomed out view to Life Saver, supporting many mode life squares without any drop in performance. The lower memory usage has seemed to translate into the screensaver exiting more quickly. In general, it just *feels snappier*. I've since implemented this change in my other projects.

---

## Life Saver

Thanks to the service [S3Stat](https://www.s3stat.com), I can tell you that since release Life Saver 1.0 has been downloaded around 170 times! A lot of this is thanks to a couple foreign language blogs writing about it: [one in Chinese](https://applech2.com/archives/20190602-conway-game-of-life-screensaver-for-mac.html), and [one in German](https://applech2.com/archives/20190602-conway-game-of-life-screensaver-for-mac.html).

I thought this comment (poorly translated by Google) on the German post was kind of funny:

> Looks more like a technical malfunction of the device. Since you have to be very very nostalgic, if you use this schooner.

Whatever, bro! In other news, the repo is [up to 26 stars](https://github.com/amiantos/lifesaver/stargazers). Just ignore that one of those stars is me...

---

## WWDC

I don't have a lot to say about what happened with week at WWDC that hasn't been said by many other people. I think SwiftUI and Combine are extremely exciting and as soon as the beta Xcode came out, I was playing with it. However, I don't have any "secondary" devices that I can install macOS Catalina or iOS 13 on, so I don't get to experience the new "Canvas" editor, and I can't play with my SwiftUI creations on a device.

That said, my experience so far has indicated that this first developer release is pretty buggy, and lacks some core functionality that was demonstrated during the WWDC sessions, so I don't feel like I am missing out on too much by being patient and waiting longer before diving back in again.

I do think I am going to write the new version of Numu Tracker in SwiftUI/Combine when everything is more stable. It might alienate some of my "customers" who can't upgrade to iOS 13 (I support back to iOS 10 right now), but no one has ever paid me a dime for Numu so I don't owe anyone anything 😉

---

I think that's it for me this week. See you next week!