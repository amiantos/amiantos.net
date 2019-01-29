---
title: Playing Quake 2 on MacOS with Yamagi
date: '2019-01-28'
tags: ['programming', 'gaming']
---

I follow a developer on GitHub who has been working to get various ID Software games working on iOS / tvOS. As of this writing, he's gotten nearly all the old school games running, [Wolfenstein 3D](https://github.com/tomkidd/Wolf3D-iOS), [Doom and Doom 2](https://github.com/tomkidd/DOOM-iOS), [Quake](https://github.com/tomkidd/Quake-iOS), [Quake 3](https://github.com/tomkidd/Quake3-iOS), and [Return to Castle Wolfenstein](https://github.com/tomkidd/RTCW-iOS). But there's one that sits nearest and dearest to my heart that he hasn't ported yet: Quake 2, though it does look like [he's working on it](https://github.com/tomkidd/Quake2-macOS).

His GitHub activity is how I discovered the [Yamagi Quake II Client](https://www.yamagi.org/quake2/) which has unofficial support for MacOS. I didn't have to jump through a lot of hoops to get it working, but there were some hoops and there wasn't a single all-in-one tutorial on how to get it set up, so I figured I would use this opportunity to test my blog's PrismJS implementation and write one myself.

This tutorial assumes you're going to be using the [GOG version of Quake 2](https://www.gog.com/game/quake_ii_quad_damage). This version is easily accessible no matter where you are on the internet. However, it only comes in a Windows EXE version that cannot be extracted on MacOS without Innoextract.

First you'll want to install Homebrew.

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
```

Then install Innoextract.

```bash
$ brew install innoextract
```

After you've gotten access down to the setup.exe that the GoG installer uses, you'll 