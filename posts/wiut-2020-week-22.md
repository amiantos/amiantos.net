---
title: What I'm Up To - Week 22, 2020
date: "2020-05-31"
description: "What I did over the past week: PiBar for macOS 1.1 and work on PiBar for iOS begins"
tags: ["programming", "pibar"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## PiBar for macOS 1.1

This week I worked on and released PiBar 1.1. This release revolved around adding some often requested minor features and fixing some bugs by re-architecting parts of the app. You can see the complete [list of issues and pull requests](https://github.com/amiantos/pibar/milestone/2?closed=1) that went into this release on GitHub, but I'll also write about each one below.

**Launch at Login**

While I know how to add an app to my Login Items in macOS, a lot of people don't, and I was asked for a way to automate this process. I did a tiny bit of research and landed on this [Launch at Login package](https://github.com/sindresorhus/LaunchAtLogin). This is the first time that I've used an external dependency that doesn't have a Cocoapod, and adding an app via Carthage is not as straight forward. Plus there were [other issues](https://github.com/sindresorhus/LaunchAtLogin/issues/20#issue-386751556) with using this plugin. Aside from that initial setup, this plugin works well. There's a caveat that any login items added this way don't appear in System Preferences, but that's [by design for some reason](https://stackoverflow.com/questions/14811425/using-smloginitemsetenabled-app-does-not-show-under-login-items/15104481#15104481).

**Allow controls for no-password Pi-holes**

I didn't realize you could simply remove password protection from your Pi-hole web console, and in those cases you don't need an API key. So PiBar 1.0 was not designed to account for this, it assumed if there was no API key then you didn't have the ability to authorize. There was a workaround where you could put in a junk API key into PiBar for that Pi-hole, but workarounds are no good.

For 1.1 I ended up redesigning the settings screen completely, so that it opens a separate slide-down sheet for adding and editing Pi-holes. This de-clutters the Preferences UI as well as makes it easier to expand the UI for adding Pi-holes, which would be needed for other feature changes. It also gave me a chance to refactor the connection test process to account for these no-password Pi-holes. (I also needed to create a new `PiholeConnection` struct, which I talk about below.)

**Launch Admin Console from menu**

In early versions of PiBar, I had an option to launch the Admin Console (web interface) from the app, but when I redesigned it to support multiple Pi-holes I forgot to add it back in. Users requested this almost immediately on release, and one user chimed in saying that they actually have a reverse proxy set up so they have to use a different URL to access the web interface so they'd like to be able to customize the URL.

To add this, I had to do a couple things. First up, the `PiholeConnection` struct in 1.0 did not have an "admin URL" column. This was too bad, because this is how I was storing connections in `UserDefaults`. I ended up building in a little migration script when `Preferences.standard.piholes` is used to fetch the Pi-holes from local storage. It creates all new `PiholeConnectionV2` structs which have attributes for the admin console URL as well as a flag for whether the connection is password protected (the "Test Connection" step in the preferences screen automatically sets this flag).

I added a static method to `PiholeConnectionV2` which can be used to generate the admin URL. By default when you create a new Pi-hole in PiBar, and leave the admin field blank, it will auto-populate with what this function generates.

To support this in the menu, I basically copied some of the code I used for the sub-menus for stats on multi-pi-hole setups. If you've got one, you get a single menu option, but if you have multiple you get a sub-menu for each one that'll long their respective admin interface.

**Editable Polling Rate**

PiBar 1.0 is set to fetch new data from your Pi-holes every 3 seconds. I heard from users that they'd like to reduce this number, both because they don't need near real-time stats but also because constantly hitting a Pi-hole that is on a Raspberry Pi might prematurely "wear out" the SD cards that they run off. This wasn't a hard feature to add: I just added a new field to the `Preferences` class to store the polling rate, and set up a new function in `PiBarManager` for changing the polling rate (which'll cancel the existing `Timer` and create a new one).

**And more...**

I took some extra time to re-architect how the `PiBarManager` class went about performing updates. Basically in 1.0 it was just very "dumb": a timer fired every 3 seconds and ran a function that fetched new summaries from every connected Pi-hole, loaded it into a dict, and when that dict was updated it would create a new `NetworkOverview` and the interface would grab it. This resulted in a lot of unnecessary extra calls to update the UI and just wasn't very efficient.

For this verison, I re-wrote [the manager class](https://github.com/amiantos/pibar/blob/macOS-v1.1/PiBar/Manager/PiBarManager.swift) to use a single `OperationQueue` in serial mode (1 operation at a time), so that I could set it up so that every Pi-hole is updated before the request to update the UI is sent to the view controller. It also prevents "overlapping" operations, where a temporary network hiccup could cause the processes to start to overlap, which seemed to be causing crashes in the app.

Operations and OperationQueues are very cool, they give you a lot of extra control over your backend operations, especially in a situation like this where you're dealing with calls to an external API that may respond whenever it pleases.

Overall I feel like the app is much more efficient and potentially less buggy over all, though 1.0 never crashed (and I'm surprised).

## PiBar for iOS

This weekend I started work on the iOS version. I drew a little wire-frame of what I thought it should look like, and started getting the project organized to support the two different targets (macOS and iOS) in one workspace. So far so good! I don't have much to report here yet, but I am excited. All of the Pi-hole iOS apps on the App Store currently are ugly and poorly designed (in my opinion), and I think I can build something that will really stand apart from the rest of the riff-raff out there. PiBar for macOS is already a significantly nicer app than everything else out there, so I have pretty good faith in my ability to deliver something that stands head and shoulders above the others.

I guess we'll see!

---

That's it for me this week, see you next week!
