---
title: What I’m Up To - Week 48, 2021
date: "2021-12-05"
description: "What I did over the past week: streamed learning Laravel."
tags: ["programming", "wiut", "laravel"]
---

Howdy! This is supposed to be my weekly post where I talk about whatever programming stuff I've been up to. Let's just dive right in!

---

## Laravel & Streaming

Like I said last week, I planned to start streaming this week and was going to use it as an opportunity to learn Laravel, so that I could make a web-based game. Well, I did it! I streamed four times (Monday, Tuesday, Wednesday, and Friday) for 3 hours each time. The only full-time viewer was my friend Dan, though a few people wordlessly filtered in and out. I don't think it's very exciting to watch me program, though you do get to hear about my thought process as I build things.

The first two days of the stream were spent watching this Laracast series, [Laravel 8 from Scratch](https://laracasts.com/series/laravel-8-from-scratch) so that I could learn some of the basics really thoroughly before jumping in. This was a bit of a slog, the tutorial lies in the sweet spot where an inexperienced programmer could get lost, and an experienced programmer could get bored. I got bored about 7 hours in, which is pretty good considering it was a 9 hour tutorial.

Instead of jumping into my ultimate goal project, I decided to revisit an old project of mine called Textlike. It was a very rudimentary web-based roguelike I built out of PHP about 10 years ago. I figured it would be cool to try to rebuild it in Laravel, since it's inner workings are still somewhat familiar to me, so I can focus on learning the ins and outs.

By the end of the week, I got pretty far into some of the basics: floor generation is complete. Initially I got moving between rooms working, and once that was working I set my sights on handling room generation. The way Textlike generated rooms 10 years ago was entirely on-demand and didn't make for very interesting floor layouts. This time around I decided to lean on maze generation, which I researched a bit. Then I found some existing PHP code and [adapted it for my needs](https://github.com/amiantos/rpg-laravel/blob/37310a028ad3860ea1671c1ede9b25819482b790/app/Models/Floor.php#L72), using it as the data model used to create all the rooms on a floor and define the connections between them.

So now some important things are done: account creation (*very easy* thanks to [Laravel Breeze](https://github.com/laravel/breeze)), character creation and deletion, and room navigation. I've already got enough code in place that I think it's starting to get a bit smelly. I've put a lot of business logic inside my models, which I think is a code smell. I'm also not well versed in Laravel Livewire best practices, and I feel like the way I have things set up right now is a bit weird, with multiple components... I could get more into it, but maybe I'll wait for a later post once I know more about Livewire.

---

That's actually it for this week. I'm writing this on Tuesday, so I'm late, and I've already done some cool things I'll have to write about next week! Maybe there will be an announcement post tomorrow, for a project I started on stream yesterday and finished today. We'll see!