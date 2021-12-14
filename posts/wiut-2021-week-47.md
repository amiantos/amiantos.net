---
title: What I’m Up To - Week 47, 2021
date: "2021-11-28"
description: "What I did over the past, uh, week? Year? Who knows. It's been a while."
tags: ["programming", "gamebookengine", "lifesaver"]
---

Howdy! This is supposed to be my weekly post where I talk about whatever programming stuff I've been up to. But if you've been paying attention, it's been an entire year since I last wrote a blog post. That's because I haven't been doing any programming for the past year, outside of my job anyway (winky face). But this week I did start doing some programming stuff again, so... here I am, writing another post about it.

---

## Streaming

I've been thinking about streaming. After a couple trial runs playing video games, I realized I don't think I would enjoy streaming video games, so instead I decided I would try out streaming while working on programming stuff. I haven't streamed much so far, though I am streaming right now as I write this, but I feel like it's kind of enjoyable, even if no one is watching outside of two of my friends.

So, as Paymoney Wubby would say, I'm streaming *right now* live at [Twitch.com/amiantos](https://www.twitch.tv/amiantos). I'm probably not, but I am going to try to stream every time I am doing programming stuff, so there's no schedule at the moment, but if it's night time or the weekend there may be a good a chance that I am online and streaming programming junk.

Or, by the time you've read this, I've already decided it's too much work and makes my throat dry when I have to talk continuously on stream to nobody.

---

## Gamebook Engine

Over the weekend I got an email from someone that said:

> all my friends used to play games on gamebooks but now we cant find how to download it anymore.
>
> theres a testflight link on https://github.com/amiantos/gamebookengine but my friend cant get it to work.
>
> how do i download gamebook engine in 2021??
> 
> thanks so much for making this cool app!!!!

This is pretty cool, because I didn't honestly think anyone ever used Gamebook Engine. But it turns out some people have, and have even developed a little habit of making gamebooks with or for their friends. That's pretty fuckin' neat if you ask me!

So yesterday I loaded up Xcode and pushed out a new build so that you can now [download Gamebook Engine to your iOS devices](https://testflight.apple.com/join/FjHHmoVy) if you so choose.

In a response, this user brought up some feature suggestions that I added to the Issues on GitHub, because I think they're pretty decent ideas. And besides, who are you going to listen to if not the people who use your own app more than you do?

> do you think you will add a way to organise variables (like put them in folders for them or something)? it would also be cool to separate a game into parts or chapters or something so the overview isnt so complicated for big games

---

## Life Saver

I got a second email over the weekend from a fan of my [Life Saver screensaver](https://github.com/amiantos/lifesaver) and wondered if there was any chance I would release an M1 compatible version.

I had been previously contacted by a user of PiBar asking for an M1 version and doing so was simply a matter of opening Xcode and doing an new build of the app. So I figured I could do this for Life Saver.

Since the last release of Life Saver nearly two years ago, someone submitted a pull request to add the additional grid sizes from the Apple TV version to the screensaver. They did it in kind of a sloppy way, so I had to do a tiiiiiny bit of work to clean up the UI, thanks to a suggestion from my friend Dan while I was streaming the session. But other than that it was no work at all, and I pretty quickly stumbled my way through code-signing the new version of the screensaver and punted it off to the person who emailed me.

However as I started writing this post, I got an email from them saying that the screensaver still does not work on their M1 mac. So that's too bad. I'm going to have to look back into that and see if there is some special build option or something else I'm going to have to do to get M1 compatibility.

---

## Laravel?

I recently started playing an idle game called [Melvor Idle](https://melvoridle.com/), which I like quite a bit. I went poking around the website version only to see that it was built somewhat similarly some of my earliest PHP-based projects, just with more javascript.

I've been hankering for several months for a new project to work on, and Melvor inspired me to pick up web development again. I like iOS development, but I just want to fuck around, and I don't want to have to learn SwiftUI and Combine and whatever other new stuff is going on in the world of iOS. I also feel like web apps can reach more people more easily, so more people will mess with my stuff than those who have to download an app and so on. And besides, if I build something awesome for the web, I am more than capable of building an iOS version, so there's no real loss here.

So, inspired by Melvor's use of PHP, I decided I wanted to learn [Laravel](https://laravel.com).

Laravel looks really cool, and with stuff like [Laravel Livewire](https://laravel-livewire.com) you can do a lot of dynamic stuff without manually writing a bunch of unique APIs and dealing with AJAX calls everywhere. So it seems well-suited to building some sort of web game, either an idle game or some other sort of interface-based game.

I've only started dipping my toes in, but it seems really cool so far, except for the fact that I have to start writing semi-colons everywhere in my code, which is pretty damn jarring as a python developer. What can you do?

---

Well, I think that's it for me this week. I'll probably continue learning Laravel and faffing about on my stream. So, if you're around and bored, and want to listen to my incredible voice, it's free of charge over on Twitch. Have fun!