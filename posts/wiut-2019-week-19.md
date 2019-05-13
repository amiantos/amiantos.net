---
title: What I'm Up To - Week 19, 2019
date: '2019-05-12'
description: "What I did over the past week"
tags: ['programming', 'aeongarden', 'numu']
---

I've decided to try to set myself a weekly goal of writing about whatever I did or learned about this week, just to get into the habit of writing regularly again. I'm always working on something, so I figure I should be able to find something to say about it.

---

## Aeon Garden Screensaver

I'm going to include something I did at the end of last week: I got [screensaver support merged in](https://github.com/amiantos/aeongarden/commit/13bf01555bdae2b2b35657b9bcc83f0449b380e8)! It was really tricky because I'd never run into issues with having to manually specify which bundle to pull assets from.

The gist of it is that I couldn't figure out why any of my image assets weren't being found automatically--turns out when a screensaver runs its main bundle becomes the Settings.app's bundle, so you have to manually specify your bundle for assets.

Fixing this turned out to be a little complicated because you have to (or at least I think you have to) replace a lot of convenience methods for loading assets, and in the case of SKParticleEmitters, the solution is even more elaborate. So I ended up [packing all these methods up into a singleton](https://github.com/amiantos/aeongarden/blob/13bf01555bdae2b2b35657b9bcc83f0449b380e8/Aeon%20Garden%20Shared/Utilities/AeonAssetGrabber.swift) to use throughout the project. I did this because I'm trying to keep all the code cross-platform, and this keeps all the platform differences encapsulated in one place, which keeps the call site really clean.

I posted a short clip of the screensaver running [over on Twitter](https://twitter.com/amiantos/status/1125185082623311872)

## Placeholder Server, Website, and More!

Near the end of this week I merged [another large pull request](https://github.com/amiantos/aeongarden/pull/21) that included a lot of stuff.

I created a `Targetable` protocol ([view on GitHub](https://github.com/amiantos/aeongarden/blob/3749a15b08c5cb6fe8e6b2fa1660374728822e3c/Aeon%20Garden%20Shared/Nodes/AeonNodeProtocols.swift#L27)) to use for food pellets and bubbles, containing just a single variable and two methods for incrementing and decrementing it. This is used to ensure creatures don't all target the same pellet or bubble, competition is factored into their decision making in a very simple way. I figured using methods would be best in case I ever want to make the implementations more elaborate in the future, and I feel fishy about modifying class properties directly from outside the instance anyway.

I created an initial `AeonTankSettings` struct ([view on GitHub](https://github.com/amiantos/aeongarden/blob/13bf01555bdae2b2b35657b9bcc83f0449b380e8/Aeon%20Garden%20Shared/Scenes/AeonTankSettings.swift#L14)) to hold per-tank settings. This lays the groundwork for being able to save tanks and create reusable tank settings, but most importantly it gave me a way to [vary settings per-platform](https://github.com/amiantos/aeongarden/blob/3749a15b08c5cb6fe8e6b2fa1660374728822e3c/Aeon%20Garden%20Shared/Views/AeonViewController.swift#L23). Because the size of the tank differs between devices, some platforms can handle more creatures overall.

After getting the screensaver working, I decided to see if my idea about using iCloud document storage as the cloud save method would work. Looks like it won't, because tvOS has no access to iCloud Documents. (Maybe there would be a way to use the iCloud web API here, but I don't think so...?) After this I decided I would just create a simple backend server to store saves in the cloud. This unfortunately really expands the amount of work I have to do, but after stealing my own code from Numu Tracker's new API, I created a working framework for an API going really quickly and I felt better about it. This is in the Server directory.

I figured while I was putting placeholder code into the repo, I'd go ahead and create a folder for the Website, and put a Gatsby blog starter initialized in there.

I recolored the tvOS icon's creature to be a little cheerier, but I feel like the icon is a bit too dark overall still, but Aeon Garden itself is kind of dark at the moment anyway.

I started to put some CoreData related stuff into the app, this'll be how saves are stored locally.

## First Public Showing

The Noun Project just decided to introduce compulsory Show & Tell every week, and since Aeon Garden's tvOS interface is in a really nice place, I figured I would show it off. I was really nervous, and discouraged because the TV I was showing on it didn't look very good at first (I messed with the settings for a while to get it looking decent eventually). 

The reaction was really positive, which was nice! I've been working on the thing so long now that the novelty of it has kind of worn off on me, so it's nice to hear that on first glance it's really interesting and something people want.

---

## Numu 2-star Review

Numu Tracker got one of the most annoying kinds of review, a two star review reading:

> Had to delete due to not having Amazon music as an option.

This user could have contacted me and I could have possibly added what they wanted for them. Now that they've deleted the app, even if I do add what they want, they'll never know. (What they want is ambiguous as well: Do they want links to Amazon Music (possible) or ability to import artists from Amazon Music (not possible)?) It's a negative review that I can't fix, joining the couple of people who insist that push notifications don't work. I'm not _upset_, this stuff is par for the course with app development, but it can be frustrating.

---

## On the Spectrum of Abstraction 

During the developer meeting this week at work, we watched and discussed [this talk "On The Spectrum of Abstraction"](https://www.youtube.com/watch?v=mVVNJKv9esE). I found it a little long-winded and over my head perhaps due to a focus on React / front-end developer jargon. When the gist of the video was condensed for me: "As you make an implementation more general, you gain power by being able to handle a lot of cases, but it takes longer to develop and maybe it's unnecessary..." Basically an elaborate version of _keep it simple stupid_. At least that was my takeaway by the end. I always try strike a balance between getting the job done and keeping an implementation flexible and easy to revise if new use cases present themselves, so I think I'm pretty good here. Someone else has some notes posted [over here in a gist](https://gist.github.com/markerikson/02d5846040a1bf4a02147990df3c3599) that might be worth reading.

---

That's about it for me this week. See you next week!

