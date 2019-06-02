---
title: What I'm Up To - Week 22, 2019
date: '2019-06-02'
description: "What I did over the past week"
tags: ['programming', 'lifesaver', 'aeongarden', 'numu']
---

Hi! Welcome, this is my weekly post where I talk about, well, what I did over the course of the week. I took it relatively easy on myself this week, so there's not a ton to talk about.

---

## Life Saver

I promoted the release of Life Saver a little on Reddit (on [r/iOSProgramming](https://www.reddit.com/r/iOSProgramming/comments/bt8qy4/i_built_a_foss_screensaver_using_spritekit_an/), [r/Swift](https://www.reddit.com/r/swift/comments/btnrao/i_built_a_foss_screensaver_using_spritekit_an/)) and on two Slack communities ([iOS Developers HQ](https://ios-developers.io), [LA Design & Development](https://t.co/rsY6usV3MZ)).

Not a huge response in regards to comments or feedback, but for a simple screensaver I am pretty happy: 30 downloads total (thanks [S3stat](https://www.s3stat.com)!), and [the repo](https://github.com/amiantos/lifesaver) is already up to 20 stars. It's a nice looking screensaver, so I'm sure that'll creep up over time.

I decided that if I really can't summon the enthusiasm to work on my other projects, I can try to create a real port of Life Saver for the Apple TV. Might be fun to figure out a good UI for configuring it, and maybe it would be worth releasing on the App Store.

Also I finally wrapped up the last card in the [1.0 project](https://github.com/amiantos/lifesaver/projects/1) by adding a 'product card' to the [amiantos.net index](https://amiantos.net).

---

## Aeon Garden

Thanks to [iOS Dev Weekly](https://iosdevweekly.com) I heard about a database framework called [GRDB.swift](https://github.com/groue/GRDB.swift) that I think would be a better fit for Aeon Garden than Core Data.

The main reason is that I really just need a quick and dirty database to store save data in. Core Data has a lot of extra functionality that I just don't need. I also really like how opinionated the author of this framework is, [this bit he wrote about how to handle associations is great](https://github.com/groue/GRDB.swift/issues/87#issuecomment-234773923) and I could relate to a lot of his points. That issue turned into [a bit of an essay on good DB design](https://github.com/groue/GRDB.swift/blob/master/Documentation/GoodPracticesForDesigningRecordTypes.md) that's worth a read.

I haven't started implementing this yet (I'm dragging my feet big time), but I'm looking forward to it. There's a lot of challenges in making this cross platform with a screensaver option. For example, tvOS doesn't really support a persistent local database (it could be deleted automatically at any time) so it's important that whatever data manager I come up with can deal gracefully with the fact that sometimes there just isn't going to be a reliable local cache of save data and it's always going to have to hit the server.

I don't even want to think about the special stuff needed for the screensaver support... but I could implement that in a lot of different ways.

---

## Numu & Deep Links

One of most vocal Numu users posted on the subreddit that the [latest Numu beta was about to expire](https://www.reddit.com/r/numutracker/comments/buqzli/numu_133_950_ios_beta_expires_in_2_days_any_new/) and asking if there was going to be a new beta. This, I feel, is one of the shortcomings of using Test Flight: it's not very easy to force or direct beta users to switch over to the App Store version of your app. If I let the beta expire, it could mean that around 100+ users just stop using the app (if they don't go out of their way to get the App Store version).

Either way, I spent a little bit of time to [add Amazon and Deezer](https://github.com/numutracker/numutracker_ios/pull/60) to the list of music services you can enable. Deezer support works just fine (similar to YouTube) however I ran into a lot of issues with Amazon, because their Amazon Music app doesn't support deep-linking, and the deep-linking support for search in the core Amazon app is pretty lousy, _and_ it's impossible to jump cleanly from the Amazon app to the Amazon Music app. It's a bad user experience, so just like I did with SoundCloud support, there's a warning message telling users it's bad when they turn it on.

Speaking of SoundCloud, their [developer support page](https://developers.soundcloud.com/support) says they're answering questions on StackOverflow. So I went over there to ask [about why search deep-linking is broken](https://developers.soundcloud.com/support) and the response I got from someone was pretty useless and not from one of their developers at all&mdash;and he edited my answer to remove any reference to the SoundCloud engineers. Also, my question got down-voted, despite being (I feel) valuable and relevant. I know I'm joining an ocean full of people who've had bad experiences on SO, and this one is super minor. I know SoundCloud is struggling, but damn, maybe they don't even have a mobile team anymore.

Long story shorter, it baffles me that these mobile apps by "big players" are actually broken in this regard. It's not just Numu that is negatively impacted by this, it's all of their customers who might link other people to search pages on these services. Maybe this is a very rare, edge-case occurrence for these apps, but it's a bad experience. If YouTube can get it right (and their apps are terrible iOS citizens) I don't understand why SoundCloud and Amazon can't.

---

That's it for this week. See you next week!