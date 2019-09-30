---
title: What I'm Up To - Week 34, 2019
date: '2019-08-25'
description: "What I did over the past week: work on BRGamebookEngine continues, and I play some retro FPS games while reliving my childhood"
tags: ['programming', 'gamebookengine', 'gaming']
---

Hello! This is my weekly post where I talk about what I did over the past week. This week I mostly focused on working on BRGamebookEngine, made the repo for it public for whatever reason, and played some old school FPS games.

---

## BRGamebookEngine

This week I put a lot more work into BRGamebookEngine. It's not anywhere near a fully working prototype yet, but it's getting pretty close. It got to the point, at one point, where the most basic necessities were in place to write a small three page gamebook, and I posted a short video on Twitter:

<center><blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This week I started working on an iOS Gamebook (aka choose your own adventure) engine. Write, edit, and play games right on your phone. This is only the very beginning and most basic functionality in place.... <a href="https://t.co/ATJmv2Anyp">pic.twitter.com/ATJmv2Anyp</a></p>&mdash; Brad Root (@amiantos) <a href="https://twitter.com/amiantos/status/1163633993956220929?ref_src=twsrc%5Etfw">August 20, 2019</a></blockquote></center>

While many changes have been made to the UX since taking the video (the editing and play views are now entirely separate, and much more) this gives a pretty good idea of what the app is trying to be.

This week the work I've been doing on the app is a lot of clean up stuff. In the video above it's all kind of a mess just to get something working to see how it feels, if I like it and want to continue. Since then I've been ditching Storyboards to remake most of the views in xibs--this has become a personal preference of mine, I think it makes it easier to reuse views and work with the delegate pattern. There's some hassles to working with xibs, like you don't get prototype cells in table view controllers, but that's really for the best, because your cells should be xibs, too!

The complexity of the one extra special feature that the app has for game development--being able to track and change attributes depending on the decisions of player, and limiting decisions by setting up rules that check those attributes--has been dawning on me as I get closer to building it. It's not super fancy, it's just unlike anything I've never built before. Basically the UI is going to look like the [iTunes "Smart Playlist" rule editor](https://support.apple.com/guide/itunes/use-smart-playlists-itns3001/mac), though I don't think I am going to build "nested rules" in. It seems unlikely to me that stories built with this tool will get so complicated that you need conditionals like `attribute1 == 5 OR attribute2 < 10 OR (attribute3 < 3 AND attribute4 == 3)` to show/hide decisions. I also strongly believe that constraints lead to better artistry, so I might as well leave it a bit limited. The only downside will be that if eventually there's strong demand for nested rules, adding support for them later might be slightly tricky, but not terrible.

Like all projects, it was very easy to get a working prototype running, but the devil is in the details and the path forward is somewhat daunting, but also exciting. I love that this project is more of a utility, where the goals are very set in stone and precisely defined. It's not one of my more "arty" projects where I'm just sort of experimenting to find something that matches my dream-like vision of the final product. That mostly just means there's a lot less faffing about, less uncertainty and doubt.

That said, I am building this so that it can lead to more arty projects for myself, but even if I end up chickening out and never get around to writing my own gamebooks, this will be a fun tool for other people to use to build their own stories if they so choose.

Oh, I'm burying the lede. I made the repo public, though I'm not entirely sure why because it's nowhere near ready for primetime. I guess you can check out what I've done so far, or fork it and finish a better version of it before I can, over at [amiantos/BRGamebookEngine on GitHub](https://github.com/amiantos/gamebookengine).

---

## Ion Fury

Earlier in the week I went to the hassle of clearing up space on my mid-2012 MacBook Pro and installing Windows 10 on it so that I could play [Ion Fury](https://store.steampowered.com/app/562860/Ion_Fury/).

I'm a sucker for retro FPS games, since I grew up playing Doom, Quake, and everything else. Everything I'd seen online of Ion Fury looked amazing: not only were the reviews pretty glowing from sources I trust (like [LGR on YouTube](https://www.youtube.com/watch?v=vBNHb236X6Y)) but the game itself simply looks incredible due to the art style and detail put into it. I just *had* to play it!

It's been a humbling experience, because it's been so long since I've played a "proper" (read: non-console) shooter that I was shocked by how *hard* it is. Even on the default difficulty setting, I found myself frequently struggling to get through some areas of the game. Not only am I not used to having to try to conserve ammo and resources, and having to find health packs (there's no auto-regenerating health, in 2019!), but even starting a new level in the same beat-up state you ended it in is a old-is-new-again challenge.

One weird thing is that, despite it being a "Build engine game", it has a new OpenGL renderer that performs *very* poorly on my mid-2012 MacBook, to the point where I have to assume something is wrong with the game. The software renderer, which by all means should probably be slower, runs much more smoothly and feels really good. It just doesn't look as nice, which is a bummer.

Ion Fury really left me with the hankering for some old school deathmatch, and unfortunately it doesn't have multiplayer, though it's allegedly in the works. In the mean time, I had to find another way to scratch that itch...

---

## Quake 2

In the absence of multiplayer Ion Fury, I turned to my fondest gaming memories and decided to see if there were still people playing Quake 2 online. It turns out, [there most definitely are](http://q2servers.com). It was especially nice to find out that there's even a quick start installer to get you up and [playing as quickly as possible](http://q2s.tastyspleen.net).

I've been playing a bit over the last couple days and it's hard to quantify exactly how happy Quake 2 multiplayer makes me. While there aren't a lot of players on at any given moment, there's one deathmatch server that always has people on it, and occasionally there are secondary servers with weird mods on it that become populated. Last night, the "railz" (a.k.a. "railgun only") server had people in it and I have to say that I haven't had that much fun gaming in maybe a decade or more. It was like reliving my childhood, nearly jumping out of my chair when I got especially impressive kills.

If you've got the hankering for some old school multiplayer action, you must download that quick start package (and [the Q2PRO anticheat client](https://antiche.at)) and join one of the servers. It'll take you back, and on a modern system it looks just as good as I thought it did back when I was 15 years old.

**Note**: If you're looking to play Quake 2 single player, I recommend using the [Yamagi Quake 2 client](https://www.yamagi.org/quake2/), and grabbing [the original soundtrack in OGG](https://www.dropbox.com/s/nvj54smouvgd96g/q2music.zip?dl=0), too.

---

That's it for me this week, see you next week!
