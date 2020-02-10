---
title: What I'm Up To - Week 6, 2020
date: '2020-02-10'
description: "What I did over the past week: work continues on Aeon Garden's auto camera."
tags: ['programming', 'aeongarden']
---

Howdy! This is my weekly post where I talk about what I did over the past week. I'm still taking it easy, mostly playing videogames, but I did put some work into Aeon Garden's auto-camera feature, which I last played with about three months ago.

---

## Aeon Garden

If you're interested in game development and you haven't been watching [Yahtzee's Dev Diary video series](https://www.escapistmagazine.com/v2/category/yahtzees-dev-diary/) you are *really* missing out. Not only is it inspirational to see him crank out so many ideas, one after another, but he's filling his videos with a lot of very interesting insights and tips for burgeoning game developers.

In [his latest video](https://www.escapistmagazine.com/v2/yahtzees-dev-diary-episode-20-breakdown-of-reality/), there's a segment on how he builds up a scene of small components, and it made me realize there is one tool that I am not utilizing to my detriment: the potential for using invisible nodes as 'anchors' for visible components. Namely, he uses an invisible node that 'bubbles' in his scene twist around (in Aeon Garden I am simply making them move back and forth randomly, while moving upward), and some invisible nodes that spin around other invisible nodes to generate the 'wave' in his game.

This made a light go off in my head a couple days later. I'd been working on Aeon Garden's auto-camera several months ago and I ended up with something that worked, but had a lot of problems. Basically, I was making the random movement of the camera work by picking a random point, and then moving the camera there. This worked okay, but one big problem was keeping the speed of the camera consistent. When I moved to a point nearby, it moved slowly; if it moved to a point far away, it moved very quickly (because the movement happened on a set timescale, like 3 seconds). Now, I could have fixed this by, say, increasing or decreasing the amount of time the movement should happen based on the distance the camera would move. But that seemed like a kludge.

Yahtzee's video made me realize that my issue here could be solved more elegantly by using an invisible "camera body" node that moved around the scene with a semi-physical presence. Basically, it would work the same way the creatures do, with physics-based movement (thrust and rotation). Just update the point it should move to, and it would gracefully 'turn' and move to the target at a consistent speed.

My camera itself was already set up so that you could give it a target node, and it would follow it. Once the "camera body" was in place and was moving around the tank properly, all I had to do was update my camera logic so that it could follow the "camera body" around the tank. Now when the "auto camera" kicks on, all it does is stick itself to the "camera body".

This works *really* well. What's great about it is that the "body" moves smoothly at all times, so if the target changes, it'll change direction in a sweeping arc. There's not going to be any hard bounce, as if it hit a wall and changed course. It looks really nice in practice.

After I got the movement in place, I added some random zoom changes, so as it pans around the tank it'll zoom in and out over time to offer a variety of perspectives.

All in all, it was a very successful couple of hours of programming. I cleaned up the code in a lot of nice ways, by removing the camera logic from the scene itself, and refactoring it into a new "AeonCameraNode" class that handles all the auto-camera stuff itself. You can see all these changes in the [Auto Camera pull request](https://github.com/amiantos/aeongarden/pull/26/files) I have open now.

I had more elaborate goals for the auto-camera, namely that sometimes it should target a specific creature and show you the stats for it. I don't think it'll be too hard to figure that part out. On top of that I need to implement a "minimal UI" to use in the auto-camera state, so you can still see tank stats or creature stats when relevant, though I am waffling on whether this is a good idea because I'll need to implement a 'No UI in auto-camera mode' state so the Apple TV and iOS apps can run in 'screensaver mode' basically.

Speaking of... I feel like the screensaver version of Aeon Garden is basically done at this point. I need to come up with a way to persist the tank between runs, but other than that it looks really nice with the auto-camera engaged. I'm happy!

---

That's it for me this week, see you next week (maybe)!