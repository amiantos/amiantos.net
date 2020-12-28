---
title: Making PICO-8 Development Easier
date: '2020-12-17'
description: "A quick guide on how to make developing games on PICO-8 a bit friendlier for established developers."
tags: ['programming', 'pico-8']
---

When I started developing for PICO-8 a couple weeks ago, I quickly realized that it wasn't really built in a way to be very portable. I like to develop on a couple different computers, so it's important to me that I can quickly transfer files around and maintain a consistent development environment between machines. So, I quickly hacked out an easy way to do that, and along the way made my life a lot easier. I figured I would share my tips for PICO-8 development in case it helps out other people.

First up, fair warning, **I develop on macOS**, so this post will be macOS-centric. I'm sure many of these tips extend to Windows, but it's an exercise to the Windows-using reader to figure out how. I also admit that I'm an established developer who is already very familiar with most development concepts, so I may gloss over things that seem simple to me, but are impossibly difficult for a newbie. I hope not, but it might happen!

---

## One Folder to Rule Them All

By default, PICO-8 stores all your carts in a folder tucked away in your `~/Library`. Sure, you can type `folder` in the CLI to open it up, but that's not really my style. I keep all of my programming projects in `~/Coding`, and I wanted to keep my PICO-8 projects in there as well. On top of that, I didn't want to have to put PICO-8 in my Applications directory on each machine I develop on, because I'm super lazy.

I created a `pico-8` folder in my `~/Coding` folder and put my PICO-8.app in there. I also created a `carts` directory to store all the carts I make or download. In the end, my folder structure looks something like this:

```
pico-8/
┣ PICO-8.app
┣ carts/
┃ ┣ bob/
┃ ┃ ┣ bob.p8
┃ ┃ ┣ comms.lua
┃ ┃ ┣ jrpg.lua
┃ ┃ ┣ overworld.lua
┃ ┃ ┣ shmup.lua
┃ ┃ ┗ transitions.lua
┃ ┣ demos/
┃ ┣ utils/
┃ ┣ zines/
┃ ┣ life.p8
┃ ┗ template.p8
┣ .gitignore
┣ PICO-8_CheatSheet.png
┣ README.md
┣ license.txt
┣ pico-8.code-workspace
┗ pico-8.txt
```

In order to make PICO-8 realize you've changed your carts directory, you'll need to venture into the main place it stores your `config.txt` on each computer you develop on. If you want to be fancy about it, open up your **Terminal** and type in `nano "~/Library/Application Support/pico-8/config.txt"`

> **Pro-tip:** If you do not see a `config.txt`, you need to close PICO-8. It's only generated the first time you close PICO-8.

Scroll down and find the header `root_path` and change that path to the new location of your carts folder. For me, that looks like this: 

```
// Location of pico-8's root folder
root_path /Users/amiantos/Coding/pico-8/carts/
```

Save the config file by hitting Ctrl+X, Shift+Y, and then Enter (if you're editing with nano).

> **Note**: this config.txt file does not support the tilde shortcut, so you can **not** put in `root_path ~/Coding/pico-8/carts/` for example.

Re-open PICO-8 and type `ls` to confirm your new carts folder is there. If you got nothing in it, put something in it by typing `save tempfile` then type `ls` to see the file in the PICO-8 CLI and then confirm it appeared in your proper carts file. Did it? Great!

---

## Easier Debugging

Every developer worth their salt knows that the best way to debug anything is to simply `print` or `console.log` stuff. Sure, in some environments you've got breakpoints and all that, but with PICO-8 we're kicking it old school. Unfortunately the `print` command in PICO-8 draws to the screen, which isn't really ideal because the screen probably has other stuff being drawn to it that we'd like to see instead.

Luckily, PICO-8 has a `printh` command, which will print logs out to the command line. But you need to launch PICO-8 from the command line to benefit from this behavior, which isn't totally straight forward. Let's go from 0 to 60 and make it real easy, real quick. We're going to create an CLI *alias* to launch PICO-8 from the **Terminal** whenever we want.

Step one: Open **Terminal**

Step two: Type in `nano ~/.zshrc`

Step three: In this file, add this line somewhere, replacing the folder name with the path to your PICO-8.app.

```
alias -g pico8="~/Coding/pico-8/PICO-8.app/Contents/MacOS/pico8"
```

As above, hit Ctrl+X, then Shift+Y, then Enter to save your changes. Close your Terminal and open a new window. Type in `pico8`, and pico-8 will launch! Let's test it out to make sure it's working. His ESC to bring up the PICO-8 editor and type in `printh("hello world")`, then hit Cmd+R to run the file. In your Terminal window, you should see the text `hello world`.

Now when you're building your game, if you're curious about what is happening as you play, you can put `printh` statements all over the place. This is an invaluable tool for all pico-8 developers, and makes it really easy to debug issues with your game loops and so on.

---

## Step Up Your Editor Game

PICO-8 comes with a code editor built in, and while it's fun to use when you're learning or building small projects, it becomes kind of hard to stay organized. It's a lot nicer to use a code editor like [VS Code](https://code.visualstudio.com) to program, but you can run into conflicts if you edit your `.p8` files in VS Code while you're also drawing sprites or making music within PICO-8. On top of that, editing `.p8` files directly in VS Code is just kind of cumbersome and while there are PICO-8 extensions for VS Code, they're not absolutely ideal.

Luckily, you can use `#import` statements to make life a little easier. Look back up at that directory structure posted above. Do you see that `bob/` folder? That's one of my projects. The `bob.p8` file is the core project file, but all the code for the project is actually stored in `.lua` files. This lets you split your code up into multiple files, so you can separate your files by game mode or more. When you run or export your project, set up correctly, PICO-8 knows to automatically import all the code from those files. It's seamless!

It's also very easy. Just create a `.lua` file in the same directory as your `.p8` file, let's call it `test.lua`. Put some code in it, maybe `printh("hello world")` from above? Now, go into the code editor in PICO-8 and type in `#include test.lua` and run your project. If everything went according to plan, you should see `hello world` in your Terminal. Congrats!

You can `#include` as many `.lua` files as you need for your project. The sky is the limit! So far I like to keep each of my 'game modes' split up into separate files, just to stay organized. Now you can safely edit your code in VS Code, while editing sprites and music in PICO-8, and never worry about losing code or graphics. Just be sure to keep your code all in these Lua files!

---

## Gotta Git Up to Get Down

If you're a newbie developer, you probably have no idea what Git is. That's okay. But you should know, and you will know if you're going to make a career out of development.

I'm not going to go deep into how git works or how to use it. There's plenty of tutorials out there, like [this one, for beginners](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners). The main thing you should know is this: Git makes it very easy for you to backup your code, and when you start collaborating with other people, it makes it extremely easy to collaborate in a safe way where you're never in danger of losing precious code. If you've ever made changes to a program that you regret and cannot recover from, smart usage of Git could have saved you; if you've ever accidentally deleted a file or had storage die on you, git would have saved you.

How does this apply to this guide? Well, my entire `pico-8` folder I showed you above is also stored within a **private** GitHub repo. This means whenever I want to develop on a new computer, I just have to pull down the git repository from GitHub, and all of my files as well as my PICO-8 executable are there waiting for me. If I make changes to one of my projects, I push it to the repo, and then I can pull those changes down to my other computers. No need to worry about file transfers, or syncing folders to the cloud, or any of that nonsense. I am always in control.

> **Note**: Notice that I said my repo is **private**. If you don't want other people looking at your code, keep it private! On top of that, do not ever store your PICO-8.app in a public repo, by doing so you'd be giving PICO-8 away for free to everyone, and that's unethical!

If you want to make other developers look at you funny, use a GUI client for git. I really like [GitUp for macOS](https://gitup.co). As with all things related to software development, there are people who think using a GUI for git is lame and weird. But, you do you! I like how it looks.

If you don't intend on ever collaborating with other people, or you don't care about backing up your code files, then don't bother with any of this!

---

That's about it! The combination of "one folder" and "importing lua files" makes PICO-8 development a lot easier to manage.