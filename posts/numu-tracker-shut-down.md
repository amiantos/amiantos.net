---
title: Numu Tracker Shut Down
date: '2020-01-27'
description: "This week I had to shut down Numu Tracker. Here's why, and some thoughts."
tags: ['programming', 'numu']
---

After three years of Numu Tracker being a part of my life (the first year of it spent slowly developing it), I am moving on and shutting it down as of today. There's several reasons for it, so I figure I will briefly talk about them as honestly as I can, and also reflect on what I learned along the way.

## Why shut it down?

 As Numu got more popular, I ended up getting forced into a fairly expensive VPS package by Namecheap. Originally it cost about $10/mo to host, and then it skyrocketed up to $60/mo. This is mostly because I wasn't aware of CDNs (like S3 or DigitalOcean's Spaces) when I was building Numu and was hosting all the artist and cover art on my server directly. When I needed more space, Namecheap balked at the amount of files I had, or perhaps at my bandwidth/cpu usage, and pushed me into a VPS package.

 At this point I had my first real programming job and had begun working on a Python-based API. I liked it a lot, so I decided to get around this crazy hosting cost for Numu by rewriting Numu Tracker from scratch, to fix some of the issues it had as well as get on some different hosting. I even reached out to some people to see if I could get free hosting, since Numu was open source, and DigitalOcean agreed to host it for free and immediately gave me some credit to use for it. Things were looking up!

 However, I procrastinated on building the new version. When I eventually worked on it again, I got the new API into a semi-working state but eventually turned away to work on other things. I was just having a lot of trouble summoning enthusiasm for a project that was originally "hacked together" and was now turning into something I wanted to make more "professional". Over the course of a year and a half I would come back to Numu 2.0, put a little work into it, get bored or overwhelmed, and stop. I ended up working on other stuff instead (like Life Saver, Aeon Garden, and Gamebook Engine). My desire to build something truly impressive was outmatched by my desire to work on other, momentarily more interesting things, that I could sloppily wander through.

 The final straw came about a week or two ago when I received some bad financial news. I decided to let it inspire me to finally finish Numu 2.0 and I sat down to start to work on it with clear eyes and a full heart, but quickly lost steam. The new version was shaping up to be not _quite_ as good as the current version, and tt started to look like a lot of work, and not fun work, but hard work. I started to ask myself: I don't make any money on this, and I don't really want to ask anybody for money for this, and I probably shouldn't be spending my time working on something that isn't going to make me any money, so should I be doing this?

 The answer was, obviously, no. I felt pretty bad about it and was morose for a day or two. It's depressing to kill off something you've built, that you are (or were) proud of, that you know other people like a lot. I felt a bit like I was letting down all the serious music fans like myself who regularly used Numu, especially because there had been points I "promised" that Numu wouldn't shut down. That's kind of a big downside to program development as your "artistic hobby" in contrast to other mediums: paintings, recorded music, the written word, film or video; once published and given to someone, these things essentially last forever. You can't "take it away", typically, from someone who has it and loves it, and its continued existence costs you nothing personally.

 The regret I felt about shutting it down was made worse by the fact that I had numerous opportunities to make different choices, to try to migrate v1.0 to a new host instead of insisting that I'd build v2.0 instead, or to just actually put my head down and finish it. Instead I let it stagnate and burn money. This regret was further compounded by [the flood of supportive words and thanks](https://www.reddit.com/r/numutracker/comments/etbg4g/numu_tracker_shutting_down/) that I received on the subreddit when I announced that Numu would be shutting down. One person reached out to me privately and offered to pay for 3 years of Numu hosting, assuming he could recoup his costs later on down the road. (After I told him how many users Numu had, and what growth was like, he agreed with me that it would likely not be worth it for him.)

 As of today, Numu is gone. The app is a useless carcass only fit for deletion. There are a couple other apps on the app store that do similar things, but it's mostly with sadness and not pride I say that they are not nearly as good as Numu Tracker was. They're not as well designed, they're not as thorough, and they just don't feel as solid and nice. Numu Tracker was one of a kind, and music fans are worse off without it.

 ## What did I learn?

I learned a couple things about running an app that I think would be valuable for anyone else considering running their own app.

**Encourage people to give you money**

This is a personal failing. I like to be generous and altruistic, perhaps to a fault. I have a "hacker ethos", according to a friend of mine, where I believe that all software (or artistic creation) should be free for all, and that money will naturally flow from that. I think this is a symptom of my privilege, and my "youthful mindset". I've never been so hungry that I've felt the need to charge for things I build, and on top of that, my impostor syndrome leads me to believe that nothing I've built is *worth* money to other people.

I was mistaken. Numu was worth money, at least to some people. Eventually I started to ask for money, but I did it gently and in a way most people wouldn't notice, so it did me no good. It would have been better for me to build some sort of donation option into the app using in-app purchases. Instead I tried linking people to my blog in the hope they'd then go to my Patreon, and feel generous.

This is too much to expect of people. At a sufficient scale, it can work, but you need millions of fans or users. You have to expect that only 0.5% of your users are enthusiastic enough to go out of their way to figure out how to give you money. If you've got millions of fans, this is fine because that's still thousands of people. But when you only have thousand users, that's maybe five people if you're *lucky*.

When I first published Numu, I did have IAP that were needed to unlock push notifications. But nearly no one downloaded the app, and no one paid for the notifications. I should have stood my ground, but instead I ended up making the notifications free and open sourcing the app for some publicity. Eventually, RecordBird shut down, and a flood of users came into Numu, and it would have been valuable to have an IAP around at that time because RecordBird users really wanted to find a service that *wasn't* going to shut down, so I bet they would have been happy to pay for it. But they had no option to.

In short, you should charge money for your app if it costs you any money to run. It's great to think that you'll always be financially capable and willing to foot the bill for all your users, but that can get out of hand especially if your app grows considerably. Even if the option is just voluntary donations, it's better than nothing, and if you get into a tight spot you might find that your users are compassionate and generous, willing to donate when they hear you really need the financial support to keep the app alive.

**Other things I learned...**

The main other thing I learned is that users are not very vocal. If your app stops working or has bugs, they will stay quiet about it for a while. At one point I'd completely broken the app for several days, and only one person (out of a thousand or so) reached out to me to ask what was going on. You can't rely on your users to notify you about problems in your app. Some will, but most won't, so you need to be proactive in trying to find and fix these bugs on your own.

App development is hard work, especially on iOS. iOS is growing more complicated as time goes on. As of April 2020, apps must have an "iPad version", which Numu never had (though it came close to having a very ugly one last year). To make a "first class" iOS app, you have to worry about other stuff like accessibility concerns, state restoration (another coming requirement), and some other stuff I can't think of now.

It can also be unrewarding: I had to sit by and watch worse apps get "Featured" in the App Store, on Product Hunt, or show up on Apple blogs, because they somehow knew the right connections to make or had other advantages. I think Apple never "Featured" Numu on the App Store because it promoted services other than Apple Music (similar apps that *only* work with Apple Music have been featured, and they were much worse than Numu).

## What's next?

So what's next for me? I don't know exactly just yet. I think I am going to try to focus on a bigger project that I can charge money for right out the gate, some sort of game. I've got a solid idea, but I'm not ready to talk about it just yet.

Will Numu ever return? I haven't ruled it out. If I find success with some other projects, and I continue to miss Numu, maybe I will raise it from the dead as a subscription service (so I do not repeat the same mistakes). I think it'll be a year or several years, and I hope in the meantime Apple Music or Spotify can pull their heads out of their asses and provide their users with new release lists that render an app like Numu unnecessary. I guess we'll see.