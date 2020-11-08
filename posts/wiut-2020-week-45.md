---
title: What I’m Up To - Week 45, 2020
date: "2020-11-08"
description: "What I did over the past week: PiBar for iOS work begins again... again"
tags: ["programming","pibar"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## PiBar for iOS

Surprise, surprise! I actually did more work on PiBar this week. It's very close to a beta release.

Monday night, I implemented the disable functionality. There were a couple parts to this. The first part was trimming back the requirements, because I had envisioned a menu where you could customize the "disable times" available by adding your own custom ones. When I got down to building the feature, I felt like this was kind of unnecessary, especially for the beta, but also in general. I decided instead that I'd just offer a wider variety of disable times compared to the macOS app: 10s, 30s, 5m, 15m, and 1 hour. That should satisfy basically everyone.

A new feature to the iOS app is that you can choose a 'default' disable time, instead of always picking from options in the menu. This'll simply set it up so that when you hit the Disable button, it'll disable it for that time limit. I'm imagining that this default disable time will also act as the default when the app is in "Family Mode". You can also specify that the app should "always ask" you how long to disable your Pi-holes for.

On Tuesday night, I sat down to start implementing the Query Log, where you'll be able to add and remove stuff from your white/black lists (which I am calling allow/deny lists, in a break from Pi-hole's lingo). All I really did was get the API endpoint in place for grabbing the query history, and didn't start to design UI for it.

If I had the icon (my friend and coworker is working on it) I'd probably be able to release it into Beta the way it is. The core functionality is there: adding Pi-holes, toggling them on and off, viewing stats about them, and so on. It works, and it works well and looks good while doing it. I can't complain. Hopefully I'll get the icon sometime this week and I can submit it to beta app review.

---

## Other Recent Thoughts

I have a really strong itch to work on a new project, especially some sort of game. Unfortunately, inspiration is sorely lacking. I simply do not have an idea that I feel is worth implementing. I have the vague idea of what kind of idea I want to have, but as far as turning that into an actual project... it's just not happening.

I also want to learn a new technology, but I can't really decide on what, mostly because I don't have an idea to implement. I was thinking about Ruby on Rails, but it seems like old news. I installed and started playing with Blazor, but I really don't care for web apps deep down. If I want to develop games, I should probably just put my mind to learning Unity? But developing a game is hard, it's a lot of work, and it's probably not particularly rewarding.

All in all... I need to jolt of inspiration. I've been pretty lucky in that new ideas come to me fairly regularly, usually nearly fully formed. Numu Tracker, Aeon Garden, Life Saver, Last Statement, and PiBar were all like being struck by lightning a little bit. Unfortunately it's just not storming right now.

At least I can focus on PiBar for iOS in the meantime.

---

That's it for me this week, see you next week!

