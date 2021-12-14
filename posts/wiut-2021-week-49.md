---
title: What I’m Up To - Week 49, 2021
date: "2021-12-12"
description: "What I did over the past week: I built and released dotBeat, a small macOS menu bar app."
tags: ["programming", "wiut", "dotbeat"]
---

Howdy! This is my weekly post where I talk about whatever programming stuff I've been up to. Let's just dive right in!

---

## dotBeat Internet Time

You might have noticed that last week I released a small macOS app called [dotBeat Internet Time](https://amiantos.net/dotbeat-internet-time/). Let's talk a little about the why and how I built it.

When I started streaming a few weeks ago, I figured it would be a good idea to think of future ideas to build on stream. I even started [a GitHub Project for stream ideas](https://github.com/users/amiantos/projects/2/views/1). Earlier in the week, my friend [Dan Crum](https://dancrum.straw.page) and I had been talking about the glory days of the internet, and one of us mentioned [Swatch Internet Time](https://en.wikipedia.org/wiki/Swatch_Internet_Time), a throwback to 1998. I thought of this when coming up with project ideas, I thought it'd be pretty easy to create a menu bar app to show the internet time, and threw it on.

Before setting to work however, I wanted to size up "the competition", to see what else was out there already. 

The first app I found, [BeatBar](https://mcmxcix.com/BeatBar) does the job, basically. It shows the internet time in the menu bar, and then features a drop-down SwiftUI interface for converting internet time to local time and vice versa. There's a couple downsides to this app, in my opinion:

1. It uses SwiftUI, which means you must be running macOS Catalina or newer, which I learned with PiBar is a big negative to some people.
2. The drop down UI is confusing, with two sliders that change times in a weirdly arbitrary way (the top slider does increments of 10 .beats, the bottom slider does increments of 15 minutes).
3. The app is priced at $4.99 in the Mac App Store. That seems like a lot of money to me.

Next up, [iBeatTime](https://apps.apple.com/us/app/ibeattime/id1354270083) in the Mac App Store is a free app, which also displays the internet time in your menu bar. It has a 'converter' interface for changing your time to internet time and vice versa. Somehow the interface ends up being even worse than BeatBar, with just two fields and you have to select which conversion you want to do. This makes little to no sense to me, but at least the app is free.

[BeatTime](https://beattime.mulot.org) has apps for every platform, but the macOS app is basically a glorified widget and doesn't appear to display the time in the menu bar.

There are also a couple iOS apps in the App Store, like [Internet Beat](https://apps.apple.com/us/app/internet-beat/id304080578) and [Swatch Beats](https://apps.apple.com/us/app/swatch-beats/id1345922491) and they all look pretty terrible. There's an Apple Watch only app, [@Watch](https://apps.apple.com/us/app/watch/id1440309007) which doesn't look too bad.

So all in all I came away with the impression that there's definitely room for improvement in regards to the apps out there currently. They either have somewhat bizarre UX or just poor design and appearances in general. I figured I could definitely do better, though there isn't exactly a lot of space for improvement: displaying the internet time in the menu bar is pretty straightforward, and the 'converter' function doesn't seem that elaborate. In one app I saw (not sure if I found it again and linked to it above) the 'converter' functionality allowed you to set a timezone. This seemed like a good idea to me: when you receive an internet time, you obviously need to convert it to your local time; but when you are *sending* an internet time, it becomes more important to be aware of what the other person's timezone may be. You don't want to set an internet time that is going to be 3AM for the recipient.

But what does a good UX for that look like? The one app that had this feature just had a bunch of timezones in a drop down. This works, I guess, but you have to already know what timezone the person is in, and when you have one timezone picked, you can't see the others. So I figured... why not display them all? Additionally, I simplified the 'selection' interface down to a single scroll bar. This scroll bar adjusts the .beat from 0 to 999, showing you your local time the whole way. No need for multiple scroll-bars or different inputs.

You can watch me build most of the app and ruminate over these design decisions [in the VOD for the stream](https://youtu.be/-G1aLiSYF8A). The stream misses out on some of the more fun work, like programmically building out the massive timezone UI, which you can see in the final [SimulateTimeViewController](https://github.com/amiantos/dotbeat/blob/b2013348ef6e2f788f2dabca14fa312b5421a387/dotBeat/Controllers/SimulateTimeViewController.swift). You can see the code is actually pretty simple. I set up an array with all the timezones I want to display (and there are actually many more timezones than the 32 I display in dotBeat) and a fallback name in English. Then when the window loads, I iterate on that array and do some *extremely lazy* pattern matching to set up all the constraints for them.

It's really Apple's [Date](https://developer.apple.com/documentation/foundation/date), [TimeZone](https://developer.apple.com/documentation/foundation/timezone), and [DateFormatter](https://developer.apple.com/documentation/foundation/dateformatter/) classes doing nearly all the heavy lifting. You get a lot of good functionality out of those classes, namely localization. While I haven't run dotBeat in any non-English locales, it should automatically adjust the times and names of the timezones to match a users locale. If you set your mac to use 24-hour time, it'll change the times in the app to match. That's pretty neat!

As with my other projects, dotBeat is open source and free to download. You can [check out the source and download it on GitHub](https://github.com/amiantos/dotbeat). If you're interested in supporting me as a developer, you can also [purchase it for $1.99 on the Mac App Store](https://apps.apple.com/us/app/dotbeat-internet-time/id1599168929).

