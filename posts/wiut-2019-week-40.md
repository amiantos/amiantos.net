---
title: What I'm Up To - Week 40, 2019
date: '2019-10-06'
description: "What I did over the past week: work on Aeon Garden begins against in ernest!"
tags: ['programming', 'aeongarden']
---

Howdy! This is my weekly post where I talk about what I did over the past week. This week I took a break from Gamebook Engine to give a little love to Aeon Garden.

---

## Aeon Garden

Last week I talked about how "when I get Gamebook Engine out" I'd turn my attention back to Aeon Garden. Well, apparently I didn't want to wait that long, because I've turned away from Gamebook Engine and toward Aeon Garden already.

This week I opened up the `save-support` branch I'd started back in May and finally fleshed it out. I'd waffled several times over how I wanted to store saved tanks and creatures, between using Core Data or [GRDB.swift](https://github.com/groue/GRDB.swift), and after my positive experience using Core Data for Gamebook Engine, I decided finally to use it.

I'm using it a little differenty though compared to the implementation in Gamebook Engine. In GE, so much editing is going on that it makes sense to pass the `NSManagedObject`s around everywhere, but with Aeon Garden it makes less sense to do it that way, plus who knows if I'll stick with Core Data as the backend in general, so I went with abstracting the Core Data stuff away from the main operations.

Implementing this was fun and could happen in parts leading to smalls wins of their own. Step one was to convert all the nodes (tank, creature, food, bubble) to [Struct entities](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Models/Structs.swift), because I knew that the process I wanted to follow would look like this: User hits save button -> Tank is converted to a Struct -> Struct is then sent to Core Data to be saved.

Once I got all the structs set up with their `from(node: SKNode)` function, I could wire up my Save button to convert the tank and print it out in the debug to see it working. After this, the next step was to convert a tank struct, and all its children, back into nodes. Because the struct is the core model object of the app, most of this is handled by nodes themselves, you can see [an example of this in AeonCreatureNode](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Nodes/AeonCreatureNode/AeonCreatureNode.swift#L68). Doing stuff this way means the [scene restoration code looks super simple](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Models/Structs.swift#L76).

After hooking up my load button to grab the saved struct and restore it, I had an extremely basic save & load functionally working, with no persistence just yet. This was a nice small win! The next step would be to actually save the tank to Core Data. I ended up creating [one big function](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Models/Core%20Data/CoreDataStore.swift#L84) for converting the structs to `NSManagedObject`s to store in the database.

After this I needed to be able to grab a tank from Core Data, and turn it back into a struct. This was a bit of a slog just because of the amount of copying and pasting variable names, and at this point I'd done this back and forth a couple times. Every `NSManagedObject` needed its own `toStruct()` method, you can see [the method for a tank right here](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Models/Core%20Data/Models/ManagedTank%2BCoreDataProperties.swift#L33) to get an idea of how it works. Nothing too fancy!

With this in place it was just a little more work to get saving / loading working completely. I created a simple method to [get all the tanks that had been saved in Core Data](https://github.com/amiantos/aeongarden/blob/7c39eec437b2b156083023e32e5211ff25115616/Aeon%20Garden%20Shared/Models/Core%20Data/CoreDataStore.swift#L68), automatically converting them over to the structs. Then I wired up some code that grabs the most recently saved tank, and loads it into a new scene on start up. I additionally wired up a `Timer` that will save the current tank every 10 seconds, a little *auto-save*, if you will.

At this point I felt pretty much like I accomplished the *bare minimum* to consider this branch complete. I really just wanted to get tanks to be persistent, and that's what we've got now, so I created [a very large pull request](https://github.com/amiantos/aeongarden/pull/24) and merged it. If you check out that PR, you can see that *a lot* of code had to change and get moved around. Aeon Garden was *not* set up to make it easy to save and load tanks, so there was a lot of refactoring involved to get things into a more copacetic state. There's still some weirdness to work out, especially with loading the saved tank as soon as the app launches.

Despite all this progress, we're still in early days of the save / load feature, there's some UI to create around it (so you can switch between saved tanks) that'll be a little challenging since it'll have to work and look good on both tvOS and iOS.

I also need to get "favorite creatures" working, which is my next priority. When you favorite a creature, it needs to get stored in Core Data. When you create a new tank, you can select to have it populated initially by your favorite creatures. I haven't really decided yet if there are any other perks to a favorite creature. At one point I made favorite creatures immortal, but that seems kind of cheap! I'd hoped to get "favorites" working by the end of the day, but I think I'm out of time for the night.

---

## Other Stuff

This week I added Gamebook Engine to the list of apps shown on the index page and under every post. I also added a big ol' button nagging people to become a patron, 'cause money is the best form of validation.

---

That's it for me this week, see you next week!
