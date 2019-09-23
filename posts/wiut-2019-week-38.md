---
title: What I'm Up To - Week 38, 2019
date: '2019-09-22'
description: "What I did over the past week: Yet again, more BRGamebookEngine work!"
tags: ['programming', 'brgamebookengine']
---

Hello! This is my weekly post where I talk about what I did over the past week. This is another week where I primarily just put some more time into Gamebook Engine.

---

## BRGamebookEngine

This week I took it relatively easy and mainly focused on doing some refactoring, to try to get model / controller stuff out of the views. This is my first app that uses Core Data, and Core Data _really_ encourages you to pass the direct model objects around, which seems to be discouraged typically by "best practices". My understanding is typically you'd want to wrap the model objects in some abstraction layer (VIPER does this) so that, in theory, you could switch out the database backend whenever you want. You'd pass the entities created based on the Core Data objects around the app instead.

But, since this is an iOS app, that will always be using Core Data, it doesn't make much sense to put a lot of effort into trying to abstract away Core Data. Plus, you miss out on some of the cooler features of Core Data, like `NSFetchedResultsController`, which admittedly I haven't tried to use just yet (but may be good for some views in the app). I think when you start using SwiftUI + Combine there's even more reason to just pass the model objects around, because Combine will ensure the views are all updated every time the model object changes. Nifty! But I'm not there yet, and I'm exhausted from building the UI the first time around.

My co-worker who also does iOS/Mac development says he creates frameworks whenever building a new app, which is something I'm going to have to work backward toward. It seems like good practice to use frameworks, and I never have, so it'll be a new experience but likely a minor one. I think this looks like a good guide on [how to offload your Core Data model and functions into a separate framework](https://www.andrewcbancroft.com/2015/08/25/sharing-a-core-data-model-with-a-swift-framework/) to share between projects. I'll probably check that out this week. There's several different frameworks I could create for BRGamebookEngine: a "GamebookDatabase" framework for storing and retrieving games from Core Data; a "GamebookPlayer" framework for handling game playback, and a "GamebookEditor" framework that handles all the editing functions for games. Maybe that's overly complicated, I really don't know yet.

Other than refactoring, the first "complete" version of Gamebook Engine has been 99% done for about a week now. The main blocker for me at the moment is coming up with a good "sample story" to include with the app. Early last week I downloaded an old Choose Your Own Adventure book and spent about two hours "converting" it into a Gamebook Engine game. By "converting" I mean I used the UI in my app to recreate every page and choice, copying and pasting the text from each page into the app. It was pretty easy and I identified several minor annoyances to fix in the UI. Maybe it's because I built it, but I think the UX in my app is actually really good for creating and editing your stories. It was also cool to see my "game overview" screen scale up to a game with around 100 pages. I still need to create a "generate game" function for testing that'll generate some very large games just to see how the overview runs.

But of course neither of those things can be included with the app as a sample game. I actually have to, _gasp_, write something for real. I have a draft of a silly game where you're a kid going to the store to buy smokes for his mom, but inspiration hasn't struck me again with that one. I know that the story doesn't have to be the best, but it's still pretty daunting. I don't want to write garbage, but after reading the CYOA book I converted, it's pretty clear standards aren't very high.

---

That's about it for me this week. See you next week!
