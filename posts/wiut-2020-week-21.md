---
title: What I'm Up To - Week 21, 2020
date: "2020-05-24"
description: "What I did over the past week: I built and released PiBar"
tags: ["programming", "pibar"]
---

Howdy! This is my weekly post where I write about whatever programming-related stuff I got up to in the past week.

---

## PiBar

About two weeks ago I bought a [Raspberry Pi Zero](https://www.amazon.com/gp/product/B072N3X39J/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1) so that I could set up a [Pi-hole](https://pi-hole.net) at home. If you don't know, Pi-hole is a bit of software that can block advertisements and tracking scripts network wide at home. That's the easiest way to explain what it is. Why use it instead of just an adblocker? That last caveat, "network wide". This'll block stuff on your iPhone, iPads, Apple TVs, and so on, as well as blocking any nefarious stuff your "smart" home devices might be doing (like Roku sending everything you're watching back to their servers).

One cool thing about Pi-hole is that it has a nice web-based admin dashboard that shows you statistics about how many DNS queries are going out and being blocked by it. I pretty quickly decided I wanted to be able to see these stats easily without having to launch the admin interface. I went looking around the internet for software to do this, and none did it in the way I wanted it done. I saw that Pi-hole had a web API, and since I'm very well versed in using APIs to build software, I immediately went to work and by the end of Sunday I had the basics in place: showing stats in the menu bar, and toggling the Pi-hole on and off from the menu.

I wasn't really sure what to name it. Briefly, in a Figma document, I had named it "Hole Stats". I ended up talking to a co-worker I'm friends with and I floated the idea of calling it "PiBar", and he liked it. While I was looking around on Noun Project for pie icons, he suggested that if the app is called PiBar, maybe the icon should be something like a McDonald's apple pie, because that's a pie in bar form. I thought this was hilarious and perfect for a macOS app, and asked him if he wanted to make the icons for it. He agreed, and set to work.

On Monday, another developer posted a macOS menu bar app to /r/pihole on Reddit and I was actually pretty disappointed. I felt like my thunder had been stolen, the wind taken out of my sails. This guy beat me to it! But very quickly I saw that there were a lot of suggestions (or complaints) coming in about his app: 1.) His app only supported Catalina users, because it was built with SwiftUI, so there were a lot of users who simply could not use it; 2.) His app did not show the stats right in the menu bar, you had to hit the menu bar icon to see the stats; 3.) His app did not support multiple Pi-holes, which I hadn't planned on supporting but now seemed like a no brainer because so many people were requesting it; 4.) His app did not have a keyboard shortcut for toggling the Pi-holes on and off.

On Tuesday, I spent some time quickly re-making my app so that it could support multiple Pi-holes, as well as baking in support for a keyboard shortcut (which can be turned off). At this point I was feeling pretty frantic, I really wanted to release the app as quickly as possible just in case someone else made something just as good before I got a chance to release it. Unfortunately, the icon was taking my co-worker longer than expected. I ended up using this extra time on Wednesday to do a major refactoring of the app to make extra fool-proof and bug free. At the time I was pretty disappointed the icon was taking so long, but in retrospect I am glad that it did because it forced me to spend some extra time on making the app better and better.

Very late Thursday night, around 1 AM, he finished the icon and I was able to submit the app to the App Store. When I woke up on Friday morning, I knew there was no guarantee that Apple would manage to review the app before the long Memorial Day weekend, so I went ahead and launched the app on the /r/pihole subreddit. You can see for yourself, [the response was extremely positive](https://www.reddit.com/r/pihole/comments/gomprz/pibar_for_macos_v10_query_stats_controls_in_your/). I also posted the app on /r/swift where the response was also [very positive](https://www.reddit.com/r/pihole/comments/gomprz/pibar_for_macos_v10_query_stats_controls_in_your/). I posted the app on Hacker News, where it was ignored. On Saturday, at the urging of someone from the Pi-hole subreddit, I posted it on /r/macapps where it was also [positively received](https://www.reddit.com/r/macapps/comments/gp6sg4/pibar_for_pihole_manage_your_piholes_from_your/). I did a little guerrilla Twitter marketing where I responded to a lot of people who had complaints about the other guy's app, letting them know that my app had the features they wanted, and that proved fairly effective as well.

I can say that the app has done well. I released it as a free download, and when Apple finally approved the app (after a little back and forth where they rejected it because they couldn't test it without a Pi-hole, and I responded with a video and links to the reddit thread showing them that people are using and like the app a lot) I put it up for sale for $4.99. (The other guy's app was up for $3.99 and since my app was better and did more I figured $4.99 was a fair price.) A good amount of people have bought it, actually a fairly surprising amount, and I am extremely happy about it. Around 600 people have downloaded it for free as well, so it's definitely very out there and in the wild.

PiBar is a happy accident that I can look back on and act like it was planned. Just a couple weeks ago I was thinking about how the "trick" to successful app development is to find a passionate, dedicated audience that is being under-served by current software developers. I didn't get the Pi-hole to build software for it, but it turns out the Pi-hole community is exactly what I was looking for: These are people who are privacy conscious, so they're more likely to use Apple products (I think); they're also intelligent and technically capable people, which translates to people who are fairly affluent and have money to spend on convenience items (like Pi-hole and Raspberry Pis); and they're very passionate about their interests which makes them more than willing to spend a little money on something that assists them with their passions.

I feel immensely lucky to have stumbled into this, and at a time where I think my skills measure up to the challenge. Now that people are using the app, and people are even paying for the app, I have a nice challenge ahead of me: I want to give these people the premium Pi-hole app that they deserve. People keep putting up little hobby projects that kind of do the job but don't look or work very nicely, usually for free. I want to do the opposite: give them thought out, and well designed apps that do the job better than anyone else. It's a little daunting, but mostly exciting.

I need to work on PiBar for macOS 1.1, to fix a couple bugs and add in some easy-to-implement features. After that I think I am going to turn my attention to PiBar for iOS, to get an initial version out into the wild and get some feedback on it. The iOS version will be an interesting project, because while I'll be able to use a lot of the backend code from the macOS app, all the interface stuff will have to be designed from scratch, and some of the features (like widgets, shortcut support, and an Apple Watch app) will be new territory for me. After iPad for iOS v1.1 is out (I am going to try to keep their version numbers synced together), I'll turn my attention back to the mac version to develop PiBar for macOS 2.0, which'll have white/black list editing and [some other stuff](https://github.com/amiantos/pibar/milestone/1). After that, getting 2.0 to iOS, and after that... maybe an Apple TV app just to round out all the Apple platforms.

What's cool is that I can now bundle all these together. So if you've purchased the Mac App Store version of PiBar, you'll get the iOS and tvOS versions for free, or vice versa. One price, all platforms. Nifty!

- [PiBar on GitHub](https://github.com/amiantos/pibar)
- [PiBar on the Mac App Store](https://apps.apple.com/us/app/pibar-for-pi-hole/id1514292645?ls=1)

### PiBar Development

I used a couple resources when developing PiBar. I started the project by trying out this tutorial for [creating a menu bar app using SwiftUI](https://medium.com/@acwrightdesign/creating-a-macos-menu-bar-application-using-swiftui-54572a5d5f87). However, I quickly ran into issues I wasn't happy with. First, I couldn't figure out how to get "stats in the menu bar" to work in this context. I tried setting up a timer and updating the menu bar title, but it wouldn't work. On top of that I just did not like the "popover" concept, it just wasn't what I wanted to app to look or feel like. So I very quickly abandoned the idea of using SwiftUI, and I am glad I did, for the reason that there are *a lot* of users who do not have Catalina installed (for very good reasons) and wouldn't have been able to use it.

Then I stumbled on this [Shortcuts for Pi-hole](https://github.com/dotWee/macOS-PiholeShortcuts) app on GitHub that was really similar to what I envisioned myself making, just missing the stats showing in the menu bar. I pulled that repo down and poked around until I understood basically how building menus works, and set to work. I also referenced this [Ray Wenderlich menu bar app guide](https://www.raywenderlich.com/450-menus-and-popovers-in-menu-bar-apps-for-macos) for a couple little details, but I've forgotten what they were now.

Here's some random thoughts on PiBar's development...

I built my first function using generics in Swift, to build out this `func decodeJSON<T>(_ string: String) -> T? where T: Decodable { }` [method in PiholeAPI.swift](https://github.com/amiantos/pibar/blob/58837581c6133c994d40c378e477dcdd9354c095/PiBar/Data%20Sources/PiholeAPI.swift#L67). I knew I was going to want to decode a lot of JSON strings back into model options. My first draft of this was a little inelegant, the method signature was `func decodeJSON<T>(string: String, type: T.Type) -> T? where T: Decodable {}`. When I showed this version to my manager (at my day job) he suggested using type inference to handle the return type automatically instead of passing it in, and that is a much cleaner solution.

If you look around PiholeAPI.swift you can quickly see that I don't really do any error handling. This is in stark contrast to a project like [SwiftHole](https://github.com/Bunn/SwiftHole) which is doing a decent amount judging from [its error struct](https://github.com/Bunn/SwiftHole/blob/master/Sources/SwiftHole/SwiftHoleError.swift). The main reason for this is simply that I do not care about "properly" handling errors. Pi-hole is a service on the local network, and really we only care about whether we can access it or not. If I send a request, and it doesn't succeed, that's all that really matters. That's why in every failure condition I'm just doing `completion(nil)`. As far as the rest of the app is concerned, that means the Pi-hole in inaccessible, and we should tell the user. I'm not saying it's bad or wrong to be so thorough with error handling, it's just that in some cases it's not that important. It wouldn't have been worth delaying the app so that I could build in exhaustive error handling that doesn't benefit the end user in any way.

It was interesting to figure out how to update the menu items embedded in the menu bar with live data, without removing and recreating them. Basically, I just ended up using a series of dictionaries that stored references to the menu bar items, so that I could easily grab them and update them as needed. I'm not happy with the size of the function, but [`updateStatusSubmenus()`](https://github.com/amiantos/pibar/blob/58837581c6133c994d40c378e477dcdd9354c095/PiBar/Main%20Menu/MainMenuController.swift#L230) does its job every well.

There is a bug in the app that a decent amount of people run into. When you first go to add in your Pi-holes, the app can get into a state where there's a 'ghost' entry that hangs out in the menu bar. You can see [screenshots from victims here](https://github.com/amiantos/pibar/issues/7). I believe this is happening because of how disconnected some processes are in [PiBarManager.swift](https://github.com/amiantos/pibar/blob/v1.0/PiBar/Data%20Sources/PiholeAPI.swift). Basically, PiBarManager is polling the Pi-holes every 3 seconds and populating an internal dictionary with their data, which take varying lengths of time. When you add/remove Pi-holes from PiBar, PiBarManager cancels the existing timer, wipes out its internal list of Pi-holes, and repopulates the connections with the new ones. What I think is happening is that some of the polling operations are still running when it does this, so it wipes everything out, loads the new connections, and then one of the previous polling tasks completes and populates the dict, leaving behind a residual Pi-hole record that shouldn't exist and can't ever get updated.

So there's two solutions for that, one is to figure out how to cancel or disregard polling operations that are in progress with preferences change. Or, I can just figure out how to redesign the preference editing so that the issue can be avoided entirely. I need to re-design the UI for adding Pi-holes anyway, so I think I am just going to see if I can prevent the bug by changing all the systems surrounding it, instead of trying to build a fix specifically for the bug.

I'm not happy that I have [`api` within the `Pihole` struct](https://github.com/amiantos/pibar/blob/58837581c6133c994d40c378e477dcdd9354c095/PiBar/Data%20Sources/Structs.swift#L86), because that means objects outside of `PiBarManager` can technically directly hit the API object for a given Pihole. Why is this set up this way? Because `Pihole` is both the internal and external representation of a Pihole for `PiBarManager` and `MainMenuViewController`. That just makes me grumpy in a separation of concerns sort of way, but at the time I wasn't really willing to create further secondary structs just to handle the data that is served up to the UI. As long as *I* don't hit the API from outside of `PiBarManager` it's not really a problem.

Overall I am really happy with this project, and I'm looking forward to the challenges to come as I try my best to make PiBar the best app out there for Pi-hole users.