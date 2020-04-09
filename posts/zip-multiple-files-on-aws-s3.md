---
title: Zip Multiple Files for Download from AWS S3
date: '2020-04-08'
description: "Ever need to serve multiple files from S3 at once? Wouldn't a zip function be great? Well, here you go."
tags: ['programming', 's3', 'lambda', 'aws', 'node', 'javascript']
---

Recently we decided over at [Lingo](https://www.lingoapp.com) that we want to allow our customers to download multiple asset files at once. We store all assets in AWS S3, which doesn't offer a method of retrieving multiple files at the same time in a single zip file. (Why not!?)

I did some Googling around and found a Python solution that purported to work in the most ideal way: no memory usage, and no disk usage. How can this be? It sounds like magic. Basically the idea is that you *stream* the files from S3, directly into a zip file which is streaming to S3 as you add the files to it. (Still sounds like black magic.)

Long story short, this did *not* work in Python. I don't know why, as I followed a couple examples from the internet. Whoever suggested that it did work must not have tested it thoroughly, or was delusional, because it definitely used memory as it was building the zip file. With sufficiently large files, or a large quantity of small files, the whole thing crashed.

Distraught that my precious Python was failing me, I found several sources on the internet that suggested this idea *did* work when using Node, and worked especially well as an AWS Lambda function. This sounded like a good idea to me, because a Lambda function will definitely not allow you to use too much memory, disk space, or time. Only problem was that I knew little to nothing about Node/JavaScript development. I guess it was time to learn!

So... I learned. Long story short (again), it took a little bit of research, but I came up with this Lambda function which successfully zips up hundreds of files directly into a zip file on S3, without any real memory usage and definitely no disk usage. It took some research, because none of the examples people had posted online actually worked flawlessly from beginning to end. For all I know, this script has some issues, but I haven't run into them yet, and when I do, I will update it to avoid them.

`gist:amiantos/16bacc9ed742c91151fcf1a41012445e#index.js`

Compared to Python, Javascript syntax is a horrific mess that makes my eyes bleed. But I can't argue with results, this worked out while the Python solution did not.

If you need an explanation of what this code does, just give yourself a year or two as a professional developer and you'll realize understanding what it does isn't particularly important, but by that time you'll be able to figure it out.

Good luck!