---
title: What I'm Up To - Week 39, 2019
date: '2019-09-29'
description: "What I did over the past week: Gamebook Engine, Numu 1.3.4, and planning for the future!"
tags: ['programming', 'gamebookengine']
---

Howdy! This is my weekly post where I talk about what I did over the past week. This week I wrapped up the first version of Gamebook Engine and thought about the future...

---

## Gamebook Engine

I took it pretty easy on Gamebook Engine this week, but I did wrap up the final couple of cards to feel good about closing [the Alpha project on GitHub](https://github.com/amiantos/gamebookengine/projects/1). In order words, in regards to version 1.0, Gamebook Engine is "feature complete". The only thing that stands in the way of me releasing it on the App Store is that (this the third time I've mentioned this, with dread) I have to write a sample story to bundle with it. I created a GitHub Project for everything else [that's needed for the app's official release](https://github.com/amiantos/gamebookengine/projects/3?), too.

I have [a beta project up in GitHub](https://github.com/amiantos/gamebookengine/projects/2) already with the next steps, however many of them aren't necessary for me to release the app. Most of them are quality of life improvements, which aren't really needed at the moment because no one is living their life with the app yet. Yes, I like using GitHub Projects quite a bit! Simple and effective, perfect for me.

I renamed the project from "BRGamebookEngine" to just "Gamebook Engine" this week as well. I figured ultimately I didn't need to prefix my initials onto the project, while there are other things called "Gamebook Engine" out there, none of them are really on my level, so I'm claiming the name as my own. We'll check back in a couple months to make sure my app is the first result on Google.

---

## Numu Tracker

I finally released Numu 1.3.4 on the App Store this past week. It was supposed to be the release that finally added iPad support, but when I loaded it up in the iPad Pro simulator to take screenshots, and saw how ridiculous it looked on the iPad, I removed it. It just didn't look good or professional to me.

The other major change was that it was going to direct people to my Patreon on the More screen, in the hopes people would give me money. Naturally, Apple had a problem with this, because it was circumventing their payment processing (and their cut of the proceeds). They stipulated that it was _totally fine_ to ask people to gift you money, but that 100% of the proceeds have to go to the recipient--a.k.a. either Apple gets a cut or _no one_ gets a cut. This doesn't work with Patreon since they're taking a cut.

I ended up removing the link to Patreon and am pushing people to this website instead. I'll end up redesigning the landing page to push Patreon a little bit harder. I know it's not punk, but I have bills to pay! Specifically, hosting bills to pay. If you're curious, running Numu Tracker to date has cost me at minimum of $3,000 in total. So... yeah! That's not cheap.

The other bummer in the series of bummers involving this Numu release is that, probably because I was asking for money, App Review decided that I can't show album art in my screenshots. When I first submitted Numu (when it had in-app purchases), I had to blur out the art in the screenshots, but on subsequent releases (without in-app purchases) they allowed album art in the shots.

I could have tested this theory, by submitting the no-Patreon build with the original shots, but I just wanted to get it over with, so I blurred out the art in the shots and submitted it all together. It was approved the next day, and [you can see the new boring screenshots here](https://apps.apple.com/us/app/numu-new-music-tracker/id1158641228).

Speaking of screenshots, I decided this time instead of paying for [AppLaunchPad](https://theapplaunchpad.com), I wanted to find another (ideally, free) solution. I ended up finding this great Figma document that [makes it *really* easy to create screenshots](https://twitter.com/diacabezas/status/1043910972317011970). The default templates are a little boring, but totally suitable, and it wouldn't take much work to make them more exciting. Really great work by [Diana Hernandez Cabezas](https://twitter.com/diacabezas)!

---

## Anything else?

I'm already planning my next steps. After I get Gamebook Engine out, I really want to turn my attention back to [Aeon Garden](https://github.com/amiantos/aeongarden). I think I got a little too lofty with my aspirations for that project, and lost steam because of it. Looking at the project now, from a distance, I realize that I am a few short steps away from being able to actually finish it if I'm willing to pare down the "launch" version. The plan was to mostly wait for iOS 13 to come out anyway, to take advantage of the new Core Data + CloudKit stuff, so timing wise this might work out.

Aeon Garden really just needs three things to get up on the App Store: the "auto-camera", where after some idle time the camera will start following random creatures around or looking for "interesting" scenes (like food or mate competition) to cover; the ability to save/load tanks, which includes favorite-ing creatures and having them appear in new tanks; and the sound design, which very well might be the hardest part and I'm teetering on the edge of deciding that it just shouldn't have sound, but that's a _big_ concession.

The main thing is just that I've never created sounds for anything before, and I don't even have a clear idea in my head of what it should sound like to begin with, aside from being inspired by [Mountain by David O'Reilly](http://www.davidoreilly.com/mountain). In general I want it to be something nice to leave on in the background, kind of like the sound of a real fish tank. Now, how the heck do I do that? I have no idea. I did see a cool video the other night of [someone re-creating the portal gun sound](https://www.youtube.com/watch?v=WCS8KJFIo7M) themselves, which was pretty inspirational.

After Aeon Garden, I'm going to properly turn my attention back to Numu Tracker 2.0. The API is still humming away, keeping artists and releases up to date, and sucking money out of my wallet. There's over 900,000 releases in the 2.0 database, it's pretty crazy. Either way, we might rebuild Numu 2.0 in SwiftUI! Who knows, but Numu is a relatively simple app that might be a really good match for SwiftUI. Plus there'd be some bragging rights in releasing one of the first (most likely) fully-SwiftUI FOSS projects... if it's even possible.

What's after that? Who knows! That's probably the next 6 months to a year of my hobby life mapped out. Knowing me, I'll find all sorts of other distractions to occupy myself along the way. Not to mention that we're only at the very beginning of where Gamebook Engine could lead... I think I've given myself a pretty full plate of projects to take care of now. But that's really awesome! I am very proud of the collection of apps I am going to have under my belt, and I think they represent all of my interests pretty well. Only thing that's missing is some sort of music app... but I've been kinda kicking an idea around in my head for a bit now... maybe I'll talk about that sometime.

---

That's it for me this week! See you next week.

