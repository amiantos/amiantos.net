---
title: What I'm Up To - Week 35, 2019
date: '2019-09-01'
description: "What I did over the past week: BRGamebookEngine"
tags: ['programming', 'gamebookengine']
---

Hello! This is my weekly post where I talk about what I did over the past week. This week I really just worked on BRGamebookEngine in all of my free time, so... here we go.

---

## BRGamebookEngine

I've been feeling really motivated to finish what I'd consider the alpha version of [BRGamebookEngine](https://github.com/amiantos/gamebookengine), so I basically worked on it obsessively all week long, including most of last Sunday after I wrote [that WIUT post](/wiut-2019-week-35). 

Looks like last week I hadn't implemented any of the Rules stuff, and talked about how it was kind of daunting. To explain what the Rules feature is, in BRGamebookEngine you can set up attributes, which you can use to track information or changing data over the course of the game. You use them with Decisions, by setting up Rules that determine if the decision should be available by doing a check (or several) on the player's current attribute values.

For example, say you've written some sort of dungeon, and the player needs to pick up a key to progress. You can create an attribute named "has key", and when they've landed on the page where they pick up the key, you can set that attribute to `1`. When they go back to the room with the locked door, you can set up a decision (like "Unlock the door") that will only appear if "has key" is equal to 1. This is just one possible use of the feature, there's many other ways to use it.

So last week I was a little worried about it, but this week I cranked out a working (but rough, code wise) version of it. It works great! [The code to check the rules](https://github.com/amiantos/gamebookengine/blob/a8ec7d0f52c84f62912954eabf8da3e7701db35e/BRGamebookEngine/Views/Playing/PlayPageViewController.swift#L60) to see if the Decision should display is pretty simple, just not particularly pretty, and it hasn't been refactored or considered past the "well, it works!" stage.

A part that did prove somewhat tricky was adding the ability to export and import games. I wanted to have them export to JSON, and that was actually pretty easy. I probably didn't do it in the most efficient / "swifty" way, by writing all the serialization myself, but it worked. It spits out [great JSON](https://gist.github.com/amiantos/2e22c0ca71d4d070051de154cb9d22f7) if you ask me. I mean, I'm not happy about the blank rule lists, but I can fix that later! Whatever.

The hard part was importing them back in. I kind of foolishly decided to try to write my own JSON decoding, which quickly turned into a gigantic mess that even SwiftyJSON couldn't help. I thought it would be faster than [doing it the right way](https://learnappmaking.com/codable-json-swift-how-to/), but it turns out... it wasn't. When I implemented the proper solution by building another copy of my data model out of Codable structs, the code to then turn those structs into my CoreData models was [really easy to write](https://github.com/amiantos/gamebookengine/blob/a8ec7d0f52c84f62912954eabf8da3e7701db35e/BRGamebookEngine/Game%20Storage/CoreDataStore.swift#L65), though I suppose it also looks kind of like a mess, but sometimes life is like that.

Everything else I worked on was mostly kind of polish related, adding alerts on deletion, getting the Document Picker stuff to work (you can import a game right from the Files app, and browse your files in the app, and the `.gbook` files it exports have a cute little icon), and experimenting with different UI stuff. Nothing too exciting.

I'm really hoping to be able to get a version of the app together by tomorrow that I can submit to Apple Beta App Review so I can share it with a designer friend of mine (who is essentially responsible for Numu Tracker's design) to get his feedback and thoughts. Right now the app is a skeleton, so it's not in need of refinement, it needs a full blown design pass and deep consideration!

This week I decided to actually research what the landscape for this sort of thing is, and I was kind of surprised to see that there are already _several_ thriving communities built up around apps that create "choosable path" interactive fiction. Some are entirely web based (like [ChooseYourStory.com](https://chooseyourstory.com) and [Infinite Story](https://infinite-story.com)), then there's the very interesting [Choice of Games](https://www.choiceofgames.com) who not only write their own games in [their own scripting language](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/), but [seek out authors](https://www.choiceofgames.com/looking-for-writers/) of games and novels and publish them on the app store. On top of that, there's a pretty popular gamebook creator called Twine, that [exports games to the web](https://twinery.org). This one looks really nice! And there's a lot of [games published on itch.io that use Twine](https://itch.io/games/tag-twine) (including the famous "Depression Quest"!? I didn't know).

Needless to say, if I thought for a second that choose your own adventure stories weren't popular, I'd obviously forgotten that on the internet there isn't any such thing as a "niche" anything. In comparison to everything out there, BRGamebookEngine is both simpler, and fancier, already. Just that it's a easy to use GUI interface for creating a game gives it a leg up on some of the options out there, and being able to share your games _without_ creating an account and putting up on a server I think is a big plus. If you want to sell your games, you still can by repackaging your game into your own fork of the iOS app.

All in all, I feel pretty good about BRGamebookEngine's prospects of being something that people actually use. All I really wanted was to build something fun for people to play with. If it grows beyond that, that'd be pretty cool, but it's not a requirement. I don't want to be the next Twine, just the front page of that website looks like it took more effort than I really want to put into the entire website for my own app.

---

I think that's enough blah blah for now. I'll see you next week!