---
title: What I’m Up To - Week 44, 2020
date: "2020-11-01"
description: "What I did over the past week: PiBar for iOS work begins again... again"
tags: ["programming","pibar"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## PiBar for iOS

Well, another ten weeks went by without any work on PiBar. I don't really have a good excuse except to say that summer heat is oppressive and uninspiring. Either way, I picked up work on PiBar for iOS again this week and started with some small, very small steps.

First up, I got the "normalize charts" menu option working. This involved creating a new key in the Preferences module, wiring up some UI, and some delegates to push data around. I also added an "Email" option to the Get Help section of the options menu that'll help users email me when they need to. I also wired up the "Polling Rate" menus, which required some weird delegate pattern stuff just because I still feel like NotificationCenter (internal app notifications) is too magical and weird for me.

I hope to put more work into PiBar in the next month and get a beta out. There's not much else to do to get there, basically just wiring up the ability to create and pick disable times, and the popover menu for picking from them. After that is in place, I think a beta could go out and I can focus on Family Mode (which requires some snazzy work like PIN protection and so on) and the remaining small tasks (like deleting and eding Pi-holes, though I'm not sure I will bother implementing edit support, as it seems superfluous to me).

---

That's it for me this week. See you next week!