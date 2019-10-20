---
title: What I'm Up To - Week 42, 2019
date: '2019-10-20'
description: "What I did over the past week: work on Aeon Garden's save functionality continues, plus a basic auto camera."
tags: ['programming', 'aeongarden']
---

Howdy! This is my weekly post where I talk about what I did over the past week. This post covers the past two weeks, because I did not write a full update for week 41. For these two weeks, I continued to spend time working on Aeon Garden's save functionality, and implemented a simple auto-camera. I also briefly promoted Gamebook Engine, and contemplated taking a little break from programming again.

---

## Aeon Garden

After the foot to the floor motoring of my work on Gamebook Engine, I've definitely slowed down a lot these past two weeks.

The main thing I accomplished in week 41 was adding the "Favorite Creatures" functionality to Aeon Garden. My work can be seen [in this pull request](https://github.com/amiantos/aeongarden/pull/25), but it might not make a ton of sense.

This was another project where I had to do a lot of refactoring the way certain core parts of the app work. Basically, tanks weren't designed to have arbitrary creatures loaded into them, and all sorts of other issues came up that I've unfortunately mostly forgotten by now so I can't ruminate on them too precisely.

Additionally I added the ability to rename creatures, making all functionality surrounding creatures "feature complete" for the time being. It's pretty neat being able to carry creatures between tanks, and to bestow your own name upon them. Right now the rename functionality is pretty "dumb", you have to enter both the first name and the last name in separate text fields. This works pretty good on tvOS, but looks pretty lame on iOS. It would be a lot better to just have one text field, and then parse out the first and last name automatically.

This week, I started to work on the auto-camera functionality, and I've opened [a draft pull request](https://github.com/amiantos/aeongarden/pull/26) with an extremely basic, but functioning, version working. Right now all it does is detect that there's been no user activity for a bit, slide the menus away, and start randomly zooming the camera in and out while also randomly panning the camera across the tank. This actually looks *pretty good*, but has a *ton* of minor little issues that will be solved in the full implementation.

In reality, I think I want the auto-camera to have several different "states" that it'll pass between depending on various circumstances. There should be a "full tank view" state, a "follow creature" state, a "slow pan over tank" state, and maybe some other states like where it'll try to keep a group of creatures in view when there's intense competition over some food pellets or something like that. We'll need some basic "AI" (read as: `if` statements or a big ol' `switch`) to help the camera make decisions about what state to be in, treating it more like an entity all of its own.

---

## Gamebook Engine

This week I posted a link to the TestFlight for Gamebook Engine [over on the r/interactivefiction subreddit](https://www.reddit.com/r/interactivefiction/comments/dju6e8/i_built_a_free_open_source_choosable_path_game/), as a tentative first step at promoting the app a little. While absolutely no one has commented on the post on Reddit, at least **five** people downloaded the app as a result. That's not too bad.

While in the post I say I was hoping for feedback, I was deathly afraid of getting feedback equivalent to "you suck and your app sucks", so I'm actually pretty glad that no one has said anything to me at all. I know the app is pretty cool, but also very simple in comparison to larger "game creators" like Twine, so I expected at least someone to say that, but I did preemptively say it's not meant to be a competitor to Twine in the post.

I'm slightly disappointed in myself for not having pushed myself harder to write the "sample story" that stands in the way of me trying to public the app on the App Store. My whole life I've fancied myself a bit of a writer, but to be honest most of that was just 20-something hubris driven by the couple of compliments I'd gotten on my personal writing. I've never really truly written any sort of fiction of any real length at all, just a very tenuous grasp on potentially misplaced confidence that I could do so.

Either way, I feel like I've chickened out a bit. I'm more than willing to dive head first into all sorts of programming projects, but I guess on some level programming feels more logical and less creative, so it's way less scary to put myself out there that way than any other. Oh well, I'll figure it out eventually, I just need to put myself in the right head-space to think of writing similarly to programming, like, "I can build it in chunks" and "it doesn't need to be perfect the first time", etc.

---

## Another Programming Break?

It's been eight weeks since my last "programming break", and I think I've been in the cool-down phase for the past two weeks. I think I'm going to take another little break on my personal projects, maybe a shorter one than last time (which was about two months) and focus on enjoying my life a bit more than just shoving my head into programming projects.

Yesterday I ordered all the parts necessary to build a pretty great gaming PC, which I haven't had in probably close to a decade, so there's going to be a lot of games I need to catch up on: Doom, Witcher 3, Observer, Red Dead Redemption 2, and probably many more I can't think of right now. I'm sure that's going to occupy my time a fair bit and give me something else to do between all my programming.

---

That's it for me this week! See you next week.